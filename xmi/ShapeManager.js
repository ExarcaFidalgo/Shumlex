class ShapeManager {

    constructor (unid) {
        this.shapes = [];
        this.pendingShapes = [];
        this.unid = unid;
        this.blankCounter = 0;
    }

    findShape(name, save) {
        for(let i = 0; i < this.shapes.length; i++) {
            if(name === this.shapes[i].name) {
                return this.shapes[i];
            }
        }

        let shape = {id: this.unid(), name: name};
        this.shapes.push(shape);
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

    clear() {
        this.shapes = [];
        this.pendingShapes = [];
        this.blankCounter = 0;
    }


}
module.exports = ShapeManager;