const UMLGen = require('../src/visual/UMLGen.js');
const XMIRep = require('../src/repo/xmirepository.js');
const PUMLRep = require('../src/repo/pumlrepository.js');
let um = new UMLGen();

describe('Pruebas de la representación de UML como diagrama PlantUML', () => {

    test('Relaciones y otros atributos', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI3());
        expect(puml)
            .toEqual(PUMLRep.getPUML1());
    });

    test('Herencia simple', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI5());
        expect(puml)
            .toEqual(PUMLRep.getPUML2());
    });

    test('Tipos de Nodo', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI7());
        expect(puml)
            .toEqual(PUMLRep.getPUML3());
    });

    test('Facetas de literales', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI9());
        expect(puml)
            .toEqual(PUMLRep.getPUML4());
    });

    test('Rangos y exclusiones', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI10());
        expect(puml)
            .toEqual(PUMLRep.getPUML5());
    });

    test('Conjuntos genéricos con exclusiones', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI11());
        expect(puml)
            .toEqual(PUMLRep.getPUML6());
    });

    test('Etiquetas de lenguaje', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI13());
        expect(puml)
            .toEqual(PUMLRep.getPUML7());
    });

    test('Cardinalidades aplicadas a conjuntos', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI14());
        expect(puml)
            .toEqual(PUMLRep.getPUML8());
    });

    test('Operador OneOf', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI15());
        expect(puml)
            .toEqual(PUMLRep.getPUML9());
    });

    test('Formas anidadas', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI16());
        expect(puml)
            .toEqual(PUMLRep.getPUML10());
    });

    test('Formas cerradas', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI17());
        expect(puml)
            .toEqual(PUMLRep.getPUML11());
    });

    test('Restricción triple inversa', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI19());
        expect(puml)
            .toEqual(PUMLRep.getPUML12());
    });

    test('EXTRA', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI20());
        expect(puml)
            .toEqual(PUMLRep.getPUML13());
    });

    test('Expresiones etiquetadas', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI21());
        expect(puml)
            .toEqual(PUMLRep.getPUML14());
    });

    test('Conjunciones', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI22());
        expect(puml)
            .toEqual(PUMLRep.getPUML15());
    });

    test('Disyunciones', () => {
        let puml = um.generarCodigoPUML(XMIRep.getXMI23());
        expect(puml)
            .toEqual(PUMLRep.getPUML16());
    });

});