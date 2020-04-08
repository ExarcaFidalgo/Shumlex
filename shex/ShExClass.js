class ShExClass {

    constructor (shexaux, shexat, shext, shexco) {
        this.shexaux = shexaux;
        this.shexat = shexat;
        this.shext = shext;
        this.shexco = shexco;
    }

    createShExClass(element) {
        let header = "" + this.shexaux.getShExTerm(element.$.name);
        let content = "";
        let brackets = false;

        if(element.generalization) {
            brackets = true;
            content += this.shexat.createShExGeneralization(element.generalization);
        }

        let attributes = element.ownedAttribute;
        if(!attributes) {
            brackets = true;
            attributes = [];
        }
        for(let i = 0; i < attributes.length; i++) {
            if(attributes[i].$.association) {
                brackets = true;
                content += this.shexat.createShExAssociation(attributes[i]);
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
                content += this.shexat.createShExAttribute(attributes[i]);
            }
        }
        header += this.shexco.getConstraints(element.$["xmi:id"]);
        if(brackets) {
            return header + " {" + content + "\n}\n\n"
        }
        else {
            return header + content + "\n\n"
        }
    }


}
module.exports = ShExClass;