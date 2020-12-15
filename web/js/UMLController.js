const $ = require('jquery');

const shumlex = require('shumlex');

/**
 * Asigna a la imagen reservada el enlace del mermaid generado
 * @param xmi   XMI empleado para generar UML
 */
function generarUML(xmi) {
    let puml = shumlex.crearDiagramaUML("uml", xmi);
	let svg64 = shumlex.base64SVG("uml");
	$("#dwnsvg-btn").attr("href", svg64);
	$("#dwnsvg-btn").attr("download", `shumlex-class-diagram.svg`);
}

exports.generarUML = generarUML;