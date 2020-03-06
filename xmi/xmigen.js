const uniqid = require("uniqid");

class XMIGenerator {

    constructor () {
        this.pendingAssociations = [];
        this.shapes = [];
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
        return '\n<ownedAttribute xmi:id="' + uniqid() + '" name="' + name + '" visibility="public" isUnique="false">\n' +
            '  <type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#'
            + uppercaseType + '"/>\n' + '</ownedAttribute>\n'
    }

    createXMIAsocAttribute(name, target) {
        let idatr = uniqid();
        let targetShape = this.findShape(target.pop());
        let idasoc = uniqid();
        let content = '<ownedAttribute xmi:id="' + idatr + '" name="' + name + '" visibility="public" ' +
            'type="' + targetShape.id + '" association="' + idasoc + '"/>';

        let asoc = { id: idasoc, idatr: idatr};
        this.pendingAssociations.push(asoc);

        return content;
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
        return '</uml:Model>'
    }

    createString(symbols) {
        return symbols.join("")
    }

}
module.exports = new XMIGenerator();