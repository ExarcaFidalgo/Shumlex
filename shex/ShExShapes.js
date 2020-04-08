class ShExShapes {

    constructor () {
        this.shapes = new Map();
    }

    saveShape(element) {
        this.shapes.set(element.$["xmi:id"], {name: element.$.name});
    }

    getShape(id) {
        return this.shapes.get(id);
    }

    clear() {
        this.shapes = new Map();
    }


}
module.exports = ShExShapes;