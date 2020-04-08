const uniqid = require("uniqid");
const URIManager = require ("../schema/irimanager.js");

class XMIGenerator {

    constructor () {
        this.pendingAssociations = [];
        this.shapes = [];
        this.datatypes = [];
        this.anyTypeId = null;
        this.prefixes = [];
        this.base = "";
        this.enumerations = [];
        this.nodeKinds = [];
        this.ownedRules = [];
        this.subClassesCounter = new Map();
        this.subClasses = [];
    }

    static createXMIHeader() {
        return '<?xml version="1.0" encoding="UTF-8"?>\n' +
            '<uml:Model xmi:version="2.1" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1" ' +
            'xmlns:uml="http://www.eclipse.org/uml2/3.0.0/UML"\n xmi:id="' + uniqid() + '" name="ShExGeneratedXMI">'
    }

    createPrefixes (prefixes, base) {
        let enumeration = "\n<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"" + uniqid() + "\" name=\"Prefixes\">";
        for(let prefix in prefixes) {
            if(prefixes.hasOwnProperty(prefix)) {
                enumeration += "\n\t<ownedLiteral xmi:id=\"" + uniqid() + "\" name=\"prefix " +
                    prefix + ": &lt;" + prefixes[prefix] + ">\"/>";
                this.prefixes.push({uri: prefixes[prefix], prefix: prefix})
            }
        }
        enumeration += "\n\t<ownedLiteral xmi:id=\"" + uniqid() + "\" name=\"base &lt;" + base + ">\"/>" +
            "\n</packagedElement>";
        this.base = base;
        return enumeration
    }

    getPrefixedTermOfUri(uri) {
        for(let i = 0; i < this.prefixes.length; i++) {
            if(uri.includes(this.prefixes[i].uri)) {
                return this.prefixes[i].prefix + ":" + URIManager.lastOfUri(this.prefixes[i].uri, uri)
            }
        }
        return URIManager.lastOfUri(this.base, uri)
    }

    createXMIClass(name, shape) {
        let sh = this.findShape(name);
        let expression = shape.expression;
        let nodekind = this.adequateNodeKindPresentation(shape.nodeKind);
        let generalizations = "";
        if(shape.type === "ShapeAnd") {
            expression = shape.shapeExprs.pop().expression;
            generalizations = this.createXMIGeneralization(shape.shapeExprs);
        }
        let nk = nodekind === undefined ? "" : this.createXMIPrimAttribute("nodeKind", nodekind);
        let dt = shape.datatype === undefined ? "" : this.createXMIPrimAttribute("datatype",
            shape.datatype);
        this.checkFacets(shape, sh.id);
        let prName = this.getPrefixedTermOfUri(name);
        console.log(prName);
        let classXMI = '\n<packagedElement xmi:type="uml:Class" xmi:id="' + sh.id + '" name="'
            + prName
            + '">' +
            this.createXMIAttributes(expression, prName) +
            nk + dt +
            generalizations + '\n</packagedElement>';

        classXMI += this.createDependentOwnedRules();
        classXMI += this.createDependentAssociations(sh.id);
        classXMI += this.createDependentSubClasses();

        return classXMI;
    }

    createDependentSubClasses() {
        let classXMI = "";
        for(let i = 0; i < this.subClasses.length; i++) {
            let shape = this.findShape(this.subClasses[i].name);
            console.log(this.subClasses[i]);
            classXMI += '\n<packagedElement xmi:type="uml:Class" xmi:id="' + shape.id + '" name="'
                + this.subClasses[i].name
                + '">' +
                this.createXMIAttributes(this.subClasses[i].expr, shape.name) + '\n</packagedElement>';
        }
        this.subClasses = [];
        console.log(classXMI);
        return classXMI;
    }

    createXMIGeneralization(parents) {
        let gens = "";
        for(let parent in parents) {
            if(parents.hasOwnProperty(parent)) {
                if(parents[parent].type === "NodeConstraint"){
                    gens += this.createXMIPrimAttribute("nodeKind",
                        this.adequateNodeKindPresentation(parents[parent].nodeKind));
                }
               else {
                    let sh = this.findShape(parents[parent].reference);
                    gens += "\n\t<generalization xmi:id=\"" + uniqid() + "\" general=\"" + sh.id + "\"/>"
                }

            }
        }
        return gens;
    }

