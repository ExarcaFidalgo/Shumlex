
const cyto = require('cytoscape');
let dagre = require('cytoscape-dagre');
const panzoom = require('cytoscape-panzoom');
cyto.use( dagre );
panzoom( cyto );
const IRIManager = require("../managers/irimanager.js");
const shexparser = require('../shex_util/ShExParser.js');

const irim = new IRIManager();

//ID actual
let id = 0;

/**
 * Devuelve el ID a asignar al nuevo elemento del grafo
 * @returns {number}
 */
function getID() {
    return ++id;
}

let labels = new Map();     //Almacena etiquetas
let andShs = new Map();    //Almacena las ShapeAnd existentes

/**
 * Crea un grafo mediante Cytoscape en el <div> "grafo"
 * @param data  Datos del grafo
 */
function generarGrafo(data) {
    let cy = cyto({

        container: document.getElementById('grafo'), // Contenedor

        elements: shExAGrafo(data),

        style: style,

        layout: {
            name: 'dagre',
            nodeSep: 60,
            edgeSep: 40,
            rankSep: 80
        }

    });
    cy.panzoom( defaults );
}

/**
 * Crea la información necesaria para generar un grafo a partir de un ShEx
 * @param text  ShEx
 * @returns {Array} Conjunto de nodos y asociaciones
 */
function shExAGrafo(text) {
    let elements = [];

    let source = shexparser.parseShEx(text);
    irim.createPrefixes(source.prefixes, source.base);

    //Guardamos las shapes y su ID para futuras asociaciones
    for (let shape in source.shapes) {
        if(source.shapes.hasOwnProperty(shape)) {
            irim.saveIri(shape, getID());
        }
    }
    console.log(source.shapes);

    for (let shape in source.shapes) {
        if (source.shapes.hasOwnProperty(shape)) {
            //Extraemos el ID generado anteriormente
            let id = irim.findIri(shape);
            let sh = source.shapes[shape];
            let shapeName = IRIManager.getShexTerm(irim.getPrefixedTermOfUri(shape));
            elements.push(createNode(id, shapeName));

            elements = elements.concat(checkClosed(sh, id));
            elements = elements.concat(checkExtra(sh, id));
            elements = elements.concat(checkNodeKind(sh, id, ""));

            if (sh.type === "ShapeAnd") {
                let nOfShapes = 0;
                //Contar el número de Shapes en la conjunción
                for (let i = 0; i < sh.shapeExprs.length; i++) {
                    if (sh.shapeExprs[i].type === "Shape") {
                        nOfShapes++;
                    }
                }
                for (let i = 0; i < sh.shapeExprs.length; i++) {
                    // Herencia - :User :Person AND {}
                    if (sh.shapeExprs[i].type === "ShapeRef") {
                        elements = elements.concat(createInheritance(sh.shapeExprs[i], id));
                    }
                    // Restricción tipo nodal - :User Literal AND
                    else if (sh.shapeExprs[i].type === "NodeConstraint") {
                        elements = elements.concat(createNodeKind(sh.shapeExprs[i], id,""));
                    }
                    //Conjunción de formas - :User { ... } AND { ... }
                    else {
                        let idMid = getID();
                        //Comprobar si hay solo una Shape, en cuyo caso no representaremos el AND,
                        // puesto que solo habría 1 hijo
                        if(nOfShapes > 1) {
                            let andAtr = andShs.get(shapeName);
                            if(!andAtr) {
                                andAtr = getID();
                                elements = elements.concat(createToNode(andAtr, 'AND', "", id));
                                andShs.set(shapeName, andAtr);
                            }
                            elements = elements.concat(createToNode(idMid, '', "", andAtr));
                        }

                        let expFather = nOfShapes > 1 ? idMid : id;

                        elements = elements.concat(checkClosed(sh.shapeExprs[i], expFather));
                        //Generar los elementos del grafo correspondientes a la expresión actual de la ShapeAnd
                        let ats = checkExpression(sh.shapeExprs[i].expression, expFather);
                        elements = elements.concat(ats);
                    }
                }
            }
            //No es ShapeAnd, sino Shape
            else {
                let ats = checkExpression(sh.expression, id);
                elements = elements.concat(ats);
            }
        }
    }
    console.log(elements);
    return elements;
}

/**
 * Comprueba si es una Shape CLOSED.
 * En caso afirmativo añade una asociación a un nodo CLOSED
 * @param shape Shape
 * @param id    ID padre
 * @returns {Array} Elementos del grafo generados
 */
