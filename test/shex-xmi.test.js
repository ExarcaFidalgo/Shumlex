const shexparser = require('../shex_util/ShExParser.js');
const XMIRep = require('../repo/xmirepository.js');
const ShExRep = require('../repo/shexrepository.js');

describe('Pruebas de la transformación ShEx-XMI', () => {

    test('Shape', () => {
        let xml = shexparser.parseShExToXMI(ShExRep.getShex1());
        expect(XMIRep.removeUniqueIDs(xml))
            .toEqual(XMIRep.removeUniqueIDs(XMIRep.getXMI1()));
    });

    test('Atributos básicos', () => {
        let xml = shexparser.parseShExToXMI(ShExRep.getShex2());

        expect(XMIRep.removeUniqueIDs(xml))
            .toEqual(XMIRep.removeUniqueIDs(XMIRep.getXMI2()));
    });

    test('Relaciones', () => {
        let xml = shexparser.parseShExToXMI(ShExRep.getShex3());
        expect(XMIRep.removeUniqueIDs(xml))
            .toEqual(XMIRep.removeUniqueIDs(XMIRep.getXMI3()));
    });

    test('Otros atributos', () => {
        let xml = shexparser.parseShExToXMI(ShExRep.getShex4());
        expect(XMIRep.removeUniqueIDs(xml))
            .toEqual(XMIRep.removeUniqueIDs(XMIRep.getXMI4()));
    });

    test('Herencia simple', () => {
        let xml = shexparser.parseShExToXMI(ShExRep.getShex5());
        expect(XMIRep.removeUniqueIDs(xml))
            .toEqual(XMIRep.removeUniqueIDs(XMIRep.getXMI5()));
    });

    test('Herencia múltiple', () => {
        let xml = shexparser.parseShExToXMI(ShExRep.getShex6());
        expect(XMIRep.removeUniqueIDs(xml))
            .toEqual(XMIRep.removeUniqueIDs(XMIRep.getXMI6()));
    });

    test('Tipos de Nodo', () => {
        let xml = shexparser.parseShExToXMI(ShExRep.getShex7());
        expect(XMIRep.removeUniqueIDs(xml))
            .toEqual(XMIRep.removeUniqueIDs(XMIRep.getXMI7()));
    });

    test('Restricción de tipo nodal como forma de máximo nivel II', () => {
        let xml = shexparser.parseShExToXMI(ShExRep.getShex8());
        expect(XMIRep.removeUniqueIDs(xml))
            .toEqual(XMIRep.removeUniqueIDs(XMIRep.getXMI8()));
    });

    test('Facetas de literales', () => {
        let xml = shexparser.parseShExToXMI(ShExRep.getShex9());
        expect(XMIRep.removeUniqueIDs(xml))
            .toEqual(XMIRep.removeUniqueIDs(XMIRep.getXMI9()));
    });

    test('Rangos y exclusiones', () => {
        let xml = shexparser.parseShExToXMI(ShExRep.getShex10());
        expect(XMIRep.removeUniqueIDs(xml))
            .toEqual(XMIRep.removeUniqueIDs(XMIRep.getXMI10()));
    });

    test('Conjuntos genéricos con exclusiones', () => {
        let xml = shexparser.parseShExToXMI(ShExRep.getShex11());
        expect(XMIRep.removeUniqueIDs(xml))
            .toEqual(XMIRep.removeUniqueIDs(XMIRep.getXMI11()));
    });

    test('Restricciones nodales como formas de máximo nivel', () => {
        let xml = shexparser.parseShExToXMI(ShExRep.getShex12());
        expect(XMIRep.removeUniqueIDs(xml))
            .toEqual(XMIRep.removeUniqueIDs(XMIRep.getXMI12()));
    });

    test('Etiquetas de lenguaje', () => {
        let xml = shexparser.parseShExToXMI(ShExRep.getShex13());
        expect(XMIRep.removeUniqueIDs(xml))
            .toEqual(XMIRep.removeUniqueIDs(XMIRep.getXMI13()));
    });

    test('Cardinalidades aplicadas a conjuntos', () => {
        let xml = shexparser.parseShExToXMI(ShExRep.getShex14());
        expect(XMIRep.removeUniqueIDs(xml))
            .toEqual(XMIRep.removeUniqueIDs(XMIRep.getXMI14()));
    });

    test('Operador OneOf', () => {
        let xml = shexparser.parseShExToXMI(ShExRep.getShex15());
        expect(XMIRep.removeUniqueIDs(xml))
            .toEqual(XMIRep.removeUniqueIDs(XMIRep.getXMI15()));
    });

    test('Formas anidadas', () => {
        let xml = shexparser.parseShExToXMI(ShExRep.getShex16());
        expect(XMIRep.removeUniqueIDs(xml))
            .toEqual(XMIRep.removeUniqueIDs(XMIRep.getXMI16()));
    });

    test('Formas cerradas', () => {
        let xml = shexparser.parseShExToXMI(ShExRep.getShex17());
        expect(XMIRep.removeUniqueIDs(xml))
            .toEqual(XMIRep.removeUniqueIDs(XMIRep.getXMI17()));
    });

    test('Propiedades repetidas', () => {
        let xml = shexparser.parseShExToXMI(ShExRep.getShex18());
        expect(XMIRep.removeUniqueIDs(xml))
            .toEqual(XMIRep.removeUniqueIDs(XMIRep.getXMI18()));
    });

    test('Restricción triple inversa', () => {
        let xml = shexparser.parseShExToXMI(ShExRep.getShex19());
        expect(XMIRep.removeUniqueIDs(xml))
            .toEqual(XMIRep.removeUniqueIDs(XMIRep.getXMI19()));
    });

    test('EXTRA', () => {
        let xml = shexparser.parseShExToXMI(ShExRep.getShex20());
        expect(XMIRep.removeUniqueIDs(xml))
            .toEqual(XMIRep.removeUniqueIDs(XMIRep.getXMI20()));
    });

    test('Expresiones etiquetadas', () => {
        let xml = shexparser.parseShExToXMI(ShExRep.getShex21());
        expect(XMIRep.removeUniqueIDs(xml))
            .toEqual(XMIRep.removeUniqueIDs(XMIRep.getXMI21()));
    });

    test('Conjunciones', () => {
        let xml = shexparser.parseShExToXMI(ShExRep.getShex22());
        expect(XMIRep.removeUniqueIDs(xml))
            .toEqual(XMIRep.removeUniqueIDs(XMIRep.getXMI22()));
    });


});