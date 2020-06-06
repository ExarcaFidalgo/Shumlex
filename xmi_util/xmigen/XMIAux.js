const unid = require("uniqid");

class XMIAux {

    static createXMIHeader() {
        return '<?xml version="1.0" encoding="UTF-8"?>\n' +
            '<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" ' +
            'xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"\n xmi:id="' + unid() + '" name="ShExGeneratedXMI">'
    }

    static createXMIOwnedComment(comment) {
        return '<ownedComment xmi:id="' + uniqid() + '">\n' +
            '<body>' + comment + '</body>\n' +
            '</ownedComment>\n'
    }

    static closeXMI() {
        return '\n</uml:Model>';
    }

    static createPackEl(type, id, ats, int) {
        if(!int) {
            return '\n<packagedElement xmi:type="' + type + '" xmi:id="' + id + '" ' + ats + '/>';
        }
        return '\n<packagedElement xmi:type="' + type + '" xmi:id="' + id + '" ' + ats + '>'
            + int
            + '\n</packagedElement>';
    }

    static createOwnAt(id, name, xmit, type, int) {
        if(xmit === "uml:Property") {
            return '\n\t<ownedAttribute xmi:type="uml:Property" xmi:id="' + id + '" name="'
                + name + '" visibility="public" ' + 'type="'+ type + '" isUnique="true">\n'
                + int
                + '\t</ownedAttribute>'
        }
        else if (xmit === "uml:PrimitiveType")
        {
            return '\n\t<ownedAttribute xmi:id="' + id + '" name="' + name
                + '" visibility="public" isUnique="false">\n' +
                '\t\t<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#'
                + type.substring(0, 1).toUpperCase() + type.substring(1) + '">\n'
                + '\t\t</type>' +
                int
                + '\n\t</ownedAttribute>'
        }
    }

    static createAsocAt(id, name, type, idas, int) {
        return '\n\t<ownedAttribute xmi:id="' + id + '" name="' + name
        + '" visibility="public" ' +
        'type="' + type + '" association="' + idas + '">'
        + int
        + '</ownedAttribute>';
    }

    static createMemEnd(idat, idown) {
        return 'memberEnd="' + idat
            + ' '  + idown + '"';
    }

    static createOwEnd(id, type, idas) {
        return '\n\t<ownedEnd xmi:id="' + id + '" visibility="public" type="' + type + '" association="'
        + idas + '"/>';
    }

    static getUpVal(card) {
        return '\n\t\t<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="' + unid() + '" value="' + card + '"/>';
    }

    static getLowVal(type, card) {
        if(!card) {
            return '\n\t\t<lowerValue xmi:type="uml:Literal' + type + '" xmi:id="' + unid() + '" />';
        }
        return '\n\t\t<lowerValue xmi:type="uml:Literal' + type + '" xmi:id="' + unid() + '" value="' + card + '"/>';
    }

    static createXMIOwnedRule(name, id) {
        return "\n<ownedRule xmi:id=\"" + unid() + "\" name=\"" + name + "\" " +
            "constrainedElement=\"" + id + "\">\n" +
            "\n</ownedRule>"
    }

    static createOwnLit(value) {
        return "\n\t<ownedLiteral xmi:id=\"" + unid() + "\" name=\""
        + value + "\"/>";
    }

    static createGen(id, idgen) {
        return "\n\t<generalization xmi:id=\"" + id + "\" general=\"" + idgen + "\"/>";
    }




}
module.exports = XMIAux;