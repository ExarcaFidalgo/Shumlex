const $ = require('jquery');

const shumlex = require('shumlex');

/**
 * Asigna a la imagen reservada el enlace del mermaid generado
 * @param xmi   XMI empleado para generar UML
 */
function generarUML(xmi) {
    let puml = shumlex.crearDiagramaUML("uml", xmi);
}

exports.generarUML = generarUML;