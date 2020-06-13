/**
 * Genera el equivalente a los atributos de UML en ShEx (TripleConstraint)
 */
class ShExAttributes {

    constructor(shext, IRIManager, shm, shexco, shexcar, shexen) {
        this.shext = shext;
        this.IRIManager = IRIManager;
        this.shm = shm;
        this.shexco = shexco;
        this.shexcar = shexcar;
        this.shexen = shexen;
    }

    /**
     *  Genera el equivalente a los atributos de UML en ShEx
     * @param attributes    Atributos
     * @param brs   Indica si crear llaves
     * @returns {{header: string, content: string, brackets: *}}
     */
    attributesToShEx(attributes, brs){

        let brackets = brs;
        let content = "";
        let header = "";

        //Generamos cada uno de los atributos
        for(let i = 0; i < attributes.length; i++) {
            let at = this.attributeToShEx(attributes[i], brackets);
            brackets = at.brackets;
            content += at.content;
            header += at.header;
        }

        return {
            brackets: brackets,
            content: content,
            header: header
        };

    }

    /**
     * Genera el ShEx correspondiente a un atributo UML
     * @param attr  Atributo
     * @param brs   Indica si la shape lleva llaves
     * @returns {{header: string, content: string, brackets: (boolean|*)}}
     */
    attributeToShEx(attr, brs) {
        let brackets = brs;
        let content = "";
        let header = "";

        //Asociación (ShapeRef)
        let shape = this.shm.getShape(attr.$.type);
        let subSet = this.shm.getSubSet(attr.$.type);
        if(attr.$.association           //Modelio ver.
            || shape !== undefined || subSet !== undefined) {   //VP ver.
            brackets = true;
            content += this.associationToShEx(attr);
        }
        //Restricción de tipo nodal
        else if(attr.$.name.toLowerCase() === "nodekind") {
            let kind = this.shext.getType(attr.$.type);
            kind = this.IRIManager.checkNodeKind(kind.name);
            let ajustedKind = kind + " AND";

            //Si es IRI, no es necesario el AND
            //La shape no llevará llaves salvo que se haya indicado positivamente
            if(kind === "IRI") {
                brackets = brackets || false;
                ajustedKind = kind;
            }
            else {
                brackets = true;
            }
            header += " " + ajustedKind;
        }
        //Restricción de tipo nodal bajo un OR
        else if(attr.$.name.toLowerCase() === "or nodekind") {
            let kind = this.shext.getType(attr.$.type);
            kind = this.IRIManager.checkNodeKind(kind.name);
            let ajustedKind = kind + " OR";

            //Si es IRI, no es necesario el AND
            //La shape no llevará llaves salvo que se haya indicado positivamente
            if(kind === "IRI") {
                brackets = brackets || false;
                ajustedKind = kind;
            }
            else {
                brackets = true;
            }
            header += " " + ajustedKind;
        }
        //Restricción datatype
        else if(attr.$.name.toLowerCase() === "datatype") {
            let dt = this.shext.getAttrType(attr);
            header += " " + dt;
            brackets = false;
        }
        else if(attr.$.name.toLowerCase() === "extra") {
            let values = this.shexen.getEnum(attr.$.type);
            let extravals = "";
            for(let value in values.values) {
                extravals += values.values[value].$.name + " ";
            }
            header += " EXTRA " + extravals;
            brackets = true;
        }
        //Otro
        else {
            brackets = true;
            content += this.basicAttrToShex(attr);
        }

        return {
            brackets: brackets,
            content: content,
            header: header
        };
    }

    /**
     * Genera el ShEx para un atributo básico de UML
     * @param attr  Atributo
     * @returns {string}    Equivalente ShEx
     */
    basicAttrToShex(attr) {
        let type = this.shext.getAttrType(attr);
        return "\n\t" + this.IRIManager.getShexTerm(attr.$.name)    //Nombre de la tripleta
            + this.shext.typeToShEx(type)                       //Tipo (xsd:string...)
            + this.shexco.getConstraints(attr)          //Restricciones
            + this.shexcar.cardinalityOf(attr) + ";";               //Cardinalidad
    }

