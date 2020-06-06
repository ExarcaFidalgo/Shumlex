class XMIPrimitiveAttributes {

    constructor (unid, xmitype, irim, xmicon, xmicard, XMIAux) {
        this.unid = unid;
        this.xmitype = xmitype;
        this.irim = irim;
        this.xmicon = xmicon;
        this.xmicard = xmicard;
        this.XMIAux = XMIAux;
    }

    createXMIPrimAttribute(name, type, min, max, valueExpr, id) {
        let xmiType = this.xmitype.createXMIType(type);
        let card = this.xmicard.createXMICardinality(min, max);
        let atId = this.unid();
        if(id !== undefined) {
            atId = id;
        }

        this.xmicon.checkFacets(valueExpr, atId);
        if(xmiType.primitive) {
            let tName = xmiType.name.split(":").pop();
            return this.XMIAux.createOwnAt(atId, name, "uml:PrimitiveType", tName, card);
        }
        if(xmiType.name === "Any") {
            if(!this.xmitype.getAny()) {
                this.xmitype.setAny();
            }
            return this.XMIAux.createOwnAt(atId, name, "uml:Property", this.xmitype.getAny(), card);
        }

        let dtype = this.xmitype.findDataType(xmiType.name, xmiType.uri);
        return this.XMIAux.createOwnAt(atId, name, "uml:Property", dtype.id, card);
    }

    createXMIKindAttribute(name, kind, min, max, id) {
        let nkind = this.xmitype.findNodeKind(kind);
        let card = this.xmicard.createXMICardinality(min, max);
        let atId = this.unid();
        if(id !== undefined) {
            atId = id;
        }
        return this.XMIAux.createOwnAt(atId, name, "uml:Property", nkind.id, card);
    }



}
module.exports = XMIPrimitiveAttributes;