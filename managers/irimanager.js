const unid = require("uniqid");

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

    static getShexTerm(term) {

        if(term === undefined) {
            throw new Error("No se ha encontrado un atributo 'name' para una clase, atributo o tipo.");
        }
        if(term.includes(":") || term.includes("\"") || term.includes("~") ||
            term.includes(" ") || (!isNaN(term) && (term.length > 0))) {
            return term;
        }
        let nk = IRIManager.checkNodeKind(term);
        if(nk) {
            return nk;
        }
        return "<" + term + ">"
    }

    static checkNodeKind(nk) {
        switch(nk.toLowerCase()) {
            case "literal":
                return "Literal";
            case "iri":
                return "IRI";
            case "bnode":
                return "BNode";
            case "nonliteral":
                return "NonLiteral";
            default:
                return false;
        }
    }

    createXMIPrefixes (prefixes, base) {
        let enumeration = "\n<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"" + unid()
            + "\" name=\"Prefixes\">";
        for(let prefix in prefixes) {
            if(prefixes.hasOwnProperty(prefix)) {
                enumeration += "\n\t<ownedLiteral xmi:id=\"" + unid() + "\" name=\"prefix " +
                    prefix + ": &lt;" + prefixes[prefix] + ">\"/>";
                this.prefixes.push({uri: prefixes[prefix], prefix: prefix})
            }
        }
        enumeration += "\n\t<ownedLiteral xmi:id=\"" + unid() + "\" name=\"base &lt;" + base + ">\"/>" +
            "\n</packagedElement>";
        this.base = base;
        return enumeration
    }

    clear() {
        this.prefixes = [];
        this.base = null;
        this.iris = new Map();
    }

}
module.exports = IRIManager;