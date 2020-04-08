const shexparser = require('../shex/shexparser.js');
const xmiparser = require('../xmi/XMIParser.js');
const TestRep = require('./testrepository.js');

describe('Pruebas de la transformación ShEx-XMI', () => {

    test('Shape', () => {
        let xml = shexparser.parseShEx(TestRep.getShex1());
        expect(TestRep.removeUniqueIDs(xml))
            .toEqual(TestRep.removeUniqueIDs(TestRep.getXMI1()));
    });

    test('Atributos básicos', () => {
        let xml = shexparser.parseShEx(TestRep.getShex2());

        expect(TestRep.removeUniqueIDs(xml))
            .toEqual(TestRep.removeUniqueIDs(TestRep.getXMI2()));
    });

    test('Relaciones', () => {
        let xml = shexparser.parseShEx(TestRep.getShex3());
        expect(TestRep.removeUniqueIDs(xml))
            .toEqual(TestRep.removeUniqueIDs(TestRep.getXMI3()));
    });

    test('Otros atributos', () => {
        let xml = shexparser.parseShEx(TestRep.getShex4());
        expect(TestRep.removeUniqueIDs(xml))
            .toEqual(TestRep.removeUniqueIDs(TestRep.getXMI4()));
    });

    test('Herencia simple', () => {
        let xml = shexparser.parseShEx(TestRep.getShex5());
        expect(TestRep.removeUniqueIDs(xml))
            .toEqual(TestRep.removeUniqueIDs(TestRep.getXMI5()));
    });

    test('Herencia múltiple', () => {
        let xml = shexparser.parseShEx(TestRep.getShex6());
        expect(TestRep.removeUniqueIDs(xml))
            .toEqual(TestRep.removeUniqueIDs(TestRep.getXMI6()));
    });

    test('Tipos de Nodo', () => {
        let xml = shexparser.parseShEx(TestRep.getShex7());
        expect(TestRep.removeUniqueIDs(xml))
            .toEqual(TestRep.removeUniqueIDs(TestRep.getXMI7()));
    });

    test('Restricción de tipo nodal como forma de máximo nivel II', () => {
        let xml = shexparser.parseShEx(TestRep.getShex8());
        expect(TestRep.removeUniqueIDs(xml))
            .toEqual(TestRep.removeUniqueIDs(TestRep.getXMI8()));
    });

    test('Facetas de literales', () => {
        let xml = shexparser.parseShEx(TestRep.getShex9());
        expect(TestRep.removeUniqueIDs(xml))
            .toEqual(TestRep.removeUniqueIDs(TestRep.getXMI9()));
    });

    test('Rangos y exclusiones', () => {
        let xml = shexparser.parseShEx(TestRep.getShex10());
        expect(TestRep.removeUniqueIDs(xml))
            .toEqual(TestRep.removeUniqueIDs(TestRep.getXMI10()));
    });

    test('Conjuntos genéricos con exclusiones', () => {
        let xml = shexparser.parseShEx(TestRep.getShex11());
        expect(TestRep.removeUniqueIDs(xml))
            .toEqual(TestRep.removeUniqueIDs(TestRep.getXMI11()));
    });

    test('Restricciones nodales como formas de máximo nivel', () => {
        let xml = shexparser.parseShEx(TestRep.getShex12());
        expect(TestRep.removeUniqueIDs(xml))
            .toEqual(TestRep.removeUniqueIDs(TestRep.getXMI12()));
    });

    test('Etiquetas de lenguaje', () => {
        let xml = shexparser.parseShEx(TestRep.getShex13());
        expect(TestRep.removeUniqueIDs(xml))
            .toEqual(TestRep.removeUniqueIDs(TestRep.getXMI13()));
    });

});

describe('Pruebas de la transformación XMI-ShEx', () => {

    test('Shape', () => {
        let shex = xmiparser.parseXMI(TestRep.getXMI1());
        expect(shex)
            .toEqual(TestRep.getShex1());
    });

    test('Atributos básicos', () => {
        let shex = xmiparser.parseXMI(TestRep.getXMI2());
        expect(shex)
            .toEqual(TestRep.getShex2());
    });

    test('Relaciones', () => {
        let shex = xmiparser.parseXMI(TestRep.getXMI3());
        expect(shex)
            .toEqual(TestRep.getShex3());
    });

    test('Otros atributos', () => {
        let shex = xmiparser.parseXMI(TestRep.getXMI4());
        expect(shex)
            .toEqual(TestRep.getShex4());
    });

    test('Herencia simple', () => {
        let shex = xmiparser.parseXMI(TestRep.getXMI5());
        expect(shex)
            .toEqual(TestRep.getGenShex5());
    });

    test('Herencia múltiple', () => {
        let shex = xmiparser.parseXMI(TestRep.getXMI6());
        expect(shex)
            .toEqual(TestRep.getGenShex6());
    });

    test('Tipos de Nodo', () => {
        let shex = xmiparser.parseXMI(TestRep.getXMI7());
        expect(shex)
            .toEqual(TestRep.getGenShex7());
    });

    test('Restricción de tipo nodal como forma de máximo nivel', () => {
        let shex = xmiparser.parseXMI(TestRep.getXMI8());
        expect(shex)
            .toEqual(TestRep.getGenShex8());
    });

    test('Facetas de literales', () => {
        let shex = xmiparser.parseXMI(TestRep.getXMI9());
        expect(shex)
            .toEqual(TestRep.getShex9());
    });

    test('Rangos y exclusiones', () => {
        let shex = xmiparser.parseXMI(TestRep.getXMI10());
        expect(shex)
            .toEqual(TestRep.getShex10());
    });

    test('Conjuntos genéricos con exclusiones', () => {
        let shex = xmiparser.parseXMI(TestRep.getXMI11());
        expect(shex)
            .toEqual(TestRep.getShex11());
    });

    test('Restricciones nodales como formas de máximo nivel II', () => {
        let shex = xmiparser.parseXMI(TestRep.getXMI12());
        expect(shex)
            .toEqual(TestRep.getShex12());
    });

    test('Etiquetas de lenguaje', () => {
        let shex = xmiparser.parseXMI(TestRep.getXMI13());
        expect(shex)
            .toEqual(TestRep.getShex13());
    });

});