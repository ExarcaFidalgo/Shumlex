class IRIManager {

    constructor () {
        this.prefixes = [];
        this.base = null;
        this.iris = new Map();
    }

    saveIri(iri, id) {
        this.iris.set(iri, id);
    }

    findIri(iri) {
        return this.iris.get(iri);
    }

    createPrefixes (prefixes, base) {
        for(let prefix in prefixes) {
            if(prefixes.hasOwnProperty(prefix)) {
                this.prefixes.push({uri: prefixes[prefix], prefix: prefix})
            }
        }
        this.base = base;
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

    getPrefixedTermOfUri(uri) {
        for(let i = 0; i < this.prefixes.length; i++) {
            if(uri.includes(this.prefixes[i].uri)) {
                return this.prefixes[i].prefix + ":" + IRIManager.lastOfUri(this.prefixes[i].uri, uri)
            }
        }
        return IRIManager.lastOfUri(this.base, uri)
    }

    static lastOfUri(baseuri, uri) {
        return uri.replace(baseuri, "");
    }

}
module.exports = IRIManager;