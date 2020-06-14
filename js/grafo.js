
const cyto = require('cytoscape');
let dagre = require('cytoscape-dagre');
const panzoom = require('cytoscape-panzoom');
cyto.use( dagre );
panzoom( cyto );
const IRIManager = require("../managers/IRIManager.js");
const shexparser = require('../shex_util/ShExParser.js');
const shExCardinality = require('../shex_util/shexgen/ShExCardinality.js');

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

let lop = "";   //Operación lógica, si existe

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

function getShExTerm(term) {
    let tm = IRIManager.getShexTerm(term);
    return tm.replace("&lt;", "<").replace("&gt;", ">");
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
    //console.log(source.shapes);

    for (let shape in source.shapes) {
        if (source.shapes.hasOwnProperty(shape)) {
            //Extraemos el ID generado anteriormente
            let id = irim.findIri(shape);
            let sh = source.shapes[shape];
            let shapeName = getShExTerm(irim.getPrefixedTermOfIRI(shape));
            elements.push(createNode(id, shapeName));

            elements = elements.concat(checkClosed(sh, id));
            elements = elements.concat(checkExtra(sh, id));
            elements = elements.concat(checkNodeKind(sh, id, ""));

            if (sh.type === "ShapeAnd" || sh.type === "ShapeOr") {
                if (sh.type === "ShapeAnd") {
                    lop = "AND"
                }
                if (sh.type === "ShapeOr") {
                    lop = "OR"
                }
                let nOfShapes = 0;
                //Contar el número de Shapes en la operación
                for (let i = 0; i < sh.shapeExprs.length; i++) {
                    if (sh.shapeExprs[i].type === "Shape") {
                        nOfShapes++;
                    }
                }
                for (let i = 0; i < sh.shapeExprs.length; i++) {
                    // Herencia - :User :Person AND {}
                    if (sh.shapeExprs[i].type === "ShapeRef") {
                        //Si es una ShapeOr, marcamos la herencia como opcional, OR
                        let rname = lop === "OR" ? "OR" : "a";
                        elements = elements.concat(createInheritance(sh.shapeExprs[i], id, rname));
                    }
                    // Restricción tipo nodal - :User Literal AND
                    else if (sh.shapeExprs[i].type === "NodeConstraint") {
                        //Si es una ShapeOr, marcamos la restricción como opcional.
                        let rname = lop === "OR" ? lop : "";
                        elements = elements.concat(createNodeKind(sh.shapeExprs[i], id, rname));
                    }
                    //Conjunción o disyunción de formas - :User { ... } AND { ... }
                    else {
                        let idMid = getID();
                        //Comprobar si hay shapes. Si solo hay herencia/tipo de nodo no se genera nodo intermedio.
                        if(nOfShapes > 0) {
                            //Comprobar si el nodo intermedio ya existe
                            let andAtr = andShs.get(shapeName);
                            //Crearlo si no
                            if(!andAtr) {
                                andAtr = getID();
                                //El nodo intermedio tiene como nombre AND/OR
                                elements = elements.concat(createToNode(andAtr, lop, "", id));
                                andShs.set(shapeName, andAtr);
                            }
                            elements = elements.concat(createToNode(idMid, '', "", andAtr));
                        }

                        //Creamos los elementos restantes como hijos de la shape o del nodo intermedio, si existe.
                        let expFather = nOfShapes > 0 ? idMid : id;

                        elements = elements.concat(checkClosed(sh.shapeExprs[i], expFather));
                        //Generar los elementos del grafo correspondientes a la expresión actual
                        let ats = checkExpression(sh.shapeExprs[i].expression, expFather);
                        elements = elements.concat(ats);
                    }
                }
            }
            //No es ShapeAnd/ShapeOr, sino Shape
            else {
                let ats = checkExpression(sh.expression, id);
                elements = elements.concat(ats);
            }
        }
    }
    clear();
    //console.log(elements);
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
 * En caso afirmativo añade una asociación a un nodo EXTRA, cuyos hijos serán las respectivas IRIs
 * @param shape Shape
 * @param id    ID padre
 * @returns {Array} Elementos del grafo generados
 */
function checkExtra(shape, id) {
    let elements = [];
    if (shape.extra) {
        let idn = getID();
        elements = elements.concat(createToNode(idn, "EXTRA", "", id));
        //Generamos los hijos de EXTRA: todas las IRI del array extra
        for(let i = 0; i < shape.extra.length; i++) {
            let nname = shape.extra[i];
            if(nname === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
                nname = "a";
            }
            else {
                nname = getShExTerm(irim.getPrefixedTermOfIRI(nname));
            }
            elements = elements.concat(createToNode(getID(), nname,
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
 * @param name    Nombre de la relación. P.e., si es :Princeps :User OR
 * @returns {Array} Elementos generados
 */
function createInheritance(shape, id, name){
    let elements = [];
    let target = irim.findIri(shape.reference);
    //Si no existe ya, lo generamos en el grafo
    if(target === undefined) {
        target = shape.reference;
        let id = getID();
        irim.saveIri(target, id);
        elements.push(createNode(id, irim.getPrefixedTermOfIRI(target)));
    }
    elements.push(createRelation((name !== undefined ? name : "a" ), id, irim.findIri(shape.reference)));
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
    let label = irim.getPrefixedTermOfIRI(expr.id);
    //La referencia se crea añadiendo $
    let labelRef = "$" + label;
    let id = getID();
    //Guardamos la etiqueta
    labels.set(label, id);
    //Creamos una relación a un nodo sin nombre, que abarca toda la expr. etiq. La relación lleva el nombre $<etiqueta>
    attrs = attrs.concat(createToNode(id, "", labelRef + ' ' + shExCardinality.cardinalityOf(expr), father));
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
    attrs.push(createRelation('&' + irim.getPrefixedTermOfIRI(expr.include) + ' ' + shExCardinality.cardinalityOf(expr),
        father, labels.get(irim.getPrefixedTermOfIRI(expr.include))));
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
    attrs = attrs.concat(createToNode(id, 'expressions', 'OneOf ' + shExCardinality.cardinalityOf(expr), father));
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
        attrs = attrs.concat(createToNode(id, 'expressions', 'EachOf ' + shExCardinality.cardinalityOf(expr), father));
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

    //Si tiene predicado, lo prefijamos, añadimos inverso -si existe- y cardinalidad
    if(expr.predicate) {
        name = inverse + getShExTerm(irim.getPrefixedTermOfIRI(expr.predicate))
            + shExCardinality.cardinalityOf(expr);
    }

    if(!expr.valueExpr) {
        if(expr.type === "NodeConstraint") {
            attrs = attrs.concat(createDTFromShapeLOPExprs(expr, father, fname));
        }
        else {
            //Cualquier tipo: . (Wildcard)
            attrs = attrs.concat(createWildcard(name, father));
        }
        return attrs;
    }

    //Si tiene ValueExpr
    else if(expr.valueExpr.type === "NodeConstraint") {
        //Relación de tipo "a" ( a [:User])
        if(expr.predicate === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
            attrs = attrs.concat(createNCType(expr, father));
            return attrs;
        }
        //Conjunto de valores - [:Male :Female]
        if(expr.valueExpr.values) {
            attrs = attrs.concat(createEnumeration(expr, name, father));
            return attrs;
        }
        //Tipo de nodo - IRI, Literal...
        if(expr.valueExpr.nodeKind) {
            attrs = attrs.concat(createNodeKind(expr.valueExpr, father, name));
            return attrs;
        }
        //Tipo de dato - xsd:string, p.e.
        if(expr.valueExpr.datatype) {
            attrs = attrs.concat(createDatatype(expr, name, father));
            return attrs;
        }
    }
    //Referencia a otra Shape - knows @:User
    else if (expr.valueExpr.type === "ShapeRef") {
        attrs = attrs.concat(createShapeRef(expr, name, father));
        return attrs;
    }
    //Shape anidada
    else if (expr.valueExpr.type === "Shape") {
        attrs = attrs.concat(createBlank(expr, name, father));
        return attrs;
    }
    //Shape AND anidada
    else if (expr.valueExpr.type === "ShapeAnd" || expr.valueExpr.type === "ShapeOr") {
        attrs = attrs.concat(createShapeAnd(expr, father));
        return attrs;
    }
}

/**
 * Genera un nodo operación lógica, AND/OR y añade la expresión como su hija Datatype
 * @param expr  Expresión de la ShapeAnd/ShapeOr
 * @param father    ID nodo padre
 * @param fname Nombre del padre
 * @returns {Array} Elementos del grafo generados
 */
function createDTFromShapeLOPExprs(expr, father, fname) {
    let attrs = [];
    let andAtr = andShs.get(fname);
    if(!andAtr) {
        andAtr = getID();
        attrs = attrs.concat(createToNode(andAtr, lop, fname, father));
        andShs.set(fname, andAtr);
    }

    attrs = attrs.concat(createDatatype(expr, null, andAtr));
    return attrs;
}

/**
 * Crea una relación a un nodo Wildcard, '.'
 * @param name  Nombre de la relación
 * @param father    ID nodo padre
 * @returns {Array} Elementos del grafo generados
 */
function createWildcard(name, father) {
    let attrs = [];
    let id = getID();
    attrs = attrs.concat(createToNode(id, '.', name, father));
    return attrs;
}

/**
 * Crea una relación "a" hacia un nodo. Similar a createInheritance, pero obtiene la información de un modo distinto
 * @param expr  Expresión
 * @param father    ID nodo padre
 * @returns {Array} Elementos del grafo generados
 */
function createNCType(expr, father) {
    let attrs = [];
    //Nodo objetivo
    let target = irim.findIri(expr.valueExpr.values[0]);
    //Si no existe ya, lo generamos en el grafo
    if(target === undefined) {
        target = expr.valueExpr.values[0];
        let id = getID();
        irim.saveIri(target, id);
        attrs.push(createNode(id, irim.getPrefixedTermOfIRI(target)));
    }
    let inverse = (expr.inverse === true ? "^" : "");
    attrs.push(createRelation(inverse + "a", father, irim.findIri(expr.valueExpr.values[0])));
    return attrs;
}

/**
 * Representa un conjunto de valores como una relación a un nodo "values" cuyos hijos son los valores
 * @param expr  Expresión
 * @param name  Nombre de la relación
 * @param father    ID nodo padre
 * @returns {Array}
 */
function createEnumeration(expr, name, father) {
    let attrs = [];
    let idv = getID();
    attrs = attrs.concat(createToNode(idv, "values", name, father));
    //Comprobamos cada uno de los valores
    for(let value in expr.valueExpr.values) {
        if(expr.valueExpr.values.hasOwnProperty(value)) {
            let vl = expr.valueExpr.values[value];
            let ide = getID();
            //Valor común: "1453", 12, IRI
            if(vl.value !== undefined) {
                attrs = attrs.concat(createToNode(ide, vl.value, "", idv));
            }
            //LiteralStem - "1453"~
            else if(vl.type === "LiteralStem") {
                attrs = attrs.concat(createToNode(ide, "&quot;" + vl.stem + "&quot;" + "~", "", idv));
            }
            //IRIStem - wo:~
            else if(vl.type === "IriStem") {
                attrs = attrs.concat(createToNode(ide,
                    getShExTerm(irim.getPrefixedTermOfIRI(vl.stem)) + "~", "", idv));
            }
            //IRIStemRange - wo:~ - wo:lo
            else if(vl.type === "IriStemRange") {
                attrs = attrs.concat(checkStemRange(vl, ide, idv, "IriStem"));
            }
            //LiteralStemRange - "aa"~ - "aab"
            else if(vl.type === "LiteralStemRange") {
                attrs = attrs.concat(checkStemRange(vl, ide, idv, "LiteralStem"));
            }
            //Etiqueta de lenguaje: @es
            else if(vl.type === "Language") {
                attrs = attrs.concat(createToNode(ide, "@" + vl.languageTag, "", idv));
            }
            //LanguageStem: @es~
            else if(vl.type === "LanguageStem") {
                attrs = attrs.concat(createToNode(ide, "@" + vl.stem + "~ ", "", idv));
            }
            //LanguageStemRange: @es~ - @es-AR
            else if(vl.type === "LanguageStemRange") {
                attrs = attrs.concat(checkStemRange(vl, ide, idv, "LanguageStem"));
            }
            //vl de tipo IRI
            else {
                attrs = attrs.concat(createToNode(ide,
                    getShExTerm(irim.getPrefixedTermOfIRI(vl)), "", idv));
            }
        }
    }
    return attrs;
}

/**
 * Representa un StemRange
 * @param vl    Valor del conjunto
 * @param ide   ID del valor
 * @param idv   ID del nodo values - padre
 * @param type  Tipo de Stem: IriStem, LiteralStem, LanguageStem
 * @returns {Array} Elementos del grafo generados
 */
function checkStemRange(vl, ide, idv, type) {
    let attrs = [];
    // Stem del tipo . - wo:lolo "14"
    if(vl.stem.type === "Wildcard") {
        attrs = attrs.concat(createToNode(ide, ".", "", idv));
    }
    else {
        switch(type) {
            //Obtenemos el término prefijado de la IRI
            case "IriStem":
                attrs = attrs.concat(createToNode(ide,
                    getShExTerm(irim.getPrefixedTermOfIRI(vl.stem)) + "~ ", "", idv));
                break;
            //Representamos el literal sin cambios
            case "LiteralStem":
                attrs = attrs.concat(createToNode(ide,
                    vl.stem + "~ ", "", idv));
                break;
            //Añadimos @
            case "LanguageStem":
                attrs = attrs.concat(createToNode(ide,
                    "@" + vl.stem + "~ ", "", idv));
                break;
        }
    }

    //Generamos las exclusiones, como nodos hijos del stem
    //La relación se llama "-"
    for(let k = 0; k < vl.exclusions.length; k++) {
        let excl = vl.exclusions[k];
        let idx = getID();
        //La exclusión es asimismo un stem (- codes:bad.~)
        //El valor está en excl.stem y se añade un ~
        if(excl.type === type) {
            switch(type) {
                case "IriStem":
                    attrs = attrs.concat(createToNode(idx,
                        getShExTerm(irim.getPrefixedTermOfIRI(excl.stem)) + "~",
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
        //La exclusión es un valor simple; el valor es excl
        else {
            switch(type) {
                case "IriStem":
                    attrs = attrs.concat(createToNode(idx, getShExTerm(irim.getPrefixedTermOfIRI(excl))
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

/**
 * Representa una restricción de tipo de dato, Datatype
 * @param expr  Expresión
 * @param name  Nombre de la relación
 * @param father    ID nodo padre
 * @returns {Array} Elementos del grafo generados
 */
function createDatatype(expr, name, father) {
    let attrs = [];
    //Tripleta común (:name xsd:string)
    if(expr.valueExpr) {
        let id = getID();
        let facets = checkFacets(expr.valueExpr, id);
        attrs = attrs.concat(facets);
        attrs = attrs.concat(createToNode(id, irim.getPrefixedTermOfIRI(expr.valueExpr.datatype), name, father));
    }
    //Es parte de un AND, por ejemplo (:productId xsd:string AND MINLENGTH 5 AND MAXLENGTH 10)
    else {
        let facets = checkFacets(expr, father);
        attrs = attrs.concat(facets);
        //Pueden ser sólo las facetas
        if(expr.datatype) {
            let idd = getID();
            //En este caso no se recibe nombre de relación, asignamos datatype
            attrs = attrs.concat(createToNode(idd, irim.getPrefixedTermOfIRI(expr.datatype), "datatype", father));
        }
    }
    return attrs;
}

/**
 * Representamos una referencia a Shape
 * @param expr  Expresión
 * @param name  Nombre de la relación
 * @param father    ID nodo padre
 * @returns {Array} Elementos del grafo generados
 */
function createShapeRef(expr, name, father) {
    let attrs = [];
    //Relación de tipo "a"
    if(expr.predicate === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
        attrs.push(createRelation("a", father, irim.findIri(expr.valueExpr.reference)));
        return attrs;
    }
    //Otra relación: nombre pasado por parámetro
    attrs.push(createRelation(name, father, irim.findIri(expr.valueExpr.reference)));
    return attrs;
}

/**
 * Representa una shape anónima
 * @param expr  Expresión
 * @param name  Nombre de la relación
 * @param father    ID nodo padre
 * @returns {Array} Elementos del grafo generados
 */
function createBlank(expr, name, father) {
    let attrs = [];
    let id = getID();
    attrs = attrs.concat(createToNode(id, "", name, father));
    //Representamos sus expresiones como sus descendientes
    attrs = attrs.concat(checkExpression(expr.valueExpr.expression, id));
    return attrs;
}

/**
 * Representa una ShapeAnd en el caso de que sea el valueExpr de un TripleConstraint
 * Por ejemplo (:productId xsd:string AND MINLENGTH 5 AND MAXLENGTH 10)
 * @param expr  Expresión
 * @param father    ID nodo padre
 * @returns {Array}
 */
function createShapeAnd(expr, father) {
    let attrs = [];

    //Cada uno de los elementos será en este caso una TripleConstraint.
    //Generamos cada uno de ellos
    for(let i = 0; i < expr.valueExpr.shapeExprs.length; i++) {
        attrs = attrs.concat(
            determineTypeOfExpression(expr.valueExpr.shapeExprs[i], father, irim.getPrefixedTermOfIRI(expr.predicate)));
    }
    return attrs;
}

/**
 * Representa las facetas de una restricción
 * @param vex   ValueExpr
 * @param idn   ID nodo padre
 * @returns {Array} Elementos del grafo generados
 */
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

/**
 * Crea un nodo y una relación con destino a ese nodo
 * @param id    ID del nodo a crear
 * @param nname Nombre del nodo
 * @param rname Nombre de la relación
 * @param source    Origen de la relación
 * @returns {Array} Nodo y relación
 */
function createToNode(id, nname, rname, source) {
    let attrs = [];
    attrs.push(createNode(id, nname));
    attrs.push(createRelation(rname, source, id));
    return attrs;
}

/**
 * Crea un nodo para ser consumido por cytoscape, en formato json
 * @param id    ID del nodo
 * @param nname Nombre del nodo
 * @returns {{data: {name: *, id: *}}}
 */
function createNode(id, nname) {
    return {data: { id: id, name: nname}};
}

/**
 * Crea una relación para ser consumida por cytoscape, en formato json
 * @param rname Nombre de la relación
 * @param source    ID del nodo origen
 * @param target    ID del nodo destino
 * @returns {{data: {name: *, id: number, source: *, target: *}}}
 */
function createRelation(rname, source, target) {
    return {data: { id: getID(), name: rname, source: source, target: target }};
}

function clear() {
    irim.clear();
    id = 0;
    labels = new Map();     //Almacena etiquetas
    andShs = new Map();    //Almacena las ShapeAnd existentes
    lop = "";   //Operación lógica, si existe
}

let style = [ //Hoja de estilo para el grafo
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
exports.shExAGrafo = shExAGrafo;