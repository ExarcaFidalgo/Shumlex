const xmiparser = require('../xmi_util/XMIParser.js');
const XMIRep = require('../repo/xmirepository.js');
const ShExRep = require('../repo/shexrepository.js');

describe('Pruebas de la transformación XMI-ShEx', () => {

    test('Shape', () => {
        let shex = xmiparser.parseXMIToShEx(XMIRep.getXMI1());
        expect(shex)
            .toEqual(ShExRep.getShex1());
    });

    test('Atributos básicos', () => {
        let shex = xmiparser.parseXMIToShEx(XMIRep.getXMI2());
        expect(shex)
            .toEqual(ShExRep.getShex2());
    });

    test('Relaciones y otros atributos', () => {
        let shex = xmiparser.parseXMIToShEx(XMIRep.getXMI3());
        expect(shex)
            .toEqual(ShExRep.getShex3());
    });

    test('Herencia simple', () => {
        let shex = xmiparser.parseXMIToShEx(XMIRep.getXMI5());
        expect(shex)
            .toEqual(ShExRep.getGenShex5());
    });

    test('Herencia múltiple', () => {
        let shex = xmiparser.parseXMIToShEx(XMIRep.getXMI6());
        expect(shex)
            .toEqual(ShExRep.getGenShex6());
    });

    test('Tipos de Nodo', () => {
        let shex = xmiparser.parseXMIToShEx(XMIRep.getXMI7());
        expect(shex)
            .toEqual(ShExRep.getShex7());
    });

    test('Facetas de literales', () => {
        let shex = xmiparser.parseXMIToShEx(XMIRep.getXMI9());
        expect(shex)
            .toEqual(ShExRep.getShex9());
    });

    test('Rangos y exclusiones', () => {
        let shex = xmiparser.parseXMIToShEx(XMIRep.getXMI10());
        expect(shex)
            .toEqual(ShExRep.getShex10());
    });

    test('Conjuntos genéricos con exclusiones', () => {
        let shex = xmiparser.parseXMIToShEx(XMIRep.getXMI11());
        expect(shex)
            .toEqual(ShExRep.getShex11());
    });

    test('Restricciones nodales como formas de máximo nivel II', () => {
        let shex = xmiparser.parseXMIToShEx(XMIRep.getXMI12());
        expect(shex)
            .toEqual(ShExRep.getShex12());
    });

    test('Etiquetas de lenguaje', () => {
        let shex = xmiparser.parseXMIToShEx(XMIRep.getXMI13());
        expect(shex)
            .toEqual(ShExRep.getShex13());
    });

    test('Cardinalidades aplicadas a conjuntos', () => {
        let shex = xmiparser.parseXMIToShEx(XMIRep.getXMI14());
        expect(shex)
            .toEqual(ShExRep.getShex14());
    });

    test('Operador OneOf', () => {
        let shex = xmiparser.parseXMIToShEx(XMIRep.getXMI15());
        expect(shex)
            .toEqual(ShExRep.getShex15());
    });

    test('Formas anidadas', () => {
        let shex = xmiparser.parseXMIToShEx(XMIRep.getXMI16());
        expect(shex)
            .toEqual(ShExRep.getShex16());
    });

    test('Formas cerradas', () => {
        let shex = xmiparser.parseXMIToShEx(XMIRep.getXMI17());
        expect(shex)
            .toEqual(ShExRep.getShex17());
    });

    test('Propiedades repetidas', () => {
        let shex = xmiparser.parseXMIToShEx(XMIRep.getXMI18());
        expect(shex)
            .toEqual(ShExRep.getShex18());
    });

    test('Restricción triple inversa', () => {
        let shex = xmiparser.parseXMIToShEx(XMIRep.getXMI19());
        expect(shex)
            .toEqual(ShExRep.getShex19());
    });

    test('EXTRA', () => {
        let shex = xmiparser.parseXMIToShEx(XMIRep.getXMI20());
        expect(shex)
            .toEqual(ShExRep.getShex20());
    });

    test('Expresiones etiquetadas', () => {
        let shex = xmiparser.parseXMIToShEx(XMIRep.getXMI21());
        expect(shex)
            .toEqual(ShExRep.getShex21());
    });

    test('Conjunciones', () => {
        let shex = xmiparser.parseXMIToShEx(XMIRep.getXMI22());
        expect(shex)
            .toEqual(ShExRep.getShex22());
    });

    test('Disyunciones', () => {
        let shex = xmiparser.parseXMIToShEx(XMIRep.getXMI23());
        expect(shex)
            .toEqual(ShExRep.getShex23());
    });

});