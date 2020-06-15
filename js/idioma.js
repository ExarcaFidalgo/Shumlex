const $ = require('jquery');

//Contenido Español
let es = {
    stx: "<span class='ak'>S</span>hEx a XMI",
    xts: "<span class='ak'>X</span>MI a ShEx",
    guml: "Generar <span class='ak'>U</span>ML",
    ggr: "Generar g<span class='ak'>r</span>afo",
    cej: "Cargar ejemplos ",
    shb: "ShEx básico",
    her: "Herencia",
    rtn: "Restr. tipo nodal",
    fct: "Facetas",
    rex: "Rangos y exclusiones",
    cgn: "Conjuntos genéricos",
    etq: "Etiquetas de lenguaje",
    crd: "Cardinalidad",
    one: "OneOf",
    and: "Shapes anidadas",
    cer: "Shapes cerradas",
    rti: "Restricción triple inversa",
    ext: "Extra",
    exe: "Expresiones etiquetadas",
    cnj: "Conjunciones",
    cfg: "Configuración",
    cambiarClaro: "Tema claro",
    cambiarOscuro: "Tema oscuro",
    uk: "Inglés",
    es: "Español",
    int: "Introducción",
    p1: "Bienvenidos al <span class=\"pbold\">Proyecto Shumlex</span>. El objeto del mismo consiste en elaborar una herramienta que permita\n" +
        " llevar a cabo una integración entre las Shape Expressions y UML, otorgando al usuario la capacidad de generar\n" +
        " el equivalente en UML del conjunto deseado de ShEx, o viceversa; aportando asimismo características que permitan\n" +
        " la visualización in situ de los datos trabajados.",
    p2: "Obra de D. Jorge Álvarez Fidalgo.",
    mostrargrafo: "<span class='ak'>G</span>enerar grafo",
    borrarshex: "(B)orrar",
    cargarShexXMI: "Con<span class='ak'>s</span>tituir XMI",
    "dwnshex-btn" : "(D)escargar ShEx",
    shextoxmi: "<span class='ak'>G</span>enerar XMI",
    xmitoshex: "<span class='ak'>G</span>enerar ShEx",
    intercambiarsx: "Interc(a)mbiar",
    cargarGrafo: "G<span class='ak'>r</span>afo",
    borrarxmi: "Borrar",
    cargarUML: "<span class='ak'>U</span>ML",
    "dwnxmi-btn": "Des(c)argar XMI",
    mostraruml: "<span class='ak'>G</span>enerar UML",
    cargarXMIShex: "Constituir ShE<span class='ak'>x</span>",
    intercambiarxs: "Interc(a)mbiar",
    ggen: "Generación de grafo",
    shxm: "ShEx a XMI",
    umlg: "Generación de UML",
    xmsh: "XMI a ShEx",
    disy: "Disyunciones"
};

//Contenido inglés
let en = {
    stx: "<span class='ak'>S</span>hEx to XMI",
    xts: "<span class='ak'>X</span>MI to ShEx",
    guml: "Create <span class='ak'>U</span>ML",
    ggr: "Create g<span class='ak'>r</span>aph",
    cej: "Load examples ",
    shb: "Basic ShEx",
    her: "Inheritance",
    rtn: "Node kinds",
    fct: "Facets",
    rex: "Ranges and exclusions",
    cgn: "Wildcard stem ranges",
    etq: "Language tags",
    crd: "Cardinality",
    one: "OneOf",
    and: "Nested shapes",
    cer: "Closed shapes",
    rti: "Inverse triple constraints",
    ext: "Extra",
    exe: "Labeled triple expression",
    cnj: "Conjunctions",
    cfg: "Settings",
    cambiarClaro: "Light Theme",
    cambiarOscuro: "Dark Theme",
    uk: "English",
    es: "Spanish",
    int: "Introduction",
    p1: "Welcome to <span class=\"pbold\">Shumlex</span>. Its purpose is to develop a tool which allows \n" +
        " an integration between both Shape Expressions and UML, enabling the user to create an UML equivalent to\n" +
        " the desired set of Shape Expressions, as well as the opposite. Moreover, it seeks to ease such tasks by\n" +
        " contributing some complementary features which allow a integrated display of the data.",
    p2: "A creation by Mr. Jorge Álvarez Fidalgo.",
    mostrargrafo: "<span class='ak'>G</span>enerate graph",
    borrarshex: "Delete (b)",
    cargarShexXMI: "Con<span class='ak'>s</span>titute XMI",
    "dwnshex-btn" : "(D)ownload ShEx",
    shextoxmi: "<span class='ak'>G</span>enerate XMI",
    xmitoshex: "<span class='ak'>G</span>enerate ShEx",
    intercambiarsx: "Sw(a)p",
    cargarGrafo: "G<span class='ak'>r</span>aph",
    borrarxmi: "Delete (o)",
    cargarUML: "<span class='ak'>U</span>ML",
    "dwnxmi-btn": "Download XMI (c)",
    mostraruml: "<span class='ak'>G</span>enerate UML",
    cargarXMIShex: "Constitute ShE<span class='ak'>x</span>",
    intercambiarxs: "Sw(a)p",
    ggen: "Graph generation",
    shxm: "ShEx to XMI",
    umlg: "UML generation",
    xmsh: "XMI to ShEx",
    disy: "Disjunctions"
};

