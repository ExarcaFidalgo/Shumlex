const $ = require('./jquery-3.4.1.min.js');

const shexparser = require('../shex/ShExParser.js');
const xmiparser = require('../xmi/XMIParser.js');

const repo = require('../repo/shexrepository.js');

const plantumlEncoder = require('plantuml-encoder');


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
});

let shExEditor = CodeMirror.fromTextArea(document.getElementById("shextext"), {
    mode: "shex",
    lineNumbers: true
});

let xmiEditor = CodeMirror.fromTextArea(document.getElementById("xmitext"), {
    mode: "xml",
    lineNumbers: true
});

xmiEditor.setOption("theme", "ayu-mirage");
shExEditor.setOption("theme", "ayu-mirage");

$('#shextoxmi').click(shExToXMI);
$('#xmitoshex').click(XMIToShEx);

function shExToXMI() {
	let text = shExEditor.getValue();

    let parsedToXML = shexparser.parseShEx(text);
    xmiEditor.setValue(parsedToXML);
    console.log(window.location.href)
}

function XMIToShEx() {
    let text = xmiEditor.getValue();
    shExEditor.setValue(xmiparser.parseXMI(text));
}

$('#showuml').click(generateUML);

function generateUML() {
    let encoded = plantumlEncoder.encode(umlEditor.getValue());
    $('#umlimg').attr("src", "http://www.plantuml.com/plantuml/img/" + encoded);
}

