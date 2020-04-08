class XMIPrefixes {

    constructor () {
        this.pendingAssociations = [];
        this.shapes = [];
        this.datatypes = [];
        this.anyTypeId = null;
        this.prefixes = [];
        this.base = "";
        this.enumerations = [];
        this.nodeKinds = [];
        this.ownedRules = [];
        this.subClassesCounter = new Map();
        this.subClasses = [];
    }

}
module.exports = XMIPrefixes;