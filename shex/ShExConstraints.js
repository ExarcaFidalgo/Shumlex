class ShExConstraints {

    constructor () {
        this.constraints = new Map();
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

    getConstraints(id) {
        let cst = this.constraints.get(id);
        return cst === undefined ? "" : (" " + cst);
    }

    clear() {
        this.constraints = new Map();
    }


}
module.exports = ShExConstraints;