
const $ = require('./jquery-3.4.1.min.js');
const cyto = require('cytoscape');
let dagre = require('cytoscape-dagre');
cyto.use( dagre );
const IRIManager = require("../schema/irimanager.js");
const shexparser = require('../shex/ShExParser.js');
const ShapeManager = require("../xmi/ShapeManager.js");

const shm = new ShapeManager();
const irim = new IRIManager();

let id = 0;

function getID() {
    return ++id;
}

function generarGrafo(data) {
    let cy = cyto({

        container: document.getElementById('grafo'), // container to render in

        elements: shExAGrafo(data),

        style: [ // the stylesheet for the graph
            {
                selector: 'node',
                style: {
                    'background-color': 'purple',
                    'label': 'data(name)',
                    'font-family': 'CaslonAntique'
                }
            },

            {
                selector: 'edge',
                style: {
                    'width': 3,
                    'line-color': '#ccc',
                    'target-arrow-color': '#ccc',
                    'target-arrow-shape': 'triangle',
                    'curve-style': 'bezier',
                    'label': 'data(name)',
                    'font-family': 'CaslonAntique'
                }
            }
        ],

        layout: {
            name: 'dagre'
        }

    });
}

function shExAGrafo(text) {
    let elements = [];

    let source = shexparser.parseShEx(text);
    irim.createPrefixes(source.prefixes, source.base);

    for (let shape in source.shapes){
        irim.saveIri(shape, getID());
    }

    for (let shape in source.shapes){
        if(source.shapes.hasOwnProperty(shape)) {
            let id = irim.findIri(shape);
            elements.push({ // node a
                data: { id: id, name: irim.getPrefixedTermOfUri(shape) }
            });

            let ats = checkExpression(source.shapes[shape].expression, id);
            for(let i = 0; i < ats.length; i++) {
                elements.push(ats[i]);
            }

            //data: { id: 'ab', source: 'a', target: 'b' }
        }
    }
    console.log(elements);
    return elements;
}

function checkExpression(expr, father) {
    let attrs = [];
    if(!expr) {
        return attrs;
    }
    else if(expr.id !== undefined) {
        return attrs;
    }
    else if(expr.type === "Inclusion") {
        return attrs;
    }
    else if(expr.type === "TripleConstraint") {
        return determineTypeOfExpression(expr, father);
    }
    else if(expr.type === "OneOf") {
        return attrs;
    }
    else if (expr.type === "EachOf") {
        if( this.depth > 0 || expr.min !== undefined || expr.max !== undefined) {
            return attrs;
        }
        else {
            for(let attr in expr.expressions) {
                let ats = checkExpression(expr.expressions[attr], father);
                for(let i = 0; i < ats.length; i++) {
                    attrs.push(ats[i]);
                }
            }
            return attrs;
        }

    }
}

function determineTypeOfExpression(expr, father) {

    let attrs = [];

    let inverse = (expr.inverse === true ? "^" : "");
    let name = inverse + expr.predicate;

    if(!expr.valueExpr) {
        let id = getID();
        attrs.push({data: { id: id, name: '.'}});
        attrs.push({data: { id: getID(), name: irim.getPrefixedTermOfUri(name), source: father, target: id }});
        return attrs;
    }
    else if(expr.valueExpr.type === "NodeConstraint") {
        if(expr.predicate === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
            attrs.push({data: { id: getID(), name: "a", source: father, target: irim.findIri(expr.valueExpr.values[0]) }});
            return attrs;
        }
        if(expr.valueExpr.values) {
            let prvalues = "";
            for(let value in expr.valueExpr.values) {
                prvalues += irim.getPrefixedTermOfUri(expr.valueExpr.values[value]) + "; ";
            }
            let id = getID();
            attrs.push({data: { id: id, name: prvalues}});
            attrs.push({data: { id: getID(), name: irim.getPrefixedTermOfUri(name), source: father, target: id }});
            return attrs;
        }
        if(expr.valueExpr.nodeKind) {
            let id = getID();
            attrs.push({data: { id: id, name: expr.valueExpr.nodeKind}});
            attrs.push({data: { id: getID(), name: irim.getPrefixedTermOfUri(name), source: father, target: id }});
            return attrs;
        }
        if(expr.valueExpr.datatype) {
            let id = getID();
            attrs.push({data: { id: id, name: irim.getPrefixedTermOfUri(expr.valueExpr.datatype)}});
            attrs.push({data: { id: getID(), name: irim.getPrefixedTermOfUri(name), source: father, target: id }});
            return attrs;
        }
    }
    else if (expr.valueExpr.type === "ShapeRef") {
        attrs.push({data: { id: getID(), name: irim.getPrefixedTermOfUri(name), source: father, target: irim.findIri(expr.valueExpr.reference) }});
        return attrs;
    }
    else if (expr.valueExpr.type === "Shape") {
        shm.incrementBlank();
        let ref = "_:" + shm.getCurrentBlank();
        attrs.push({data: { id: ref}});
        attrs.push({data: { id: getID(), name: irim.getPrefixedTermOfUri(name), source: father, target: ref }});
        return attrs;
    }
    else if (expr.valueExpr.type === "ShapeAnd") {
        return attrs;
    }
}
exports.generarGrafo = generarGrafo;