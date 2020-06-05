const uniqid = require("uniqid");
const IRIManager = require ("../../managers/irimanager.js");
const ShExAttributes = require("./ShExAttributes.js");
const ShExCardinality = require("./ShExCardinality.js");
const ShExClass = require("./ShExClass.js");
const ShExConstraints = require("./ShExConstraints.js");
const ShExEnumerations = require("./ShExEnumerations.js");
const ShExTypes = require("./ShExType.js");
const ShapeManager = require("../../managers/ShapeManager.js");

class ShExGenerator {

    constructor () {
        this.shm = new ShapeManager(uniqid);
        this.irim = new IRIManager();
        this.shexco = new ShExConstraints();
        this.shexen = new ShExEnumerations(IRIManager);
        this.shext = new ShExTypes(this.irim, this.shexen, IRIManager);
        this.shexat = new ShExAttributes(this.shext, IRIManager, this.shm, this.shexco, ShExCardinality);
        this.shexcl = new ShExClass(IRIManager, this.shexat, this.shexco, this.shm);
    }

    createShExHeader() {
        let header = "";
        let prefixes = this.irim.getPrefixesList();
        for(let prefix in prefixes) {
            if(prefixes.hasOwnProperty(prefix)) {
                header += "prefix " + prefixes[prefix].prefix + " " + prefixes[prefix].uri + "\n";
            }
        }
        header += this.irim.getBase();
        return header
    }

    saveClass(clase) {
        this.shm.saveShape(clase);
    }

    saveType(type) {
        this.shext.saveType(type);
    }

    savePrefixes(prf) {
        let prefixes = prf.ownedLiteral;
        for(let i = 0; i < prefixes.length; i++) {
            this.irim.savePrefix(prefixes[i].$.name)
        }
    }

    saveEnum(enm) {
        this.shexen.saveEnum(enm);
    }

    saveConstraint(cst) {
        this.shexco.saveConstraint(cst);
    }

    createShExClass(clase) {
        return this.shexcl.createShExClass(clase);
    }

    clear() {
        this.irim = new IRIManager();
        this.shm.clearShExShapes();
        this.shexco.clear();
        this.shext.clear();
    }

}
module.exports = new ShExGenerator();