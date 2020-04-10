class XMISubclasses {

    constructor (shm, xmiats) {
        this.subClassesCounter = new Map();
        this.subClasses = [];

        this.shm = shm;
        this.xmiats = xmiats;
    }

    createDependentSubClasses() {
        let classXMI = "";
        for(let i = 0; i < this.subClasses.length; i++) {
            let shape = this.shm.findShape(this.subClasses[i].name);
            classXMI += '\n<packagedElement xmi:type="uml:Class" xmi:id="' + shape.id + '" name="'
                + this.subClasses[i].name
                + '">' +
                this.xmiats.createXMIAttributes(this.subClasses[i].expr, shape.name) + '\n</packagedElement>';
        }
        this.subClasses = [];
        return classXMI;
    }

    getSubClassNumber(className) {
        if(this.subClassesCounter.get(className) === undefined) {
            this.subClassesCounter.set(className, 1);
            return className + "_" + 1;
        }
        else {
            let sub = this.subClassesCounter.get(className) + 1;
            this.subClassesCounter.set(className, sub);
            return className + "_" + sub;
        }
    }

    clear() {
        this.subClassesCounter = new Map();
        this.subClasses = [];
    }

}
module.exports = XMISubclasses;