    createXMIAttributes(expr, className) {
        let attrs = "";
        if(!expr) {
            return attrs;
        }
        else if(expr.type === "TripleConstraint") {
            attrs = this.determineTypeOfExpression(expr);
        }
        else if (expr.type === "EachOf") {
            console.log(expr);
            if(expr.min !== undefined || expr.max !== undefined) {
                let subClassName = this.getSubClassNumber(className);
                attrs = this.createXMIAsocAttribute(subClassName, subClassName, expr.min, expr.max);
                let subClass = {name: subClassName, expr: expr};
                subClass.expr.min = undefined;
                subClass.expr.max = undefined;
                this.subClasses.push(subClass);
            }
            else {
                for(let attr in expr.expressions) {
                    if(expr.expressions.hasOwnProperty(attr)) {
                        attrs += this.createXMIAttributes(expr.expressions[attr], className);
                    }
                }
            }

        }
        return attrs;
    }

    determineTypeOfExpression(expr) {
        if(!expr.valueExpr) {
            return this.createXMIPrimAttribute(expr.predicate, "Any", expr.min);
        }
        else if(expr.valueExpr.type === "NodeConstraint") {
            if(expr.predicate === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
                let list = [{reference: expr.valueExpr.values[0]}];
                return this.createXMIGeneralization(list);
            }
            if(expr.valueExpr.values) {
                return this.createXMIEnumAttribute(expr.predicate, expr.valueExpr.values, expr.min);
            }
            if(expr.valueExpr.nodeKind) {
                return this.createXMIKindAttribute(expr.predicate, expr.valueExpr.nodeKind, expr.min);
            }
            return this.createXMIPrimAttribute(expr.predicate, expr.valueExpr.datatype, expr.min, expr.valueExpr);
        }
        else if (expr.valueExpr.type === "ShapeRef") {
            if(expr.predicate === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
                let list = [{reference: expr.valueExpr.reference}];
                return this.createXMIGeneralization(list);
            }
            return this.createXMIAsocAttribute(expr.predicate, expr.valueExpr.reference, expr.min, expr.max);
        }
            }

    createXMIPrimAttribute(name, type, min, valueExpr) {
        let xmiType = this.createXMIType(type);
        let card = min !== undefined ? XMIGenerator.getLower0Cardinality() : "";
        let atId = uniqid();
        this.checkFacets(valueExpr, atId);
        if(xmiType.primitive) {
            let tName = xmiType.name.split(":").pop();
            return '\n\t<ownedAttribute xmi:id="' + atId + '" name="' + this.getPrefixedTermOfUri(name)
                + '" visibility="public" isUnique="false">\n' +
                '\t\t<type xmi:type="uml:PrimitiveType" href="pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#'
                + tName.substring(0, 1).toUpperCase() + tName.substring(1) + '">\n' + '\t\t</type>' +
                card
                + '\n\t</ownedAttribute>'
        }
        if(xmiType.name === "Any") {
            if(!this.anyTypeId) {
                this.anyTypeId = uniqid();
            }
            return '\n\t<ownedAttribute xmi:type="uml:Property" xmi:id="' + atId + '" name="'
                + this.getPrefixedTermOfUri(name)
                + '" visibility="public" ' + 'type="'+ this.anyTypeId + '" isUnique="false">\n' +
                card
                + '\t</ownedAttribute>'
        }

        let dtype = this.findDataType(xmiType.name, xmiType.uri);
        return '\n\t<ownedAttribute xmi:type="uml:Property" xmi:id="' + atId + '" name="' + this.getPrefixedTermOfUri(name)
            + '" visibility="public" ' + 'type="'+ dtype.id + '" isUnique="true">\n'
            + card
            + '\t</ownedAttribute>'



    }

    createXMIKindAttribute(name, kind, min) {
        let nkind = this.findNodeKind(kind);
        let card = min !== undefined ? XMIGenerator.getLower0Cardinality() : "";
        return '\n\t<ownedAttribute xmi:type="uml:Property" xmi:id="' + uniqid() + '" name="' + this.getPrefixedTermOfUri(name)
            + '" visibility="public" ' + 'type="'+ nkind.id + '" isUnique="true">\n'
            + card
            + '\t</ownedAttribute>'
    }

