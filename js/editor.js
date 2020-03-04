const parser = require('../grammar/grammar.js');
const CodeMirror = require('../codemirror-5.51.0/lib/codemirror.js');
const $ = require('./jquery-3.4.1.min.js');
var shexcm = require('../codemirror-5.51.0/mode/shex/shex.js');
var xmlcm = require('../codemirror-5.51.0/mode/xml/xml.js');

$('#transformbt').click(getShEx);
var shExEditor = CodeMirror.fromTextArea(document.getElementById("shextext"), {
    lineNumbers: true
});
var xmiEditor = CodeMirror.fromTextArea(document.getElementById("xmitext"), {
    lineNumbers: true,
    mode: "xml"
});


function getShEx() {
	var text = shExEditor.getValue();
	xmiEditor.setValue(parser.parse(text));
}
