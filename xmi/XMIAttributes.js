const XMIPrimitiveAttributes = require("./XMIPrimitiveAttributes.js");

class XMIAttributes {

    constructor (unid, xmisub, xmiasoc, xmienum, xmitype, xmipref, xmicon, shm, sxmit, xmicard) {
        this.unid = unid;
        this.xmienum = xmienum;
        this.xmitype = xmitype;
        this.xmiasoc = xmiasoc;
        this.xmisub = xmisub;
        this.xmicon = xmicon;
        this.xmiprim = new XMIPrimitiveAttributes(unid, xmitype, xmipref, xmicon, xmicard);
        this.xmipref = xmipref;
        this.shm = shm;
        this.sxmit = sxmit;

        this.depth = 0;
    }

    createXMIAttributes(expr, className) {
        let attrs = "";
        if(!expr) {
            return attrs;
        }
        else if(expr.type === "TripleConstraint") {
            attrs = this.determineTypeOfExpression(expr);
        }
        else if(expr.type === "OneOf") {
            let subClassName = this.xmisub.getSubClassNumber(className);
            let oneOfExpr = JSON.parse(JSON.stringify(expr));
            oneOfExpr.type = "EachOf";
            attrs = this.createSubClass("OneOf", subClassName, oneOfExpr, expr.min, expr.max);
        }
        else if (expr.type === "EachOf") {
            if( this.depth > 0 || expr.min !== undefined || expr.max !== undefined) {
                let subClassName = this.xmisub.getSubClassNumber(className);
                let subExpr = JSON.parse(JSON.stringify(expr));
                attrs = this.createSubClass(subClassName, subClassName, subExpr, expr.min, expr.max);
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
        this.decrementDepth();
        return attrs;
    }

    determineTypeOfExpression(expr) {
        let inverse = (expr.inverse === true ? "^" : "");
        let name = inverse + this.xmipref.getPrefixedTermOfUri(expr.predicate);
        if(!expr.valueExpr) {
            return this.createXMIPrimAttribute(name, "Any", expr.min, expr.max);
        }
        else if(expr.valueExpr.type === "NodeConstraint") {
            if(expr.predicate === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
                let list = [{reference: expr.valueExpr.values[0]}];
                return this.createXMIGeneralization(list, expr.inverse);
            }
            if(expr.valueExpr.values) {
                return this.xmienum.createXMIEnumAttribute(name, expr.valueExpr.values, expr.min, expr.max);
            }
            if(expr.valueExpr.nodeKind) {
                return this.xmiprim.createXMIKindAttribute(name, expr.valueExpr.nodeKind, expr.min, expr.max);
            }
            return this.createXMIPrimAttribute(name, expr.valueExpr.datatype, expr.min, expr.max,
                expr.valueExpr);
        }
        else if (expr.valueExpr.type === "ShapeRef") {
            if(expr.predicate === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
                let list = [{reference: expr.valueExpr.reference}];
                return this.createXMIGeneralization(list, expr.inverse);
            }
            return this.xmiasoc.createXMIAsocAttribute(name, expr.valueExpr.reference, expr.min, expr.max);
        }
        else if (expr.valueExpr.type === "Shape") {
            this.shm.incrementBlank();
            let ref = "_:" + this.shm.getCurrentBlank();
            return this.createSubClass(name, ref, expr.valueExpr.expression, expr.min, expr.max);
        }
    }

    createSubClass(asocName, subClassName, expr, min, max) {
        let subClass = {
            name: subClassName,
            expr: expr
        };
        if(subClass.expr.type !== "TripleConstraint") {
            subClass.expr.min = undefined;
            subClass.expr.max = undefined;
        }

        this.xmisub.saveSubClass(subClass);
        return this.xmiasoc.createXMIAsocAttribute(asocName, subClassName, min, max);
    }

    createXMIPrimAttribute(name, type, min, max, valueExpr) {
        return this.xmiprim.createXMIPrimAttribute(name, type, min, max, valueExpr);
    }

    createXMIGeneralization(parents, inv) {
        let gens = "";
        for(let parent in parents) {
            if(parents.hasOwnProperty(parent)) {
                if(parents[parent].type === "NodeConstraint"){
                    gens += this.createXMIPrimAttribute("nodeKind",
                        this.sxmit.adequateNodeKindPresentation(parents[parent].nodeKind));
                }
                else {
                    let sh = this.shm.findShape(parents[parent].reference, true);
                    let id = this.unid();
                    gens += "\n\t<generalization xmi:id=\"" + id + "\" general=\"" + sh.id + "\"/>";
                    if(inv === true) {
                        this.xmicon.markAsInverse(id);
                    }
                }

            }
        }
        return gens;
    }

    incrementDepth(){
        this.depth++;
    }

    decrementDepth() {
        if(this.depth > 0) {
            this.depth--;
        }

    }


}
module.exports = XMIAttributes;