class ShExCardinality {

    static cardinalityOf(attr) {
        //TODO: Comprobar validez de las cardinalidades
        let lowerValue = ShExCardinality.checkCardinalityValue(attr.lowerValue);
        let upperValue = ShExCardinality.checkCardinalityValue(attr.upperValue);
        switch(lowerValue){
            case 1:
                if(upperValue === 1) {
                    return ""
                }
                else if (upperValue === Infinity) {
                    return " +"
                }
                else {
                    return " {1," + upperValue + "}"
                }
            case 0:
                if(upperValue === 1) {
                    return " ?"
                }
                else if (upperValue === Infinity) {
                    return " *"
                }
                else {
                    return " {0, " + upperValue + "}"
                }
            default:
                if(upperValue === lowerValue) {
                    return " {" + lowerValue + "}"
                }
                else if (upperValue === Infinity) {
                    return " {" + lowerValue + ",}"
                }
                else {
                    return " {" + lowerValue + ", " + upperValue + "}"
                }
        }
    }

    static checkCardinalityValue(attr) {
        if (!attr) {
            return 1
        }
        else if (attr[0].$["xmi:type"] === "uml:LiteralInteger") {
            return 0
        }
        else if (attr[0].$["xmi:type"] === "uml:LiteralUnlimitedNatural") {
            let value = attr[0].$.value;
            if(value === "*")
                return Infinity;
            return parseInt(value)
        }
    }



}
module.exports = ShExCardinality;