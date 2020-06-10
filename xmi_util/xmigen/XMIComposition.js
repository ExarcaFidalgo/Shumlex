/**
 * Genera subclases en XMI
 */
class XMIComposition {

    constructor (shm, xmiats, irim, XMIAux, xmicon, xmiasoc) {
        this.componentsCounter = 0;
        this.components = [];
        this.labels = new Map();

        this.shm = shm;
        this.xmiats = xmiats;
        this.irim = irim;
        this.XMIAux = XMIAux;
        this.xmicon = xmicon;
        this.xmiasoc = xmiasoc;
    }

    /**
     * Genera componente dependientes en XMI.
     * @returns {string}    XMI de componentes
     */
    createDependentComponents() {
        let classXMI = "";
        for(let i = 0; i < this.components.length; i++) {
            let shape = this.shm.findShape(this.components[i].name);
            classXMI += this.XMIAux.createPackEl("uml:Class", shape.id, 'name="' + this.components[i].name + '"',
                this.xmiats.createXMIAttributes(this.components[i].expr, shape.name));
            classXMI += this.xmiasoc.createDependentAssociations(shape.id);
        }
        //Crear shapes pendientes de realización
        let pendingShapes = this.shm.getPendingShapes();
        for(let i = 0; i < pendingShapes.length; i++) {
            let ps = pendingShapes[i];
            classXMI += this.XMIAux.createPackEl("uml:Class", ps.id, 'name="' + this.irim.getPrefixedTermOfUri(ps.name)+ '"',
                "");
        }
        this.shm.clearPendingShapes();
        this.components = [];
        return classXMI;
    }

    /**
     * Obtiene el número pertinente para un componente
     * @param className Nombre de la clase
     * @returns {string}    Nombre de la clase con número
     */
    getComponentNumber(className) {
            return "_Blank" + this.componentsCounter++;
    }

    /**
     * Guarda un componente en el registro
     * @param sub   componente
     */
    saveComponent(sub) {
        this.components.push(sub);
    }

    saveLabel(labelRef, comp) {
        this.labels.set(labelRef, comp);
    }

    getLabelled(labelRef) {
        return this.labels.get(labelRef);
    }

    /**
     * Resetea los registros
     */
    clear() {
        this.componentsCounter = 0;
        this.components = [];
    }

}
module.exports = XMIComposition;