/**
 * Comprueba el idioma establecido en sesión. Por defecto, se toma español.
 * Llama a la función localizadora con el conjunto linguístico apropiado.
 */
function checkLang() {
    let lang = sessionStorage.getItem("lang");
    if(!lang) {
        lang = es;
        sessionStorage.setItem("lang", JSON.stringify(lang));
        localize(lang);
    }
    else {
        localize(JSON.parse(lang));
    }
}

/**
 * Localiza la aplicación web al idioma deseado.
 * @param lang  JSON con los recursos linguísticos necesarios.
 */
function localize(lang) {
    setContentByID("stx", lang.stx);
    setContentByID("xts", lang.xts);
    setContentByID("guml", lang.guml);
    setContentByID("ggr", lang.ggr);
    setContentByID("cej", lang.cej);
    setContentByID("shb", lang.shb);
    setContentByID("her", lang.her);
    setContentByID("rtn", lang.rtn);
    setContentByID("fct", lang.fct);
    setContentByID("rex", lang.rex);
    setContentByID("cgn", lang.cgn);
    setContentByID("etq", lang.etq);
    setContentByID("crd", lang.crd);
    setContentByID("one", lang.one);
    setContentByID("and", lang.and);
    setContentByID("cer", lang.cer);
    setContentByID("rti", lang.rti);
    setContentByID("ext", lang.ext);
    setContentByID("exe", lang.exe);
    setContentByID("cnj", lang.cnj);
    setContentByID("disy", lang.disy);
    setContentByID("cfg", lang.cfg);
    setContentByID("cambiarClaro", lang.cambiarClaro);
    setContentByID("cambiarOscuro", lang.cambiarOscuro);
    setTitleByID("uk", lang.uk);
    setTitleByID("es", lang.es);
    setContentByID("int", lang.int);
    setContentByID("p1", lang.p1);
    setContentByID("p2", lang.p2);
    setContentByID("mostrargrafo", lang.mostrargrafo);
    setTitleByID("borrarshex", lang.borrarshex);
    setContentByID("cargarShexXMI", lang.cargarShexXMI);
    setTitleByID("dwnshex-btn", lang["dwnshex-btn"]);
    setContentByID("shextoxmi", lang.shextoxmi);
    setContentByID("xmitoshex", lang.xmitoshex);
    setContentByID("cargarGrafo", lang.cargarGrafo);
    setTitleByID("borrarxmi", lang.borrarxmi);
    setContentByID("cargarUML", lang.cargarUML);
    setTitleByID("dwnxmi-btn", lang["dwnxmi-btn"]);
    setContentByID("mostraruml", lang.mostraruml);
    setContentByID("cargarXMIShex", lang.cargarXMIShex);

    setTitleByClass("intercambiarsx", lang.intercambiarsx);
    setTitleByClass("intercambiarxs", lang.intercambiarxs);
    setContentByClass("ggen", lang.ggen);
    setContentByClass("shxm", lang.shxm);
    setContentByClass("umlg", lang.umlg);
    setContentByClass("xmsh", lang.xmsh);
}

/**
 * Busca un elemento HTML por id y establece su contenido.
 * @param id    ID del elemento.
 * @param co    Contenido.
 */
function setContentByID(id, co) {
    if(document.getElementById(id)) {
        $("#"+id).html(co);
    }
}

/**
 * Busca un elemento HTML por id y establece su título.
 * @param id    ID del elemento.
 * @param co    Título.
 */
function setTitleByID(id, co) {
    if(document.getElementById(id)) {
        $("#"+id).attr("title", co);
    }
}

/**
 * Busca un elemento HTML por clase y establece su contenido.
 * @param id    ID del elemento.
 * @param co    Contenido
 */
function setContentByClass(id, co) {
    if(document.getElementsByClassName(id).length > 0) {
        $("."+id).text(co);
    }
}

/**
 * Busca un elemento HTML por clase y establece su título.
 * @param id    ID del elemento.
 * @param co    Título
 */
function setTitleByClass(id, co) {
    if(document.getElementsByClassName(id).length > 0) {
        $("."+id).attr("title", co);
    }
}

exports.checkLang = checkLang;
exports.en = en;
exports.es = es;