    createXMIEnumAttribute(name, values, min) {
        let card = min !== undefined ? XMIGenerator.getLower0Cardinality() : "";
        let enumer = { id: uniqid(), name: name, values: values};
        this.saveEnum(enumer);
        return '\n\t<ownedAttribute xmi:type="uml:Property" xmi:id="' + uniqid() + '" name="' + this.getPrefixedTermOfUri(name)
            + '" visibility="public" ' + 'type="'+ enumer.id + '" isUnique="true">\n'
            + card
            + '\t</ownedAttribute>'

    }

    createXMIAsocAttribute(name, target, min, max) {
        let minimum = min !== undefined ? min : 1;
        let maximum = max !== undefined ? max : 1;
        let idatr = uniqid();
        let targetShape = this.findShape(target);
        let idasoc = uniqid();
        let content = '\n\t<ownedAttribute xmi:id="' + idatr + '" name="' + this.getPrefixedTermOfUri(name)
            + '" visibility="public" ' +
            'type="' + targetShape.id + '" association="' + idasoc + '">'
            + XMIGenerator.createXMIAsocCardinality(minimum, maximum)
            + '</ownedAttribute>';

        let asoc = { id: idasoc, idatr: idatr};
        this.pendingAssociations.push(asoc);

        return content;
    }

    static createXMIAsocCardinality(min, max) {
        return XMIGenerator.getLowerCardinality(min) + XMIGenerator.getUpperCardinality(max);
    }

    static getUpperCardinality(cardinality) {
        if(cardinality === 1)
            return "";
        if(cardinality === -1)
            return '\n\t\t<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="' + uniqid() + '" value="*"/>';
        return '\n\t\t<upperValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="' + uniqid() + '" value="' + cardinality + '"/>';
    }

    static getLowerCardinality(cardinality) {
        if(cardinality === 0)
            return XMIGenerator.getLower0Cardinality();
        else if(cardinality === 1)
            return "";
        return '\n\t\t<lowerValue xmi:type="uml:LiteralUnlimitedNatural" xmi:id="' + uniqid() + '" value="' + cardinality + '"/>';
    }

    static getLower0Cardinality() {
        return '\n\t\t<lowerValue xmi:type="uml:LiteralInteger" xmi:id="' + uniqid() + '"/>';
    }

    static createXMIAssociation(ids, idcl) {
        let idown = uniqid();
        return '\n<packagedElement xmi:type="uml:Association" xmi:id="' + ids.id + '" memberEnd="' + ids.idatr
            + ' '  + idown + '">\n' +
            '\t<ownedEnd xmi:id="' + idown + '" visibility="public" type="' + idcl + '" association="'
            + ids.id + '"/>\n' + '</packagedElement>\n'
    }

    createDependentAssociations(idcl){
        let assocs = '';
        for(let i = 0; i < this.pendingAssociations.length; i++) {
            assocs += XMIGenerator.createXMIAssociation(this.pendingAssociations[i], idcl);
        }
        this.pendingAssociations = [];
        return assocs;
    }

    createDependentOwnedRules(){
        let constraints = "";
        for(let i = 0; i < this.ownedRules.length; i++) {
            constraints += this.ownedRules[i];
        }
        this.ownedRules = [];
        return constraints;
    }

    createXMIType(type) {
        switch(type) {
            case "any": //TODO: ver compatibilidad con otros
                return { primitive: false, name: "Any" };
            case this.getXSDTypes(type):
                let last = this.getPrefixedTermOfUri(type);
                return { primitive: true, name: last === "int" ? "integer" : last, uri: type};
            default:
                return { primitive: false, name: this.getPrefixedTermOfUri(type), uri: type};
        }
    }

    getXSDTypes(uri) {
        let type = this.getPrefixedTermOfUri(uri).split(":").pop();
        let xstypes = [];
        xstypes.push("string", "date",     //Dates
            "byte", "int", "integer", "long", "short",    //Numeric
            "boolean", "double", "float");
        if(xstypes.includes(type)) {
            return "http://www.w3.org/2001/XMLSchema#" + type;
        }
         return ""
    }

