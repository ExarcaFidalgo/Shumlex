class XMIConstraints {

    constructor (unid, xmipref) {
        this.ownedRules = [];
        this.unid = unid;
        this.xmipref = xmipref;
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

    markAsClosed(id) {
        this.ownedRules.push(this.createXMIOwnedRule("CLOSED", id));
    }

    markAsInverse(id) {
        this.ownedRules.push(this.createXMIOwnedRule("Inverse", id));
    }

    markAsExtra(id, values) {
        let extra = "EXTRA";
        for(let i = 0; i < values.length; i++) {
            let value = this.xmipref.getPrefixedTermOfUri(values[i]);
            if(value === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
                value = "a";
            }
            extra += " " + value;
        }
        this.ownedRules.push(this.createXMIOwnedRule(extra, id));
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