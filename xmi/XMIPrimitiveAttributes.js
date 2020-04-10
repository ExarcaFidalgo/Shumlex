class XMIPrimitiveAttributes {

    constructor (unid, xmitype, xmipref, xmicon, xmicard) {
        this.unid = unid;
        this.xmitype = xmitype;
        this.xmipref = xmipref;
        this.xmicon = xmicon;
        this.xmicard = xmicard;
    }

    createXMIPrimAttribute(name, type, min, max, valueExpr) {
        let xmiType = this.xmitype.createXMIType(type);
        let card = this.xmicard.createXMICardinality(min, max);
        let atId = this.unid();
        this.xmicon.checkFacets(valueExpr, atId);
        if(xmiType.primitive) {
            let tName = xmiType.name.split(":").pop();
            return '\n\t<ownedAttribute xmi:id="' + atId + '" name="' + this.xmipref.getPrefixedTermOfUri(name)
                + '" visibility="public" isUnique="false">\n' +
                '\t\t<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#'
                + tName.substring(0, 1).toUpperCase() + tName.substring(1) + '">\n' + '\t\t</type>' +
                card
                + '\n\t</ownedAttribute>'
        }
        if(xmiType.name === "Any") {
            if(!this.xmitype.getAny()) {
                this.xmitype.setAny();
            }
            return '\n\t<ownedAttribute xmi:type="uml:Property" xmi:id="' + atId + '" name="'
                + this.xmipref.getPrefixedTermOfUri(name)
                + '" visibility="public" ' + 'type="'+ this.xmitype.getAny() + '" isUnique="false">\n' +
                card
                + '\t</ownedAttribute>'
        }

        let dtype = this.xmitype.findDataType(xmiType.name, xmiType.uri);
        return '\n\t<ownedAttribute xmi:type="uml:Property" xmi:id="' + atId + '" name="'
            + this.xmipref.getPrefixedTermOfUri(name)
            + '" visibility="public" ' + 'type="'+ dtype.id + '" isUnique="true">\n'
            + card
            + '\t</ownedAttribute>'
    }

    createXMIKindAttribute(name, kind, min, max) {
        let nkind = this.xmitype.findNodeKind(kind);
        let card = this.xmicard.createXMICardinality(min, max);
        return '\n\t<ownedAttribute xmi:type="uml:Property" xmi:id="' + this.unid() + '" name="'
            + this.xmipref.getPrefixedTermOfUri(name)
            + '" visibility="public" ' + 'type="'+ nkind.id + '" isUnique="true">\n'
            + card
            + '\t</ownedAttribute>'
    }



}
module.exports = XMIPrimitiveAttributes;