    findShape(name) {
        for(let i = 0; i < this.shapes.length; i++) {
            if(name === this.shapes[i].name) {
                return this.shapes[i];
            }
        }

        let shape = {id: uniqid(), name: name};
        this.shapes.push((shape));
        return shape;
    }

    findDataType(name, uri) {
        for(let i = 0; i < this.datatypes.length; i++) {
            if(name === this.datatypes[i].name) {
                return this.datatypes[i];
            }
        }

        let dt = {id: uniqid(), name: name, uri: uri};
        this.datatypes.push((dt));
        return dt;
    }

    findNodeKind(kind) {
        for(let i = 0; i < this.nodeKinds.length; i++) {
            if(kind === this.nodeKinds[i].name) {
                return this.nodeKinds[i];
            }
        }

        let nk = {id: uniqid(), name: kind};
        this.nodeKinds.push((nk));
        return nk;
    }

    adequateNodeKindPresentation(nk) {
        switch(nk) {
            case "literal":
                return "Literal";
            case "iri":
                return "IRI";
            case "bnode":
                return "BNode";
            case "nonliteral":
                return "NonLiteral";
            default:
                return undefined;
        }
    }

    saveEnum(enumer) {
        for(let i = 0; i < this.enumerations.length; i++) {
            const self = this;
            if(enumer.name === this.enumerations[i].name
                && enumer.values.length === this.enumerations[i].values.length
                && enumer.values.sort().every(function(value, index) {
                    return value === self.enumerations[i].values.sort()[index]})) {
                return this.enumerations[i];
            }
        }
        this.enumerations.push((enumer));
    }

    getSubClassNumber(className) {
        if(this.subClassesCounter.get(className) === undefined) {
            this.subClassesCounter.set(className, 1);
            return className + "_" + 1;
        }
        else {
            let sub = this.subClassesCounter.get(className) + 1;
            this.subClassesCounter.set(className, sub);
            return className + "_" + sub;
        }
    }

    checkFacets(vex, id) {
        if(!vex) {
            return;
        }
        if(vex.mininclusive) {
            this.ownedRules.push(this.createXMIOwnedRule("MinInclusive " + vex.mininclusive, id));
        }
        if(vex.minexclusive) {
            this.ownedRules.push(this.createXMIOwnedRule("MinExclusive " + vex.minexclusive, id));
        }
        if(vex.totaldigits) {
            this.ownedRules.push(this.createXMIOwnedRule("TotalDigits " + vex.totaldigits, id));
        }
        if(vex.fractiondigits) {
            this.ownedRules.push(this.createXMIOwnedRule("FractionDigits " + vex.fractiondigits, id));
        }
        if(vex.length) {
            this.ownedRules.push(this.createXMIOwnedRule("Length " + vex.length, id));
        }
        if(vex.minlength) {
            this.ownedRules.push(this.createXMIOwnedRule("MinLength " + vex.minlength, id));
        }
        if(vex.maxlength) {
            this.ownedRules.push(this.createXMIOwnedRule("MaxLength " + vex.maxlength, id));
        }
        if(vex.pattern) {
            this.ownedRules.push(this.createXMIOwnedRule("/" + vex.pattern + "/", id));
        }
    }

    createXMIOwnedRule(name, id) {
        return "\n<ownedRule xmi:id=\"" + uniqid() + "\" name=\"" + name + "\" " +
            "constrainedElement=\"" + id + "\">\n" +
            "\n</ownedRule>"
    }

