const xmiparser = require('../xmi/XMIParser.js');
const XMIRep = require('../repo/xmirepository.js');
const ShExRep = require('../repo/shexrepository.js');

describe('Pruebas de la transformación XMI-ShEx', () => {

    test('Shape', () => {
        let shex = xmiparser.parseXMI(XMIRep.getXMI1());
        expect(shex)
            .toEqual(ShExRep.getShex1());
    });

    test('Atributos básicos', () => {
        let shex = xmiparser.parseXMI(XMIRep.getXMI2());
        expect(shex)
            .toEqual(ShExRep.getShex2());
    });

    test('Relaciones', () => {
        let shex = xmiparser.parseXMI(XMIRep.getXMI3());
        expect(shex)
            .toEqual(ShExRep.getShex3());
    });

    test('Otros atributos', () => {
        let shex = xmiparser.parseXMI(XMIRep.getXMI4());
        expect(shex)
            .toEqual(ShExRep.getShex4());
    });

    test('Herencia simple', () => {
        let shex = xmiparser.parseXMI(XMIRep.getXMI5());
        expect(shex)
            .toEqual(ShExRep.getGenShex5());
    });

    test('Herencia múltiple', () => {
        let shex = xmiparser.parseXMI(XMIRep.getXMI6());
        expect(shex)
            .toEqual(ShExRep.getGenShex6());
    });

    test('Tipos de Nodo', () => {
        let shex = xmiparser.parseXMI(XMIRep.getXMI7());
        expect(shex)
            .toEqual(ShExRep.getGenShex7());
    });

    test('Restricción de tipo nodal como forma de máximo nivel', () => {
        let shex = xmiparser.parseXMI(XMIRep.getXMI8());
        expect(shex)
            .toEqual(ShExRep.getGenShex8());
    });

    test('Facetas de literales', () => {
        let shex = xmiparser.parseXMI(XMIRep.getXMI9());
        expect(shex)
            .toEqual(ShExRep.getShex9());
    });

    test('Rangos y exclusiones', () => {
        let shex = xmiparser.parseXMI(XMIRep.getXMI10());
        expect(shex)
            .toEqual(ShExRep.getShex10());
    });

    test('Conjuntos genéricos con exclusiones', () => {
        let shex = xmiparser.parseXMI(XMIRep.getXMI11());
        expect(shex)
            .toEqual(ShExRep.getShex11());
    });

    test('Restricciones nodales como formas de máximo nivel II', () => {
        let shex = xmiparser.parseXMI(XMIRep.getXMI12());
        expect(shex)
            .toEqual(ShExRep.getShex12());
    });

    test('Etiquetas de lenguaje', () => {
        let shex = xmiparser.parseXMI(XMIRep.getXMI13());
        expect(shex)
            .toEqual(ShExRep.getShex13());
    });

    test('Cardinalidades aplicadas a conjuntos', () => {
        let shex = xmiparser.parseXMI(XMIRep.getXMI14());
        expect(shex)
            .toEqual(ShExRep.getShex14());
    });

    test('Operador OneOf', () => {
        let shex = xmiparser.parseXMI(XMIRep.getXMI15());
        expect(shex)
            .toEqual(ShExRep.getShex15());
    });

    test('Formas anidadas', () => {
        let shex = xmiparser.parseXMI(XMIRep.getXMI16());
        expect(shex)
            .toEqual(ShExRep.getGenShex16());
    });

    test('Formas cerradas', () => {
        let shex = xmiparser.parseXMI(XMIRep.getXMI17());
        expect(shex)
            .toEqual(ShExRep.getShex17());
    });

    test('Propiedades repetidas', () => {
        let shex = xmiparser.parseXMI(XMIRep.getXMI18());
        expect(shex)
            .toEqual(ShExRep.getGenShex18());
    });

    test('Restricción triple inversa', () => {
        let shex = xmiparser.parseXMI(XMIRep.getXMI19());
        expect(shex)
            .toEqual(ShExRep.getShex19());
    });

    test('EXTRA', () => {
        let shex = xmiparser.parseXMI(XMIRep.getXMI20());
        expect(shex)
            .toEqual(ShExRep.getGenShex20());
    });

    test('Expresiones etiquetadas', () => {
        let shex = xmiparser.parseXMI(XMIRep.getXMI21());
        expect(shex)
            .toEqual(ShExRep.getShex21());
    });

    test('Conjunciones', () => {
        let shex = xmiparser.parseXMI(XMIRep.getXMI22());
        expect(shex)
            .toEqual(ShExRep.getGenShex22());
    });

});