const $ = require('./jquery-3.4.1.min.js');

const shexparser = require('../shex/ShExParser.js');
const xmiparser = require('../xmi/XMIParser.js');

const plantumlEncoder = require('plantuml-encoder');

$('#shextoxmi').click(shExToXMI);
$('#xmitoshex').click(XMIToShEx);

function shExToXMI() {
	let text = shExEditor.getValue();

    let parsedToXML = shexparser.parseShEx(text);
    xmiEditor.setValue(parsedToXML);
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