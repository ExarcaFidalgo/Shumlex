const $ = require('jquery');

const shexparser = require('../../src/shex_util/ShExParser.js');
const xmiparser = require('../../src/xmi_util/XMIParser.js');

const repo = require('../../src/repo/shexrepository.js');

const grafo = require('./grafo.js');
const uml = require('./uml.js');
const lang = require('./idioma.js');

let shExEditor;
let xmiEditor;

/**
 * Comprueba la existencia de parámetros en la URL y actúa en consecuencia.
 * Concretamente, permite cargar diversos ejemplos en el editor, o el último código generado por el usuario.
 */
$(document).ready(function() {
    let ref = window.location.href;
    if(ref.includes("?basic")) {
        shExEditor.setValue(repo.getShex0());
    }
    else if(ref.includes("?herencia")) {
        shExEditor.setValue(repo.getShex5());
    }
    else if(ref.includes("?resnod")) {
        shExEditor.setValue(repo.getShex7());
    }
    else if(ref.includes("?facetas")) {
        shExEditor.setValue(repo.getShex9());
    }
    else if(ref.includes("?rexcl")) {
        shExEditor.setValue(repo.getShex10());
    }
    else if(ref.includes("?cgen")) {
        shExEditor.setValue(repo.getShex11());
    }
    else if(ref.includes("?leng")) {
        shExEditor.setValue(repo.getShex13());
    }
    else if(ref.includes("?card")) {
        shExEditor.setValue(repo.getShex14());
    }
    else if(ref.includes("?oneof")) {
        shExEditor.setValue(repo.getShex15());
    }
    else if(ref.includes("?anid")) {
        shExEditor.setValue(repo.getShex16());
    }
    else if(ref.includes("?closed")) {
        shExEditor.setValue(repo.getShex17());
    }
    else if(ref.includes("?rti")) {
        shExEditor.setValue(repo.getShex19());
    }
    else if(ref.includes("?extra")) {
        shExEditor.setValue(repo.getShex20());
    }
    else if(ref.includes("?etiq")) {
        shExEditor.setValue(repo.getShex21());
    }
    else if(ref.includes("?conj")) {
        shExEditor.setValue(repo.getShex22());
    }
    else if(ref.includes("?disy")) {
        shExEditor.setValue(repo.getShex23());
    }
    else if(ref.includes("?load")) {
        let shv = sessionStorage.getItem("shexvalue");
        let xmv = sessionStorage.getItem("xmivalue");
        if(shv && shExEditor) {
            shExEditor.setValue(sessionStorage.getItem("shexvalue"));
        }
        if(xmv && xmiEditor) {
            xmiEditor.setValue(sessionStorage.getItem("xmivalue"));
        }

    }
    lang.checkLang();
});

//Almacenamos el valor de "tema" almacenado en sesión
let theme = sessionStorage.getItem("theme");

/**
 * Creamos el editor de ShEx
 */
if(document.getElementById("shextext") !== null) {
    shExEditor = CodeMirror.fromTextArea(document.getElementById("shextext"), {
        mode: "shex",
        lineNumbers: true
    });
    let theme = sessionStorage.getItem("theme");
    //Si el tema no se ha indicado, por defecto toma el oscuro
    shExEditor.setOption("theme", theme === null ? "ayu-mirage" : theme);
}

/**
 * Creamos el editor de XMI (XML)
 */
if(document.getElementById("xmitext") !== null) {
    xmiEditor = CodeMirror.fromTextArea(document.getElementById("xmitext"), {
        mode: "xml",
        lineNumbers: true
    });
    xmiEditor.setOption("theme", theme === null ? "ayu-mirage" : theme);
}



$('#shextoxmi').click(shExToXMI);
$('#xmitoshex').click(XMIToShEx);

/**
 * Toma el valor del editor de ShEx y genera el XMI correspondiente.
 * Establece el valor del editor de XMI con el generado.
 */
function shExToXMI() {
	let text = shExEditor.getValue();

    let parsedToXML = shexparser.parseShExToXMI(text);
    xmiEditor.setValue(parsedToXML);
}

/**
 * Toma el valor del editor de XMI y genera el ShEx correspondiente.
 * Establece el valor del editor de ShEx con el generado.
 */
function XMIToShEx() {
    let text = xmiEditor.getValue();
    shExEditor.setValue(xmiparser.parseXMIToShEx(text));
}

$('#borrarshex').click(borrarShex);

/**
 * Borrar el contenido del editor de ShEx
 */
function borrarShex() {
    shExEditor.setValue("");
}

$('#borrarxmi').click(borrarXMI);

/**
 * Borrar el contenido del editor de XMI
 */
function borrarXMI() {
    xmiEditor.setValue("");
}

$('.intercambiarsx').click(intercambiarsx);
$('.intercambiarxs').click(intercambiarxs);

