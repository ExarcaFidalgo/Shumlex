const uniqid = require("uniqid");
const ShapeManager = require("./ShapeManager.js");
const IRIManager = require("../schema/irimanager");
const XMIAssociations = require("./XMIAssociations.js");
const XMIAttributes = require("./XMIAttributes.js");
const XMICardinality = require("./XMICardinality.js");
const XMIClass = require("./XMIClass.js");
const XMIConstraints = require("./XMIConstraints.js");
const XMIEnumerations = require("./XMIEnumerations.js");
const XMIGeneralization = require("./XMIGeneralization.js");
const XMIPrefixes = require("./XMIPrefixes.js");
const XMISubclasses = require("./XMISubclasses.js");
const XMITypes = require("./XMITypes.js");

class XMIGenerator {

    constructor () {
        this.shm = new ShapeManager(uniqid);
        this.xmipref = new XMIPrefixes(uniqid, IRIManager);
        this.xmicard = new XMICardinality(uniqid);
        this.xmiasoc = new XMIAssociations(uniqid, this.shm, this.xmipref, this.xmicard);
        this.xmicon = new XMIConstraints(uniqid);
        this.xmienum = new XMIEnumerations(uniqid, this.xmipref, this.xmicard);
        this.xmigen = new XMIGeneralization(uniqid, XMITypes, this.shm);

        this.xmitype = new XMITypes(uniqid, this.xmipref);
        this.xmisub = new XMISubclasses(this.shm, null, this.xmipref);
        this.xmiats = new XMIAttributes(uniqid, this.xmisub, this.xmiasoc, this.xmienum, this.xmitype,
            this.xmipref, this.xmicon, this.shm, XMITypes, this.xmicard);
        this.xmisub.xmiats = this.xmiats;
        this.xmicl = new XMIClass(this.shm, XMITypes, this.xmipref, this.xmiats, this.xmicon, this.xmiasoc,
            this.xmisub);

    }

    static createXMIHeader() {
        return '<?xml version="1.0" encoding="UTF-8"?>\n' +
            '<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" ' +
            'xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"\n xmi:id="' + uniqid() + '" name="ShExGeneratedXMI">'
    }

    createXMIClass(name, shape) {
        return this.xmicl.createXMIClass(name, shape);
    }

    createPrefixes (prefixes, base) {
        return this.xmipref.createPrefixes(prefixes, base);
    }

    createXMIFooter() {
        let base = "";
        base += this.xmitype.getAnyTypeXMI();

        base += this.xmienum.createXMIEnumerations();

        base += this.xmitype.getDatatypesXMI();

        base += this.xmitype.getNodeKindsXMI();

        base += '\n</uml:Model>';

        return base;
    }

    static createXMIOwnedComment(comment) {
        return '<ownedComment xmi:id="' + uniqid() + '">\n' +
            '<body>' + comment + '</body>\n' +
            '</ownedComment>\n'
    }

    clear() {
        this.shm.clear();
        this.xmiasoc.clear();
        this.xmicon.clear();
        this.xmienum.clear();
        this.xmipref.clear();
        this.xmisub.clear();
        this.xmitype.clear();
    }

}
module.exports = XMIGenerator;