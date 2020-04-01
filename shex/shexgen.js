const URIManager = require ("../schema/urimanager.js");

class ShExGenerator {

    constructor () {
        this.classes = [];
        this.urim = new URIManager();
        this.types = [];
        this.enumerations = [];
    }

    createShExHeader() {
        let header = "";
        let prefixes = this.urim.getPrefixesList();
        for(let prefix in prefixes) {
            header += "prefix " + prefixes[prefix].prefix + " " + prefixes[prefix].uri + "\n"
        }
        header += this.urim.getBase();
        return header
    }

    saveClass(element) {
        this.classes.push(
            {
                id: element.$["xmi:id"],
                name: element.$.name
            })
    }

    saveType(element) {
        this.types.push(
            {
                id: element.$["xmi:id"],
                name: element.$.name
            })
    }

    saveEnum(enm) {
        this.enumerations.push(
            {
                id: enm.$["xmi:id"],
                name: enm.$.name,
                values: enm.ownedLiteral
            }
        )
    }

    savePrefixes(enm) {
        let prefixes = enm.ownedLiteral;
        for(let i = 0; i < prefixes.length; i++) {
            this.urim.savePrefix(prefixes[i].$.name)
        }
}

    searchById(list, id) {
        return list.find(value => value.id === id);
    }

    createShExClass(element) {
        let content = "" + this.getShExTerm(element.$.name) + " {";

        if(element.generalization) {
            content += this.createShExGeneralization(element.generalization);
        }

        let attributes = element.ownedAttribute;
        if(!attributes) {
            attributes = [];
        }
        for(let i = 0; i < attributes.length; i++) {
            if(attributes[i].$.association) {
                content += this.createShExAssociation(attributes[i])
            } else {
                content += this.createShExAttribute(attributes[i]);
            }
        }

        return content + "\n}\n\n"
    }

    createShExGeneralization(gen) {
        let refClass = this.searchById(this.classes, gen[0].$.general);
        return "\n\ta [" + this.getShExTerm(refClass.name) + "];"
    }

    createShExAttribute(attr) {
        let type = "Any";
        if(attr.type) {
            type = attr.type[0].$.href.split("#").pop();
        }
        else if (attr.$.type) {
            let enumer = this.searchById(this.enumerations, attr.$.type);
            if(enumer) {
                return this.createShExEnumeration(enumer);
            }
            type = this.searchById(this.types, attr.$.type);
            type = type.name
        }

        return "\n\t" + this.getShExTerm(attr.$.name) + this.createShExType(type) + this.cardinalityOf(attr) + ";";
    }

    createShExEnumeration(enumer) {
        let base = "\n\t" + this.getShExTerm(enumer.name) + " [";
        for(let i = 0; i < enumer.values.length; i++) {
            base += this.getShExTerm(enumer.values[i].$.name) + " ";
        }
        return base + "];";
    }

    createShExAssociation(attr) {
        let name = this.searchById(this.classes, attr.$.type).name;
        return "\n\t" + attr.$.name + " @" + this.getShExTerm(name)
            + this.cardinalityOf(attr)
            + ";"
    }

    cardinalityOf(attr) {
        //TODO: Comprobar validez de las cardinalidades
        let lowerValue = this.checkCardinalityValue(attr.lowerValue);
        let upperValue = this.checkCardinalityValue(attr.upperValue);
        switch(lowerValue){
            case 1:
                if(upperValue === 1) {
                    return ""
                }
                else if (upperValue === Infinity) {
                    return " +"
                }
                else {
                    return " {1, " + upperValue + "}"
                }
            case 0:
                if(upperValue === 1) {
                    return " ?"
                }
                else if (upperValue === Infinity) {
                    return " *"
                }
                else {
                    return " {0, " + upperValue + " }"
                }
            default:
                if(upperValue === lowerValue) {
                    return " { " + lowerValue + " }"
                }
                else if (upperValue === Infinity) {
                    return " {" + lowerValue + ", }"
                }
                else {
                    return " {" + lowerValue + ", " + upperValue + " }"
                }
        }
    }

    checkCardinalityValue(attr) {
        if (!attr) {
            return 1
        }
        else if (attr[0].$["xmi:type"] === "uml:LiteralInteger") {
            return 0
        }
        else if (attr[0].$["xmi:type"] === "uml:LiteralUnlimitedNatural") {
            let value = attr[0].$.value;
            if(value === "*")
                return Infinity;
            return parseInt(value)
        }
    }

    createShExType(type) {
        if(type === "Any") {
            return " .";
        } else {
            return " " + this.getShExTerm(type);
        }
    }

    getShExTerm(term) {
        if(!term) {
            throw new Error("No se ha encontrado un atributo 'name' para una clase, atributo o tipo.");
        }
        if(term.includes(":")) {
            return term;
        }
        return "<" + term + ">"
    }

    clear() {
        this.classes = [];
        this.urim = new URIManager();
        this.types = [];
        this.enumerations = [];
    }

}
module.exports = new ShExGenerator();