function checkClosed(shape, id) {
    let elements = [];
    if (shape.closed) {
        let idn = getID();
        elements = elements.concat(createToNode(idn, "CLOSED", "", id));
    }
    return elements;
}

/**
 * Comprueba si es una Shape con EXTRA.
 * En caso afirmativo añade una asociación a un nodo EXTRA, cuyos hijos serán las respectivas URIs
 * @param shape Shape
 * @param id    ID padre
 * @returns {Array} Elementos del grafo generados
 */
function checkExtra(shape, id) {
    let elements = [];
    if (shape.extra) {
        let idn = getID();
        elements = elements.concat(createToNode(idn, "EXTRA", "", id));
        //Generamos los hijos de EXTRA: todas las URI del array extra
        for(let i = 0; i < shape.extra.length; i++) {
            elements = elements.concat(createToNode(getID(),
                IRIManager.getShexTerm(irim.getPrefixedTermOfUri(shape.extra[i])),
                "", idn));
        }
    }
    return elements;
}

/**
 * Comprueba si es una Shape con tipo de nodo - nodekind.
 * En caso afirmativo añade una asociación a un nodo con el nombre del nodekind - Literal, BNode...
 * @param shape Shape
 * @param id    ID padre
 * @param name    Nombre de la relación
 * @returns {Array} Elementos del grafo generados
 */
function checkNodeKind(shape, id, name) {
    let elements = [];
    if (shape.nodeKind !== undefined) {
        elements = elements.concat(createNodeKind(shape, id, name));
    }
    return elements;
}

/**
 * Añade una asociación a un nodo con el nombre del nodekind - Literal, BNode...
 * @param shape Shape
 * @param id    ID padre
 * @param name    Nombre de la relación
 * @returns {Array} Elementos del grafo generados
 */
function createNodeKind(shape, id, name) {
    let elements = [];
    let idn = getID();
    elements = elements.concat(createToNode(idn, IRIManager.checkNodeKind(shape.nodeKind), name, id));
    return elements;
}

/**
 * Crea una relación de herencia
 * @param shape Shape hija
 * @param id    ID del nodo correspondiente a la shape padre
 * @returns {Array} Elementos generados
 */
function createInheritance(shape, id){
    let elements = [];
    elements.push(createRelation("a", id, irim.findIri(shape.reference)));
    return elements;
}

/**
 * Comprueba una expresión. Según el tipo, genera distintos constructos en el grafo
 * @param expr  Expresión a analizar
 * @param father    ID del nodo correspondiente a la shape padre
 * @param dep   Profundidad, si aplica. En algunos casos hay recursividad y es necesario contabilizarla
 * para actuar en consecuencia: vease el checkEachOf.
 * @returns {*} Elementos del grafo generados
 */
function checkExpression(expr, father, dep) {
    //Si no se recibe profundidad como parámetro, estamos en el primer nivel
    let depth = dep ? dep : 1;
    console.log(expr);
    let attrs = [];
    //Si no hay expresión, no se genera nada
    if(!expr) {
        return attrs;
    }
    //Si existe un atributo id, se trata de una expresión etiquetada.
    else if(expr.id !== undefined) {
        attrs = attrs.concat(createLabel(expr, father, depth));
        return attrs;
    }
    //Si es un tipo Inclusion, se trata de una referencia a una expresión etiquetada.
    else if(expr.type === "Inclusion") {
        attrs = attrs.concat(createLabelRef(expr, father));
        return attrs;
    }
    //Una TripleConstraint alberga múltiples alternativas. Redigirimos a un método especializado.
    else if(expr.type === "TripleConstraint") {
        return determineTypeOfExpression(expr, father);
    }
    //Expresión OneOf.
    else if(expr.type === "OneOf") {
        attrs = attrs.concat(createOneOf(expr, father, depth));
        return attrs;
    }
    //Expresión EachOf.
    else if (expr.type === "EachOf") {
        attrs = attrs.concat(checkEachOf(expr, father, depth));
        return attrs;
    }
}

/**
 * Crea una representación de una expresión etiquetada.
 * @param expr  Expresión.
 * @param father    ID nodo padre.
 * @param depth Profundidad.
 * @returns {Array} Elementos del grafo generados.
 */
function createLabel(expr, father, depth) {
    let attrs = [];
    //La etiqueta de la expresión es el ID
    let label = irim.getPrefixedTermOfUri(expr.id);
    //La referencia se crea añadiendo $
    let labelRef = "$" + label;
    let id = getID();
    //Guardamos la etiqueta
    labels.set(label, id);
    //Creamos una relación a un nodo sin nombre, que abarca toda la expr. etiq. La relación lleva el nombre $<etiqueta>
    attrs = attrs.concat(createToNode(id, "", labelRef + ' ' + cardinalityOf(expr), father));
    let exp = expr;
    //Eliminamos el id para que no lo identifique como expresión etiquetada de nuevo
    exp.id = undefined;
    //Generamos los elementos de la expresión etiquetada, a partir del nodo anónimo anterior
    let ats = checkExpression(exp, id, depth + 1);
    attrs = attrs.concat(ats);
    return attrs;
}

