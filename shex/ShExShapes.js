class ShExShapes {

    constructor () {
        this.shapes = new Map();
        this.subSet = new Map();
    }

    saveShape(element) {
        if(/^([:<]?[a-zA-Z]+(_[0-9]+)+[>]?)$/.test(element.$.name)) {
            this.subSet.set(element.$["xmi:id"], {
                attributes: element.ownedAttribute
            });
        }
        else {
            this.shapes.set(element.$["xmi:id"], {
                name: element.$.name
            });
        }

    }

    getShape(id) {
        return this.shapes.get(id);
    }

    getSubSet(name) {
        return this.subSet.get(name);
    }

    clearSubSet() {
        this.subSet = new Map();
    }

    clear() {
        this.shapes = new Map();
        this.clearSubSet();
    }


}
module.exports = ShExShapes;