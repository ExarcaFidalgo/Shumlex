/**
 * Genera enumeraciones en XMI
 */
class XMIEnumerations {

    constructor (unid, irim, xmicard, XMIAux) {
        this.enumerations = [];
        this.unid = unid;
        this.irim = irim;
        this.xmicard = xmicard;
        this.XMIAux = XMIAux;
    }

    /**
     * Genera un atributo que referencia a una enumeración
     * @param name  Nombre
     * @param values    Valores de la enumeración
     * @param min   Cardinalidad mínima
     * @param max   Cardinalidad máxima
     * @param id    ID
     * @param clase Nombre de la clase, por si debe ser referenciada en una enum Extra
     * @returns {string|*}  Owned Attribute de enumeración
     */
    createXMIEnumAttribute(name, values, min, max, id, clase) {
        let card = this.xmicard.createXMICardinality(min, max);
        let nom = name === "Extra" ? name + "_" + clase : name;
        let enumer = { id: this.unid(), name: nom, values: values};
        this.saveEnum(enumer);
        let atId = this.unid();
        if(id !== undefined) {
            atId = id;
        }
        return this.XMIAux.createOwnAt(atId, name, "uml:Property", enumer.id, card);
    }

    /**
     * Guardamos la enumeración para su posterior generación como elemento independiente
     * @param enumer    id: , name: , values:
     * @returns {*}
     */
    saveEnum(enumer) {
        for(let i = 0; i < this.enumerations.length; i++) {
            const self = this;
            //Si coincide nombre, tamaño, y cada uno de los valores, ya existe.
            //La devolvemos y no guardamos
            if(enumer.name === this.enumerations[i].name
                && enumer.values.length === this.enumerations[i].values.length
                && enumer.values.sort().every(function(value, index) {
                    return value === self.enumerations[i].values.sort()[index]})) {
                return this.enumerations[i];
            }
        }
        this.enumerations.push((enumer));
    }

    /**
     * Genera cada una de las enumeraciones guardadas
     * @returns {string}    Enumeraciones XMI
     */
    createXMIEnumerations() {
        let base = "";
        for(let i = 0; i < this.enumerations.length; i++) {
            base += this.createXMIEnumeration(this.enumerations[i]);
        }
        return base;
    }

    /**
     * Genera una enumeración
     * @param enm   Enumeración
     * @returns {string}    Enumeración XMI
     */
    createXMIEnumeration(enm) {
        let int = "";
        //Comprobamos cada uno de los valores
        for(let j = 0; j < enm.values.length; j++) {
            let value = "";
            //Valor común: "1453", 12, IRI
            if(enm.values[j].value !== undefined) {
                if(enm.values[j].type === undefined) {
                    value = "&quot;" + enm.values[j].value + "&quot;";
                }
                else {
                    value = enm.values[j].value;
                }

            }
            //LiteralStem - "1453"~
            else if(enm.values[j].type === "LiteralStem") {
                value = "&quot;" + enm.values[j].stem + "&quot;" + "~";
            }
            //IRIStem - wo:~
            else if(enm.values[j].type === "IriStem") {
                value =  this.irim.getPrefixedTermOfIRI(enm.values[j].stem) + "~";
            }
            //IRIStemRange - wo:~ - wo:lo
            else if(enm.values[j].type === "IriStemRange") {
                if(enm.values[j].stem.type === "Wildcard") {
                    value = ". "
                }
                else {
                    value =  this.irim.getPrefixedTermOfIRI(enm.values[j].stem) + "~ ";
                }

                for(let k = 0; k < enm.values[j].exclusions.length; k++) {
                    let excl = enm.values[j].exclusions[k];
                    if(excl.type === "IriStem") {
                        value += "- " + this.irim.getPrefixedTermOfIRI(excl.stem) + "~ ";
                    }
                    else {
                        value += "- " + this.irim.getPrefixedTermOfIRI(excl) + " ";
                    }
                }
            }
            //LiteralStemRange - "aa"~ - "aab"
            else if(enm.values[j].type === "LiteralStemRange") {
                if(enm.values[j].stem.type === "Wildcard") {
                    value = ". "
                }
                else {
                    value = XMIEnumerations.checkLiteralStem(enm.values[j].stem) + "~ ";
                }
                for(let k = 0; k < enm.values[j].exclusions.length; k++) {
                    let excl = enm.values[j].exclusions[k];
                    if(excl.type === "LiteralStem") {
                        value += "- " + XMIEnumerations.checkLiteralStem(excl.stem) + "~ ";
                    }
                    else {
                        value += "- " + XMIEnumerations.checkLiteralStem(excl) + " ";
                    }
                }
            }
            //Etiqueta de lenguaje: @es
            else if(enm.values[j].type === "Language") {
                value = "@" + enm.values[j].languageTag + " ";
            }
            //LanguageStem: @es~
            else if(enm.values[j].type === "LanguageStem") {
                value = "@" + enm.values[j].stem + "~ ";
            }
            //LanguageStemRange: @es~ - @es-AR
            else if(enm.values[j].type === "LanguageStemRange") {
                if(enm.values[j].stem.type === "Wildcard") {
                    value = ". "
                }
                else {
                    value = "@" + enm.values[j].stem + "~ ";
                }
                for(let k = 0; k < enm.values[j].exclusions.length; k++) {
                    let excl = enm.values[j].exclusions[k];
                    if(excl.type === "LanguageStem") {
                        value += "- @" +excl.stem + "~ ";
                    }
                    else {
                        value += "- @" + excl + " ";
                    }
                }
            }
            //vl de tipo IRI
            else {
                value = this.irim.getPrefixedTermOfIRI(enm.values[j]);
            }
            int += this.XMIAux.createOwnLit(value);
        }
        return this.XMIAux.createPackEl("uml:Enumeration", enm.id,
            'name="' + this.irim.getPrefixedTermOfIRI(enm.name) + '"', int);
    }

    /**
     * Comprueba si se trata de una cadena con estructura numérica. En caso negativo, añade comillas
     * @param txt   Cadena de texto
     * @returns {*} Cadena intacta o con comillas
     */
    static checkLiteralStem(txt) {
        if(/^([0-9]+(\.[0-9]+)?)$/.test(txt)) {
            return txt;
        }
        else {
            return "&quot;" + txt+ "&quot;";
        }
    }

    /**
     * Resetea las enumeraciones
     */
    clear() {
        this.enumerations = [];
    }

}
module.exports = XMIEnumerations;