/**
 * Genera subclases en XMI
 */
class XMIComposition {

    constructor (shm, xmiats, irim, XMIAux) {
        this.componentsCounter = new Map();
        this.components = [];

        this.shm = shm;
        this.xmiats = xmiats;
        this.irim = irim;
        this.XMIAux = XMIAux;
    }

    /**
     * Genera subclases dependientes en XMI. Surgen como solución a estructuras ShEx irrepresentables de modo
     * fidedigno en UML.
     * @returns {string}    XMI de (sub)clases
     */
    createDependentComponents() {
        let classXMI = "";
        for(let i = 0; i < this.components.length; i++) {
            let shape = this.shm.findShape(this.components[i].name);
            classXMI += this.XMIAux.createPackEl("uml:Class", shape.id, 'name="' + this.components[i].name + '"',
                this.xmiats.createXMIAttributes(this.components[i].expr, shape.name));
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
     * Obtiene el número pertinente para una subclase
     * @param className Nombre de la clase
     * @returns {string}    Nombre de la clase con número
     */
    getComponentNumber(className) {
        if(this.componentsCounter.get(className) === undefined) {
            this.componentsCounter.set(className, 1);
            return "_Blank" + 1;
        }
        else {
            let sub = this.componentsCounter.get(className) + 1;
            this.componentsCounter.set(className, sub);
            return "_Blank" + sub;
        }
    }

    /**
     * Guarda una subclase en el registro
     * @param sub   Subclase
     */
    saveComponent(sub) {
        this.components.push(sub);
    }

    /**
     * Resetea los registros
     */
    clear() {
        this.componentsCounter = new Map();
        this.components = [];
    }

}
module.exports = XMIComposition;