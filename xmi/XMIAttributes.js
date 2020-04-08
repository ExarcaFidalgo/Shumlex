const XMIPrimitiveAttributes = require("./XMIPrimitiveAttributes.js");

class XMIAttributes {

    constructor (unid, xmisub, xmiasoc, xmienum, xmitype, xmipref, xmicon, shm, sxmit, xmicard) {
        this.unid = unid;
        this.xmienum = xmienum;
        this.xmitype = xmitype;
        this.xmiasoc = xmiasoc;
        this.xmisub = xmisub;
        this.xmiprim = new XMIPrimitiveAttributes(unid, xmitype, xmipref, xmicon, xmicard);
        this.shm = shm;
        this.sxmit = sxmit;
    }

    createXMIAttributes(expr, className) {
        let attrs = "";
        if(!expr) {
            return attrs;
        }
        else if(expr.type === "TripleConstraint") {
            attrs = this.determineTypeOfExpression(expr);
        }
        else if (expr.type === "EachOf") {
            if(expr.min !== undefined || expr.max !== undefined) {
                let subClassName = this.xmisub.getSubClassNumber(className);
                attrs = this.xmiasoc.createXMIAsocAttribute(subClassName, subClassName, expr.min, expr.max);
                let subClass = {
                    name: subClassName,
                    expr: expr
                };
                subClass.expr.min = undefined;
                subClass.expr.max = undefined;
                this.xmisub.subClasses.push(subClass);
            }
            else {
                for(let attr in expr.expressions) {
                    if(expr.expressions.hasOwnProperty(attr)) {
                        attrs += this.createXMIAttributes(expr.expressions[attr], className);
                    }
                }
            }

        }
        return attrs;
    }

    determineTypeOfExpression(expr) {
        if(!expr.valueExpr) {
            return this.createXMIPrimAttribute(expr.predicate, "Any", expr.min);
        }
        else if(expr.valueExpr.type === "NodeConstraint") {
            if(expr.predicate === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
                let list = [{reference: expr.valueExpr.values[0]}];
                return this.createXMIGeneralization(list);
            }
            if(expr.valueExpr.values) {
                return this.xmienum.createXMIEnumAttribute(expr.predicate, expr.valueExpr.values, expr.min);
            }
            if(expr.valueExpr.nodeKind) {
                return this.xmiprim.createXMIKindAttribute(expr.predicate, expr.valueExpr.nodeKind, expr.min);
            }
            return this.createXMIPrimAttribute(expr.predicate, expr.valueExpr.datatype, expr.min, expr.valueExpr);
        }
        else if (expr.valueExpr.type === "ShapeRef") {
            if(expr.predicate === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
                let list = [{reference: expr.valueExpr.reference}];
                return this.createXMIGeneralization(list);
            }
            return this.xmiasoc.createXMIAsocAttribute(expr.predicate, expr.valueExpr.reference, expr.min, expr.max);
        }
    }

    createXMIPrimAttribute(name, type, min, valueExpr) {
        return this.xmiprim.createXMIPrimAttribute(name, type, min, valueExpr);
    }

    createXMIGeneralization(parents) {
        let gens = "";
        for(let parent in parents) {
            if(parents.hasOwnProperty(parent)) {
                if(parents[parent].type === "NodeConstraint"){
                    gens += this.createXMIPrimAttribute("nodeKind",
                        this.sxmit.adequateNodeKindPresentation(parents[parent].nodeKind));
                }
                else {
                    let sh = this.shm.findShape(parents[parent].reference);
                    gens += "\n\t<generalization xmi:id=\"" + this.unid() + "\" general=\"" + sh.id + "\"/>"
                }

            }
        }
        return gens;
    }


}
module.exports = XMIAttributes;