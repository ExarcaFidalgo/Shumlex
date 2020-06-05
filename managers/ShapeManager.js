class ShapeManager {

    constructor (unid) {
        this.XMIshapes = [];
        this.ShExshapes = new Map();
        this.subSet = new Map();
        this.pendingShapes = [];
        this.unid = unid;
        this.blankCounter = 0;
    }

    findShape(name, save) {
        for(let i = 0; i < this.XMIshapes.length; i++) {
            if(name === this.XMIshapes[i].name) {
                return this.XMIshapes[i];
            }
        }

        let shape = {id: this.unid(), name: name};
        this.XMIshapes.push(shape);
        if(save) {
            this.pendingShapes.push(shape);
        }
        return shape;
    }

    incrementBlank() {
        this.blankCounter++;
    }

    getCurrentBlank() {
        return this.blankCounter;
    }

    getPendingShapes() {
        return this.pendingShapes;
    }

    clearPendingShapes() {
        this.pendingShapes = [];
    }

    clearXMIShapes() {
        this.XMIshapes = [];
        this.pendingShapes = [];
        this.blankCounter = 0;
    }

    saveShape(element) {
        if(/^([$]?[:<]?[a-zA-Z]+(_[0-9]+)+[>]?)$/.test(element.$.name) ||
            /^([$]:[<]?[a-zA-Z]+[>]?)$/.test(element.$.name)) {
            this.subSet.set(element.$["xmi:id"], {
                attributes: element.ownedAttribute
            });
        }
        else {
            this.ShExshapes.set(element.$["xmi:id"], {
                name: element.$.name
            });
        }

    }

    getShape(id) {
        return this.ShExshapes.get(id);
    }

    getSubSet(name) {
        return this.subSet.get(name);
    }

    clearSubSet() {
        this.subSet = new Map();
    }

    clearShExShapes() {
        this.ShExshapes = new Map();
        this.clearSubSet();
    }


}
module.exports = ShapeManager;