class XMIConstraints {

    constructor (unid) {
        this.ownedRules = [];
        this.unid = unid;
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
            this.ownedRules.push(this.createXMIOwnedRule("MinInclusive " + vex.mininclusive, id));
        }
        if(vex.minexclusive) {
            this.ownedRules.push(this.createXMIOwnedRule("MinExclusive " + vex.minexclusive, id));
        }
        if(vex.totaldigits) {
            this.ownedRules.push(this.createXMIOwnedRule("TotalDigits " + vex.totaldigits, id));
        }
        if(vex.fractiondigits) {
            this.ownedRules.push(this.createXMIOwnedRule("FractionDigits " + vex.fractiondigits, id));
        }
        if(vex.length) {
            this.ownedRules.push(this.createXMIOwnedRule("Length " + vex.length, id));
        }
        if(vex.minlength) {
            this.ownedRules.push(this.createXMIOwnedRule("MinLength " + vex.minlength, id));
        }
        if(vex.maxlength) {
            this.ownedRules.push(this.createXMIOwnedRule("MaxLength " + vex.maxlength, id));
        }
        if(vex.pattern) {
            this.ownedRules.push(this.createXMIOwnedRule("/" + vex.pattern + "/", id));
        }
    }

    createXMIOwnedRule(name, id) {
        return "\n<ownedRule xmi:id=\"" + this.unid() + "\" name=\"" + name + "\" " +
            "constrainedElement=\"" + id + "\">\n" +
            "\n</ownedRule>"
    }

    clear() {
        this.ownedRules = [];
    }

}
module.exports = XMIConstraints;