const shexp = require('shex').Parser;
const XMIGenerator = require ("../xmi/xmigen.js");

class ShExParser {

  constructor () {
    this.source = "";

    this.shexparser = shexp.construct();
    this.shexparser._setBase("http://example.org/");
    this.shexparser._setFileName("Shapes.shex");

    this.xmigen = new XMIGenerator();
  }

  parseShEx(shex) {
    let xmiEquivalent = "";
    try {
        this.source = this.shexparser.parse(shex);
    } catch (ex) {
        alert("Error al parsear ShEx:\n " + ex);
        return;
    }

    console.log(this.source.shapes);

    xmiEquivalent += XMIGenerator.createXMIHeader();

    let prefixes = this.xmigen.createPrefixes(this.source.prefixes, this.source.base);
    for (let shape in this.source.shapes){
      if(this.source.shapes.hasOwnProperty(shape)) {
        xmiEquivalent += this.xmigen.createXMIClass(shape, this.source.shapes[shape]);
      }

    }

    xmiEquivalent += prefixes;

    xmiEquivalent += this.xmigen.createXMIFooter();

    this.xmigen.clear();

    return xmiEquivalent;
  }



}

module.exports = new ShExParser();