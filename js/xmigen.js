const uniqid = require("uniqid");

class XMIGenerator {

    createXMIHeader() {
        return '<?xml version="1.0" encoding="UTF-8"?>\n' +
            '<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" ' +
            'xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML" xmi:id="' + uniqid() + '" name="ShExGeneratedXMI">\n'
    }

    createXMIClass(name, attrs) {
        return '\n<packagedElement xmi:type="uml:Class" xmi:id="' + uniqid() + '" name="' + name + '">' +
            attrs + '</packagedElement>'
    }

    createXMIAttribute(name, type) {
        let uppercaseType = type[0].toUpperCase() + type.substring(1);
        return '\n<ownedAttribute xmi:id="' + uniqid() + '" name="' + name + '" visibility="public" isUnique="false">\n' +
            '  <type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#'
            + uppercaseType + '"/>\n' + '</ownedAttribute>\n'
    }

    createXMIFooter() {
        return '</uml:Model>'
    }

    createString(symbols) {
        return symbols.join("")
    }

}
module.exports = new XMIGenerator();