const plantumlEncoder = require('../modules/plantuml-encoder');
const $ = require('jquery');

const IRIManager = require("../managers/IRIManager.js");
const xmiparser = require('../xmi_util/XMIParser.js');
const irim = new IRIManager();

const ShExCardinality = require("../shex_util/shexgen/ShExCardinality.js");

let classes = new Map();
let types = new Map();
let enums = new Map();
let constraints = new Map();

/**
 * Asigna a la imagen reservada el enlace del plantuml generado
 * @param xmi   XMI empleado para generar UML
 */
function generarUML(xmi) {
    let puml = generarCodigoPUML(xmi);
    let encoded = plantumlEncoder.encode(puml);
    let img = $('#umlimg');
    img.attr("src", "http://www.plantuml.com/plantuml/img/" + encoded);
}

/**
 * Genera el código PlantUML
 * @param xmi   XMI fuente
 * @returns {string}    En formato PUML
 */
function generarCodigoPUML(xmi) {
    let puml = "@startuml\n";
    puml += parseXMIToPUML(xmi);
    puml += "@enduml";
    return puml;
}

/**
 * Parsea el valor XMI a código PUML
 * @param xmi   XMI a parsear
 * @returns {string}
 */
function parseXMIToPUML(xmi) {
    let pumlEquivalent = "";

    let source = xmiparser.parseXMI(xmi);
    //console.log(source);

    let ownedRules = source["uml:Model"]["ownedRule"];
    //Guardar en constraints las restricciones
    if(ownedRules !== undefined) {
        for (let i = 0; i < ownedRules.length; i++) {
            let o = ownedRules[i].$;
            if(constraints.get(o.constrainedElement) === undefined) {
                constraints.set(o.constrainedElement, o.name);
            }
            else {
                constraints.set(o.constrainedElement, constraints.get(o.constrainedElement) + " "
                    + o.name);
            }
        }
    }

    let packagedElements = source["uml:Model"]["packagedElement"];

    try {
        //Revisar cada PackagedElement
        for (let i = 0; i < packagedElements.length; i++) {
            let pe = packagedElements[i]["$"];
            let type = pe["xmi:type"];
            let name = pe.name;
            let id = pe["xmi:id"];
            //Guardamos las clases para futuras referencias
            if (type === "uml:Class") {
                let cn = constraints.get(id);
                name = name + (cn === undefined ? "" : " " + cn) ;
                classes.set(id, name);
            }
            //Guardamos los tipos
            else if (type === "uml:PrimitiveType") {
                types.set(id, name);
            }
            //Guardamos los prefijos
            else if (type === "uml:Enumeration" &&
                name === "Prefixes") {
                enums.set(id, name);
                //Generamos la enumeración que contiene los prefijos
                pumlEquivalent += "enum " + name + " {\n";
                for (let j = 0; j < packagedElements[i].ownedLiteral.length; j++) {
                    pumlEquivalent +=  packagedElements[i].ownedLiteral[j].$.name + "\n";
                }
                pumlEquivalent += "} \n";

            }
            //Generamos las enumeraciones corrientes
            else if (type === "uml:Enumeration") {
                enums.set(id, name);
                pumlEquivalent += "enum \"" + name + "\" {\n";
                for (let j = 0; j < packagedElements[i].ownedLiteral.length; j++) {
                    pumlEquivalent += packagedElements[i].ownedLiteral[j].$.name + "\n";
                }
                pumlEquivalent += "} \n";
            }
        }

        //Generamos las clases y su contenido
        for (let i = 0; i < packagedElements.length; i++) {
            if (packagedElements[i]["$"]["xmi:type"] === "uml:Class") {
                pumlEquivalent += createUMLClass(packagedElements[i])
            }
        }

    } catch (ex) {
        alert("Se ha producido un error durante la generación de UML.\n" +
            "El XMI está bien formado, pero faltan elementos o atributos clave para la generación.\n"
            + ex);
        return "";
    }

    return pumlEquivalent;
}

