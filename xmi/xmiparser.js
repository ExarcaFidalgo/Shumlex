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
            if(err) {
                alert("Error al parsear XMI:\n" + err.toString().replace("Error: ", ""));
            }
        });

        console.log(this.source);
        if(!this.source) {
            return;
        }
        let packagedElements = this.source["uml:Model"]["packagedElement"];

        try {
            for (let i = 0; i < packagedElements.length; i++) {
                if (packagedElements[i]["$"]["xmi:type"] === "uml:Class") {
                    shexgen.saveClass(packagedElements[i])
                } else if (packagedElements[i]["$"]["xmi:type"] === "uml:PrimitiveType") {
                    shexgen.saveType(packagedElements[i])
                } else if (packagedElements[i]["$"]["xmi:type"] === "uml:Enumeration" &&
                    packagedElements[i]["$"]["name"] === "Prefixes") {
                    shexgen.savePrefixes(packagedElements[i])
                }
            }

            for (let i = 0; i < packagedElements.length; i++) {
                if (packagedElements[i]["$"]["xmi:type"] === "uml:Class") {
                    shExEquivalent += shexgen.createShExClass(packagedElements[i])
                }
            }

            shExEquivalent = shexgen.createShExHeader() + shExEquivalent;

        } catch (ex) {
            alert("Se ha producido un error durante la generación de las Shape Expressions.\n" +
                "El XMI está bien formado, pero faltan elementos o atributos clave para la generación.\n"
                + ex);
            return;
        }

        return shExEquivalent;
    }



}

module.exports = new XMIParser();