/**
 * Genera una representación de referencia a expresión etiquetada
 * @param expr  Expresión
 * @param father    ID nodo padre
 * @returns {Array} Elementos del grafo generados
 */
function createLabelRef(expr, father) {
    let attrs = [];
    //Se crea relación entre el padre y el nodo anónimo que abarca la expresión etiquetada, cuyo id obtenemos
    // a partir de la etiqueta.
    //El nombre de la relación es &<etiqueta>
    attrs.push(createRelation('&' + irim.getPrefixedTermOfUri(expr.include) + ' ' + cardinalityOf(expr),
        father, labels.get(irim.getPrefixedTermOfUri(expr.include))));
    return attrs;
}

/**
 * Genera una representación de un OneOf
 * @param expr  Expresión
 * @param father    ID nodo padre
 * @param depth Profundidad
 * @returns {Array} Elementos del grafo generados
 */
function createOneOf(expr, father, depth) {
    let attrs = [];
    let id = getID();
    //Desde el padre, creamos relación "OneOf" a un nodo "expressions"
    attrs = attrs.concat(createToNode(id, 'expressions', 'OneOf ' + cardinalityOf(expr), father));
    //Los hijos de "expressions" será cada una de las expresiones del OneOf
    for(let attr in expr.expressions) {
        if(expr.expressions.hasOwnProperty(attr)) {
            //Generamos la representación correspondiente a cada una de estas expresiones, aumentando profundidad
            let ats = checkExpression(expr.expressions[attr], id, depth + 1);
            attrs = attrs.concat(ats);
        }
    }
    return attrs;
}

/**
 * Genera la representación de una expresión EachOf
 * @param expr Expresión
 * @param father    ID nodo padre
 * @param depth Profundidad
 * @returns {Array} Elementos del grafo generados
 */
function checkEachOf(expr, father, depth) {
    let attrs = [];
    //Creamos una relación EachOf desde el padre hasta un nodo "expressions":
    //Si la profundidad es mayor de 1 - Por ejemplo, es una de las expressiones de un OneOf.
    //Si tiene cardinalidad distinta de 1 - Empleamos el EachOf para indicar la cardinalidad del conjunto de sus expr.
    if(depth > 1 || expr.min !== undefined || expr.max !== undefined) {
        let id = getID();
        attrs = attrs.concat(createToNode(id, 'expressions', 'EachOf ' + cardinalityOf(expr), father));
        for(let attr in expr.expressions) {
            if(expr.expressions.hasOwnProperty(attr)) {
                //Generamos la representación de las expresiones del EachOf, siendo su padre el EachOf.
                let ats = checkExpression(expr.expressions[attr], id, depth + 1);
                attrs = attrs.concat(ats);
            }
        }
        return attrs;
    }
    //En caso contrario, se generan las expresiones del EachOf, sin crear nodo EachOf. El padre es el indicado por param
    else {
        for(let attr in expr.expressions) {
            if(expr.expressions.hasOwnProperty(attr)) {
                let ats = checkExpression(expr.expressions[attr], father);
                attrs = attrs.concat(ats);
            }
        }
        return attrs;
    }
}

/**
 * Representa una expresión de tipo TripleConstraint
 * @param expr  Expresión TripleConstraint
 * @param father    ID nodo padre
 * @param fname Nombre del nodo padre
 * @returns {Array} Elementos generados
 */
