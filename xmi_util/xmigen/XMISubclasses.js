class XMISubclasses {

    constructor (shm, xmiats, irim, XMIAux) {
        this.subClassesCounter = new Map();
        this.subClasses = [];

        this.shm = shm;
        this.xmiats = xmiats;
        this.irim = irim;
        this.XMIAux = XMIAux;
    }

    createDependentSubClasses() {
        let classXMI = "";
        for(let i = 0; i < this.subClasses.length; i++) {
            let shape = this.shm.findShape(this.subClasses[i].name);
            classXMI += this.XMIAux.createPackEl("uml:Class", shape.id, 'name="' + this.subClasses[i].name + '"',
                this.xmiats.createXMIAttributes(this.subClasses[i].expr, shape.name));
        }
        let pendingShapes = this.shm.getPendingShapes();
        for(let i = 0; i < pendingShapes.length; i++) {
            let ps = pendingShapes[i];
            classXMI += this.XMIAux.createPackEl("uml:Class", ps.id, 'name="' + this.irim.getPrefixedTermOfUri(ps.name)+ '"',
                "");
        }
        this.shm.clearPendingShapes();
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

    saveSubClass(sub) {
        this.subClasses.push(sub);
    }

    clear() {
        this.subClassesCounter = new Map();
        this.subClasses = [];
    }

}
module.exports = XMISubclasses;