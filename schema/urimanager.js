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