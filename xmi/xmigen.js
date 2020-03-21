const uniqid = require("uniqid");
const URIManager = require ("../schema/urimanager.js");

class XMIGenerator {

    constructor () {
        this.pendingAssociations = [];
        this.shapes = [];
        this.datatypes = [];
        this.anyTypeId = null
    }

    static createXMIHeader() {
        return '<?xml version="1.0" encoding="UTF-8"?>\n' +
            '<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" ' +
            'xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"\n xmi:id="' + uniqid() + '" name="ShExGeneratedXMI">\n'
    }

    static createPrefixes () {
        return "";
    }

    static createBase () {
        return "";
    }

    createXMIClass(name, shape) {
        let sh = this.findShape(name);
        let classXMI = '\n<packagedElement xmi:type="uml:Class" xmi:id="' + sh.id + '" name="'
            + URIManager.lastOfUri(name)
            + '">' +
            XMIGenerator.createXMIOwnedComment(name) +
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
                if(expr.expressions.hasOwnProperty(attr)) {
                    attrs += this.determineTypeOfExpression(expr.expressions[attr]);
                }
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
        let uppercaseType = XMIGenerator.createXMIType(type);
        if(uppercaseType.primitive) {
            return '\n<ownedAttribute xmi:id="' + uniqid() + '" name="' + URIManager.lastOfUri(name)
                + '" visibility="public" isUnique="false">\n' +
                ' <type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#'
                + uppercaseType.name + '">\n' +
                XMIGenerator.createXMIOwnedComment(uppercaseType.uri) + '</type>' +
                XMIGenerator.createXMIOwnedComment(name)
                + '</ownedAttribute>\n'
        }
        if(uppercaseType.name === "Any") {
            if(!this.anyTypeId) {
                this.anyTypeId = uniqid();
            }
            return '<ownedAttribute xmi:type="uml:Property" xmi:id="' + uniqid() + '" name="'
                + URIManager.lastOfUri(name)
                + '" visibility="public" ' + 'type="'+ this.anyTypeId + '" isUnique="false">\n' +
                XMIGenerator.createXMIOwnedComment(name) + '</ownedAttribute>\n'
        }

        let dtype = this.findDataType(uppercaseType.name, uppercaseType.uri);
        return '<ownedAttribute xmi:type="uml:Property" xmi:id="' + uniqid() + '" name="' + URIManager.lastOfUri(name)
            + '" visibility="public" ' + 'type="'+ dtype.id + '" isUnique="true">\n' +
            XMIGenerator.createXMIOwnedComment(name) + '</ownedAttribute>\n'



    }

    createXMIAsocAttribute(name, target, min, max) {
        let minimum = min !== undefined ? min : 1;
        let maximum = max !== undefined ? max : 1;
        let idatr = uniqid();
        let targetShape = this.findShape(target);
        let idasoc = uniqid();
        let content = '<ownedAttribute xmi:id="' + idatr + '" name="' + URIManager.lastOfUri(name)
            + '" visibility="public" ' +
            'type="' + targetShape.id + '" association="' + idasoc + '">'
            + XMIGenerator.createXMIAsocCardinality(minimum, maximum)
            +XMIGenerator.createXMIOwnedComment(name)+ '</ownedAttribute>';

        let asoc = { id: idasoc, idatr: idatr};
        this.pendingAssociations.push(asoc);

        return content;
    }

    static createXMIAsocCardinality(min, max) {
        return XMIGenerator.getLowerCardinality(min) + XMIGenerator.getUpperCardinality(max);
    }

    static getUpperCardinality(cardinality) {
        if(cardinality === 1)
            return "";
        if(cardinality === -1)
            return '<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="' + uniqid() + '" value="*"/>\n';
        return '<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="' + uniqid() + '" value="' + cardinality + '"/>\n';
    }

    static getLowerCardinality(cardinality) {
        if(cardinality === 0)
            return XMIGenerator.getLower0Cardinality();
        else if(cardinality === 1)
            return "";
        return '<lowerValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="' + uniqid() + '" value="' + cardinality + '"/>\n';
    }

    static getLower0Cardinality() {
        return '<lowerValue xmi:type="uml:LiteralInteger" xmi:id="' + uniqid() + '"/>';
    }

    static createXMIAssociation(ids, idcl) {
        let idown = uniqid();
        return '\n<packagedElement xmi:type="uml:Association" xmi:id="' + ids.id + '" memberEnd="' + ids.idatr
            + ' '  + idown + '">\n' +
            '<ownedEnd xmi:id="' + idown + '" visibility="public" type="' + idcl + '" association="'
            + ids.id + '"/>\n' + '</packagedElement>\n'
    }

    createDependentAssociations(idcl){
        let assocs = '';
        for(let i = 0; i < this.pendingAssociations.length; i++) {
            assocs += XMIGenerator.createXMIAssociation(this.pendingAssociations[i], idcl);
        }
        this.pendingAssociations = [];
        return assocs;
    }

    static createXMIType(type) {
        switch(type) {
            case "any": //TODO: ver compatibilidad con otros
                return { primitive: false, name: "Any" };
            case XMIGenerator.getXSDTypes(type):
                let last = URIManager.lastOfUri(type);
                return { primitive: true, name: last === "int" ? "integer" : last, uri: type};
            default:
                return { primitive: false, name: URIManager.lastOfUri(type), uri: type};
        }
    }

    static getXSDTypes(uri) {
        let type = URIManager.lastOfUri(uri);
        let xstypes = [];
        xstypes.push("string", "date",     //Dates
            "byte", "int", "integer", "long", "short",    //Numeric
            "boolean", "double", "float");
        if(xstypes.includes(type)) {
            return "http://www.w3.org/2001/XMLSchema#" + type;
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

    findDataType(name, uri) {
        for(let i = 0; i < this.datatypes.length; i++) {
            if(name === this.datatypes[i].name) {
                return this.datatypes[i];
            }
        }

        let dt = {id: uniqid(), name: name, uri: uri};
        this.datatypes.push((dt));
        return dt;
    }

    createXMIFooter() {
        let base = "";
        if(this.anyTypeId) {
            base += '<packagedElement xmi:type="uml:PrimitiveType" xmi:id="' + this.anyTypeId + '" name="Any"/>';
        }
        for(let i = 0; i < this.datatypes.length; i++) {
                base += '<packagedElement xmi:type="uml:PrimitiveType" xmi:id="' + this.datatypes[i].id + '" ' +
                    'name="' + this.datatypes[i].name + '">\n' +
                     XMIGenerator.createXMIOwnedComment(this.datatypes[i].uri) +
                    '</packagedElement>';
        }
        return base + '</uml:Model>'
    }

    static createXMIOwnedComment(comment) {
        return '<ownedComment xmi:id="' + uniqid() + '">\n' +
            '<body>' + comment + '</body>\n' +
            '</ownedComment>\n'
    }

    static createString(symbols) {
        return symbols.join("")
    }

}
module.exports = XMIGenerator;