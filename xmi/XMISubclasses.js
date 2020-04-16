class XMISubclasses {

    constructor (shm, xmiats, xmipref) {
        this.subClassesCounter = new Map();
        this.subClasses = [];

        this.shm = shm;
        this.xmiats = xmiats;
        this.xmipref = xmipref;
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
        let pendingShapes = this.shm.getPendingShapes();
        for(let i = 0; i < pendingShapes.length; i++) {
            let ps = pendingShapes[i];
            classXMI += '\n<packagedElement xmi:type="uml:Class" xmi:id="' + ps.id + '" name="'
                + this.xmipref.getPrefixedTermOfUri(ps.name)
                + '">' + '\n</packagedElement>';
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