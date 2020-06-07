const uniqid = require("uniqid");
const IRIManager = require ("../../managers/irimanager.js");
const ShExAttributes = require("./ShExAttributes.js");
const ShExCardinality = require("./ShExCardinality.js");
const ShExClass = require("./ShExClass.js");
const ShExConstraints = require("./ShExConstraints.js");
const ShExEnumerations = require("./ShExEnumerations.js");
const ShExTypes = require("./ShExType.js");
const ShapeManager = require("../../managers/ShapeManager.js");

/**
 * Clase aunadora y centralizadora de todos los elementos necesarios para generar ShEx
 */
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

    /**
     * Crea el conjunto inicial de prefijos
     * @returns {string}    Lista de prefijos
     */
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

    /**
     * Guarda una clase UML como su equivalente Shape
     * @param clase Clase UML
     */
    saveClass(clase) {
        this.shm.saveShape(clase);
    }

    /**
     * Guarda un tipo UML
     * @param type
     */
    saveType(type) {
        this.shext.saveType(type);
    }

    /**
     * Guarda un listado de prefijos
     * @param prf Prefijos
     */
    savePrefixes(prf) {
        let prefixes = prf.ownedLiteral;
        for(let i = 0; i < prefixes.length; i++) {
            this.irim.savePrefix(prefixes[i].$.name)
        }
    }

    /**
     * Guarda una enumeración
     * @param enm   Enumeración
     */
    saveEnum(enm) {
        this.shexen.saveEnum(enm);
    }

    /**
     * Guarda una restricción
     * @param cst   Restricción
     */
    saveConstraint(cst) {
        this.shexco.saveConstraint(cst);
    }

    /**
     * Comienza el proceso de generación de ShEx, haciendo llamada a la creación del equivalente a clase
     * @param clase Clase
     * @returns {string}    Equivalente ShEx
     */
    classToShEx(clase) {
        return this.shexcl.classToShEx(clase);
    }

    /**
     * Resetea los registros del generador
     */
    clear() {
        this.irim = new IRIManager();
        this.shm.clearShExShapes();
        this.shexco.clear();
        this.shext.clear();
    }

}
module.exports = new ShExGenerator();