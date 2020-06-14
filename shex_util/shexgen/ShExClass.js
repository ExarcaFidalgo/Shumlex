/**
 * Genera el equivalente en ShEx de una clase UML (Shape)
 */
class ShExClass {

    constructor (IRIManager, shexat, shexco, shm) {
        this.IRIManager = IRIManager;
        this.shexat = shexat;
        this.shexco = shexco;
        this.shm = shm;
    }

    /**
     * Genera el equivalente ShEx dada una clase
     * @param element   Clase XMI
     * @returns {string}    Equivalente ShEx
     */
    classToShEx(element) {
        //Si está registrada como componente, no hacemos nada
        //Se generará dentro de la pertinente clase
        if(this.shm.getSubSet(element.$["xmi:id"]) !== undefined) {
            return "";
        }
        let header = this.IRIManager.getShexTerm(element.$.name);
        let content = "";
        let brackets = false;

        //Se crea herencia
        if(element.generalization) {
            brackets = true;
            //En el caso de que sea una shapeAnd
            //Generalizacion con AND
            if(element.ownedAttribute && element.ownedAttribute[0].$.name === "AND") {
                header += this.shexat.generalizationToShEx(element.generalization, "AND");
            }
            else if(element.ownedAttribute && element.ownedAttribute[0].$.name === "OR") {
                header += this.shexat.generalizationToShEx(element.generalization, "OR");
            }
            else {
                content += this.shexat.generalizationToShEx(element.generalization);
            }
        }

        let attributes = element.ownedAttribute;
        if(!attributes) {
            brackets = true;
            attributes = [];
        }
        //Se crean los atributos de la clase
        let ats = this.shexat.attributesToShEx(attributes, brackets);

        content += ats.content;
        header += ats.header;
        //Durante la generación de atributos se determina si son necesarias lalves
        brackets = ats.brackets;
        //Añadimos a la cabecera restricciones encontradas
        header += this.shexco.getConstraints(element);
        if(brackets) {
            return header + " {" + content + "\n}\n\n"
        }
        else {
            return header + content + "\n\n"
        }
    }

}
module.exports = ShExClass;