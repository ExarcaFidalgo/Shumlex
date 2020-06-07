/**
 * Genera restricciones XMI
 */
class XMIConstraints {

    constructor (unid, irim, XMIAux) {
        this.ownedRules = [];
        this.unid = unid;
        this.irim = irim;
        this.XMIAux = XMIAux;
    }

    /**
     * Genera el XMI correspondiente a las restricciones pendientes en el estado actual
     * @returns {string}
     */
    createDependentOwnedRules(){
        let constraints = "";
        for(let i = 0; i < this.ownedRules.length; i++) {
            constraints += this.ownedRules[i];
        }
        this.clear();
        return constraints;
    }

    /**
     * Comprueba si existen facetas y genera las restricciones pertinentes
     * @param vex   ValueExpr
     * @param id    ID Shape
     */
    checkFacets(vex, id) {
        if(!vex) {
            return;
        }
        if(vex.mininclusive) {
            this.ownedRules.push(this.XMIAux.createXMIOwnedRule("MinInclusive " + vex.mininclusive, id));
        }
        if(vex.minexclusive) {
            this.ownedRules.push(this.XMIAux.createXMIOwnedRule("MinExclusive " + vex.minexclusive, id));
        }
        if(vex.totaldigits) {
            this.ownedRules.push(this.XMIAux.createXMIOwnedRule("TotalDigits " + vex.totaldigits, id));
        }
        if(vex.fractiondigits) {
            this.ownedRules.push(this.XMIAux.createXMIOwnedRule("FractionDigits " + vex.fractiondigits, id));
        }
        if(vex.length) {
            this.ownedRules.push(this.XMIAux.createXMIOwnedRule("Length " + vex.length, id));
        }
        if(vex.minlength) {
            this.ownedRules.push(this.XMIAux.createXMIOwnedRule("MinLength " + vex.minlength, id));
        }
        if(vex.maxlength) {
            this.ownedRules.push(this.XMIAux.createXMIOwnedRule("MaxLength " + vex.maxlength, id));
        }
        if(vex.pattern) {
            this.ownedRules.push(this.XMIAux.createXMIOwnedRule("/" + vex.pattern + "/", id));
        }
    }

    /**
     * Introduce restricción "Cerrada"
     * @param id    ID Shape
     */
    markAsClosed(id) {
        this.ownedRules.push(this.XMIAux.createXMIOwnedRule("CLOSED", id));
    }

    /**
     * Introduce restricción "Inversa"
     * @param id    ID Shape
     */
    markAsInverse(id) {
        this.ownedRules.push(this.XMIAux.createXMIOwnedRule("Inverse", id));
    }

    /**
     * Introduce restricción extra
     * @param id    ID Shape
     * @param values    Valores Extra
     */
    markAsExtra(id, values) {
        let extra = "EXTRA";
        for(let i = 0; i < values.length; i++) {
            let value = this.irim.getPrefixedTermOfUri(values[i]);
            if(value === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
                value = "a";
            }
            extra += " " + value;
        }
        this.ownedRules.push(this.XMIAux.createXMIOwnedRule(extra, id));
    }

    /**
     * Resetea los registros de restricciones
     */
    clear() {
        this.ownedRules = [];
    }

}
module.exports = XMIConstraints;