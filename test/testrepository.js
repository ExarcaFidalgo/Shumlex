class TestRepository {

    static getShex1() {
        return "prefix : <https://schema.org/>\n" +
            "base <http://example.org/>\n"
            + ":User {\n" +
            "}\n\n"
            + "<TypeTest> {\n" +
            "    }";
    }

    static getXMI1() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"k8fsti2n\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8fsti2r\" name=\":User\">\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8fsti2s\" name=\"TypeTest\">\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8fsti2o\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"k8fsti2p\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8fsti2q\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>"
    }

    static getShex2() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n"
            + ":User {\n" +
            "    :name xsd:string;\n" +
            "    :age xsd:int;\n" +
            "}\n\n"
            + "<TypeTest> {\n" +
            "    :z xsd:string;\n" +
            "    :b xsd:date;\n" +
            "    :c xsd:time;\n" +
            "    :d xsd:dateTime;\n" +
            "    :e xsd:duration;\n" +
            "    :f xsd:byte;\n" +
            "    :g xsd:decimal;\n" +
            "    :h xsd:int;\n" +
            "    :i xsd:integer;\n" +
            "    :j xsd:long;\n" +
            "    :k xsd:short;\n" +
            "    :l xsd:boolean;\n" +
            "    :m xsd:double;\n" +
            "    :n xsd:float;\n" +
            "    :xyz xsd:invent;\n" +
            "    }";
    }

    static getXMI2() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"k8ftbvoo\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8ftbvot\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvou\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvov\" name=\":age\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8ftbvow\" name=\"TypeTest\">\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvox\" name=\":z\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvoy\" name=\":b\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Date\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8ftbvp0\" name=\":c\" visibility=\"public\" type=\"k8ftbvoz\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8ftbvp2\" name=\":d\" visibility=\"public\" type=\"k8ftbvp1\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8ftbvp4\" name=\":e\" visibility=\"public\" type=\"k8ftbvp3\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvp5\" name=\":f\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Byte\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8ftbvp7\" name=\":g\" visibility=\"public\" type=\"k8ftbvp6\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvp8\" name=\":h\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvp9\" name=\":i\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Integer\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvpa\" name=\":j\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Long\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvpb\" name=\":k\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Short\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvpc\" name=\":l\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Boolean\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvpd\" name=\":m\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Double\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvpe\" name=\":n\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Float\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8ftbvpg\" name=\":xyz\" visibility=\"public\" type=\"k8ftbvpf\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8ftbvop\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"k8ftbvoq\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8ftbvor\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8ftbvos\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8ftbvoz\" name=\"xsd:time\">\n" +
            "\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8ftbvp1\" name=\"xsd:dateTime\">\n" +
            "\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8ftbvp3\" name=\"xsd:duration\">\n" +
            "\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8ftbvp6\" name=\"xsd:decimal\">\n" +
            "\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8ftbvpf\" name=\"xsd:invent\">\n" +
            "\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }
}
module.exports = TestRepository;