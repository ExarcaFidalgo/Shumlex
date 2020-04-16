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
            let at = this.createShExAttribute(attributes[i], brackets);
            brackets = at.brackets;
            content += at.content;
            header += at.header;
        }

        return {
            brackets: brackets,
            content: content,
            header: header
        };

    }

    createShExAttribute(attr, brs) {
        let brackets = brs;
        let content = "";
        let header = "";

        if(attr.$.association) {
            brackets = true;
            content += this.createShExAssociation(attr, header);
        }
        else if(attr.$.name.toLowerCase() === "nodekind") {
            let kind = this.shext.getType(attr.$.type);
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
        else if(attr.$.name.toLowerCase() === "datatype") {
            let dt = this.shext.getAttrType(attr);
            header += " " + dt;
            brackets = false;
        }
        else {
            brackets = true;
            content += this.createShExBasicAttribute(attr);
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
        let subSet = this.shexsh.getSubSet(attr.$.type);
        if(subSet !== undefined) {
            if(attr.$.name === "OneOf") {
                let conj = "";
                let card = this.shexcar.cardinalityOf(attr);
                if(card !== "") {
                    conj = "\n (";
                }
                for(let i = 0; i < subSet.attributes.length; i++) {
                    conj += this.createShExAttribute(subSet.attributes[i]).content;
                    if(i < subSet.attributes.length - 1) {
                        conj += " |"
                    }
                }
                if(card !== "") {
                    conj += ") " + card + ";";
                }

                return conj;
            }
            else {
                let conj = "\n( ";
                conj += this.createShExAttributes(subSet.attributes).content;
                conj += " )";
                conj += this.shexcar.cardinalityOf(attr) + " ;";
                return conj;
            }

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
            let con = this.shexco.getConstraints(gen[i].$["xmi:id"]);
            let inv = "";
            if(con === " Inverse") {
                inv = "^";
            }
            let refClass = this.shexsh.getShape(gen[i].$.general);
            generalizations += "\n\t" + inv + "a [" + this.shexaux.getShExTerm(refClass.name) + "];"
        }
        return generalizations;
    }

}
module.exports = ShExAttributes;