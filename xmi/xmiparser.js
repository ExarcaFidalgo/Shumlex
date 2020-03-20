const xmlparser = require('xml2js');
const shexgen = require ("../shex/shexgen.js");

class XMIParser {

    constructor () {
        this.source = "";
    }

    parseXMI(xmi) {
        const self = this;
        let shExEquivalent = "";
        xmlparser.parseString(xmi, function (err, result) {
            self.source = result;
        });

        console.log(this.source);
        let packagedElements = this.source["uml:Model"]["packagedElement"];

        for(let i = 0; i < packagedElements.length; i++) {
            if(packagedElements[i]["$"]["xmi:type"] === "uml:Class") {
                shexgen.saveClass(packagedElements[i])
            }
        }

        for(let i = 0; i < packagedElements.length; i++) {
            if(packagedElements[i]["$"]["xmi:type"] === "uml:Class") {
                shExEquivalent += shexgen.createShExClass(packagedElements[i])
            }
        }

        shExEquivalent = shexgen.createShExHeader() + shExEquivalent;

        return shExEquivalent;
    }



}

module.exports = new XMIParser();