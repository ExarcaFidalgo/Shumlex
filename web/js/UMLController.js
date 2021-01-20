const $ = require('jquery');

const shumlex = require('shumlex');

let isFullscreen = false;

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

$("#fullscreen").click(fullscreen);
$("#fullscreen2").click(fullscreen);

function fullscreen() {
		if(!isFullscreen) {
			$("#umlcontainer").addClass("fullscreen");
			$("#umlcontainer").removeClass("displaydiv");
			$("#uml").css("max-height", "91%");
			$("#umlcontainer").css("width", "100%");
			$("#fullscreen2").css("display", "inherit");
			$("body").css("overflow", "hidden");
			isFullscreen = true;
		} else {
			$("#umlcontainer").removeClass("fullscreen");
			$("#umlcontainer").addClass("displaydiv");
			$("#uml").css("max-height", "500px");
			$("#umlcontainer").css("width", "44.6%");
			$("#fullscreen2").css("display", "none");
			$("body").css("overflow", "");
			isFullscreen = false;
		}
	}

exports.generarUML = generarUML;