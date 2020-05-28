class ShExAuxiliar {

    static getShExTerm(term) {
        if(!term) {
            throw new Error("No se ha encontrado un atributo 'name' para una clase, atributo o tipo.");
        }
        if(term.includes(":") || term.includes("\"") || term.includes("~") ||
            term.includes(" ") || !isNaN(term)) {
            return term;
        }
        let nk = ShExAuxiliar.checkNodeKind(term);
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


}
module.exports = ShExAuxiliar;