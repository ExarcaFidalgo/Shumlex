class URIManager {

    constructor () {
        this.prefixes = [];
        this.base = null;
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

    findXSDPrefix() {
        let xsdUri = "<http://www.w3.org/2001/XMLSchema#>";
        let prefix = this.prefixes.find(value => value.uri === xsdUri);
        if(prefix) {
            return prefix.prefix;
        }
        this.prefixes.push({prefix: "xsd:", uri: "<" + xsdUri + ">"}); //XSD podría estar ocupado...
        return "xsd:";
    }

    getPrefixesList() {
        return this.prefixes;
    }

    getBase() {
        if(this.base) {
            return "base " + this.base.uri + "\n\n";
        }
        return "base <http://example.org/>\n\n";
    }

    static lastOfUri(baseuri, uri) {
        return uri.replace(baseuri, "");
    }

}
module.exports = URIManager;