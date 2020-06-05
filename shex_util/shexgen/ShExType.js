class ShExType {

    constructor (irim, shexen, IRIManager) {
        this.irim = irim;
        this.types = new Map();
        this.shexen = shexen;
        this.IRIManager = IRIManager;
    }

    saveType(element) {
        this.types.set(element.$["xmi:id"], { name: element.$.name });
    }

    getType(id) {
        return this.types.get(id);
    }

    getAttrType(attr) {
        if(attr.type) {
            let href = attr.type[0].$.href.split("#");
            if(href[0] === "pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml") {
                return this.irim.findXSDPrefix() + href[1].substring(0,1).toLowerCase() + href[1].substring(1);
            } else {
                return href.pop();
            }

        }
        else if (attr.$.type) {
            let enumer = this.shexen.getEnum(attr.$.type);
            if(enumer) {
                return this.shexen.createShExEnumeration(enumer);
            }
            let type = this.getType(attr.$.type);
            return type.name;
        }
        return "Any";
    }

    createShExType(type) {
        if(type === "Any") {
            return " .";
        } else {
            return " " + this.IRIManager.getShexTerm(type);
        }
    }

    clear () {
        this.types = new Map();
    }



}
module.exports = ShExType;