    createXMIEnumeration(enm) {
        let base = '\n<packagedElement xmi:type="uml:Enumeration" xmi:id="' + enm.id + '" ' +
            'name="' + this.getPrefixedTermOfUri(enm.name) + '">\n';
        for(let j = 0; j < enm.values.length; j++) {
            console.log(enm.values[j]);
            let value = "";
            if(enm.values[j].value !== undefined) {
                if(enm.values[j].type === undefined) {
                    value = "&quot;" + enm.values[j].value + "&quot;";
                }
                else {
                    value = enm.values[j].value;
                }

            }
            else if(enm.values[j].type === "LiteralStem") {
                value = "&quot;" + enm.values[j].stem + "&quot;" + "~";
            }
            else if(enm.values[j].type === "IriStem") {
                value =  this.getPrefixedTermOfUri(enm.values[j].stem) + "~";
            }
            else if(enm.values[j].type === "IriStemRange") {
                if(enm.values[j].stem.type === "Wildcard") {
                    value = ". "
                }
                else {
                    value =  this.getPrefixedTermOfUri(enm.values[j].stem) + "~ ";
                }

                for(let k = 0; k < enm.values[j].exclusions.length; k++) {
                    let excl = enm.values[j].exclusions[k];
                    if(excl.type === "IriStem") {
                        value += "- " + this.getPrefixedTermOfUri(excl.stem) + "~ ";
                    }
                    else {
                        value += "- " + this.getPrefixedTermOfUri(excl) + " ";
                    }
                }
            }
            else if(enm.values[j].type === "LiteralStemRange") {
                if(enm.values[j].stem.type === "Wildcard") {
                    value = ". "
                }
                else {
                    value = this.checkLiteralStem(enm.values[j].stem) + "~ ";
                }
                for(let k = 0; k < enm.values[j].exclusions.length; k++) {
                    let excl = enm.values[j].exclusions[k];
                    if(excl.type === "LiteralStem") {
                        value += "- " + this.checkLiteralStem(excl.stem) + "~ ";
                    }
                    else {
                        value += "- " + this.checkLiteralStem(excl) + " ";
                    }
                }
            }
            else if(enm.values[j].type === "Language") {
                value = "@" + enm.values[j].languageTag + " ";
            }
            else if(enm.values[j].type === "LanguageStem") {
                value = "@" + enm.values[j].stem + "~ ";
            }
            else if(enm.values[j].type === "LanguageStemRange") {
                if(enm.values[j].stem.type === "Wildcard") {
                    value = ". "
                }
                else {
                    value = "@" + enm.values[j].stem + "~ ";
                }
                for(let k = 0; k < enm.values[j].exclusions.length; k++) {
                    let excl = enm.values[j].exclusions[k];
                    if(excl.type === "LanguageStem") {
                        value += "- @" +excl.stem + "~ ";
                    }
                    else {
                        value += "- @" + excl + " ";
                    }
                }
            }
            else {
                value = this.getPrefixedTermOfUri(enm.values[j]);
            }
            base += "\n\t<ownedLiteral xmi:id=\"" + uniqid() + "\" name=\""
                + value + "\"/>\n";
        }

        base += '\n</packagedElement>';
        return base;
    }

    checkLiteralStem(txt) {
        if(/^([0-9]+(\.[0-9]+)?)$/.test(txt)) {
            return txt;

        }
        else {
            return "&quot;" + txt+ "&quot;";
        }
    }

    createXMIFooter() {
        let base = "";
        if(this.anyTypeId) {
            base += '\n<packagedElement xmi:type="uml:PrimitiveType" xmi:id="' + this.anyTypeId + '" name="Any"/>';
        }
        for(let i = 0; i < this.enumerations.length; i++) {
            base += this.createXMIEnumeration(this.enumerations[i]);
        }
        for(let i = 0; i < this.datatypes.length; i++) {
                base += '\n<packagedElement xmi:type="uml:PrimitiveType" xmi:id="' + this.datatypes[i].id + '" ' +
                    'name="' + this.datatypes[i].name + '">\n' +
                    '\n</packagedElement>';
        }
        for(let i = 0; i < this.nodeKinds.length; i++) {
            base += '\n<packagedElement xmi:type="uml:PrimitiveType" xmi:id="' + this.nodeKinds[i].id + '" ' +
                'name="' + this.adequateNodeKindPresentation(this.nodeKinds[i].name) + '">\n' +
                '\n</packagedElement>';
        }
        return base + '\n</uml:Model>'
    }

    static createXMIOwnedComment(comment) {
        return '<ownedComment xmi:id="' + uniqid() + '">\n' +
            '<body>' + comment + '</body>\n' +
            '</ownedComment>\n'
    }

    static createString(symbols) {
        return symbols.join("")
    }

    clear() {
        this.pendingAssociations = [];
        this.shapes = [];
        this.datatypes = [];
        this.anyTypeId = null;
        this.prefixes = [];
        this.base = "";
        this.enumerations = [];
        this.nodeKinds = [];
        this.ownedRules = [];
        this.subClassesCounter = new Map();
        this.subClasses = [];
    }

}
module.exports = XMIGenerator;