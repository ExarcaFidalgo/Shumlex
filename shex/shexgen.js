class ShExGenerator {

    constructor () {
        this.classes = []
    }

    createShExHeader() {
        //TODO
        return null
    }

    saveClass(element) {
        this.classes.push(
            {
                id: element.$["xmi:id"],
                name: element.$.name
            })
    }

    searchClass(id) {
        return this.classes.find(value => value.id === id);
    }

    createShExClass(element) {
        let header = ":" + element.$.name + " {";
        let content = header;

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
        if(attr.type) {
            type = attr.type[0].$.href.split("#").pop();
        }

        return "\n\t:" + attr.$.name + this.createShExType(type) + ";";
    }

    createShExAssociation(attr) {
        return "\n\t:" + attr.$.name + " @:" + this.searchClass(attr.$.type).name + this.cardinalityOf(attr) + " ;"
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
        //TODO: schemas
        if(type === "Any") {
            return " .";
        } else {
            return " xsd:" + type.toLowerCase();
        }
    }

}
module.exports = new ShExGenerator();