/**
 * Crea una clase en PUML
 * @param element   Clase
 * @returns {string}
 */
function createUMLClass(element) {

    //Extraemos las restricciones y se las asignamos al nombre, si existen
    let cn = constraints.get(element.$["xmi:id"]);
    let name = "\"" + element.$.name + (cn === undefined ? "" : " " + cn) + "\"";
    let clase = "class " + name + "\n";

    //Relaciones de herencia
    if(element.generalization) {
        for(let i = 0; i < element.generalization.length; i++) {
            let hename = element.generalization[i].$.name !== undefined ?
                ("\"" + element.generalization[i].$.name + "\"") : "";
            clase += "\"" + classes.get(element.generalization[i].$.general) + "\" <|-- " + name
                + " : " + hename + "\n";
        }
    }

    let attributes = element.ownedAttribute;
    if(!attributes) {
        attributes = [];
    }

    //Generamos los atributos de la clase
    clase += createUMLAttributes(attributes, name);

    return clase;
}

/**
 * Crea los atributos de una clase en PUML
 * @param ats   Atributos
 * @param name  Nombre de la clase
 * @returns {string}    Listado de atributos
 */
function createUMLAttributes(ats, name) {
    let content = "";
    for(let i = 0; i < ats.length; i++) {
        //Asociación entre clases
        if(ats[i].$.association) {
            content += createUMLAsoc(ats[i], name);
        }
        //Restricción de tipo de nodo
        else if(ats[i].$.name.toLowerCase() === "nodekind") {
            let kind = types.get(ats[i].$.type);
            content += name + " : " + "nodeKind: " + kind + " \n";
        }
        //Atributo común
        else {
            content += createUMLBasicAt(ats[i], name);
        }
    }
    return content;
}

/**
 * Crea una asociación en PUML
 * @param at    Atributo
 * @param name  Nombre de la clase
 * @returns {string}    Asociación en PUML
 */
function createUMLAsoc(at, name) {

    //Obtenemos la cardinalidad de la asociación
    let card = ShExCardinality.cardinalityOf(at);
    let ccard = card === "" ? "" : "\"" + card + "\"";

    let relation = " --> ";
    if(at.$.aggregation === "composite") {
        relation = " *-- ";
    }

    //at.$.type indica el nombre de la clase
    //at.$.name indica el nombre de la relación
    return name + relation + ccard + " \""
        + classes.get(at.$.type) + "\" : \"" + at.$.name + "\"\n";
}

/**
 * Crea un atributo básico en UML
 * Formato <clase> : <atributo>
 * @param at    Atributo
 * @param name  Nombre
 * @returns {string}    Atributo en PUML
 */
function createUMLBasicAt(at, name) {

    let card = ShExCardinality.cardinalityOf(at);
    let cn = constraints.get(at.$["xmi:id"]);

    return name + " : " + at.$.name + " " + getType(at) + " " + card
        + (cn === undefined ? "" : cn) + " \n";
}

/**
 * Extrae el tipo de un atributo
 * @param attr  Atributo
 * @returns {*} Tipo
 */
function getType(attr) {
        if(attr.type) {
            let href = attr.type[0].$.href.split("#");
            //Tipo XSD
            if(href[0] === "pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml") {
                return irim.findXSDPrefix() + href[1].substring(0,1).toLowerCase() + href[1].substring(1);
            }
            //Otro
            else {
                return href.pop();
            }
        }
        else if (attr.$.type) {
            let enumer = enums.get(attr.$.type);
            //Tipo enumeración
            if(enumer) {
                return enumer;
            }
            return types.get(attr.$.type);
        }
        return ".";
}

//Tamaño completo

$('#fullSize').click(fullSize);

/**
 * Abre la imagen
 */
function fullSize() {
    let src = $('#umlimg').attr("src");
    if(src) {
        window.location = src;
    }

}

exports.generarUML = generarUML;