function determineTypeOfExpression(expr, father, fname) {
    let attrs = [];
    let inverse = (expr.inverse === true ? "^" : "");
    let name;

    if(expr.predicate) {
        name = inverse + IRIManager.getShexTerm(irim.getPrefixedTermOfUri(expr.predicate)) + cardinalityOf(expr);
    }

    if(!expr.valueExpr) {
        if(expr.type === "NodeConstraint") {
            attrs = attrs.concat(checkShapeAndExprs(expr, father, fname));
        }
        else {
            attrs = attrs.concat(createWildcard(name, father));
        }
        return attrs;
    }

    else if(expr.valueExpr.type === "NodeConstraint") {
        if(expr.predicate === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
            attrs = attrs.concat(createNCType(expr, father));
            return attrs;
        }
        if(expr.valueExpr.values) {
            attrs = attrs.concat(createEnumeration(expr, name, father));
            return attrs;
        }
        if(expr.valueExpr.nodeKind) {
            attrs = attrs.concat(createNodeKind(expr.valueExpr, father, name));
            return attrs;
        }
        if(expr.valueExpr.datatype) {
            attrs = attrs.concat(createDatatype(expr, name, father));
            return attrs;
        }
    }
    else if (expr.valueExpr.type === "ShapeRef") {
        attrs = attrs.concat(createShapeRef(expr, name, father));
        return attrs;
    }
    else if (expr.valueExpr.type === "Shape") {
        attrs = attrs.concat(createBlank(expr, name, father));
        return attrs;
    }
    else if (expr.valueExpr.type === "ShapeAnd") {
        attrs = attrs.concat(createShapeAnd(expr, father));
        return attrs;
    }
}

function checkShapeAndExprs(expr, father, fname) {
    let attrs = [];
    let andAtr = andShs.get(fname);
    if(!andAtr) {
        andAtr = getID();
        attrs = attrs.concat(createToNode(andAtr, 'AND', fname, father));
        andShs.set(fname, andAtr);
    }

    attrs = attrs.concat(createDatatype(expr, null, andAtr));
    return attrs;
}

function createWildcard(name, father) {
    let attrs = [];
    let id = getID();
    attrs = attrs.concat(createToNode(id, '.', name, father));
    return attrs;
}

function createNCType(expr, father) {
    let attrs = [];
    let target = irim.findIri(expr.valueExpr.values[0]);
    if(target === undefined) {
        target = expr.valueExpr.values[0];
        let id = getID();
        irim.saveIri(target, id);
        attrs.push(createNode(id, irim.getPrefixedTermOfUri(target)));
    }
    let inverse = (expr.inverse === true ? "^" : "");
    attrs.push(createRelation(inverse + "a", father, irim.findIri(expr.valueExpr.values[0])));
    return attrs;
}

function createEnumeration(expr, name, father) {
    let attrs = [];
    let idv = getID();
    attrs = attrs.concat(createToNode(idv, "values", name, father));
    for(let value in expr.valueExpr.values) {
        if(expr.valueExpr.values.hasOwnProperty(value)) {
            let vl = expr.valueExpr.values[value];
            let ide = getID();
            if(vl.value !== undefined) {
                attrs = attrs.concat(createToNode(ide, vl.value, "", idv));
            }
            else if(vl.type === "LiteralStem") {
                attrs = attrs.concat(createToNode(ide, "&quot;" + vl.stem + "&quot;" + "~", "", idv));
            }
            else if(vl.type === "IriStem") {
                attrs = attrs.concat(createToNode(ide,
                    IRIManager.getShexTerm(irim.getPrefixedTermOfUri(vl.stem)) + "~", "", idv));
            }
            else if(vl.type === "IriStemRange") {
                attrs = attrs.concat(checkStemRange(vl, ide, idv, "IriStem"));
            }
            else if(vl.type === "LiteralStemRange") {
                attrs = attrs.concat(checkStemRange(vl, ide, idv, "LiteralStem"));
            }
            else if(vl.type === "Language") {
                attrs = attrs.concat(createToNode(ide, "@" + vl.languageTag, "", idv));
            }
            else if(vl.type === "LanguageStem") {
                attrs = attrs.concat(createToNode(ide, "@" + vl.stem + "~ ", "", idv));
            }
            else if(vl.type === "LanguageStemRange") {
                attrs = attrs.concat(checkStemRange(vl, ide, idv, "LanguageStem"));
            } else {
                attrs = attrs.concat(createToNode(ide,
                    IRIManager.getShexTerm(irim.getPrefixedTermOfUri(vl)), "", idv));
            }
        }
    }
    return attrs;
}

