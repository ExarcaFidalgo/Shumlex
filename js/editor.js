const $ = require('./jquery-3.4.1.min.js');

const shexparser = require('../shex/ShExParser.js');
const xmiparser = require('../xmi/XMIParser.js');

const repo = require('../repo/shexrepository.js');

const grafo = require('./grafo.js');
const uml = require('./uml.js');

let shExEditor;
let xmiEditor;

$(document).ready(function() {
    let ref = window.location.href;
    if(ref.includes("?basic")) {
        shExEditor.setValue(repo.getShex0());
    }
    else if(ref.includes("?herencia")) {
        shExEditor.setValue(repo.getShex5());
    }
    else if(ref.includes("?resnod")) {
        shExEditor.setValue(repo.getShex8());
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
});

let theme = sessionStorage.getItem("theme");

if(document.getElementById("shextext") !== null) {
    shExEditor = CodeMirror.fromTextArea(document.getElementById("shextext"), {
        mode: "shex",
        lineNumbers: true
    });
    let theme = sessionStorage.getItem("theme");
    shExEditor.setOption("theme", theme === null ? "ayu-mirage" : theme);
}

if(document.getElementById("xmitext") !== null) {
    xmiEditor = CodeMirror.fromTextArea(document.getElementById("xmitext"), {
        mode: "xml",
        lineNumbers: true
    });
    xmiEditor.setOption("theme", theme === null ? "ayu-mirage" : theme);
}



$('#shextoxmi').click(shExToXMI);
$('#xmitoshex').click(XMIToShEx);

function shExToXMI() {
	let text = shExEditor.getValue();

    let parsedToXML = shexparser.parseShExToXMI(text);
    xmiEditor.setValue(parsedToXML);
}

function XMIToShEx() {
    let text = xmiEditor.getValue();
    shExEditor.setValue(xmiparser.parseXMIToShEx(text));
}

$('#borrarshex').click(borrarShex);

function borrarShex() {
    shExEditor.setValue("");
}

$('#borrarxmi').click(borrarXMI);

function borrarXMI() {
    xmiEditor.setValue("");
}

$('.intercambiarsx').click(intercambiarsx);
$('.intercambiarxs').click(intercambiarxs);

function intercambiarsx() {
    sessionStorage.setItem("shexvalue", shExEditor.getValue());
    sessionStorage.setItem("xmivalue", xmiEditor.getValue());
    window.location = "./xmitoshex.html?load";
}

function intercambiarxs() {
    sessionStorage.setItem("shexvalue", shExEditor.getValue());
    sessionStorage.setItem("xmivalue", xmiEditor.getValue());
    window.location = "./shextoxmi.html?load";
}


$('#cambiarClaro').click(cambiarTemaClaro);
$('#cambiarOscuro').click(cambiarTemaOscuro);

function cambiarTemaOscuro() {
    if(shExEditor) {
        shExEditor.setOption("theme", "ayu-mirage");
    }
    if(xmiEditor) {
        xmiEditor.setOption("theme", "ayu-mirage");
    }
    sessionStorage.setItem("theme", "ayu-mirage");
}

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

function cargarShexXMI() {
    console.log(shExEditor.getValue());
    sessionStorage.setItem("shexvalue", shExEditor.getValue());
    sessionStorage.setItem("xmivalue", "");
    window.location = "./shextoxmi.html?load";
}

function cargarXMIShex() {
    sessionStorage.setItem("xmivalue", xmiEditor.getValue());
    sessionStorage.setItem("shexvalue", "");
    window.location = "./xmitoshex.html?load";
}

/// GRAFO ///

$('#cargarGrafo').click(cargarGrafo);


function cargarGrafo() {
    sessionStorage.setItem("shexvalue", shExEditor.getValue());
    window.location = "./grafo.html?load";
}


$('#mostrargrafo').click(function() {
    sessionStorage.setItem("shexvalue", shExEditor.getValue());
    grafo.generarGrafo(shExEditor.getValue());
});

/// UML ///

$('#cargarUML').click(cargarUML);

function cargarUML() {
    sessionStorage.setItem("xmivalue", xmiEditor.getValue());
    window.location = "./uml.html?load";
}

$('#mostraruml').click(function() {
    sessionStorage.setItem("xmivalue", xmiEditor.getValue());
    uml.generarUML(xmiEditor.getValue());
});

//DESCARGA

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("dwnshex-btn").addEventListener("click", function(){
    let text = shExEditor.getValue();
    let filename = "helsreach.shex";

    download(filename, text);
}, false);

document.getElementById("dwnxmi-btn").addEventListener("click", function(){
    let text = xmiEditor.getValue();
    let filename = "helsreach.xmi";

    download(filename, text);
}, false);