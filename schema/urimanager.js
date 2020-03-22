class URIManager {

    constructor () {
        this.prefixes = [];
        this.base = null;
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

    savePrefix(pr) {
        let fragments = pr.split(" ");
        let type = fragments[0];
        let prefix = fragments[1];
        let uri = fragments[2];

        if(type === "prefix") {
            this.prefixes.push({prefix: prefix, uri: uri})
        }
        else {
            this.base = {uri: fragments[1]}
        }

    }

    getPrefixesList() {
        return this.prefixes;
    }

    getBase() {
        if(this.base) {
            return "base <" + this.base.uri + ">\n\n";;
        }
        return "base <http://example.org/>\n\n";
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