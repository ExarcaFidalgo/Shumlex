const URIManager = require ("../schema/urimanager.js");

class ShExGenerator {

    constructor () {
        this.classes = [];
        this.urim = new URIManager();
        this.types = [];
    }

    createShExHeader() {
        let header = "";
        let prefixes = this.urim.getPrefixesList();
        for(let prefix in prefixes) {
            header += "prefix " + prefixes[prefix].prefix + " <" + prefixes[prefix].uri + ">\n"
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

    savePrefixes(enm) {
        let prefixes = enm.ownedLiteral;
        for(let i = 0; i < prefixes.length; i++) {
            this.urim.savePrefix(prefixes[i].name)
        }
}

    searchById(list, id) {
        return list.find(value => value.id === id);
    }

    createShExClass(element) {
        let content = ":" + element.$.name + " {";

        let attributes = element.ownedAttribute;
        for(let i = 0; i < attributes.length; i++) {
            if(attributes[i].$.association) {
                content += this.createShExAssociation(attributes[i])
            } else {
                content += this.createShExAttribute(attributes[i]);
            }
        }

        return content + "\n}\n\n"
    }

    createShExAttribute(attr) {
        //TODO: Prever la circunstancia de que el tipo venga aparte como packagedelement y no haya un hijo type
        let type = "Any";
        let tprefix = "";
        if(attr.type) {
            type = attr.type[0].$.href.split("#").pop();
            let turi = attr.type[0].ownedComment[0].body[0].trim();  //TODO: puede haber más comentarios...
            tprefix = this.urim.savePrefix(turi);
        }
        else if (attr.$.type) {
            type = this.searchById(this.types, attr.$.type);
            tprefix = type.prefix;
            type = type.name
        }
        let uri = attr.ownedComment[0].body[0].trim();  //TODO: puede haber más comentarios...
        let nprefix = this.urim.savePrefix(uri);

        return "\n\t" + nprefix + attr.$.name + this.createShExType(type, tprefix) + ";";
    }

    createShExAssociation(attr) {
        let uri = attr.ownedComment[0].body[0].trim();  //TODO: puede haber más comentarios...
        let nprefix = this.urim.savePrefix(uri);
        return "\n\t" + nprefix + attr.$.name + " @:" + this.searchById(this.classes, attr.$.type).name
            + this.cardinalityOf(attr)
            + " ;"
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

    createShExType(type, prefix) {
        if(type === "Any") {
            return " .";
        } else {
            return " " + prefix + type;
        }
    }

}
module.exports = new ShExGenerator();