/**
 * Partiendo de la ventana de generación de XMI, nos traslada a la generación de ShEx.
 * Manteniendo los valores contenidos en ambos editores.
 */
function intercambiarsx() {
    sessionStorage.setItem("shexvalue", shExEditor.getValue());
    sessionStorage.setItem("xmivalue", xmiEditor.getValue());
    window.location = "./xmitoshex.html?load";
}

/**
 * Partiendo de la ventana de generación de ShEx, nos traslada a la generación de XMI.
 * Manteniendo los valores contenidos en ambos editores.
 */
function intercambiarxs() {
    sessionStorage.setItem("shexvalue", shExEditor.getValue());
    sessionStorage.setItem("xmivalue", xmiEditor.getValue());
    window.location = "./shextoxmi.html?load";
}


$('#cambiarClaro').click(cambiarTemaClaro);
$('#cambiarOscuro').click(cambiarTemaOscuro);

/**
 * Cambia el tema de los editores a oscuro
 */
function cambiarTemaOscuro() {
    if(shExEditor) {
        shExEditor.setOption("theme", "ayu-mirage");
    }
    if(xmiEditor) {
        xmiEditor.setOption("theme", "ayu-mirage");
    }
    sessionStorage.setItem("theme", "ayu-mirage");
}

/**
 * Cambia el tema de los editores a claro
 */
function cambiarTemaClaro() {
    if(shExEditor) {
        shExEditor.setOption("theme", "xq-light");
    }
    if(xmiEditor) {
        xmiEditor.setOption("theme",  "xq-light");
    }
    sessionStorage.setItem("theme", "xq-light")
}

$('#cargarShexXMI').click(cargarShexXMI);
$('#cargarXMIShex').click(cargarXMIShex);

/**
 * Guarda en sesión el contenido de los editores y carga el generador de XMI con el contenido actual
 */
function cargarShexXMI() {
    sessionStorage.setItem("shexvalue", shExEditor.getValue());
    sessionStorage.setItem("xmivalue", "");
    window.location = "./shextoxmi.html?load";
}

/**
 * Guarda en sesión el contenido de los editores y carga el generador de ShEx con el contenido actual
 */
function cargarXMIShex() {
    sessionStorage.setItem("xmivalue", xmiEditor.getValue());
    sessionStorage.setItem("shexvalue", "");
    window.location = "./xmitoshex.html?load";
}

/// GRAFO ///

$('#cargarGrafo').click(cargarGrafo);

/**
 * Carga la página de generación de grafo con el valor del editor de ShEx
 */
function cargarGrafo() {
    sessionStorage.setItem("shexvalue", shExEditor.getValue());
    window.location = "./grafo.html?load";
}

/**
 * Genera el grafo a partir del contenido del editor de ShEx
 */
$('#mostrargrafo').click(function() {
    sessionStorage.setItem("shexvalue", shExEditor.getValue());
    grafo.generarGrafo(shExEditor.getValue());
});

/// UML ///

$('#cargarUML').click(cargarUML);

/**
 * Carga la página de generación de UML con el valor del editor de XMI
 */
function cargarUML() {
    sessionStorage.setItem("xmivalue", xmiEditor.getValue());
    window.location = "./uml.html?load";
}

/**
 * Genera el UML a partir del contenido del editor de XMI
 */
$('#mostraruml').click(function() {
    sessionStorage.setItem("xmivalue", xmiEditor.getValue());
    uml.generarUML(xmiEditor.getValue());
});

//DESCARGA

/**
 * Genera un archivo dado un texto y lo descarga
 * @param filename  Nombre del archivo
 * @param text  Contenido
 */
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

/**
 * Descarga el contenido del editor de ShEX.
 */
if(document.getElementById("dwnshex-btn")) {
    document.getElementById("dwnshex-btn").addEventListener("click", function(){
        let text = shExEditor.getValue();
        let filename = "shumlex.shex";

        download(filename, text);
    }, false);
}

/**
 * Descarga el contenido del editor de XMI.
 */
if(document.getElementById("dwnxmi-btn")) {
    document.getElementById("dwnxmi-btn").addEventListener("click", function(){
        let text = xmiEditor.getValue();
        let filename = "shumlex.xmi";

        download(filename, text);
    }, false);
}

//IDIOMA

$('#uk').click(cambiarIngles);
$('#es').click(cambiarEsp);

/**
 * Cambia el idioma de la página a inglés
 */
function cambiarIngles() {
    sessionStorage.setItem("lang", JSON.stringify(lang.en));
    lang.checkLang();
}

/**
 * Cambia el idioma de la página a español
 */
function cambiarEsp() {
    sessionStorage.setItem("lang", JSON.stringify(lang.es));
    lang.checkLang();
}

//HOME

$('#shlogo').click(home);

/**
 * Nos devuelve a la página inicial
 */
function home() {
    window.location = "../../index.html";
}



