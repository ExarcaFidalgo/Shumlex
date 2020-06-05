class XMIClass {

    constructor (shm, xmitype, irim, xmiatt, xmicon, xmiasoc, xmisub) {
        this.shm = shm;
        this.XMITypes = xmitype;
        this.irim = irim;
        this.xmiatt = xmiatt;
        this.xmicon = xmicon;
        this.xmiasoc = xmiasoc;
        this.xmisub = xmisub;

    }

    createXMIClass(name, shape) {
        let sh = this.shm.findShape(name);
        let expression = shape.expression;
        let nodekind = shape.nodeKind;
        let generalizations = "";
        let nk = nodekind === undefined ? "" : this.xmiatt.createXMIKindAttribute("nodeKind", nodekind);
        let dt = shape.datatype === undefined ? "" : this.xmiatt.createXMIPrimAttribute("datatype",
            shape.datatype);
        let prName = this.irim.getPrefixedTermOfUri(name);
        if(prName.includes("_:")) {
            this.shm.incrementBlank();
        }
        let ats = "";
        if(shape.type === "ShapeAnd") {
            let exprsForGen = [];
            for (let i = 0; i < shape.shapeExprs.length; i++) {
                if(shape.shapeExprs[i].type === "ShapeRef"      // Herencia - :User :Person AND {}
                    || shape.shapeExprs[i].type === "NodeConstraint") { // Restricción Nodal - :Thing Literal AND {}
                    exprsForGen.push(shape.shapeExprs[i]);
                }
                else {  //Conjunción de formas - :User { ... } AND { ... }
                        ats += this.xmiatt.createXMIAttributes(shape.shapeExprs[i].expression, prName);
                        if(shape.shapeExprs[i].closed === true) {
                            this.xmicon.markAsClosed(sh.id);
                        }
                }
            }
            generalizations = this.xmiatt.createXMIGeneralization(exprsForGen);
        } else {
            ats = this.xmiatt.createXMIAttributes(expression, prName);
        }

        this.xmicon.checkFacets(shape, sh.id);

        let classXMI = '\n<packagedElement xmi:type="uml:Class" xmi:id="' + sh.id + '" name="'
            + prName
            + '">' +
            ats +
            nk + dt +
            generalizations + '\n</packagedElement>';

        if(shape.closed === true) {
            this.xmicon.markAsClosed(sh.id);
        }

        if(shape.extra !== undefined) {
            this.xmicon.markAsExtra(sh.id, shape.extra);
        }

        classXMI += this.xmicon.createDependentOwnedRules();
        classXMI += this.xmiasoc.createDependentAssociations(sh.id);
        classXMI += this.xmisub.createDependentSubClasses();

        return classXMI;
    }


}
module.exports = XMIClass;