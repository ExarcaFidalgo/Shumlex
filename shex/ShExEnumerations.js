class ShExEnumerations {

    constructor (shexaux) {
        this.enumerations = new Map();
        this.shexaux = shexaux;
    }

    saveEnum(enm) {
        this.enumerations.set(enm.$["xmi:id"], {
            name: enm.$.name,
            values: enm.ownedLiteral
        });
    }

    getEnum(id) {
        console.log(this.enumerations);
        console.log(id);
        return this.enumerations.get(id);
    }

    createShExEnumeration(enumer) {
        let base = "[";
        for(let i = 0; i < enumer.values.length; i++) {
            base += this.shexaux.getShExTerm(enumer.values[i].$.name) + " ";
        }
        return base + "]";
    }

    clear() {
        this.enumerations = new Map();
    }

}
module.exports = ShExEnumerations;