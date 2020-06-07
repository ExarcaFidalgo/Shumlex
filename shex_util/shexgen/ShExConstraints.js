/**
 * Se genera el equivalente ShEx a restricciones UML
 */
class ShExConstraints {

    constructor () {
        this.constraints = new Map();
    }

    /**
     * Guarda una restricción si no existe, o añade a la ya existente
     * @param cst   Restricción
     */
    saveConstraint(cst) {
        if(this.constraints.get(cst.$.constrainedElement) === undefined) {
            this.constraints.set(cst.$.constrainedElement, cst.$.name);
        }
        else {
            this.constraints.set(cst.$.constrainedElement, this.constraints.get(cst.$.constrainedElement) + " "
                +cst.$.name);
        }

    }

    /**
     * Devuelve una restricción por el ID del elemento restringido
     * @param id    ID del elemento restringido
     * @returns {string}    Restricción o vacío
     */
    getConstraints(id) {
        let cst = this.constraints.get(id);
        return cst === undefined ? "" : (" " + cst);
    }

    /**
     * Resetea las restricciones almacenadas
     */
    clear() {
        this.constraints = new Map();
    }


}
module.exports = ShExConstraints;