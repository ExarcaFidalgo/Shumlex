const shexp = require('shex').Parser;
const XMIGenerator = require ("../xmi/XMIGenerator.js");

class ShExParser {

  constructor () {
    this.source = "";

    this.shexparser = shexp.construct();
    this.shexparser._setBase("http://example.org/");
    this.shexparser._setFileName("Shapes.shex");

    this.xmigen = new XMIGenerator();
  }

  parseShExToXMI(shex) {
    let xmiEquivalent = "";

    let source = this.parseShEx(shex);

    xmiEquivalent += XMIGenerator.createXMIHeader();

    let prefixes = this.xmigen.createPrefixes(source.prefixes, source.base);
    for (let shape in source.shapes){
      if(source.shapes.hasOwnProperty(shape)) {
        xmiEquivalent += this.xmigen.createXMIClass(shape, source.shapes[shape]);
      }

    }

    xmiEquivalent += prefixes;

    xmiEquivalent += this.xmigen.createXMIFooter();

    this.xmigen.clear();

    return xmiEquivalent;
  }

  parseShEx(shex) {
    try {
      this.source = this.shexparser.parse(shex);
    } catch (ex) {
      alert("Error al parsear ShEx:\n " + ex);
      return;
    }
    return this.source;
  }
}

module.exports = new ShExParser();