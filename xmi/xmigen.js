const uniqid = require("uniqid");

class XMIGenerator {

    constructor () {
        this.pendingAssociations = [];
        this.shapes = [];
        this.anyTypeId = null
    }

    createXMIHeader() {
        return '<?xml version="1.0" encoding="UTF-8"?>\n' +
            '<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" ' +
            'xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"\n xmi:id="' + uniqid() + '" name="ShExGeneratedXMI">\n'
    }

    createPrefixes () {
        return "";
    }

    createBase () {
        return "";
    }

    createXMIClass(name, shape) {
        let sh = this.findShape(name);
        let classXMI = '\n<packagedElement xmi:type="uml:Class" xmi:id="' + sh.id + '" name="' + name + '">' +
            this.createXMIAttributes(shape.expression) + '</packagedElement>';
        return classXMI + this.createDependentAssociations(sh.id);
    }

    createXMIAttributes(expr) {
        let attrs = "";
        if(expr.type === "TripleConstraint") {
            attrs = this.determineTypeOfExpression(expr);
        }
        else if (expr.type === "EachOf") {
            for(let attr in expr.expressions) {
                attrs += this.determineTypeOfExpression(expr.expressions[attr]);
            }
        }
        return attrs;
    }

    determineTypeOfExpression(expr) {
        if(!expr.valueExpr) {
            return this.createXMIPrimAttribute(expr.predicate, "Any");
        }
        else if(expr.valueExpr.type === "NodeConstraint") {
            return this.createXMIPrimAttribute(expr.predicate, expr.valueExpr.datatype);
        }
        else if (expr.valueExpr.type === "ShapeRef") {
            return this.createXMIAsocAttribute(expr.predicate, expr.valueExpr.reference, expr.min, expr.max);
        }
            }

    createXMIPrimAttribute(name, type) {
        let uppercaseType = this.createXMIType(type);
        console.log(uppercaseType);
        if(uppercaseType.primitive) {
            return '\n<ownedAttribute xmi:id="' + uniqid() + '" name="' + name
                + '" visibility="public" isUnique="false">\n' +
                '  <type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#'
                + uppercaseType.name + '"/>\n' + '</ownedAttribute>\n'
        }
        if(uppercaseType === "Any") {
            if(!this.anyTypeId) {
                this.anyTypeId = uniqid();
            }
            return '<ownedAttribute xmi:type="uml:Property" xmi:id="' + uniqid() + '" name="' + name
                + '" visibility="public" ' + 'type="'+ this.anyTypeId + '" isUnique="false"/>\n'
        }

    }

    createXMIAsocAttribute(name, target, min, max) {
        let minimum = min !== undefined ? min : 1;
        let maximum = max !== undefined ? max : 1;
        let idatr = uniqid();
        let targetShape = this.findShape(target);
        let idasoc = uniqid();
        let content = '<ownedAttribute xmi:id="' + idatr + '" name="' + name + '" visibility="public" ' +
            'type="' + targetShape.id + '" association="' + idasoc + '">'
            + this.createXMIAsocCardinality(minimum, maximum) + '</ownedAttribute>';

        let asoc = { id: idasoc, idatr: idatr};
        this.pendingAssociations.push(asoc);

        return content;
    }

    createXMIAsocCardinality(min, max) {
        return this.getLowerCardinality(min) + this.getUpperCardinality(max);
    }

    getUpperCardinality(cardinality) {
        if(cardinality === 1)
            return "";
        if(cardinality === -1)
            return '<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="' + uniqid() + '" value="*"/>\n';
        return '<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="' + uniqid() + '" value="' + cardinality + '"/>\n';
    }

    getLowerCardinality(cardinality) {
        if(cardinality === 0)
            return this.getLower0Cardinality();
        else if(cardinality === 1)
            return "";
        return '<lowerValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="' + uniqid() + '" value="' + cardinality + '"/>\n';
    }

    getLower0Cardinality() {
        return '<lowerValue xmi:type="uml:LiteralInteger" xmi:id="' + uniqid() + '"/>';
    }

    createXMIAssociation(ids, idcl) {
        let idown = uniqid();
        return '\n<packagedElement xmi:type="uml:Association" xmi:id="' + ids.id + '" memberEnd="' + ids.idatr
            + ' '  + idown + '">\n' +
            '<ownedEnd xmi:id="' + idown + '" visibility="public" type="' + idcl + '" association="'
            + ids.id + '"/>\n' + '</packagedElement>\n'
    }

    createDependentAssociations(idcl){
        let assocs = '';
        for(let i = 0; i < this.pendingAssociations.length; i++) {
            assocs += this.createXMIAssociation(this.pendingAssociations[i], idcl);
        }
        this.pendingAssociations = [];
        return assocs;
    }

    createXMIType(type) {
        console.log(type);
        switch(type) {
            case "any": //TODO: ver compatibilidad con otros
                return { primitive: false, name: "Any" };
            case this.getXSDTypes(type):
                return { primitive: true, name: type.split("#").pop() };
            default:
                return { primitive: false, name: type.substring(0,1).toUpperCase() + type.substring(1) };
        }
    }

    getXSDTypes(uri) {
        let type = uri.split("#").pop();
        let xstypes = [];
        xstypes.push("string", "date", "time", "dateTime", "duration",     //Dates
            "byte", "decimal", "int", "integer", "long", "short",    //Numeric
            "boolean", "double", "float");
        if(xstypes.includes(type)) {
            return "http://www.w3.org/2001/XMLSchema#" + type.substring(0,1).toUpperCase() + type.substring(1);
        }
         return ""
    }

    findShape(name) {
        for(let i = 0; i < this.shapes.length; i++) {
            if(name === this.shapes[i].name) {
                return this.shapes[i];
            }
        }

        let shape = {id: uniqid(), name: name};
        this.shapes.push((shape));
        return shape;
    }

    createXMIFooter() {
        let base = '</uml:Model>';
        if(this.anyTypeId) {
            base = '<packagedElement xmi:type="uml:PrimitiveType" xmi:id="' + this.anyTypeId + '" name="Any"/>' + base;
        }
        return base
    }

    createString(symbols) {
        return symbols.join("")
    }

}
module.exports = new XMIGenerator();