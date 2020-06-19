const plantumlEncoder = require('../../lib/plantuml-encoder');
const $ = require('jquery');

const UMLGen = require("../../src/visual/UMLGen.js");
let umlgen = new UMLGen();

/**
 * Asigna a la imagen reservada el enlace del plantuml generado
 * @param xmi   XMI empleado para generar UML
 */
function generarUML(xmi) {
    let puml = umlgen.generarCodigoPUML(xmi);
    let encoded = plantumlEncoder.encode(puml);
    let img = $('#umlimg');
    img.attr("src", "http://www.plantuml.com/plantuml/img/" + encoded);
}

//Tamaño completo

$('#fullSize').click(fullSize);

/**
 * Abre la imagen
 */
function fullSize() {
    let src = $('#umlimg').attr("src");
    if(src) {
        window.location = src;
    }

}

exports.generarUML = generarUML;