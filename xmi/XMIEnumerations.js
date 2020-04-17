class XMIEnumerations {

    constructor (unid, xmipref, xmicard) {
        this.enumerations = [];
        this.unid = unid;
        this.xmipref = xmipref;
        this.xmicard = xmicard;
    }

    createXMIEnumAttribute(name, values, min, max, id) {
        let card = this.xmicard.createXMICardinality(min, max);
        let enumer = { id: this.unid(), name: name, values: values};
        this.saveEnum(enumer);
        let atId = this.unid();
        if(id !== undefined) {
            atId = id;
        }
        return '\n\t<ownedAttribute xmi:type="uml:Property" xmi:id="' + atId + '" name="'
            + name
            + '" visibility="public" ' + 'type="'+ enumer.id + '" isUnique="true">\n'
            + card
            + '\t</ownedAttribute>'

    }

    saveEnum(enumer) {
        for(let i = 0; i < this.enumerations.length; i++) {
            const self = this;
            if(enumer.name === this.enumerations[i].name
                && enumer.values.length === this.enumerations[i].values.length
                && enumer.values.sort().every(function(value, index) {
                    return value === self.enumerations[i].values.sort()[index]})) {
                return this.enumerations[i];
            }
        }
        this.enumerations.push((enumer));
    }

    createXMIEnumerations() {
        let base = "";
        for(let i = 0; i < this.enumerations.length; i++) {
            base += this.createXMIEnumeration(this.enumerations[i]);
        }
        return base;
    }

    createXMIEnumeration(enm) {
        let base = '\n<packagedElement xmi:type="uml:Enumeration" xmi:id="' + enm.id + '" ' +
            'name="' + this.xmipref.getPrefixedTermOfUri(enm.name) + '">\n';
        for(let j = 0; j < enm.values.length; j++) {
            let value = "";
            if(enm.values[j].value !== undefined) {
                if(enm.values[j].type === undefined) {
                    value = "&quot;" + enm.values[j].value + "&quot;";
                }
                else {
                    value = enm.values[j].value;
                }

            }
            else if(enm.values[j].type === "LiteralStem") {
                value = "&quot;" + enm.values[j].stem + "&quot;" + "~";
            }
            else if(enm.values[j].type === "IriStem") {
                value =  this.xmipref.getPrefixedTermOfUri(enm.values[j].stem) + "~";
            }
            else if(enm.values[j].type === "IriStemRange") {
                if(enm.values[j].stem.type === "Wildcard") {
                    value = ". "
                }
                else {
                    value =  this.xmipref.getPrefixedTermOfUri(enm.values[j].stem) + "~ ";
                }

                for(let k = 0; k < enm.values[j].exclusions.length; k++) {
                    let excl = enm.values[j].exclusions[k];
                    if(excl.type === "IriStem") {
                        value += "- " + this.xmipref.getPrefixedTermOfUri(excl.stem) + "~ ";
                    }
                    else {
                        value += "- " + this.xmipref.getPrefixedTermOfUri(excl) + " ";
                    }
                }
            }
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
            else if(enm.values[j].type === "Language") {
                value = "@" + enm.values[j].languageTag + " ";
            }
            else if(enm.values[j].type === "LanguageStem") {
                value = "@" + enm.values[j].stem + "~ ";
            }
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
            else {
                value = this.xmipref.getPrefixedTermOfUri(enm.values[j]);
            }
            base += "\n\t<ownedLiteral xmi:id=\"" + this.unid() + "\" name=\""
                + value + "\"/>\n";
        }

        base += '\n</packagedElement>';
        return base;
    }

    static checkLiteralStem(txt) {
        if(/^([0-9]+(\.[0-9]+)?)$/.test(txt)) {
            return txt;

        }
        else {
            return "&quot;" + txt+ "&quot;";
        }
    }

    clear() {
        this.enumerations = [];
    }

}
module.exports = XMIEnumerations;