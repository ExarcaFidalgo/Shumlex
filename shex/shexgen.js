class ShExGenerator {

    createShExHeader() {
        return null
    }

    createShExClass(element) {
        console.log(element);
        let header = ":" + element.$.name + " {";
        let content = header;

        let attributes = element.ownedAttribute;
        for(let i = 0; i < attributes.length; i++) {
            content += this.createShExAttribute(attributes[i]);
        }

        return content + "\n}\n\n"
    }

    createShExAttribute(attr) {
        let type = attr.type[0].$.href.split("#").pop();

        return "\n\t:" + attr.$.name + this.createShExType(type) + ";";
    }

    createShExType(type) {
        //TODO: schemas
        if(type === "Undefined") {
            return " .";
        } else {
            return " xsd:" + type.toLowerCase();
        }
    }

}
module.exports = new ShExGenerator();