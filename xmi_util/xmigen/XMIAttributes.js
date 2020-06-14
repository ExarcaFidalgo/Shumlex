const XMIPrimitiveAttributes = require("./XMIPrimitiveAttributes.js");

/**
 * Genera los atributos XMI a partir del JSON de ShEx
 */
class XMIAttributes {

    constructor (unid, xmisub, xmiasoc, xmienum, xmitype, irim, xmicon, shm, sxmit, xmicard, XMIAux, IRIManager) {
        this.unid = unid;
        this.xmienum = xmienum;
        this.xmitype = xmitype;
        this.xmiasoc = xmiasoc;
        this.xmisub = xmisub;
        this.xmicon = xmicon;
        this.xmiprim = new XMIPrimitiveAttributes(unid, xmitype, irim, xmicon, xmicard, XMIAux);
        this.irim = irim;
        this.shm = shm;
        this.sxmit = sxmit;
        this.XMIAux = XMIAux;
        this.IRIManager = IRIManager;

        this.depth = 0;
    }

    /**
     * Genera los atributos XMI a partir de una expresión
     * @param expr  Expresión
     * @param className Nombre de la clase poseedora
     * @returns {string}    Atributos XMI
     */
    createXMIAttributes(expr, className) {
        let attrs = "";
        //Si no hay expresión, no se genera nada
        if(!expr) {
            return attrs;
        }
        //Si existe un atributo id, se trata de una expresión etiquetada.
        else if(expr.id !== undefined) {
            attrs = this.createLabelled(expr);
        }
        //Si es un tipo Inclusion, se trata de una referencia a una expresión etiquetada.
        else if(expr.type === "Inclusion") {
            attrs = this.createLabelRef(expr);
        }
        //Una TripleConstraint alberga múltiples alternativas. Redirigimos a un método especializado.
        else if(expr.type === "TripleConstraint") {
            attrs = this.determineTypeOfExpression(expr, null);
        }
        //Expresión OneOf.
        else if(expr.type === "OneOf") {
            attrs = this.createOneOf(expr, className);
        }
        //Expresión EachOf.
        else if (expr.type === "EachOf") {
            attrs = this.createEachOf(expr, className);
        }
        //ShapeExprs: atributos de una clase que representa un AND
        else if(expr.length > 0) {
            for(let i = 0; i < expr.length; i++) {
                attrs += this.createComponent("Shape", this.xmisub.getComponentNumber(),
                    expr[i].expression, expr[i].min,expr[i].max);
            }
            return attrs;
        }
        //Reducimos la profundidad antes de ascender en la llamada
        this.decrementDepth();
        return attrs;
    }

    /**
     * Crea una expresión etiquetada
     * @param expr  Expresión
     * @returns {*} Equivalente XMI
     */
    createLabelled(expr) {
        let labelRef = "$" + this.IRIManager.getShexTerm(this.irim.getPrefixedTermOfIRI(expr.id));
        let subExpr = JSON.parse(JSON.stringify(expr));
        //Eliminamos el id para que no lo identifique como expresión etiquetada de nuevo
        subExpr.id = undefined;
        let compName = this.xmisub.getComponentNumber();
        this.xmisub.saveLabel(labelRef, compName);
        return this.createComponent(labelRef, compName, subExpr, expr.min, expr.max);
    }

    /**
     * Crea una referencia a una expresión etiquetada
     * @param expr  Expresión
     * @returns {*} Equivalente XMI
     */
    createLabelRef(expr) {
        let labelRef = this.IRIManager.getShexTerm(this.irim.getPrefixedTermOfIRI(expr.include));
        return this.xmiasoc.createXMIAsocAttribute("&#38;" + labelRef, this.xmisub.getLabelled("$" + labelRef),
            expr.min, expr.max);
    }

    /**
     * Crea un OneOf
     * @param expr  Expresión
     * @param className Nombre de la clase
     * @returns {*} Equivalente XMI
     */
    createOneOf(expr, className) {
        let subClassName = this.xmisub.getComponentNumber();
        let oneOfExpr = JSON.parse(JSON.stringify(expr));
        oneOfExpr.type = "EachOf";
        return this.createComponent("OneOf", subClassName, oneOfExpr, expr.min, expr.max);
    }

