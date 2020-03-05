const CodeMirror = require('../codemirror-5.51.0/lib/codemirror.js');
const $ = require('./jquery-3.4.1.min.js');

const shexparser = require('../shex/shexparser.js');
const xmiparser = require('../xmi/xmiparser.js');

var shExEditor = CodeMirror.fromTextArea(document.getElementById("shextext"), {
    lineNumbers: true
});
var xmiEditor = CodeMirror.fromTextArea(document.getElementById("xmitext"), {
    lineNumbers: true,
    mode: "xml"
});

$('#shextoxmi').click(shExToXMI);
$('#xmitoshex').click(XMIToShEx);

function shExToXMI() {
	let text = shExEditor.getValue();
	xmiEditor.setValue(shexparser.parse(text));
}

function XMIToShEx() {
    let text = xmiEditor.getValue();
    shExEditor.setValue(xmiparser.parseXMI(text));
}