function checkStemRange(vl, ide, idv, type) {
    let attrs = [];
    if(vl.stem.type === "Wildcard") {
        attrs = attrs.concat(createToNode(ide, ".", "", idv));
    }
    else {
        switch(type) {
            case "IriStem":
                attrs = attrs.concat(createToNode(ide,
                    IRIManager.getShexTerm(irim.getPrefixedTermOfUri(vl.stem)) + "~ ", "", idv));
                break;
            case "LiteralStem":
                attrs = attrs.concat(createToNode(ide,
                    vl.stem + "~ ", "", idv));
                break;
            case "LanguageStem":
                attrs = attrs.concat(createToNode(ide,
                    "@" + vl.stem + "~ ", "", idv));
                break;
        }
    }

    for(let k = 0; k < vl.exclusions.length; k++) {
        let excl = vl.exclusions[k];
        let idx = getID();
        if(excl.type === type) {
            switch(type) {
                case "IriStem":
                    attrs = attrs.concat(createToNode(idx,
                        IRIManager.getShexTerm(irim.getPrefixedTermOfUri(excl.stem)) + "~",
                        "-", ide));
                    break;
                case "LiteralStem":
                    attrs = attrs.concat(createToNode(idx, excl.stem + "~", "-", ide));
                    break;
                case "LanguageStem":
                    attrs.concat(createToNode(idx, "@" + excl.stem + "~", "-", ide));
                    break;
            }
        }
        else {
            switch(type) {
                case "IriStem":
                    attrs = attrs.concat(createToNode(idx, IRIManager.getShexTerm(irim.getPrefixedTermOfUri(excl))
                        , "-", ide));
                    break;
                case "LiteralStem":
                    attrs = attrs.concat(createToNode(idx, excl, "-", ide));
                    break;
                case "LanguageStem":
                    attrs = attrs.concat(createToNode(idx, "@" + excl, "-", ide));
                    break;
            }
        }
    }
    return attrs;
}

function createDatatype(expr, name, father) {
    let attrs = [];
    if(expr.valueExpr) {
        let id = getID();
        let facets = checkFacets(expr.valueExpr, id);
        attrs = attrs.concat(facets);
        attrs = attrs.concat(createToNode(id, irim.getPrefixedTermOfUri(expr.valueExpr.datatype), name, father));
    }
    else {
        let facets = checkFacets(expr, father);
        attrs = attrs.concat(facets);
        if(expr.datatype) {
            let idd = getID();
            attrs = attrs.concat(createToNode(idd, irim.getPrefixedTermOfUri(expr.datatype), "datatype", father));
        }
    }
    return attrs;
}

function createShapeRef(expr, name, father) {
    let attrs = [];
    if(expr.predicate === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
        attrs.push(createRelation("a", father, irim.findIri(expr.valueExpr.reference)));
        return attrs;
    }
    attrs.push(createRelation(name, father, irim.findIri(expr.valueExpr.reference)));
    return attrs;
}

function createBlank(expr, name, father) {
    let attrs = [];
    let id = getID();
    attrs = attrs.concat(createToNode(id, "", name, father));
    attrs = attrs.concat(checkExpression(expr.valueExpr.expression, id));
    return attrs;
}

function createShapeAnd(expr, father) {
    let attrs = [];

    for(let i = 0; i < expr.valueExpr.shapeExprs.length; i++) {
        attrs = attrs.concat(
            determineTypeOfExpression(expr.valueExpr.shapeExprs[i], father, irim.getPrefixedTermOfUri(expr.predicate)));
    }
    return attrs;
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
    let idf = getID();
    if(!vex) {
        return facets;
    }
    if(vex.mininclusive) {
        facets = facets.concat(createToNode(idf, vex.mininclusive, "MinInclusive", idn));
    }
    if(vex.minexclusive) {
        facets = facets.concat(createToNode(idf, vex.minexclusive, "MinExclusive", idn));
    }
    if(vex.totaldigits) {
        facets = facets.concat(createToNode(idf, vex.totaldigits, "TotalDigits", idn));
    }
    if(vex.fractiondigits) {
        facets = facets.concat(createToNode(idf, vex.fractiondigits, "FractionDigits", idn));
    }
    if(vex.length) {
        facets = facets.concat(createToNode(idf, vex.length, "Length", idn));
    }
    if(vex.minlength) {
        facets = facets.concat(createToNode(idf, vex.minlength, "MinLength", idn));
    }
    if(vex.maxlength) {
        facets = facets.concat(createToNode(idf, vex.maxlength, "MaxLength", idn));
    }
    if(vex.pattern) {
        facets = facets.concat(createToNode(idf, "/" + vex.pattern + "/", "Pattern", idn));
    }
    return facets;
}

function createToNode(id, nname, rname, source) {
    let attrs = [];
    attrs.push(createNode(id, nname));
    attrs.push(createRelation(rname, source, id));
    return attrs;
}

function createNode(id, nname) {
    return {data: { id: id, name: nname}};
}

function createRelation(rname, source, target) {
    return {data: { id: getID(), name: rname, source: source, target: target }};
}

let style = [ // the stylesheet for the graph
    {
        selector: 'node',
        style: {
            'background-color': 'purple',
            'background-opacity': '0.1',
            'label': 'data(name)',
            'text-valign': 'center',
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
];

let defaults = {
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
exports.generarGrafo = generarGrafo;