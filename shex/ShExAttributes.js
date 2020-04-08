class ShExAttributes {

    constructor(shext, shexaux, shexsh, shexco, shexcar) {
        this.shext = shext;
        this.shexaux = shexaux;
        this.shexsh = shexsh;
        this.shexco = shexco;
        this.shexcar = shexcar;

    }

    createShExAttribute(attr) {
        let type = this.shext.getAttrType(attr);
        return "\n\t" + this.shexaux.getShExTerm(attr.$.name) + this.shext.createShExType(type) +
            this.shexco.getConstraints(attr.$["xmi:id"]) + this.shexcar.cardinalityOf(attr) + ";";
    }

    createShExAssociation(attr) {
        let name = this.shexsh.getShape(attr.$.type).name;
        return "\n\t" + attr.$.name + " @" + this.shexaux.getShExTerm(name)
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