class XMIAssociations {

    constructor (unid, shm, xmipref, xmicard) {
        this.pendingAssociations = [];
        this.unid = unid;
        this.shm = shm;
        this.xmipref = xmipref;
        this.xmicard = xmicard;
    }

    createXMIAsocAttribute(name, target, min, max) {
        let minimum = min !== undefined ? min : 1;
        let maximum = max !== undefined ? max : 1;
        let idatr = this.unid();
        let targetShape = this.shm.findShape(target);
        let idasoc = this.unid();
        let content = '\n\t<ownedAttribute xmi:id="' + idatr + '" name="' + this.xmipref.getPrefixedTermOfUri(name)
            + '" visibility="public" ' +
            'type="' + targetShape.id + '" association="' + idasoc + '">'
            + this.createXMIAsocCardinality(minimum, maximum)
            + '</ownedAttribute>';

        let asoc = { id: idasoc, idatr: idatr};
        this.pendingAssociations.push(asoc);

        return content;
    }

    createXMIAsocCardinality(min, max) {
        return this.xmicard.getLowerCardinality(min) + this.xmicard.getUpperCardinality(max);
    }

    createXMIAssociation(ids, idcl) {
        let idown = this.unid();
        return '\n<packagedElement xmi:type="uml:Association" xmi:id="' + ids.id + '" memberEnd="' + ids.idatr
            + ' '  + idown + '">\n' +
            '\t<ownedEnd xmi:id="' + idown + '" visibility="public" type="' + idcl + '" association="'
            + ids.id + '"/>\n' + '</packagedElement>\n'
    }

    createDependentAssociations(idcl){
        let assocs = '';
        for(let i = 0; i < this.pendingAssociations.length; i++) {
            assocs += this.createXMIAssociation(this.pendingAssociations[i], idcl);
        }
        this.pendingAssociations = [];
        return assocs;
    }

    clear() {
        this.pendingAssociations = [];
    }

}
module.exports = XMIAssociations;