
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
    console.log(source.shapes);
    for (let shape in source.shapes){
        if(source.shapes.hasOwnProperty(shape)) {
            let id = irim.findIri(shape);
            elements.push({ // node a
                data: { id: id, name: irim.getPrefixedTermOfUri(shape) }
            });

            if( source.shapes[shape].nodeKind !== undefined) {
                let idn = getID();
                elements.push({ // node a
                    data: { id: idn, name: source.shapes[shape].nodeKind }
                });
                elements.push({data: { id: getID(), name: "a", source: id,
                        target: idn }});
            }

            if(source.shapes[shape].type === "ShapeAnd") {
                let exprsForGen = [];
                for (let i = 0; i < source.shapes[shape].shapeExprs.length; i++) {
                    if(source.shapes[shape].shapeExprs[i].type === "ShapeRef") { // Herencia - :User :Person AND {}
                        elements.push({data: { id: getID(), name: "a", source: id,
                                target: irim.findIri(source.shapes[shape].shapeExprs[i].reference) }});
                    }
                    else if(source.shapes[shape].shapeExprs[i].type === "NodeConstraint") {
                        let idn = getID();
                        elements.push({ // node a
                            data: { id: idn, name: source.shapes[shape].shapeExprs[i].nodeKind }
                        });
                        elements.push({data: { id: getID(), name: "a", source: id,
                                target: idn }});
                    }
                    else {  //Conjunción de formas - :User { ... } AND { ... }
                        let ats = checkExpression(source.shapes[shape].shapeExprs[i].expression, id);
                        for(let i = 0; i < ats.length; i++) {
                            elements.push(ats[i]);
                        }
                    }
                }
            } else {
                let ats = checkExpression(source.shapes[shape].expression, id);
                for(let i = 0; i < ats.length; i++) {
                    elements.push(ats[i]);
                }
            }

        }
    }
    console.log(elements);
    return elements;
}

