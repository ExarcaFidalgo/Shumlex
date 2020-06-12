const unid = require("uniqid");
const XMIAux = require("../xmi_util/xmigen/XMIAux.js");

/**
 * Gestiona diversos aspectos relacionados con las IRIs a manejar
 */
class IRIManager {

    constructor () {
        this.prefixes = [];
        this.base = null;
        this.iris = new Map();
    }

    /**
     * Guarda una IRI, con la misma como clave y el ID como valor a recuperar
     * @param iri
     * @param id
     */
    saveIri(iri, id) {
        this.iris.set(iri, id);
    }

    /**
     * Devuelve el ID almacenado para una IRI
     * @param iri
     * @returns ID, si existe
     */
    findIri(iri) {
        return this.iris.get(iri);
    }

    /**
     * Almacena un listado de prefijos
     * @param prefixes
     * @param base  Prefijo base
     */
    createPrefixes (prefixes, base) {
        for(let prefix in prefixes) {
            if(prefixes.hasOwnProperty(prefix)) {
                this.prefixes.push({uri: prefixes[prefix], prefix: prefix})
            }
        }
        this.base = base;
    }

    /**
     * Almacena un prefijo dado
     * @param pr Prefijo
     */
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

    /**
     * Retorna el prefijo correspondiente a la IRI de XMLSchema
     * Si no existe, se añade uno por defecto.
     * @returns Prefijo de XSD
     */
    findXSDPrefix() {
        let xsdUri = "<http://www.w3.org/2001/XMLSchema#>";
        let prefix = this.prefixes.find(value => value.uri === xsdUri);
        if(prefix) {
            return prefix.prefix;
        }
        this.prefixes.push({prefix: "xsd:", uri: "<" + xsdUri + ">"}); //XSD podría estar ocupado...
        return "xsd:";
    }

    /**
     * Retorna el listado de prefijos
     * @returns {Array}
     */
    getPrefixesList() {
        return this.prefixes;
    }

    /**
     * Retorna el prefijo base, o nada si no existe (IRIs relativas)
     * @returns {string}
     */
    getBase() {
        if(this.base) {
            return "base " + this.base.uri + "\n\n";
        }
        return "";
    }

    /**
     * Devuelve el término prefijado correspondiente a una URI
     * @param uri
     * @returns {*}
     */
    getPrefixedTermOfUri(uri) {
        for(let i = 0; i < this.prefixes.length; i++) {
            if(uri.includes(this.prefixes[i].uri)) {
                return this.prefixes[i].prefix + ":" + IRIManager.lastOfUri(this.prefixes[i].uri, uri)
            }
        }
        return IRIManager.lastOfUri(this.base, uri)
    }

    /**
     * Devuelve el último fragmento de una URI
     * @param baseuri   Fragmento base - se elimina-
     * @param uri       URI a tratar
     * @returns {*}
     */
    static lastOfUri(baseuri, uri) {
        return uri.replace(baseuri, "");
    }

    /**
     * Devuelve el término debido para una URI a representar en ShEx
     * @param term
     * @returns {*}
     */
    static getShexTerm(term) {

        if(term === undefined) {
            throw new Error("No se ha encontrado un atributo 'name' para una clase, atributo o tipo.");
        }
        if(term.includes(":") || term.includes("\"") || term.includes("~") ||
            term.includes(" ") || (!isNaN(term) && (term.length > 0)) || /^<[A-Za-z0-9]*>$/.test(term)) {
            return term;
        }
        let nk = IRIManager.checkNodeKind(term);
        if(nk) {
            return nk;
        }
        return "&lt;" + term + "&gt;"
    }

    /**
     * Devuelve el Tipo de Nodo con una estética adecuada
     * @param nk
     * @returns {*}
     */
    static checkNodeKind(nk) {
        if(!nk) {
            return false;
        }
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

    /**
     * A partir de los prefijos recibidos, los almacena y genera el XMI correspondiente
     * @param prefixes
     * @param base
     * @returns {string}    Enumeración XMI con los prefijos
     */
    createXMIPrefixes (prefixes, base) {

        let int = "";
        for(let prefix in prefixes) {
            if(prefixes.hasOwnProperty(prefix)) {
                int += XMIAux.createOwnLit("prefix " + prefix + ": &lt;" + prefixes[prefix] + ">");
                this.prefixes.push({uri: prefixes[prefix], prefix: prefix})
            }
        }
        int += XMIAux.createOwnLit("base &lt;" + base + ">");
        let enumeration = XMIAux.createPackEl("uml:Enumeration", unid(), "name=\"Prefixes\"", int);
        this.base = base;
        return enumeration
    }

    /**
     * Reinicia los listados
     */
    clear() {
        this.prefixes = [];
        this.base = null;
        this.iris = new Map();
    }

}
module.exports = IRIManager;