    /**
     * Crea un EachOf
     * @param expr  Expresión
     * @param className Nombre de la clase
     * @returns {string}    Equivalente XMI
     */
    createEachOf(expr, className) {
        let attrs = "";
        //Creamos una subclase si:
        //Si la profundidad es mayor de 0 - Por ejemplo, es una de las expressiones de un OneOf.
        //Si tiene cardinalidad distinta de 1 - Empleamos el EachOf para indicar la cardinalidad del conjunto de sus expr.
        if( this.depth > 0 || expr.min !== undefined || expr.max !== undefined) {
            let subClassName = this.xmisub.getComponentNumber();
            let subExpr = JSON.parse(JSON.stringify(expr));
            attrs = this.createComponent("EachOf", subClassName, subExpr, expr.min, expr.max);
        }
        else {
            for(let attr in expr.expressions) {
                if(expr.expressions.hasOwnProperty(attr)) {
                    this.incrementDepth();
                    attrs += this.createXMIAttributes(expr.expressions[attr], className);
                }
            }
        }
        return attrs;
    }

    /**
     * Genera el XMI correspondiente a una expresión de tipo TripleConstraint
     * @param expr  Expresión
     * @param id    ID
     * @param lop   Si se aplica operación lógica (OR...)
     * @returns {*}
     */
    determineTypeOfExpression(expr, id, lop) {
        //Si tiene predicado, lo prefijamos, añadimos inverso -si existe- y cardinalidad
        let inverse = (expr.inverse === true ? "^" : "");
        let name = inverse + this.IRIManager.getShexTerm(this.irim.getPrefixedTermOfIRI(expr.predicate));

        if(!expr.valueExpr) {
            //Cualquier tipo: . (Wildcard)
            return this.createXMIPrimAttribute(name, "Any", expr.min, expr.max);
        }
        else if(expr.valueExpr.type === "NodeConstraint") {
            return this.checkNCValueExpr(expr, name, id, lop);
        }
        //Referencia a otra Shape
        else if (expr.valueExpr.type === "ShapeRef") {
            return this.checkSRValueExpr(expr, name);
        }
        //Shape anidada -> subconjunto
        else if (expr.valueExpr.type === "Shape") {
            return this.checkShValueExpr(expr, name);
        }
        //ShapeAnd anidada
        else if (expr.valueExpr.type === "ShapeAnd" || expr.valueExpr.type === "ShapeOr") {
            return this.checkNSValueExpr(expr);
        }
    }

    /**
     * Genera el XMI correspondiente a una Vexpr de tipo NodeConstraint
     * @param expr  Expresión
     * @param name  Nombre del futuro atributo XMI
     * @param id    ID
     * @param lop   Operación logica (AND, OR)
     * @returns {*} Equivalente XMI
     */
    checkNCValueExpr(expr, name, id, lop) {
        //Relación de tipo "a" ( a [:User]) -> generalización XMI
        if(expr.predicate === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
            let list = [{reference: expr.valueExpr.values[0]}];
            return this.createXMIGeneralization(list, expr.inverse);
        }
        //Conjunto de valores -> enumeración
        if(expr.valueExpr.values) {
            return this.xmienum.createXMIEnumAttribute(name, expr.valueExpr.values, expr.min, expr.max, id, "");
        }
        //Tipo de nodo (Literal, IRI...) -> Atributo con tal tipo
        if(expr.valueExpr.nodeKind) {
            return this.xmiprim.createXMIKindAttribute(name, expr.valueExpr.nodeKind, expr.min, expr.max, id);
        }
        //Tipo de dato -> atributo común
        if(expr.valueExpr.datatype) {
            return this.createXMIPrimAttribute(name, expr.valueExpr.datatype, expr.min, expr.max,
                expr.valueExpr, id);
        }
        //Comprobamos las facetas, que generan restricciones
        this.xmicon.checkFacets(expr.valueExpr, id, lop);
        return "";
    }

    /**
     * Genera el XMI correspondiente a una Vexpr de tipo ShapeRef
     * @param expr  Expresión
     * @param name  Nombre del futuro atributo XMI
     * @returns {*} Equivalente XMI
     */
    checkSRValueExpr(expr, name) {
        //Generalización
        if(expr.predicate === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
            let list = [{reference: expr.valueExpr.reference}];
            return this.createXMIGeneralization(list, expr.inverse);
        }
        //Asociación
        return this.xmiasoc.createXMIAsocAttribute(name, expr.valueExpr.reference, expr.min, expr.max);
    }

    /**
     * Genera el XMI correspondiente a una Vexpr de tipo Shape
     * @param expr  Expresión
     * @param name  Nombre del futuro atributo XMI
     * @returns {*} Equivalente XMI
     */
    checkShValueExpr(expr, name) {
        this.shm.incrementBlank();
        let ref = "_:" + this.shm.getCurrentBlank();
        return this.createComponent(name, ref, expr.valueExpr.expression, expr.min, expr.max);
    }

