class URIManager {

    constructor () {
        this.prefixes = [];
    }

    getPrefix(uri) {
        switch(uri) {
            case "http://www.w3.org/2001/XMLSchema#":
                return "xsd:";
            case "http://xmlns.com/foaf/spec/#term_":
                return "foaf:";
            case "http://schema.org/":
                return "schema:";
            case "http://example.org/":
                return ":";
            default:
                return uri.split("/")[2].split(".")[0] + ":";
        }
    }

    savePrefix(uri) {
        let base = URIManager.removeLastOfUri(uri);
        let prefix = this.checkPrefix(base);
        if (!prefix) {
            prefix = this.getPrefix(base);
            this.prefixes.push({prefix: prefix, uri: base});
        }
        return prefix

    }

    checkPrefix(uri) {
        for(let i = 0; i < this.prefixes.length; i++) {
            if(this.prefixes[i].uri === uri) {
                return this.prefixes[i].prefix;
            }
        }
        return false;
    }

    getPrefixesList() {
        return this.prefixes;
    }

    static lastOfUri(uri) {
        let base = uri.split("/").pop();
        if(base.includes("#")) {
            return base.split("#").pop();
        }
        return base
    }

    static removeLastOfUri(uri) {
        let base = [];
        if(uri.includes("#")) {
            base = uri.split("#");
            base.pop();
            return base.join("#") + "#"
        } else {
            base = uri.split("/");
            base.pop();
            return base.join("/") + "/"
        }

    }
}
module.exports = URIManager;