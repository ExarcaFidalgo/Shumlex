const XMIPrimitiveAttributes = require("./XMIPrimitiveAttributes.js");

/**
 * Genera los atributos XMI a partir del JSON de ShEx
 */
class XMIAttributes {

    constructor (unid, xmisub, xmiasoc, xmienum, xmitype, irim, xmicon, shm, sxmit, xmicard, XMIAux) {
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
            let labelRef = "$" + this.irim.getPrefixedTermOfUri(expr.id);
            let subExpr = JSON.parse(JSON.stringify(expr));
            //Eliminamos el id para que no lo identifique como expresión etiquetada de nuevo
            subExpr.id = undefined;
            attrs = this.createComponent(labelRef, labelRef, subExpr, expr.min, expr.max);
        }
        //Si es un tipo Inclusion, se trata de una referencia a una expresión etiquetada.
        else if(expr.type === "Inclusion") {
            let labelRef = this.irim.getPrefixedTermOfUri(expr.include);
            attrs = this.xmiasoc.createXMIAsocAttribute("&#38;" + labelRef, "$" + labelRef, expr.min, expr.max);
        }
        //Una TripleConstraint alberga múltiples alternativas. Redigirimos a un método especializado.
        else if(expr.type === "TripleConstraint") {
            attrs = this.determineTypeOfExpression(expr);
        }
        //Expresión OneOf.
        else if(expr.type === "OneOf") {
            let subClassName = this.xmisub.getComponentNumber(className);
            let oneOfExpr = JSON.parse(JSON.stringify(expr));
            oneOfExpr.type = "EachOf";
            attrs = this.createComponent("OneOf", subClassName, oneOfExpr, expr.min, expr.max);
        }
        //Expresión EachOf.
        else if (expr.type === "EachOf") {
            //Creamos una subclase si:
            //Si la profundidad es mayor de 0 - Por ejemplo, es una de las expressiones de un OneOf.
            //Si tiene cardinalidad distinta de 1 - Empleamos el EachOf para indicar la cardinalidad del conjunto de sus expr.
            if( this.depth > 0 || expr.min !== undefined || expr.max !== undefined) {
                let subClassName = this.xmisub.getComponentNumber(className);
                let subExpr = JSON.parse(JSON.stringify(expr));
                attrs = this.createComponent("", subClassName, subExpr, expr.min, expr.max);
            }
            else {
                for(let attr in expr.expressions) {
                    if(expr.expressions.hasOwnProperty(attr)) {
                        this.incrementDepth();
                        attrs += this.createXMIAttributes(expr.expressions[attr], className);
                    }
                }
            }

        }
        //Reducimos la profundidad antes de ascender en la llamada
        this.decrementDepth();
        return attrs;
    }

    /**
     * Genera el XMI correspondiente a una expresión de tipo TripleConstraint
     * @param expr  Expresión
     * @param id    ID
     * @returns {*}
     */
    determineTypeOfExpression(expr, id) {
        //Si tiene predicado, lo prefijamos, añadimos inverso -si existe- y cardinalidad
        let inverse = (expr.inverse === true ? "^" : "");
        let name = inverse + this.irim.getPrefixedTermOfUri(expr.predicate);

        if(!expr.valueExpr) {
            //Cualquier tipo: . (Wildcard)
            return this.createXMIPrimAttribute(name, "Any", expr.min, expr.max);
        }
        else if(expr.valueExpr.type === "NodeConstraint") {
            //Relación de tipo "a" ( a [:User]) -> generalización XMI
            if(expr.predicate === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
                let list = [{reference: expr.valueExpr.values[0]}];
                return this.createXMIGeneralization(list, expr.inverse);
            }
            //Conjunto de valores -> enumeración
            if(expr.valueExpr.values) {
                return this.xmienum.createXMIEnumAttribute(name, expr.valueExpr.values, expr.min, expr.max, id);
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
            this.xmicon.checkFacets(expr.valueExpr, id);
            return "";
        }
        //Referencia a otra Shape
        else if (expr.valueExpr.type === "ShapeRef") {
            //Generalización
            if(expr.predicate === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
                let list = [{reference: expr.valueExpr.reference}];
                return this.createXMIGeneralization(list, expr.inverse);
            }
            //Asociación
            return this.xmiasoc.createXMIAsocAttribute(name, expr.valueExpr.reference, expr.min, expr.max);
        }
        //Shape anidada -> subconjunto
        else if (expr.valueExpr.type === "Shape") {
            this.shm.incrementBlank();
            let ref = "_:" + this.shm.getCurrentBlank();
            return this.createComponent(name, ref, expr.valueExpr.expression, expr.min, expr.max);
        }
        //ShapeAnd anidada
        else if (expr.valueExpr.type === "ShapeAnd") {
            let and = "";
            let id = this.unid();
            for(let i = 0; i < expr.valueExpr.shapeExprs.length; i++) {
                let xp = { predicate: expr.predicate, valueExpr: expr.valueExpr.shapeExprs[i]};
                and += this.determineTypeOfExpression(xp, id);
            }
            return and;
        }
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
        if(subClass.expr.type !== "TripleConstraint") {
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
     * @returns {string}    Generalización XMI
     */
    createXMIGeneralization(parents, inv) {
        let gens = "";
        for(let parent in parents) {
            if(parents.hasOwnProperty(parent)) {
                //Restricción tipo IRI, Literal...
                if(parents[parent].type === "NodeConstraint"){
                    gens += this.createXMIKindAttribute("nodeKind",
                        parents[parent].nodeKind)
                }
                //Generalización común
                else {
                    let sh = this.shm.findShape(parents[parent].reference, true);
                    let id = this.unid();
                    gens += this.XMIAux.createGen(id, sh.id, inv ? "^" : "");
                }

            }
        }
        return gens;
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