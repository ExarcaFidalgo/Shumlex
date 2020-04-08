class ShapeManager {

    constructor (unid) {
        this.shapes = [];
        this.unid = unid;
    }

    findShape(name) {
        for(let i = 0; i < this.shapes.length; i++) {
            if(name === this.shapes[i].name) {
                return this.shapes[i];
            }
        }

        let shape = {id: this.unid(), name: name};
        this.shapes.push((shape));
        return shape;
    }

    clear() {
        this.shapes = [];
    }


}
module.exports = ShapeManager;