function checkExpression(expr, father) {
    console.log(expr);
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
            let idv = getID();
            attrs.push({data: { id: idv, name: "values"}});
            attrs.push({data: { id: getID(), name: irim.getPrefixedTermOfUri(name), source: father, target: idv }});
            for(let value in expr.valueExpr.values) {
                if(expr.valueExpr.values.hasOwnProperty(value)) {
                if(expr.valueExpr.values[value].value !== undefined) {
                    let ide = getID();
                    attrs.push({data: { id: ide, name: expr.valueExpr.values[value].value}});
                    attrs.push({data: { id: getID(), name: "", source: idv, target: ide }});
                }
                else if(expr.valueExpr.values[value].type === "LiteralStem") {
                    let ide = getID();
                    attrs.push({data: { id: ide, name: "&quot;" + expr.valueExpr.values[value].stem + "&quot;" + "~"}});
                    attrs.push({data: { id: getID(), name: "", source: idv, target: ide }});
                }
                else if(expr.valueExpr.values[value].type === "IriStem") {
                    let ide = getID();
                    attrs.push({data: { id: ide, name: irim.getPrefixedTermOfUri(expr.valueExpr.values[value].stem) + "~"}});
                    attrs.push({data: { id: getID(), name: "", source: idv, target: ide }});
                }
                else if(expr.valueExpr.values[value].type === "IriStemRange") {
                    let ide = getID();
                    if(expr.valueExpr.values[value].stem.type === "Wildcard") {
                        attrs.push({data: { id: ide, name: "."}});
                    }
                    else {
                        attrs.push({data: { id: ide, name: irim.getPrefixedTermOfUri(expr.valueExpr.values[value].stem) + "~ "}});
                    }
                    attrs.push({data: { id: getID(), name: "", source: idv, target: ide }});

                    for(let k = 0; k < expr.valueExpr.values[value].exclusions.length; k++) {
                        let excl = expr.valueExpr.values[value].exclusions[k];
                        let idx = getID();
                        if(excl.type === "IriStem") {
                            attrs.push({data: { id: idx, name: irim.getPrefixedTermOfUri(excl.stem) + "~"}});
                        }
                        else {
                            attrs.push({data: { id: idx, name: irim.getPrefixedTermOfUri(excl)}});
                        }
                        attrs.push({data: { id: getID(), name: "-", source: ide, target: idx }});
                    }
                }
                else if(expr.valueExpr.values[value].type === "LiteralStemRange") {
                    let ide = getID();
                    if(expr.valueExpr.values[value].stem.type === "Wildcard") {
                        attrs.push({data: { id: ide, name: "."}});
                    }
                    else {
                        attrs.push({data: { id: ide, name: expr.valueExpr.values[value].stem + "~ "}});
                    }
                    attrs.push({data: { id: getID(), name: "", source: idv, target: ide }});

                    for(let k = 0; k < expr.valueExpr.values[value].exclusions.length; k++) {
                        let excl = expr.valueExpr.values[value].exclusions[k];
                        let idx = getID();
                        if(excl.type === "LiteralStem") {
                            attrs.push({data: { id: idx, name: excl.stem + "~"}});
                        }
                        else {
                            attrs.push({data: { id: idx, name: excl}});
                        }
                        attrs.push({data: { id: getID(), name: "-", source: ide, target: idx }});
                    }
                }
                else if(expr.valueExpr.values[value].type === "Language") {
                    let ide = getID();
                    attrs.push({data: { id: ide, name: "@" + expr.valueExpr.values[value].languageTag}});
                    attrs.push({data: { id: getID(), name: "", source: idv, target: ide }});
                }
                else if(expr.valueExpr.values[value].type === "LanguageStem") {
                    let ide = getID();
                    attrs.push({data: { id: ide, name: "@" + expr.valueExpr.values[value].stem + "~ "}});
                    attrs.push({data: { id: getID(), name: "", source: idv, target: ide }});
                }
                else if(expr.valueExpr.values[value].type === "LanguageStemRange") {
                    let ide = getID();
                    if(expr.valueExpr.values[value].stem.type === "Wildcard") {
                        attrs.push({data: { id: ide, name: "."}});
                    }
                    else {
                        attrs.push({data: { id: ide, name: "@" + expr.valueExpr.values[value].stem + "~ "}});
                    }
                    attrs.push({data: { id: getID(), name: "", source: idv, target: ide }});

                    for(let k = 0; k < expr.valueExpr.values[value].exclusions.length; k++) {
                        let excl = expr.valueExpr.values[value].exclusions[k];
                        let idx = getID();
                        if(excl.type === "LanguageStem") {
                            attrs.push({data: { id: idx, name: "@" + excl.stem + "~"}});
                        }
                        else {
                            attrs.push({data: { id: idx, name: "@" + excl}});
                        }
                        attrs.push({data: { id: getID(), name: "-", source: ide, target: idx }});
                    }
                }

            }


        }
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
            let facets = checkFacets(expr.valueExpr, id);
            attrs = attrs.concat(facets);
            attrs.push({data: { id: id, name: irim.getPrefixedTermOfUri(expr.valueExpr.datatype)}});
            attrs.push({data: { id: getID(), name: irim.getPrefixedTermOfUri(name), source: father, target: id }});
            return attrs;
        }
    }
    else if (expr.valueExpr.type === "ShapeRef") {
        if(expr.predicate === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
            attrs.push({data: { id: getID(), name: "a", source: father, target: irim.findIri(expr.valueExpr.reference) }});
            return attrs;
        }
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
        let and = [];

        for(let i = 0; i < expr.valueExpr.shapeExprs.length; i++) {
            and = determineTypeOfExpression(expr.valueExpr.shapeExprs[i], father);
            for(let j = 0; j < and.length; j++) {
                attrs.push(and[j]);
            }
        }
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

function checkFacets(vex, idn) {
    let facets = [];
    if(!vex) {
        return facets;
    }
    if(vex.mininclusive) {
        let idf = getID();
        facets.push({ // node a
            data: { id: idf, name: vex.mininclusive}
        });
        facets.push({data: { id: getID(), name: "MinInclusive", source: idn,
                target: idf }});
    }
    if(vex.minexclusive) {
        let idf = getID();
        facets.push({ // node a
            data: { id: idf, name: vex.minexclusive}
        });
        facets.push({data: { id: getID(), name: "MinExclusive", source: idn,
                target: idf }});
    }
    if(vex.totaldigits) {
        let idf = getID();
        facets.push({ // node a
            data: { id: idf, name: vex.totaldigits}
        });
        facets.push({data: { id: getID(), name: "TotalDigits", source: idn,
                target: idf }});
    }
    if(vex.fractiondigits) {
        let idf = getID();
        facets.push({ // node a
            data: { id: idf, name: vex.fractiondigits}
        });
        facets.push({data: { id: getID(), name: "FractionDigits", source: idn,
                target: idf }});
    }
    if(vex.length) {
        let idf = getID();
        facets.push({ // node a
            data: { id: idf, name: vex.length}
        });
        facets.push({data: { id: getID(), name: "Length", source: idn,
                target: idf }});
    }
    if(vex.minlength) {
        let idf = getID();
        facets.push({ // node a
            data: { id: idf, name: vex.minlength}
        });
        facets.push({data: { id: getID(), name: "MinLength", source: idn,
                target: idf }});
    }
    if(vex.maxlength) {
        let idf = getID();
        facets.push({ // node a
            data: { id: idf, name: vex.maxlength}
        });
        facets.push({data: { id: getID(), name: "MaxLength", source: idn,
                target: idf }});
    }
    if(vex.pattern) {
        let idf = getID();
        facets.push({ // node a
            data: { id: idf, name: "/" + vex.pattern + "/"}
        });
        facets.push({data: { id: getID(), name: "Pattern", source: idn,
                target: idf }});
    }
    return facets;
}

exports.generarGrafo = generarGrafo;