    /**
     * Genera el XMI correspondiente a una Vexpr de tipo ShapeAnd o ShapeOr
     * @param expr  Expresión
     * @returns {*} Equivalente XMI
     */
    checkNSValueExpr(expr) {
        let and = "";
        let id = this.unid();
        for(let i = 0; i < expr.valueExpr.shapeExprs.length; i++) {
            let xp = {
                predicate: expr.predicate,
                valueExpr: expr.valueExpr.shapeExprs[i]
            };
            if(expr.valueExpr.type === "ShapeOr") {
                and += this.determineTypeOfExpression(xp, id, "OR");
            }
            else {
                and += this.determineTypeOfExpression(xp, id);
            }
        }
        return and;
    }



    /**
     * Crea una subclase que contiene parte de la clase actual.
     * Esto puede ser necesario si hemos de asignar cardinalidad a un oonjunto de elementos,
     * o aplicar operaciones como OneOf.
     * @param asocName  Nombre de la asociación
     * @param subClassName  Nombre de la subclase
     * @param expr  Expresión
     * @param min   Cardinalidad mínima
     * @param max   Cardinalidad máxima
     * @returns {*} Subclase XMI
     */
    createComponent(asocName, subClassName, expr, min, max) {
        let subClass = {
            name: subClassName,
            expr: expr
        };
        if(subClass.expr && subClass.expr.type !== "TripleConstraint") {
            subClass.expr.min = undefined;
            subClass.expr.max = undefined;
        }

        this.xmisub.saveComponent(subClass);
        return this.xmiasoc.createXMICompAsocAttribute(asocName, subClassName, min, max);
    }

    /**
     * Refiere a XMIPrimAttributes para generar un atributo primitivo
     * @param name  Nombre
     * @param type  Tipo
     * @param min   Cardinalidad mínima
     * @param max   Cardinalidad máxima
     * @param valueExpr Valor de la expresión
     * @param id    ID
     * @returns {*} Atributo XMI
     */
    createXMIPrimAttribute(name, type, min, max, valueExpr, id) {
        return this.xmiprim.createXMIPrimAttribute(name, type, min, max, valueExpr, id);
    }

    /**
     * Refiere a XMIPrimAttributes para generar un atributo de tipo nodal
     * @param name  Nombre
     * @param kind  Tipo -IRI, Literal...-
     * @param min   Cardinalidad mínima
     * @param max   Cardinalidad máxima
     * @param id    ID
     * @returns {*} Atributo XMI
     */
    createXMIKindAttribute(name, kind, min, max, id) {
        return this.xmiprim.createXMIKindAttribute(name, kind, min, max, id);
    }

    /**
     * Crea una generalización -relación de herencia- en XMI
     * @param parents   Padres de la clase
     * @param inv   Relación inversa
     * @param idF   ID del padre
     * @param nm   Nombre de la generalización
     * @returns {string}    Generalización XMI
     */
    createXMIGeneralization(parents, inv, idF, nm) {
        let gens = "";
        let name = (inv ? "^" : "") + (nm === undefined ? "" : nm);
        for(let parent in parents) {
            if(parents.hasOwnProperty(parent)) {
                //Restricción tipo IRI, Literal...
                if(parents[parent].type === "NodeConstraint"){
                    //:CanVoteAge xsd:integer
                    if(parents[parent].datatype) {
                        gens += this.createXMIPrimAttribute("datatype", parents[parent].datatype,
                            undefined, undefined,
                            parents[parent], idF);
                    }
                    //Nodekind: :HomePage IRI
                    else if (parents[parent].nodeKind){
                        let nkName = nm === "OR" ? "OR nodeKind" : "nodeKind";
                        gens += this.createXMIKindAttribute(nkName,
                            parents[parent].nodeKind)
                    }
                    //Comprobar facetas
                    else {
                        this.xmicon.checkFacets(parents[parent], idF, nm);
                    }
                }
                //Generalización común
                else if(parents[parent].reference){
                    gens += this.createGenGivenShape(parents[parent].reference, true, name);
                }
                else {
                    for(let i = 0; i < parents[parent].length; i++) {
                        gens += this.createGenGivenShape(parents[parent][i], false, name);
                    }
                }

            }
        }
        return gens;
    }

    createGenGivenShape(shape, save, name) {
        let sh = this.shm.findShape(shape, save);
        let id = this.unid();
        return this.XMIAux.createGen(id, sh.id, name);
    }

    /**
     * Aumenta la profundidad en la operación
     */
    incrementDepth(){
        this.depth++;
    }

    /**
     * Disminuye la profundidad en la operación
     */
    decrementDepth() {
        if(this.depth > 0) {
            this.depth--;
        }
    }

}
module.exports = XMIAttributes;