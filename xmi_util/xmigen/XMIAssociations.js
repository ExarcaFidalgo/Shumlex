/**
 * Genera asociaciones en XMI
 */
class XMIAssociations {

    constructor (unid, shm, irim, xmicard, XMIAux) {
        this.pendingAssociations = [];
        this.unid = unid;
        this.shm = shm;
        this.irim = irim;
        this.xmicard = xmicard;
        this.XMIAux = XMIAux;
    }

    /**
     * Crea un atributo asociación para una clase
     * @param name  Nombre asociación
     * @param target    Shape referenciada
     * @param min   Cardinalidad mínima
     * @param max   Cardinalidad máxima
     * @returns {*} XMI
     */
    createXMIAsocAttribute(name, target, min, max) {
        let idatr = this.unid();
        let targetShape = this.shm.findShape(target);

        //ID Elemento asociación (PackagedElement)
        let idasoc = this.unid();
        let card = this.xmicard.createXMICardinality(min, max);

        let content = this.XMIAux.createAsocAt(idatr, name, targetShape.id, idasoc, card, "");
        let asoc = { id: idasoc, idatr: idatr};
        //Puesto que hemos generado el atributo en la clase, añadimos la asociación a pendientes
        //Para que genere el elemento asociación tras finalizar la clase actual
        this.pendingAssociations.push(asoc);

        return content;
    }

    /**
     * Crea un atributo asociación de composición para una clase
     * @param name  Nombre asociación
     * @param target    Shape referenciada
     * @param min   Cardinalidad mínima
     * @param max   Cardinalidad máxima
     * @returns {*} XMI
     */
    createXMICompAsocAttribute(name, target, min, max) {
        let idatr = this.unid();
        let targetShape = this.shm.findShape(target);

        //ID Elemento asociación (PackagedElement)
        let idasoc = this.unid();
        let card = this.xmicard.createXMICardinality(min, max);

        let content = this.XMIAux.createAsocAt(idatr, name, targetShape.id, idasoc, card,
            "aggregation=\"composite\"");
        let asoc = { id: idasoc, idatr: idatr};
        //Puesto que hemos generado el atributo en la clase, añadimos la asociación a pendientes
        //Para que genere el elemento asociación tras finalizar la clase actual
        this.pendingAssociations.push(asoc);

        return content;
    }

    /**
     * Crea una asociación como elemento independiente, para ser referenciada por el atributo de clase
     * @param ids   IDs necesarios, en JSON. Incluye idatr -atributo- e id -asociación-
     * @param idcl  ID clase actual
     * @returns {*} Asociación XMI - Packaged Element
     */
    createXMIAssociation(ids, idcl) {
        let idown = this.unid();
        let memberEnd = this.XMIAux.createMemEnd(ids.idatr, idown);
        let ownedEnd = this.XMIAux.createOwEnd(idown, idcl, ids.id);
        return this.XMIAux.createPackEl("uml:Association", ids.id, memberEnd, ownedEnd);
    }

    /**
     * Crea las asociaciones pendientes para la clase que se acaba de generar
     * Acto seguido, resetea las pendientes
     * @param idcl  ID Clase actual
     * @returns {string}    Asociaciones XMI
     */
    createDependentAssociations(idcl){
        let assocs = '';
        for(let i = 0; i < this.pendingAssociations.length; i++) {
            assocs += this.createXMIAssociation(this.pendingAssociations[i], idcl);
        }
        this.clear();
        return assocs;
    }

    /**
     * Resetea las asociaciones pendientes
     */
    clear() {
        this.pendingAssociations = [];
    }

}
module.exports = XMIAssociations;