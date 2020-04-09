class ShExAttributes {

    constructor(shext, shexaux, shexsh, shexco, shexcar) {
        this.shext = shext;
        this.shexaux = shexaux;
        this.shexsh = shexsh;
        this.shexco = shexco;
        this.shexcar = shexcar;

    }

    createShExAttributes(attributes, brs){

        let brackets = brs;
        let content = "";
        let header = "";

        for(let i = 0; i < attributes.length; i++) {
            if(attributes[i].$.association) {
                brackets = true;
                content += this.createShExAssociation(attributes[i], header);
            }
            else if(attributes[i].$.name.toLowerCase() === "nodekind") {
                let kind = this.shext.getType(attributes[i].$.type);
                kind = this.shexaux.checkNodeKind(kind.name);
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
                let dt = this.shext.getAttrType(attributes[i]);
                header += " " + dt;
                brackets = false;
            }
            else {
                brackets = true;
                content += this.createShExBasicAttribute(attributes[i]);
            }
        }

        return {
            brackets: brackets,
            content: content,
            header: header
        };

    }

    createShExBasicAttribute(attr) {
        let type = this.shext.getAttrType(attr);
        return "\n\t" + this.shexaux.getShExTerm(attr.$.name) + this.shext.createShExType(type) +
            this.shexco.getConstraints(attr.$["xmi:id"]) + this.shexcar.cardinalityOf(attr) + ";";
    }

    createShExAssociation(attr) {
        let subSet = this.shexsh.getSubSet(attr.$.name);
        if(subSet !== undefined) {
            let conj = "\n( ";
            conj += this.createShExAttributes(subSet.attributes).content;
            conj += " )";
            conj += this.shexcar.cardinalityOf(attr) + " ;";
            return conj;
        }

        let shape = this.shexsh.getShape(attr.$.type);
        let shExName = this.shexaux.getShExTerm(shape.name);

        return "\n\t" + attr.$.name + " @" + shExName
            + this.shexcar.cardinalityOf(attr)
            + ";"
    }

    createShExGeneralization(gen) {
        let generalizations = "";
        for(let i = 0; i < gen.length; i++) {
            let refClass = this.shexsh.getShape(gen[i].$.general);
            generalizations += "\n\ta [" + this.shexaux.getShExTerm(refClass.name) + "];"
        }
        return generalizations;
    }

}
module.exports = ShExAttributes;