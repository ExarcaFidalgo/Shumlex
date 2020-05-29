
const $ = require('./jquery-3.4.1.min.js');
const cyto = require('cytoscape');
let dagre = require('cytoscape-dagre');
const panzoom = require('cytoscape-panzoom');
cyto.use( dagre );
panzoom( cyto );
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
            name: 'dagre',
            nodeSep: 60,
            edgeSep: 40,
            rankSep: 80
        }

    });
    var defaults = {
        zoomFactor: 0.05, // zoom factor per zoom tick
        zoomDelay: 45, // how many ms between zoom ticks
        minZoom: 0.1, // min zoom level
        maxZoom: 10, // max zoom level
        fitPadding: 50, // padding when fitting
        panSpeed: 10, // how many ms in between pan ticks
        panDistance: 10, // max pan distance per tick
        panDragAreaSize: 75, // the length of the pan drag box in which the vector for panning is calculated (bigger = finer control of pan speed and direction)
        panMinPercentSpeed: 0.25, // the slowest speed we can pan by (as a percent of panSpeed)
        panInactiveArea: 8, // radius of inactive area in pan drag box
        panIndicatorMinOpacity: 0.5, // min opacity of pan indicator (the draggable nib); scales from this to 1.0
        zoomOnly: false, // a minimal version of the ui only with zooming (useful on systems with bad mousewheel resolution)
        fitSelector: undefined, // selector of elements to fit
        animateOnFit: function(){ // whether to animate on fit
            return false;
        },
        fitAnimationDuration: 1000, // duration of animation on fit

        // icon class names
        sliderHandleIcon: 'fa fa-minus',
        zoomInIcon: 'fa fa-plus',
        zoomOutIcon: 'fa fa-minus',
        resetIcon: 'fa fa-expand'
    };

// add the panzoom control
    cy.panzoom( defaults );
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
    let name = inverse + expr.predicate + cardinalityOf(expr);

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

function cardinalityOf(attr) {
    //TODO: Comprobar validez de las cardinalidades
    let lowerValue = attr.min !== undefined ? attr.min : 1;
    let upperValue = attr.max !== undefined ? attr.max : 1;
    switch(lowerValue){
        case 1:
            if(upperValue === 1) {
                return ""
            }
            else if (upperValue === -1) {
                return " +"
            }
            else {
                return " {1," + upperValue + "}"
            }
        case 0:
            if(upperValue === 1) {
                return " ?"
            }
            else if (upperValue === -1) {
                return " *"
            }
            else {
                return " {0, " + upperValue + "}"
            }
        default:
            if(upperValue === lowerValue) {
                return " {" + lowerValue + "}"
            }
            else if (upperValue === -1) {
                return " {" + lowerValue + ",}"
            }
            else {
                return " {" + lowerValue + ", " + upperValue + "}"
            }
    }
}

exports.generarGrafo = generarGrafo;