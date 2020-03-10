const shexp = require('shex').Parser;
const xmigen = require ("../xmi/xmigen.js");

class ShExParser {

  constructor () {
    this.source = "";

    this.shexparser = shexp.construct();
    this.shexparser._setBase("Shapes.shex");
    this.shexparser._setFileName("Shapes.shex");
  }

  parseShEx(shex) {
    let xmiEquivalent = "";
    this.source = this.shexparser.parse(shex);

    xmiEquivalent += xmigen.createXMIHeader();
    xmiEquivalent += xmigen.createPrefixes(this.source.prefixes);
    xmiEquivalent += xmigen.createBase(this.source.base);

    console.log(this.source.shapes);
    for (let shape in this.source.shapes){
      xmiEquivalent += xmigen.createXMIClass(shape, this.source.shapes[shape]);
    }

    xmiEquivalent += xmigen.createXMIFooter();

    return xmiEquivalent;
  }



}

module.exports = new ShExParser();