const IRIManager = require ("../../schema/irimanager.js");
const ShExShapes = require("./ShExShapes.js");
const ShExAttributes = require("./ShExAttributes.js");
const ShExCardinality = require("./ShExCardinality.js");
const ShExClass = require("./ShExClass.js");
const ShExConstraints = require("./ShExConstraints.js");
const ShExEnumerations = require("./ShExEnumerations.js");
const ShExTypes = require("./ShExType.js");
const ShExAuxiliar = require("./ShExAuxiliar.js");

class ShExGenerator {

    constructor () {
        this.irim = new IRIManager();
        this.shexsh = new ShExShapes();

        this.shexco = new ShExConstraints();
        this.shexen = new ShExEnumerations(ShExAuxiliar);
        this.shext = new ShExTypes(this.irim, this.shexen, ShExAuxiliar);
        this.shexat = new ShExAttributes(this.shext, ShExAuxiliar, this.shexsh, this.shexco, ShExCardinality);
        this.shexcl = new ShExClass(ShExAuxiliar, this.shexat, this.shexco, this.shexsh);
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
        this.shexsh.saveShape(clase);
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
        this.shexsh.clear();
        this.shexco.clear();
        this.shext.clear();
    }

}
module.exports = new ShExGenerator();