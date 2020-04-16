class XMIAssociations {

    constructor (unid, shm, xmipref, xmicard) {
        this.pendingAssociations = [];
        this.unid = unid;
        this.shm = shm;
        this.xmipref = xmipref;
        this.xmicard = xmicard;
    }

    createXMIAsocAttribute(name, target, min, max) {
        let idatr = this.unid();
        let targetShape = this.shm.findShape(target);
        let idasoc = this.unid();
        let content = '\n\t<ownedAttribute xmi:id="' + idatr + '" name="' + name
            + '" visibility="public" ' +
            'type="' + targetShape.id + '" association="' + idasoc + '">'
            + this.xmicard.createXMICardinality(min, max)
            + '</ownedAttribute>';

        let asoc = { id: idasoc, idatr: idatr};
        this.pendingAssociations.push(asoc);

        return content;
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