const URIManager = require ("../schema/irimanager.js");

class ShExGenerator {

    constructor () {
        this.classes = [];
        this.urim = new URIManager();
        this.types = [];
        this.enumerations = [];
        this.constraints = new Map();
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

    saveConstraint(cst) {
        if(this.constraints.get(cst.$.constrainedElement) === undefined) {
            this.constraints.set(cst.$.constrainedElement, cst.$.name);
        }
        else {
            this.constraints.set(cst.$.constrainedElement, this.constraints.get(cst.$.constrainedElement) + " "
                +cst.$.name);
        }

    }

    searchById(list, id) {
        return list.find(value => value.id === id);
    }

    createShExClass(element) {
        let header = "" + this.getShExTerm(element.$.name);
        let content = "";
        let brackets = false;

        if(element.generalization) {
            brackets = true;
            content += this.createShExGeneralization(element.generalization);
        }

        let attributes = element.ownedAttribute;
        if(!attributes) {
            brackets = true;
            attributes = [];
        }
        for(let i = 0; i < attributes.length; i++) {
            if(attributes[i].$.association) {
                brackets = true;
                content += this.createShExAssociation(attributes[i]);
            }
            else if(attributes[i].$.name.toLowerCase() === "nodekind") {
                let kind = this.searchById(this.types, attributes[i].$.type);
                kind = this.checkNodeKind(kind.name);
                let ajustedKind = kind + " AND";
                if(kind === "IRI") {
                    brackets = brackets || false;
                    ajustedKind = kind;
                } else {
                    brackets = true;
                }
                header += " " + ajustedKind;
            }
            else if(attributes[i].$.name.toLowerCase() === "datatype") {
                let dt = this.getAttrType(attributes[i]);
                header += " " + dt;
                brackets = false;
            }
            else {
                brackets = true;
                content += this.createShExAttribute(attributes[i]);
            }
        }
        header += this.getConstraints(element.$["xmi:id"]);
        if(brackets) {
            return header + " {" + content + "\n}\n\n"
        }
        else {
            return header + content + "\n\n"
        }
    }

    createShExGeneralization(gen) {
        let generalizations = "";
        for(let i = 0; i < gen.length; i++) {
            let refClass = this.searchById(this.classes, gen[i].$.general);
            generalizations += "\n\ta [" + this.getShExTerm(refClass.name) + "];"
        }
        return generalizations;
    }

    getAttrType(attr) {
        if(attr.type) {
            let href = attr.type[0].$.href.split("#");
            if(href[0] === "pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml") {
                return this.urim.findXSDPrefix() + href[1].substring(0,1).toLowerCase() + href[1].substring(1);
            } else {
                return href.pop();
            }

        }
        else if (attr.$.type) {
            let enumer = this.searchById(this.enumerations, attr.$.type);
            if(enumer) {
                return this.createShExEnumeration(enumer);
            }
            let type = this.searchById(this.types, attr.$.type);
            return type.name;
        }
        return "Any";
    }

    getConstraints(id) {
        let cst = this.constraints.get(id);
        let shcs = cst === undefined ? "" : (" " + cst);
        return shcs;
    }

    createShExAttribute(attr) {
        let type = this.getAttrType(attr);
        return "\n\t" + this.getShExTerm(attr.$.name) + this.createShExType(type) +
            this.getConstraints(attr.$["xmi:id"]) + this.cardinalityOf(attr) + ";";
    }

    createShExEnumeration(enumer) {
        let base = "[";
        for(let i = 0; i < enumer.values.length; i++) {
            base += this.getShExTerm(enumer.values[i].$.name) + " ";
        }
        return base + "]";
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
                    return " {1," + upperValue + "}"
                }
            case 0:
                if(upperValue === 1) {
                    return " ?"
                }
                else if (upperValue === Infinity) {
                    return " *"
                }
                else {
                    return " {0, " + upperValue + "}"
                }
            default:
                if(upperValue === lowerValue) {
                    return " {" + lowerValue + "}"
                }
                else if (upperValue === Infinity) {
                    return " {" + lowerValue + ",}"
                }
                else {
                    return " {" + lowerValue + ", " + upperValue + "}"
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
        if(term.includes(":") || term.includes("\"") || term.includes("~") ||
            term.includes(" ") || !isNaN(term)) {
            return term;
        }
        let nk = this.checkNodeKind(term);
        if(nk) {
            return nk;
        }
        return "<" + term + ">"
    }

    checkNodeKind(nk) {
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

    clear() {
        this.classes = [];
        this.urim = new URIManager();
        this.types = [];
        this.enumerations = [];
        this.constraints = new Map();
    }

}
module.exports = new ShExGenerator();