const shexparser = require('../shex/shexparser.js');
const xmiparser = require('../xmi/xmiparser.js');
const TestRep = require('./testrepository.js');

describe('Pruebas de la transformación ShEx-XMI', () => {

    test('Shape', () => {
        let xml = shexparser.parseShEx(TestRep.getShex1());
        expect(xml.replace(/xmi:id="[0-9a-zA-Z]+"/g, "xmi:id=\"\""))
            .toEqual(TestRep.getXMI1().replace(/xmi:id="[0-9a-zA-Z]+"/g, "xmi:id=\"\""));
    });

    test('Atributos básicos', () => {
        let xml = shexparser.parseShEx(TestRep.getShex2());
        expect(xml.replace(/xmi:id="[0-9a-zA-Z]+"/g, "xmi:id=\"\"")
            .replace(/type="[0-9a-zA-Z]+"/g, "type=\"\""))
            .toEqual(TestRep.getXMI2().replace(/xmi:id="[0-9a-zA-Z]+"/g, "xmi:id=\"\"")
                .replace(/type="[0-9a-zA-Z]+"/g, "type=\"\""));
    });

});