    /**
     * Genera la ShapeRef para una asociación de UML
     * @param attr
     * @returns {string}
     */
    associationToShEx(attr) {
        //Busca si la asociación en UML está registrada como subconjunto
        let subSet = this.shm.getSubSet(attr.$.type);

        //Caso afirmativo
        if(subSet !== undefined) {
            //La clase a la que señala abarca el contenido de un OneOf
            if(attr.$.name === "OneOf") {
                let conj = "";
                let card = this.shexcar.cardinalityOf(attr);
                if(card !== "") {
                    conj = "\n (";
                }
                //Añadimos cada uno de los elementos de la clase subconjunto
                //Separados por | como elementos del OneOf
                for(let i = 0; i < subSet.attributes.length; i++) {
                    console.log(subSet.attributes[i]);
                    if(subSet.attributes[i].$.aggregation === "composite") {
                        conj += "\n("
                    }
                    conj += this.attributeToShEx(subSet.attributes[i]).content;
                    if(subSet.attributes[i].$.aggregation === "composite") {
                        conj += " );"
                    }
                    if(i < subSet.attributes.length - 1) {
                        conj += " |"
                    }
                }
                //Se añaden paréntesis si posee cardinalidad
                if(card !== "") {
                    conj += ") " + card + ";";
                }

                return conj;
            }
            //Es una referencia a una expresión etiquetada
            else if(attr.$.name.includes("&:")) {
                return "\n\t" + attr.$.name + ";";
            }
            //Es una expresión etiquetada
            else if(/^([$]:[<]?[a-zA-Z]+[>]?)$/.test(attr.$.name)) {
                let conj = "\n\t" + attr.$.name +" (";
                let card = this.shexcar.cardinalityOf(attr);
                for(let i = 0; i < subSet.attributes.length; i++) {
                    conj += this.attributeToShEx(subSet.attributes[i]).content;
                }
                conj += ") " + card + ";";

                return conj;
            }
            //Shape anidada
            else if (attr.$.aggregation === "composite" &&
                /^_:[0-9]+(_[0-9]+)*$/.test(subSet.name)) {
                let card = this.shexcar.cardinalityOf(attr);
                //La eliminamos de pendientes, puesto que es anidada
                this.shm.deletePendingShExShape(attr.$.type);
                let conj = "\n\t" + attr.$.name +" {";
                if(subSet.attributes) {
                    conj += this.attributesToShEx(subSet.attributes).content;
                }
                if(subSet.gen){
                    conj += "\t" + this.generalizationToShEx(subSet.gen);
                }
                conj += "\n}" + card + ";";
                return conj;
            }
            //Referencia a shape anónima
            else if (/^_:[0-9]+(_[0-9]+)*$/.test(subSet.name)) {
                this.shm.saveInShExShapes(attr.$.type, subSet.name);
            }
            //Conjunción
            else if(attr.$.name === "AND" && attr.$.aggregation === "composite") {
                let conj = "";
                if(subSet.attributes) {
                    //Primera Shape
                    conj += this.attributeToShEx(subSet.attributes[0]).content;
                    for(let i = 1; i < subSet.attributes.length; i++) {
                        conj += " }\nAND {";
                        conj += this.attributeToShEx(subSet.attributes[i]).content;
                    }
                }
                return conj;
            }
            else if(attr.$.name === "OR" && attr.$.aggregation === "composite") {
                let conj = "";
                if(subSet.attributes) {
                    //Primera Shape
                    conj += this.attributeToShEx(subSet.attributes[0]).content;
                    for(let i = 1; i < subSet.attributes.length; i++) {
                        conj += " }\nOR {";
                        conj += this.attributeToShEx(subSet.attributes[i]).content;
                    }
                }
                return conj;
            }
            //Es una expresión EachOf con cardinalidad
            else {
                let card = this.shexcar.cardinalityOf(attr);
                let conj = "";
                if(card !== "") {
                    conj = "\n( ";
                }
                if(subSet.attributes) {
                    conj += this.attributesToShEx(subSet.attributes).content;
                }
                if(subSet.generalization){
                    conj += this.generalizationToShEx(subSet.generalization);
                }
                if(card !== "") {
                    conj += " )" + card + " ;";
                }
                return conj;
            }

        }

        let shape = this.shm.getShape(attr.$.type);
        //ShapeRef
        let shExName = this.IRIManager.getShexTerm(shape.name);

        return "\n\t" + attr.$.name + " @" + shExName
            + this.shexcar.cardinalityOf(attr)
            + ";"
    }

    /**
     * Crea una relación de herencia
     * @param gen   Generalización
     * @returns {string}    Equivalente en ShEx
     */
    generalizationToShEx(gen, lop) {
        let generalizations = "";
        for(let i = 0; i < gen.length; i++) {
            //Comprobamos si tiene una restricción Inverse
            let con = this.shexco.getConstraints(gen[i]);
            let inv = "";
            if(con === " Inverse" || gen[i].$.name === "^") {
                inv = "^";
            }
            //Buscamos la Shape padre
            let refClass = this.shm.getShape(gen[i].$.general);
            if(lop === "AND") {
                generalizations += " " + inv + "@" + this.IRIManager.getShexTerm(refClass.name) + " AND"
            }
            else if(lop === "OR") {
                generalizations += " " + inv + "@" + this.IRIManager.getShexTerm(refClass.name) + " OR"
            }
            else {
                generalizations += "\n\t" + inv + "a [" + this.IRIManager.getShexTerm(refClass.name) + "];"
            }

        }
        return generalizations;
    }

}
module.exports = ShExAttributes;