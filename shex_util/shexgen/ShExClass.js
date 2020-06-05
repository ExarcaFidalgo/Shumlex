class ShExClass {

    constructor (IRIManager, shexat, shexco, shm) {
        this.IRIManager = IRIManager;
        this.shexat = shexat;
        this.shexco = shexco;
        this.shm = shm;
    }

    createShExClass(element) {
        if(this.shm.getSubSet(element.$["xmi:id"]) !== undefined) {
            return "";
        }
        let header = this.IRIManager.getShexTerm(element.$.name);
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

        let ats = this.shexat.createShExAttributes(attributes, brackets);

        content += ats.content;
        header += ats.header;
        brackets = ats.brackets;

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