class XMIConstraints {

    constructor (unid, irim, XMIAux) {
        this.ownedRules = [];
        this.unid = unid;
        this.irim = irim;
        this.XMIAux = XMIAux;
    }

    createDependentOwnedRules(){
        let constraints = "";
        for(let i = 0; i < this.ownedRules.length; i++) {
            constraints += this.ownedRules[i];
        }
        this.ownedRules = [];
        return constraints;
    }

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

    markAsClosed(id) {
        this.ownedRules.push(this.XMIAux.createXMIOwnedRule("CLOSED", id));
    }

    markAsInverse(id) {
        this.ownedRules.push(this.XMIAux.createXMIOwnedRule("Inverse", id));
    }

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

    clear() {
        this.ownedRules = [];
    }

}
module.exports = XMIConstraints;