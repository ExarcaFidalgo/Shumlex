const shexp = require('shex').Parser;
const XMIGenerator = require ("../xmi/xmigen.js");

class ShExParser {

  constructor () {
    this.source = "";

    this.shexparser = shexp.construct();
    this.shexparser._setBase("Shapes.shex");
    this.shexparser._setFileName("Shapes.shex");

    this.xmigen = new XMIGenerator();
  }

  parseShEx(shex) {
    let xmiEquivalent = "";
    this.source = this.shexparser.parse(shex);

    xmiEquivalent += XMIGenerator.createXMIHeader();
    xmiEquivalent += XMIGenerator.createPrefixes(this.source.prefixes);
    xmiEquivalent += XMIGenerator.createBase(this.source.base);

    console.log(this.source.shapes);
    for (let shape in this.source.shapes){
      if(this.source.shapes.hasOwnProperty(shape)) {
        xmiEquivalent += this.xmigen.createXMIClass(shape, this.source.shapes[shape]);
      }

    }

    xmiEquivalent += this.xmigen.createXMIFooter();

    return xmiEquivalent;
  }



}

module.exports = new ShExParser();