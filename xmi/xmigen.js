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

    createXMIClass(name, attrs) {

        let shape = this.findShape(name);
        let classXMI = '\n<packagedElement xmi:type="uml:Class" xmi:id="' + shape.id + '" name="' + name + '">' +
            attrs + '</packagedElement>';
        return classXMI + this.createDependentAssociations(shape.id);
    }

    createXMIPrimAttribute(name, type) {
        let uppercaseType = type[0].toUpperCase() + type.substring(1);
        if(uppercaseType === "Int") {
            uppercaseType = "Integer";
        }
        if(uppercaseType === "Any") {
            if(!this.anyTypeId) {
                this.anyTypeId = uniqid();
            }
            return '<ownedAttribute xmi:type="uml:Property" xmi:id="' + uniqid() + '" name="' + name
                + '" visibility="public" ' + 'type="'+ this.anyTypeId + '" isUnique="false"/>\n'
        }
        return '\n<ownedAttribute xmi:id="' + uniqid() + '" name="' + name + '" visibility="public" isUnique="false">\n' +
            '  <type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#'
            + uppercaseType + '"/>\n' + '</ownedAttribute>\n'
    }

    createXMIAsocAttribute(name, target) {
        let idatr = uniqid();
        let targetShape = this.findShape(target.name);
        let idasoc = uniqid();
        let content = '<ownedAttribute xmi:id="' + idatr + '" name="' + name + '" visibility="public" ' +
            'type="' + targetShape.id + '" association="' + idasoc + '">'
            + this.createXMIAsocCardinality(target.cardinality) + '</ownedAttribute>';

        let asoc = { id: idasoc, idatr: idatr};
        this.pendingAssociations.push(asoc);

        return content;
    }

    createXMIAsocCardinality(cardinality) {
        switch(cardinality) {
            case "1":
                return "";
            case "*":
                return this.getLower0Cardinality() + this.getUpperCardinality("*");
            case "+":
                return this.getUpperCardinality("*");
            case "?":
                return this.getLower0Cardinality();
            default:
                return this.getCustomCardinality(cardinality);
        }
    }

    getLower0Cardinality() {
        return '<lowerValue xmi:type="uml:LiteralInteger" xmi:id="' + uniqid() + '"/>';
    }

    getUpperCardinality(cardinality) {
        if(cardinality === "1")
            return "";
        return '<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="' + uniqid() + '" value="' + cardinality + '"/>\n';
    }

    getLowerCardinality(cardinality) {
        if(cardinality === "0")
            return this.getLower0Cardinality();
        else if(cardinality === "1")
            return "";
        return '<lowerValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="' + uniqid() + '" value="' + cardinality + '"/>\n';
    }

    getCustomCardinality(cardinality) {
        if(!cardinality.opt) {
            return this.getLowerCardinality(cardinality.lower) + this.getUpperCardinality(cardinality.lower);
        }
        else if (cardinality.opt[2] === null) {
            return this.getLowerCardinality(cardinality.lower) + this.getUpperCardinality("*");
        }
        else {
            return this.getLowerCardinality(cardinality.lower)
                + this.getUpperCardinality(cardinality.opt.pop().toString().replace(" ", "").replace(",", ""));
        }
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