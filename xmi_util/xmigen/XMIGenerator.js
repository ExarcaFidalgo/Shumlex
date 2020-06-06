const uniqid = require("uniqid");
const ShapeManager = require("../../managers/ShapeManager.js");
const IRIManager = require("../../managers/irimanager");
const XMIAssociations = require("./XMIAssociations.js");
const XMIAttributes = require("./XMIAttributes.js");
const XMICardinality = require("./XMICardinality.js");
const XMIClass = require("./XMIClass.js");
const XMIConstraints = require("./XMIConstraints.js");
const XMIEnumerations = require("./XMIEnumerations.js");
const XMISubclasses = require("./XMISubclasses.js");
const XMITypes = require("./XMITypes.js");
const XMIAux = require("./XMIAux.js");

class XMIGenerator {

    constructor () {
        this.shm = new ShapeManager(uniqid);
        this.irim = new IRIManager();
        this.xmicard = new XMICardinality(uniqid, XMIAux);
        this.xmiasoc = new XMIAssociations(uniqid, this.shm, this.irim, this.xmicard, XMIAux);
        this.xmicon = new XMIConstraints(uniqid, this.irim, XMIAux);
        this.xmienum = new XMIEnumerations(uniqid, this.irim, this.xmicard, XMIAux);
        this.xmitype = new XMITypes(uniqid, this.irim, XMIAux, IRIManager);
        this.xmisub = new XMISubclasses(this.shm, null, this.irim, XMIAux);
        this.xmiats = new XMIAttributes(uniqid, this.xmisub, this.xmiasoc, this.xmienum, this.xmitype,
            this.irim, this.xmicon, this.shm, XMITypes, this.xmicard, XMIAux);
        this.xmisub.xmiats = this.xmiats;
        this.xmicl = new XMIClass(this.shm, XMITypes, this.irim, this.xmiats, this.xmicon, this.xmiasoc,
            this.xmisub, XMIAux);

    }

    static createXMIHeader() {
        return XMIAux.createXMIHeader();
    }

    createXMIClass(name, shape) {
        return this.xmicl.createXMIClass(name, shape);
    }

    createPrefixes (prefixes, base) {
        return this.irim.createXMIPrefixes(prefixes, base);
    }

    createXMIFooter() {
        let base = "";
        base += this.xmitype.getAnyTypeXMI();

        base += this.xmienum.createXMIEnumerations();

        base += this.xmitype.getDatatypesXMI();

        base += this.xmitype.getNodeKindsXMI();

        base += XMIAux.closeXMI();

        return base;
    }

    clear() {
        this.shm.clearXMIShapes();
        this.xmiasoc.clear();
        this.xmicon.clear();
        this.xmienum.clear();
        this.irim.clear();
        this.xmisub.clear();
        this.xmitype.clear();
    }

}
module.exports = XMIGenerator;