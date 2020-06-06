class XMICardinality {

    constructor(unid, XMIAux) {
        this.unid = unid;
        this.XMIAux = XMIAux;
    }

    createXMICardinality(min, max) {
        let minimum = min !== undefined ? min : 1;
        let maximum = max !== undefined ? max : 1;
        return this.getLowerCardinality(minimum) + this.getUpperCardinality(maximum);
    }

    getUpperCardinality(cardinality) {
        if(cardinality === 1)
            return "";
        if(cardinality === -1)
            return this.XMIAux.getUpVal("*");
        return this.XMIAux.getUpVal(cardinality);
    }

    getLowerCardinality(cardinality) {
        if(cardinality === 0)
            return this.getLower0Cardinality();
        else if(cardinality === 1)
            return "";
        return this.XMIAux.getLowVal("UnlimitedNatural", cardinality);
    }

    getLower0Cardinality() {
        return this.XMIAux.getLowVal("Integer");
    }

}
module.exports = XMICardinality;