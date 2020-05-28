class XMIPrefixes {

    constructor (unid, urim) {
        this.prefixes = [];
        this.base = "";

        this.unid = unid;
        this.IRIManager = urim;
    }

    createPrefixes (prefixes, base) {
        let enumeration = "\n<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"" + this.unid()
            + "\" name=\"Prefixes\">";
        for(let prefix in prefixes) {
            if(prefixes.hasOwnProperty(prefix)) {
                enumeration += "\n\t<ownedLiteral xmi:id=\"" + this.unid() + "\" name=\"prefix " +
                    prefix + ": &lt;" + prefixes[prefix] + ">\"/>";
                this.prefixes.push({uri: prefixes[prefix], prefix: prefix})
            }
        }
        enumeration += "\n\t<ownedLiteral xmi:id=\"" + this.unid() + "\" name=\"base &lt;" + base + ">\"/>" +
            "\n</packagedElement>";
        this.base = base;
        return enumeration
    }

    getPrefixedTermOfUri(uri) {
        console.log(uri);
        for(let i = 0; i < this.prefixes.length; i++) {
            if(uri.includes(this.prefixes[i].uri)) {
                return this.prefixes[i].prefix + ":" + this.IRIManager.lastOfUri(this.prefixes[i].uri, uri)
            }
        }
        return this.IRIManager.lastOfUri(this.base, uri)
    }

    clear() {
        this.prefixes = [];
        this.base = "";
    }

}
module.exports = XMIPrefixes;