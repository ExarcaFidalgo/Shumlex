class XMIAssociations {

    constructor (unid, shm, irim, xmicard, XMIAux) {
        this.pendingAssociations = [];
        this.unid = unid;
        this.shm = shm;
        this.irim = irim;
        this.xmicard = xmicard;
        this.XMIAux = XMIAux;
    }

    createXMIAsocAttribute(name, target, min, max) {
        let idatr = this.unid();
        let targetShape = this.shm.findShape(target);
        let idasoc = this.unid();
        let card = this.xmicard.createXMICardinality(min, max);
        let content = this.XMIAux.createAsocAt(idatr, name, targetShape.id, idasoc, card);

        let asoc = { id: idasoc, idatr: idatr};
        this.pendingAssociations.push(asoc);

        return content;
    }

    createXMIAssociation(ids, idcl) {
        let idown = this.unid();
        let memberEnd = this.XMIAux.createMemEnd(ids.idatr, idown);
        let ownedEnd = this.XMIAux.createOwEnd(idown, idcl, ids.id);
        return this.XMIAux.createPackEl("uml:Association", ids.id, memberEnd, ownedEnd);
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