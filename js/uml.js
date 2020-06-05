const plantumlEncoder = require('plantuml-encoder');
const $ = require('./jquery-3.4.1.min.js');

const IRIManager = require("../managers/irimanager.js");
const xmiparser = require('../xmi_util/XMIParser.js');
const irim = new IRIManager();

const ShExCardinality = require("../shex_util/shexgen/ShExCardinality.js");

let classes = new Map();
let types = new Map();
let enums = new Map();
let constraints = new Map();


function generarUML(xmi) {
    let puml = generarCodigoPUML(xmi);
    let encoded = plantumlEncoder.encode(puml);
    $('#umlimg').attr("src", "http://www.plantuml.com/plantuml/img/" + encoded);
}

function generarCodigoPUML(xmi) {
    let puml = "@startuml\n";

    puml += parseXMIToPUML(xmi);
    puml += "@enduml";
    return puml;
}

function parseXMIToPUML(xmi) {
    let pumlEquivalent = "";

    let source = xmiparser.parseXMI(xmi);
    console.log(source);

    let ownedRules = source["uml:Model"]["ownedRule"];
    if(ownedRules !== undefined) {
        for (let i = 0; i < ownedRules.length; i++) {
            if(constraints.get(ownedRules[i].$.constrainedElement) === undefined) {
                constraints.set(ownedRules[i].$.constrainedElement, ownedRules[i].$.name);
            }
            else {
                constraints.set(ownedRules[i].$.constrainedElement, constraints.get(ownedRules[i].$.constrainedElement) + " "
                    +ownedRules[i].$.name);
            }
        }
    }

    let packagedElements = source["uml:Model"]["packagedElement"];

    try {
        for (let i = 0; i < packagedElements.length; i++) {
            if (packagedElements[i]["$"]["xmi:type"] === "uml:Class") {
                let cn = constraints.get(packagedElements[i].$["xmi:id"]);
                let name = packagedElements[i].$.name + (cn === undefined ? "" : " " + cn) ;
                classes.set(packagedElements[i]["$"]["xmi:id"], name);
            } else if (packagedElements[i]["$"]["xmi:type"] === "uml:PrimitiveType") {
                types.set(packagedElements[i]["$"]["xmi:id"], packagedElements[i].$.name);
            } else if (packagedElements[i]["$"]["xmi:type"] === "uml:Enumeration" &&
                packagedElements[i]["$"]["name"] === "Prefixes") {
                enums.set(packagedElements[i]["$"]["xmi:id"], packagedElements[i].$.name);
                pumlEquivalent += "enum " + packagedElements[i].$.name + " {\n";
                for (let j = 0; j < packagedElements[i].ownedLiteral.length; j++) {
                    pumlEquivalent += packagedElements[i].ownedLiteral[j].$.name + "\n";
                }
                pumlEquivalent += "} \n";

            } else if (packagedElements[i]["$"]["xmi:type"] === "uml:Enumeration") {
                enums.set(packagedElements[i]["$"]["xmi:id"], packagedElements[i].$.name);
                pumlEquivalent += "enum " + packagedElements[i].$.name + " {\n";
                for (let j = 0; j < packagedElements[i].ownedLiteral.length; j++) {
                    pumlEquivalent += packagedElements[i].ownedLiteral[j].$.name + "\n";
                }
                pumlEquivalent += "} \n";
            }
        }

        for (let i = 0; i < packagedElements.length; i++) {
            if (packagedElements[i]["$"]["xmi:type"] === "uml:Class") {
                pumlEquivalent += createUMLClass(packagedElements[i])
            }
        }


    } catch (ex) {
        console.log(ex);
        alert("Se ha producido un error durante la generación de UML.\n" +
            "El XMI está bien formado, pero faltan elementos o atributos clave para la generación.\n"
            + ex);
        return;
    }

    return pumlEquivalent;
}

function createUMLClass(element) {

    let cn = constraints.get(element.$["xmi:id"]);
    let name = "\"" + element.$.name + (cn === undefined ? "" : " " + cn) + "\"";
    let clase = "class " + name + "\n";

    if(element.generalization) {
        for(let i = 0; i < element.generalization.length; i++) {
            clase += "\"" + classes.get(element.generalization[i].$.general) + "\" <|-- " + name + "\n";
        }

    }

    let attributes = element.ownedAttribute;
    if(!attributes) {
        attributes = [];
    }

    clase += createUMLAttributes(attributes, name);

    return clase;
}

function createUMLAttributes(ats, name) {
    let content = "";
    for(let i = 0; i < ats.length; i++) {
        if(ats[i].$.association) {
            content += createUMLAsoc(ats[i], name);
        }
        else if(ats[i].$.name.toLowerCase() === "nodekind") {
            let kind = types.get(ats[i].$.type);
            content += name + " : " + "nodeKind: " + kind + " \n";
        }
        else {
            content += createUMLBasicAt(ats[i], name);
        }


    }
    return content;
}

function createUMLAsoc(at, name) {

    let card = ShExCardinality.cardinalityOf(at);
    let ccard = card === "" ? "" : "\"" + card + "\"";

    return name + " --> " + ccard + " \""
        + classes.get(at.$.type) + "\" : \"" + at.$.name + "\"\n";
}

function createUMLBasicAt(at, name) {

    let card = ShExCardinality.cardinalityOf(at);

    let cn = constraints.get(at.$["xmi:id"]);

    return name + " : " + at.$.name + " " + getType(at) + " " + card
        + (cn === undefined ? "" : cn) + " \n";
}

function getType(attr) {
        if(attr.type) {
            let href = attr.type[0].$.href.split("#");
            if(href[0] === "pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml") {
                return irim.findXSDPrefix() + href[1].substring(0,1).toLowerCase() + href[1].substring(1);
            } else {
                return href.pop();
            }

        }
        else if (attr.$.type) {
            let enumer = enums.get(attr.$.type);
            if(enumer) {
                return enumer;
            }
            return types.get(attr.$.type);
        }
        return ".";
}

exports.generarUML = generarUML;