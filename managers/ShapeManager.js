/**
 * Gestor de shapes.
 */
class ShapeManager {

    constructor (unid) {
        this.XMIshapes = [];            //Shapes almacenadas para la generación de XMI
        this.ShExshapes = new Map();    //Shapes almacenadas para la generación de ShEx
        this.subSet = new Map();        //Subconjuntos
        this.pendingShapes = [];        //Shapes pendientes (generación futura)
        this.unid = unid;
        this.blankCounter = 0;          //Contador de nodos anónimos
    }

    /**
     * Dado un nombre de Shape, la devuelve si existe.
     * Para las shapes almacenadas de cara a generar XMI.
     * @param name  Nombre de la Shape
     * @param save  Indica si debe marcarse como pendiente, en caso de que no existe
     * @returns {*}
     */
    findShape(name, save) {
        for(let i = 0; i < this.XMIshapes.length; i++) {
            if(name === this.XMIshapes[i].name) {
                return this.XMIshapes[i];
            }
        }

        //Si no existe, la guarda
        let shape = {id: this.unid(), name: name};
        this.XMIshapes.push(shape);

        //Marcar como pendiente
        if(save) {
            this.pendingShapes.push(shape);
        }
        return shape;
    }

    /**
     * Incrementa el contador de nodos anónimos
     */
    incrementBlank() {
        this.blankCounter++;
    }

    /**
     * Devuelve el nodo anónimo actual
     * @returns {number}
     */
    getCurrentBlank() {
        return this.blankCounter;
    }

    /**
     * Devuelve el listado de Shapes pendientes
     * @returns {Array}
     */
    getPendingShapes() {
        return this.pendingShapes;
    }

    /**
     * Limpia el listado de Shapes pendientes
     */
    clearPendingShapes() {
        this.pendingShapes = [];
    }

    /**
     * Limpia aquellos listados relativos a la generación de XMI
     */
    clearXMIShapes() {
        this.XMIshapes = [];
        this.pendingShapes = [];
        this.blankCounter = 0;
    }

    /**
     * Guarda una Shape
     * Si está marcada como subconjunto, se introduce en el listado de subconjuntos
     * En caso contrario, se guarda en el listado de shapes para ShEx
     * @param element   Shape a guardar (formato XMI)
     */
    saveShape(element) {
        if(/^([$]?[:<]?[a-zA-Z]+(_[0-9]+)+[>]?)$/.test(element.$.name) ||
            /^([$]:[<]?[a-zA-Z]+[>]?)$/.test(element.$.name)) {
            this.subSet.set(element.$["xmi:id"], {
                attributes: element.ownedAttribute
            });
        }
        else {
            this.ShExshapes.set(element.$["xmi:id"], {
                name: element.$.name
            });
        }

    }

    /**
     * Devuelve una shape del listado ShEx, dado el ID de la misma
     * @param id
     * @returns {any}
     */
    getShape(id) {
        return this.ShExshapes.get(id);
    }

    /**
     * Devuelve una shape subconjunto, dado su nombre
     * @param name
     * @returns {any}
     */
    getSubSet(name) {
        return this.subSet.get(name);
    }

    /**
     * Resetea los subconjuntos
     */
    clearSubSet() {
        this.subSet = new Map();
    }

    /**
     * Resetea las estructuras de datos empleadas para la generación de ShEx
     */
    clearShExShapes() {
        this.ShExshapes = new Map();
        this.clearSubSet();
    }


}
module.exports = ShapeManager;