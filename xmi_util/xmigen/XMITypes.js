class XMITypes {

    constructor (unid, irim, XMIAux, IRIManager) {
        this.datatypes = [];
        this.anyTypeId = null;
        this.nodeKinds = [];

        this.unid = unid;
        this.irim = irim;
        this.XMIAux = XMIAux;
        this.IRIManager = IRIManager;
    }

    createXMIType(type) {
        switch(type) {
            case "any":
                return {
                    primitive: false,
                    name: "Any"
                };
            case this.getXSDTypes(type):
                let last = this.irim.getPrefixedTermOfUri(type);
                return {
                    primitive: true,
                    name: last === "int" ? "integer" : last,
                    uri: type
                };
            default:
                return {
                    primitive: false,
                    name: this.irim.getPrefixedTermOfUri(type),
                    uri: type
                };
        }
    }

    getXSDTypes(uri) {
        let type = this.irim.getPrefixedTermOfUri(uri).split(":").pop();
        let xsdtypes = [];
        xsdtypes.push("string", "date",     //Dates
            "byte", "int", "integer", "long", "short",    //Numeric
            "boolean", "double", "float");
        if(xsdtypes.includes(type)) {
            return "http://www.w3.org/2001/XMLSchema#" + type;
        }
        return ""
    }

    findDataType(name, uri) {
        for(let i = 0; i < this.datatypes.length; i++) {
            if(name === this.datatypes[i].name) {
                return this.datatypes[i];
            }
        }

        let dt = {id: this.unid(), name: name, uri: uri};
        this.datatypes.push((dt));
        return dt;
    }

    findNodeKind(kind) {
        for(let i = 0; i < this.nodeKinds.length; i++) {
            if(kind === this.nodeKinds[i].name) {
                return this.nodeKinds[i];
            }
        }

        let nk = {id: this.unid(), name: kind};
        this.nodeKinds.push((nk));
        return nk;
    }

    getAny() {
        return this.anyTypeId;
    }

    setAny() {
        this.anyTypeId = this.unid();
    }

    getAnyTypeXMI() {
        if(this.anyTypeId) {
            return this.XMIAux.createPackEl("uml:PrimitiveType", this.anyTypeId, 'name="Any"', "");
        }
        return "";
    }

    getDatatypesXMI() {
        let base = "";
        for(let i = 0; i < this.datatypes.length; i++) {
            base += this.XMIAux.createPackEl("uml:PrimitiveType", this.datatypes[i].id,
                'name="' + this.datatypes[i].name + '"', "");
        }
        return base;
    }

    getNodeKindsXMI() {
        let base = "";
        for(let i = 0; i < this.nodeKinds.length; i++) {
            base += this.XMIAux.createPackEl("uml:PrimitiveType", this.nodeKinds[i].id,
                'name="' + this.IRIManager.checkNodeKind(this.nodeKinds[i].name) + '"', "");
        }
        return base;
    }

    clear() {
        this.datatypes = [];
        this.anyTypeId = null;
        this.nodeKinds = [];
    }

}
module.exports = XMITypes;