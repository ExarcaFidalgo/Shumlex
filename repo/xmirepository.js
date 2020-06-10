class Xmirepository {

    static removeUniqueIDs(text) {
        return text.replace(/xmi:id="[0-9a-zA-Z]+"/g, "xmi:id=\"\"")
            .replace(/type="[0-9a-zA-Z]+"/g, "type=\"\"")
            .replace(/association="[0-9a-zA-Z]+"/g, "association=\"\"")
            .replace(/memberEnd="[ 0-9a-zA-Z]+"/g, "memberEnd=\"\"")
            .replace(/general="[0-9a-zA-Z]+"/g, "general=\"\"")
            .replace(/constrainedElement="[0-9a-zA-Z]+"/g, "constrainedElement=\"\"");
    }

    static getXMI1() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"k8fsti2n\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8fsti2r\" name=\":User\"/>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8fsti2s\" name=\"<TypeTest>\"/>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8fsti2o\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"k8fsti2p\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8fsti2q\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>"
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
            "\t<ownedAttribute xmi:id=\"k8ftbvov\" name=\":age\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8ftbvow\" name=\"<TypeTest>\">\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvox\" name=\":z\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
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
            "\t<ownedAttribute xmi:id=\"k8ftbvp5\" name=\":f\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Byte\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8ftbvp7\" name=\":g\" visibility=\"public\" type=\"k8ftbvp6\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvp8\" name=\":h\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvp9\" name=\":i\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Integer\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvpa\" name=\":j\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Long\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvpb\" name=\":k\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Short\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvpc\" name=\":l\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Boolean\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvpd\" name=\":m\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Double\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8ftbvpe\" name=\":n\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Float\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8ftbvpg\" name=\":xyz\" visibility=\"public\" type=\"k8ftbvpf\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8ftbvop\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"k8ftbvoq\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8ftbvor\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8ftbvos\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8ftbvoz\" name=\"xsd:time\"/>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8ftbvp1\" name=\"xsd:dateTime\"/>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8ftbvp3\" name=\"xsd:duration\"/>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8ftbvp6\" name=\"xsd:decimal\"/>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8ftbvpf\" name=\"xsd:invent\"/>\n" +
            "</uml:Model>";
    }

    static getXMI3() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kb9qewqt\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qewqy\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qewqz\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qewr1\" name=\":age\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"kb9qewr0\" />\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9qewr3\" name=\":gender\" visibility=\"public\" type=\"kb9qewr2\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qewr4\" name=\":knows\" visibility=\"public\" type=\"kb9qewqy\" association=\"kb9qewr5\" ></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qewr6\" name=\":worksFor\" visibility=\"public\" type=\"kb9qewr7\" association=\"kb9qewr8\" ></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qewr9\" name=\":buys\" visibility=\"public\" type=\"kb9qewra\" association=\"kb9qewrb\" >\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kb9qewrc\" value=\"10\"/></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qewr5\" memberEnd=\"kb9qewr4 kb9qewrd\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qewrd\" visibility=\"public\" type=\"kb9qewqy\" association=\"kb9qewr5\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qewr8\" memberEnd=\"kb9qewr6 kb9qewre\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qewre\" visibility=\"public\" type=\"kb9qewqy\" association=\"kb9qewr8\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qewrb\" memberEnd=\"kb9qewr9 kb9qewrf\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qewrf\" visibility=\"public\" type=\"kb9qewqy\" association=\"kb9qewrb\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qewrg\" name=\":Ultrauser\">\n" +
            "\t<generalization xmi:id=\"kb9qewrh\" general=\"kb9qewqy\" name=\"\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qewri\" name=\":Titanuser\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qewrj\" name=\"AND\" visibility=\"public\" type=\"kb9qewrk\" association=\"kb9qewrl\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<generalization xmi:id=\"kb9qewrm\" general=\"kb9qewqy\" name=\"\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qewrl\" memberEnd=\"kb9qewrj kb9qewrn\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qewrn\" visibility=\"public\" type=\"kb9qewri\" association=\"kb9qewrl\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qewrk\" name=\"_Blank2\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qewro\" name=\"\" visibility=\"public\" type=\"kb9qewrp\" association=\"kb9qewrq\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qewrq\" memberEnd=\"kb9qewro kb9qewrr\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qewrr\" visibility=\"public\" type=\"kb9qewrk\" association=\"kb9qewrq\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qewrp\" name=\"_Blank3\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qewrs\" name=\":titancode\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qewr7\" name=\":Company\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qewrt\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qewru\" name=\":hasEmployee\" visibility=\"public\" type=\"kb9qewqy\" association=\"kb9qewrv\" >\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"kb9qewrw\" />\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kb9qewrx\" value=\"*\"/></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qewry\" name=\":possess\" visibility=\"public\" type=\"kb9qewra\" association=\"kb9qewrz\" >\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kb9qews0\" value=\"5\"/>\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kb9qews1\" value=\"*\"/></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qewrv\" memberEnd=\"kb9qewru kb9qews2\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qews2\" visibility=\"public\" type=\"kb9qewr7\" association=\"kb9qewrv\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qewrz\" memberEnd=\"kb9qewry kb9qews3\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qews3\" visibility=\"public\" type=\"kb9qewr7\" association=\"kb9qewrz\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qewra\" name=\"<Product>\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9qews4\" name=\":name\" visibility=\"public\" type=\"kb9qews5\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qews6\" name=\":sku\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Boolean\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qews7\" name=\":manufacturer\" visibility=\"public\" type=\"kb9qews8\" association=\"kb9qews9\" >\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kb9qewsa\" value=\"*\"/></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qews9\" memberEnd=\"kb9qews7 kb9qewsb\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qewsb\" visibility=\"public\" type=\"kb9qewra\" association=\"kb9qews9\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qews8\" name=\"<Organization>\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qewsc\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qewsd\" name=\":isPartOf\" visibility=\"public\" type=\"kb9qews8\" association=\"kb9qewse\" >\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"kb9qewsf\" /></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qewsg\" name=\":hasDirectives\" visibility=\"public\" type=\"kb9qewqy\" association=\"kb9qewsh\" >\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kb9qewsi\" value=\"5\"/>\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kb9qewsj\" value=\"5\"/></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qewse\" memberEnd=\"kb9qewsd kb9qewsk\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qewsk\" visibility=\"public\" type=\"kb9qews8\" association=\"kb9qewse\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qewsh\" memberEnd=\"kb9qewsg kb9qewsl\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qewsl\" visibility=\"public\" type=\"kb9qews8\" association=\"kb9qewsh\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9qewqx\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9qewqu\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9qewqv\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9qewqw\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kb9qews5\" name=\"Any\"/>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9qewr2\" name=\":gender\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9qewsm\" name=\":Male\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9qewsn\" name=\":Female\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI5() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kb9qj59b\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qj59g\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qj59h\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qj59j\" name=\":age\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"kb9qj59i\" />\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qj59k\" name=\":Ultrauser\">\n" +
            "\t<generalization xmi:id=\"kb9qj59l\" general=\"kb9qj59g\" name=\"\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qj59m\" name=\":Titanuser\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qj59n\" name=\"AND\" visibility=\"public\" type=\"kb9qj59o\" association=\"kb9qj59p\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<generalization xmi:id=\"kb9qj59q\" general=\"kb9qj59g\" name=\"\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qj59p\" memberEnd=\"kb9qj59n kb9qj59r\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qj59r\" visibility=\"public\" type=\"kb9qj59m\" association=\"kb9qj59p\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qj59o\" name=\"_Blank2\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qj59s\" name=\"\" visibility=\"public\" type=\"kb9qj59t\" association=\"kb9qj59u\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qj59u\" memberEnd=\"kb9qj59s kb9qj59v\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qj59v\" visibility=\"public\" type=\"kb9qj59o\" association=\"kb9qj59u\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qj59t\" name=\"_Blank3\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qj59w\" name=\":titancode\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qj59x\" name=\":VIPUser\">\n" +
            "\t<generalization xmi:id=\"kb9qj59y\" general=\"kb9qj59g\" name=\"\"/>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9qj59x\" name=\"Extra\" visibility=\"public\" type=\"kb9qj59z\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9qj59f\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9qj59c\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9qj59d\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9qj59e\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9qj59z\" name=\"Extra_:VIPUser\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9qj5a1\" name=\"a\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI6() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kb9qmyih\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qmyim\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qmyin\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qmyip\" name=\":age\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"kb9qmyio\" />\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qmyiq\" name=\"<Citizen>\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9qmyir\" name=\":id\" visibility=\"public\" type=\"kb9qmyis\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qmyit\" name=\":Ultrauser\">\n" +
            "\t<generalization xmi:id=\"kb9qmyiu\" general=\"kb9qmyim\" name=\"\"/>\n" +
            "\t<generalization xmi:id=\"kb9qmyiv\" general=\"kb9qmyiq\" name=\"\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qmyiw\" name=\":Titanuser\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qmyix\" name=\"AND\" visibility=\"public\" type=\"kb9qmyiy\" association=\"kb9qmyiz\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<generalization xmi:id=\"kb9qmyj0\" general=\"kb9qmyim\" name=\"\"/>\n" +
            "\t<generalization xmi:id=\"kb9qmyj1\" general=\"kb9qmyiq\" name=\"\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qmyiz\" memberEnd=\"kb9qmyix kb9qmyj2\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qmyj2\" visibility=\"public\" type=\"kb9qmyiw\" association=\"kb9qmyiz\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qmyiy\" name=\"_Blank3\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qmyj3\" name=\"\" visibility=\"public\" type=\"kb9qmyj4\" association=\"kb9qmyj5\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qmyj5\" memberEnd=\"kb9qmyj3 kb9qmyj6\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qmyj6\" visibility=\"public\" type=\"kb9qmyiy\" association=\"kb9qmyj5\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qmyj4\" name=\"_Blank4\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qmyj7\" name=\":titancode\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qmyj8\" name=\":VIPUser\">\n" +
            "\t<generalization xmi:id=\"kb9qmyj9\" general=\"kb9qmyim\" name=\"\"/>\n" +
            "\t<generalization xmi:id=\"kb9qmyja\" general=\"kb9qmyiq\" name=\"\"/>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9qmyj8\" name=\"Extra\" visibility=\"public\" type=\"kb9qmyjb\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9qmyil\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9qmyii\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9qmyij\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9qmyik\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kb9qmyis\" name=\"Any\"/>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9qmyjb\" name=\"Extra_:VIPUser\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9qmyjd\" name=\"a\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI7() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kb9rb129\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rb12e\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9rb12f\" name=\"AND\" visibility=\"public\" type=\"kb9rb12g\" association=\"kb9rb12h\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9rb12j\" name=\"nodeKind\" visibility=\"public\" type=\"kb9rb12i\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9rb12h\" memberEnd=\"kb9rb12f kb9rb12k\">\n" +
            "\t<ownedEnd xmi:id=\"kb9rb12k\" visibility=\"public\" type=\"kb9rb12e\" association=\"kb9rb12h\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rb12g\" name=\"_Blank0\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9rb12l\" name=\"\" visibility=\"public\" type=\"kb9rb12m\" association=\"kb9rb12n\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9rb12n\" memberEnd=\"kb9rb12l kb9rb12o\">\n" +
            "\t<ownedEnd xmi:id=\"kb9rb12o\" visibility=\"public\" type=\"kb9rb12g\" association=\"kb9rb12n\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rb12m\" name=\"_Blank1\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9rb12p\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rb12q\" name=\":Ultrauser\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9rb12s\" name=\"nodeKind\" visibility=\"public\" type=\"kb9rb12r\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<generalization xmi:id=\"kb9rb12t\" general=\"kb9rb12e\" name=\"\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rb12u\" name=\":Titanuser\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9rb12v\" name=\"AND\" visibility=\"public\" type=\"kb9rb12w\" association=\"kb9rb12x\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<generalization xmi:id=\"kb9rb12y\" general=\"kb9rb12e\" name=\"\"/>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9rb130\" name=\"nodeKind\" visibility=\"public\" type=\"kb9rb12z\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9rb12x\" memberEnd=\"kb9rb12v kb9rb131\">\n" +
            "\t<ownedEnd xmi:id=\"kb9rb131\" visibility=\"public\" type=\"kb9rb12u\" association=\"kb9rb12x\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rb12w\" name=\"_Blank3\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9rb132\" name=\"\" visibility=\"public\" type=\"kb9rb133\" association=\"kb9rb134\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9rb134\" memberEnd=\"kb9rb132 kb9rb135\">\n" +
            "\t<ownedEnd xmi:id=\"kb9rb135\" visibility=\"public\" type=\"kb9rb12w\" association=\"kb9rb134\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rb133\" name=\"_Blank4\"/>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rb136\" name=\"<Product>\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9rb137\" name=\"AND\" visibility=\"public\" type=\"kb9rb138\" association=\"kb9rb139\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9rb13b\" name=\"nodeKind\" visibility=\"public\" type=\"kb9rb13a\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9rb139\" memberEnd=\"kb9rb137 kb9rb13c\">\n" +
            "\t<ownedEnd xmi:id=\"kb9rb13c\" visibility=\"public\" type=\"kb9rb136\" association=\"kb9rb139\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rb138\" name=\"_Blank5\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9rb13d\" name=\"\" visibility=\"public\" type=\"kb9rb13e\" association=\"kb9rb13f\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9rb13f\" memberEnd=\"kb9rb13d kb9rb13g\">\n" +
            "\t<ownedEnd xmi:id=\"kb9rb13g\" visibility=\"public\" type=\"kb9rb138\" association=\"kb9rb13f\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rb13e\" name=\"_Blank6\"/>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rb13h\" name=\"<AThing>\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9rb13i\" name=\"nodeKind\" visibility=\"public\" type=\"kb9rb12i\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9rb12d\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9rb12a\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9rb12b\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9rb12c\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kb9rb12i\" name=\"IRI\"/>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kb9rb12r\" name=\"Literal\"/>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kb9rb12z\" name=\"NonLiteral\"/>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kb9rb13a\" name=\"BNode\"/>\n" +
            "</uml:Model>";
    }

    static getXMI9() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"k8nc59wm\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8nc59wr\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"k8nc59ws\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8nc59wv\" name=\":age\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"k8nc59wu\" />\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8nc59wx\" name=\":c\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8nc59wz\" name=\":d\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8nc59x1\" name=\":e\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8nc59x3\" name=\":f\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8nc59x5\" name=\":g\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<ownedRule xmi:id=\"k8nc59wt\" name=\"/[a-z]+/\" constrainedElement=\"k8nc59ws\">\n" +
            "\n" +
            "</ownedRule>\n" +
            "<ownedRule xmi:id=\"k8nc59ww\" name=\"MinInclusive 18\" constrainedElement=\"k8nc59wv\">\n" +
            "\n" +
            "</ownedRule>\n" +
            "<ownedRule xmi:id=\"k8nc59wy\" name=\"TotalDigits 3\" constrainedElement=\"k8nc59wx\">\n" +
            "\n" +
            "</ownedRule>\n" +
            "<ownedRule xmi:id=\"k8nc59x0\" name=\"FractionDigits 4\" constrainedElement=\"k8nc59wz\">\n" +
            "\n" +
            "</ownedRule>\n" +
            "<ownedRule xmi:id=\"k8nc59x2\" name=\"Length 6\" constrainedElement=\"k8nc59x1\">\n" +
            "\n" +
            "</ownedRule>\n" +
            "<ownedRule xmi:id=\"k8nc59x4\" name=\"MinLength 3\" constrainedElement=\"k8nc59x3\">\n" +
            "\n" +
            "</ownedRule>\n" +
            "<ownedRule xmi:id=\"k8nc59x6\" name=\"MaxLength 15\" constrainedElement=\"k8nc59x5\">\n" +
            "\n" +
            "</ownedRule>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8nc59wn\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"k8nc59wo\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8nc59wp\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8nc59wq\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI10() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"k8op8059\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8op805e\" name=\":Product\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8op805g\" name=\":status\" visibility=\"public\" type=\"k8op805f\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8op805i\" name=\":phone\" visibility=\"public\" type=\"k8op805h\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8op805k\" name=\":quantity\" visibility=\"public\" type=\"k8op805j\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8op805m\" name=\":url\" visibility=\"public\" type=\"k8op805l\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8op805a\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"k8op805b\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8op805c\" name=\"prefix codes: &lt;http://example.codes/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8op805d\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8op805f\" name=\":status\">\n" +
            "\t<ownedLiteral xmi:id=\"k8op805n\" name=\"codes:~ - codes:unknown - codes:bad.~ \"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8op805o\" name=\"&quot;111&quot;\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8op805h\" name=\":phone\">\n" +
            "\t<ownedLiteral xmi:id=\"k8op805p\" name=\"&quot;+34&quot;~ - &quot;+3468031&quot; - &quot;+3467182&quot;~ \"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8op805j\" name=\":quantity\">\n" +
            "\t<ownedLiteral xmi:id=\"k8op805q\" name=\"99~ - 9987 - 991~ \"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8op805l\" name=\":url\">\n" +
            "\t<ownedLiteral xmi:id=\"k8op805r\" name=\"codes:Personal~\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI11() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"k8opvk4h\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8opvk4m\" name=\":Product\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8opvk4o\" name=\":status\" visibility=\"public\" type=\"k8opvk4n\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8opvk4q\" name=\":name\" visibility=\"public\" type=\"k8opvk4p\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8opvk4s\" name=\":price\" visibility=\"public\" type=\"k8opvk4r\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8opvk4i\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"k8opvk4j\" name=\"prefix codes: &lt;http://example.codes/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8opvk4k\" name=\"prefix : &lt;http://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8opvk4l\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8opvk4n\" name=\":status\">\n" +
            "\t<ownedLiteral xmi:id=\"k8opvk4t\" name=\". - codes:bad \"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8opvk4p\" name=\":name\">\n" +
            "\t<ownedLiteral xmi:id=\"k8opvk4u\" name=\". - &quot;Trademark&quot; \"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8opvk4r\" name=\":price\">\n" +
            "\t<ownedLiteral xmi:id=\"k8opvk4y\" name=\". - 66 \"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI12() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"k8orwyht\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8orwyi0\" name=\":HomePage\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8orwyi1\" name=\"nodeKind\" visibility=\"public\" type=\"k8orwyi2\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8orwyi3\" name=\":CanVoteAge\">\n" +
            "\t<ownedAttribute xmi:id=\"k8orwyi4\" name=\"datatype\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Integer\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<ownedRule xmi:id=\"k8orwyi5\" name=\"MinInclusive 18\" constrainedElement=\"k8orwyi3\">\n" +
            "\n" +
            "</ownedRule>\n" +
            "<ownedRule xmi:id=\"k8orwyi6\" name=\"TotalDigits 3\" constrainedElement=\"k8orwyi3\">\n" +
            "\n" +
            "</ownedRule>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8orwyi7\" name=\":Special\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8orwyi8\" name=\"datatype\" visibility=\"public\" type=\"k8orwyi9\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8orwyhw\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"k8orwyhx\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8orwyhy\" name=\"prefix : &lt;http://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8orwyhz\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8orwyi9\" name=\":custom\"/>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8orwyi2\" name=\"IRI\"/>\n" +
            "</uml:Model>";
    }

    static getXMI13() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"k8pszqku\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8pszql2\" name=\":FrenchProduct\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8pszql4\" name=\":frlabel\" visibility=\"public\" type=\"k8pszql3\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8pszql5\" name=\":EnglishProduct\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8pszql7\" name=\":enlabel\" visibility=\"public\" type=\"k8pszql6\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8pszql8\" name=\":SpanishProduct\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8pszqla\" name=\":splabel\" visibility=\"public\" type=\"k8pszql9\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8pszqlb\" name=\":AnyProduct\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8pszqld\" name=\":label\" visibility=\"public\" type=\"k8pszqlc\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8pszqky\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"k8pszqkz\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8pszql0\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8pszql1\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8pszql3\" name=\":frlabel\">\n" +
            "\t<ownedLiteral xmi:id=\"k8pszqle\" name=\"@fr \"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8pszql6\" name=\":enlabel\">\n" +
            "\t<ownedLiteral xmi:id=\"k8pszqlf\" name=\"@en~ \"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8pszql9\" name=\":splabel\">\n" +
            "\t<ownedLiteral xmi:id=\"k8pszqlg\" name=\"@es~ - @es-AR - @es-ES \"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8pszqlc\" name=\":label\">\n" +
            "\t<ownedLiteral xmi:id=\"k8pszqlh\" name=\". - @kz \"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI14() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kb9qw4w7\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qw4wc\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4wd\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4we\" name=\"\" visibility=\"public\" type=\"kb9qw4wf\" association=\"kb9qw4wg\" aggregation=\"composite\">\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"kb9qw4wh\" /></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4wi\" name=\"\" visibility=\"public\" type=\"kb9qw4wj\" association=\"kb9qw4wk\" aggregation=\"composite\">\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"kb9qw4wl\" />\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kb9qw4wm\" value=\"*\"/></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4wn\" name=\":owns\" visibility=\"public\" type=\"kb9qw4wo\" association=\"kb9qw4wp\" ></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qw4wg\" memberEnd=\"kb9qw4we kb9qw4wq\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qw4wq\" visibility=\"public\" type=\"kb9qw4wc\" association=\"kb9qw4wg\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qw4wk\" memberEnd=\"kb9qw4wi kb9qw4wr\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qw4wr\" visibility=\"public\" type=\"kb9qw4wc\" association=\"kb9qw4wk\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qw4wp\" memberEnd=\"kb9qw4wn kb9qw4ws\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qw4ws\" visibility=\"public\" type=\"kb9qw4wc\" association=\"kb9qw4wp\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qw4wf\" name=\"_Blank1\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4wt\" name=\":givenName\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4wu\" name=\":familyName\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qw4wj\" name=\"_Blank2\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4wv\" name=\":has\" visibility=\"public\" type=\"kb9qw4ww\" association=\"kb9qw4wx\" >\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kb9qw4wy\" value=\"2\"/>\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kb9qw4wz\" value=\"*\"/></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4x0\" name=\":c\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qw4wx\" memberEnd=\"kb9qw4wv kb9qw4x1\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qw4x1\" visibility=\"public\" type=\"kb9qw4wj\" association=\"kb9qw4wx\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qw4wo\" name=\":Garage\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4x2\" name=\"\" visibility=\"public\" type=\"kb9qw4x3\" association=\"kb9qw4x4\" aggregation=\"composite\">\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kb9qw4x5\" value=\"*\"/></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qw4x4\" memberEnd=\"kb9qw4x2 kb9qw4x6\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qw4x6\" visibility=\"public\" type=\"kb9qw4wo\" association=\"kb9qw4x4\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qw4x3\" name=\"_Blank4\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4x7\" name=\"<AE86>\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4x8\" name=\"\" visibility=\"public\" type=\"kb9qw4x9\" association=\"kb9qw4xa\" aggregation=\"composite\">\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"kb9qw4xb\" /></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4xc\" name=\"\" visibility=\"public\" type=\"kb9qw4xd\" association=\"kb9qw4xe\" aggregation=\"composite\">\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"kb9qw4xf\" /></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qw4xa\" memberEnd=\"kb9qw4x8 kb9qw4xg\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qw4xg\" visibility=\"public\" type=\"kb9qw4x3\" association=\"kb9qw4xa\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qw4xe\" memberEnd=\"kb9qw4xc kb9qw4xh\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qw4xh\" visibility=\"public\" type=\"kb9qw4x3\" association=\"kb9qw4xe\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qw4x9\" name=\"_Blank5\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4xi\" name=\"<Levin>\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4xj\" name=\"<Cilinders>\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qw4xd\" name=\"_Blank6\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4xk\" name=\"<Trueno>\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qw4xl\" name=\"<Cilinders>\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qw4ww\" name=\"<Something>\"/>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9qw4wb\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9qw4w8\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9qw4w9\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9qw4wa\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI15() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kb9qy9mn\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qy9ms\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qy9mt\" name=\"OneOf\" visibility=\"public\" type=\"kb9qy9mu\" association=\"kb9qy9mv\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qy9mv\" memberEnd=\"kb9qy9mt kb9qy9mw\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qy9mw\" visibility=\"public\" type=\"kb9qy9ms\" association=\"kb9qy9mv\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qy9mu\" name=\"_Blank1\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qy9mx\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qy9my\" name=\"\" visibility=\"public\" type=\"kb9qy9mz\" association=\"kb9qy9n0\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qy9n0\" memberEnd=\"kb9qy9my kb9qy9n1\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qy9n1\" visibility=\"public\" type=\"kb9qy9mu\" association=\"kb9qy9n0\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qy9mz\" name=\"_Blank2\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qy9n3\" name=\":givenName\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kb9qy9n2\" value=\"*\"/>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qy9n4\" name=\":familyName\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qy9n5\" name=\":Car\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qy9n6\" name=\":model\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qy9n7\" name=\"OneOf\" visibility=\"public\" type=\"kb9qy9n8\" association=\"kb9qy9n9\" aggregation=\"composite\">\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kb9qy9na\" value=\"2\"/></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9qy9n9\" memberEnd=\"kb9qy9n7 kb9qy9nb\">\n" +
            "\t<ownedEnd xmi:id=\"kb9qy9nb\" visibility=\"public\" type=\"kb9qy9n5\" association=\"kb9qy9n9\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9qy9n8\" name=\"_Blank4\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9qy9nc\" name=\":turbo\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qy9nd\" name=\":misfiring\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9qy9ne\" name=\":atm\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9qy9mr\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9qy9mo\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9qy9mp\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9qy9mq\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI16() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kb9rebyg\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rebyl\" name=\":Car\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9rebym\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9rebyn\" name=\":belongs\" visibility=\"public\" type=\"kb9rebyo\" association=\"kb9rebyp\" ></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9rebyp\" memberEnd=\"kb9rebyn kb9rebyq\">\n" +
            "\t<ownedEnd xmi:id=\"kb9rebyq\" visibility=\"public\" type=\"kb9rebyl\" association=\"kb9rebyp\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rebyr\" name=\":Garage\"/>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rebys\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9rebyt\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9rebyu\" name=\":worksFor\" visibility=\"public\" type=\"kb9rebyo\" association=\"kb9rebyv\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9rebyv\" memberEnd=\"kb9rebyu kb9rebyw\">\n" +
            "\t<ownedEnd xmi:id=\"kb9rebyw\" visibility=\"public\" type=\"kb9rebys\" association=\"kb9rebyv\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rebyo\" name=\"_:1\">\n" +
            "\t<generalization xmi:id=\"kb9rebyy\" general=\"kb9rebyx\" name=\"\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rebyx\" name=\":Company\"/>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rebyx\" name=\":Company\"/>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rebyz\" name=\":GreatGrandson\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9rebz0\" name=\":parent\" visibility=\"public\" type=\"kb9rebz1\" association=\"kb9rebz2\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9rebz2\" memberEnd=\"kb9rebz0 kb9rebz3\">\n" +
            "\t<ownedEnd xmi:id=\"kb9rebz3\" visibility=\"public\" type=\"kb9rebyz\" association=\"kb9rebz2\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rebz1\" name=\"_:2\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9rebz4\" name=\":parent\" visibility=\"public\" type=\"kb9rebz5\" association=\"kb9rebz6\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9rebz6\" memberEnd=\"kb9rebz4 kb9rebz7\">\n" +
            "\t<ownedEnd xmi:id=\"kb9rebz7\" visibility=\"public\" type=\"kb9rebz1\" association=\"kb9rebz6\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rebz5\" name=\"_:3\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9rebz9\" name=\":parent\" visibility=\"public\" type=\"kb9rebza\" isUnique=\"true\">\n" +
            "\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kb9rebz8\" value=\"*\"/>\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rebyo\" name=\"_:1\">\n" +
            "\t<generalization xmi:id=\"kb9rebzb\" general=\"kb9rebyr\" name=\"\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9rebyk\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9rebyh\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9rebyi\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9rebyj\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kb9rebza\" name=\"Any\"/>\n" +
            "</uml:Model>";
    }

    static getXMI17() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kb9r11mm\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9r11mr\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9r11ms\" name=\"AND\" visibility=\"public\" type=\"kb9r11mt\" association=\"kb9r11mu\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9r11mw\" name=\"nodeKind\" visibility=\"public\" type=\"kb9r11mv\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9r11mu\" memberEnd=\"kb9r11ms kb9r11mx\">\n" +
            "\t<ownedEnd xmi:id=\"kb9r11mx\" visibility=\"public\" type=\"kb9r11mr\" association=\"kb9r11mu\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9r11mt\" name=\"_Blank0\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9r11my\" name=\"\" visibility=\"public\" type=\"kb9r11mz\" association=\"kb9r11n0\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9r11n0\" memberEnd=\"kb9r11my kb9r11n1\">\n" +
            "\t<ownedEnd xmi:id=\"kb9r11n1\" visibility=\"public\" type=\"kb9r11mt\" association=\"kb9r11n0\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9r11mz\" name=\"_Blank1\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9r11n2\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9r11n5\" name=\":age\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"kb9r11n4\" />\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9r11n7\" name=\":gender\" visibility=\"public\" type=\"kb9r11n6\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9r11n8\" name=\":knows\" visibility=\"public\" type=\"kb9r11mr\" association=\"kb9r11n9\" ></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9r11n9\" memberEnd=\"kb9r11n8 kb9r11na\">\n" +
            "\t<ownedEnd xmi:id=\"kb9r11na\" visibility=\"public\" type=\"kb9r11mz\" association=\"kb9r11n9\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9r11nb\" name=\":Company\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9r11nc\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<ownedRule xmi:id=\"kb9r11n3\" name=\"MaxLength 3\" constrainedElement=\"kb9r11n2\">\n" +
            "\n" +
            "</ownedRule>\n" +
            "<ownedRule xmi:id=\"kb9r11nd\" name=\"CLOSED\" constrainedElement=\"kb9r11nb\">\n" +
            "\n" +
            "</ownedRule>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9r11mq\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9r11mn\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9r11mo\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9r11mp\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9r11n6\" name=\":gender\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9r11ne\" name=\":Male\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9r11nf\" name=\":Female\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kb9r11mv\" name=\"IRI\"/>\n" +
            "</uml:Model>";
    }

    static getXMI18() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kb9rugbv\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rugc0\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9rugc1\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9rugc2\" name=\":parent\" visibility=\"public\" type=\"kb9rugc3\" association=\"kb9rugc4\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9rugc5\" name=\":parent\" visibility=\"public\" type=\"kb9rugc6\" association=\"kb9rugc7\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9rugc4\" memberEnd=\"kb9rugc2 kb9rugc8\">\n" +
            "\t<ownedEnd xmi:id=\"kb9rugc8\" visibility=\"public\" type=\"kb9rugc0\" association=\"kb9rugc4\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9rugc7\" memberEnd=\"kb9rugc5 kb9rugc9\">\n" +
            "\t<ownedEnd xmi:id=\"kb9rugc9\" visibility=\"public\" type=\"kb9rugc0\" association=\"kb9rugc7\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rugc3\" name=\"_:1\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9rugcb\" name=\":gender\" visibility=\"public\" type=\"kb9rugca\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rugc6\" name=\"_:2\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9rugcd\" name=\":gender\" visibility=\"public\" type=\"kb9rugcc\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9rugbz\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9rugbw\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9rugbx\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9rugby\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9rugca\" name=\":gender\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9rugce\" name=\":Male\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9rugcc\" name=\":gender\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9rugcf\" name=\":Female\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI19() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kb9r1rli\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9r1rln\" name=\":Person\"/>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9r1rlo\" name=\":User\">\n" +
            "\t<generalization xmi:id=\"kb9r1rlp\" general=\"kb9r1rln\" name=\"^\"/>\n" +
            "\t<ownedAttribute xmi:id=\"kb9r1rlq\" name=\"^:name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9r1rls\" name=\"^:gender\" visibility=\"public\" type=\"kb9r1rlr\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9r1rlt\" name=\":Company\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9r1rlu\" name=\"^:worksFor\" visibility=\"public\" type=\"kb9r1rlo\" association=\"kb9r1rlv\" >\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kb9r1rlw\" value=\"*\"/></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9r1rlv\" memberEnd=\"kb9r1rlu kb9r1rlx\">\n" +
            "\t<ownedEnd xmi:id=\"kb9r1rlx\" visibility=\"public\" type=\"kb9r1rlt\" association=\"kb9r1rlv\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9r1rlm\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9r1rlj\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9r1rlk\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9r1rll\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9r1rlr\" name=\"^:gender\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9r1rly\" name=\":Male\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9r1rlz\" name=\":Female\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI20() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kb9r357f\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9r357k\" name=\":FollowSpaniards\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9r357l\" name=\":follows\" visibility=\"public\" type=\"kb9r357m\" association=\"kb9r357n\" aggregation=\"composite\">\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kb9r357o\" value=\"*\"/></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9r357k\" name=\"Extra\" visibility=\"public\" type=\"kb9r357p\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9r357n\" memberEnd=\"kb9r357l kb9r357r\">\n" +
            "\t<ownedEnd xmi:id=\"kb9r357r\" visibility=\"public\" type=\"kb9r357k\" association=\"kb9r357n\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9r357m\" name=\"_:1\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9r357t\" name=\":nationality\" visibility=\"public\" type=\"kb9r357s\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9r357j\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9r357g\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9r357h\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9r357i\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9r357p\" name=\"Extra_:FollowSpaniards\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9r357u\" name=\":follows\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9r357s\" name=\":nationality\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9r357v\" name=\":Spain\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI21() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kb9r3izr\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9r3izw\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9r3izx\" name=\"$:name\" visibility=\"public\" type=\"kb9r3izy\" association=\"kb9r3izz\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9r3j01\" name=\":email\" visibility=\"public\" type=\"kb9r3j00\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9r3izz\" memberEnd=\"kb9r3izx kb9r3j02\">\n" +
            "\t<ownedEnd xmi:id=\"kb9r3j02\" visibility=\"public\" type=\"kb9r3izw\" association=\"kb9r3izz\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9r3izy\" name=\"_Blank1\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9r3j03\" name=\"OneOf\" visibility=\"public\" type=\"kb9r3j04\" association=\"kb9r3j05\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9r3j05\" memberEnd=\"kb9r3j03 kb9r3j06\">\n" +
            "\t<ownedEnd xmi:id=\"kb9r3j06\" visibility=\"public\" type=\"kb9r3izy\" association=\"kb9r3j05\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9r3j04\" name=\"_Blank2\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9r3j07\" name=\":name\" visibility=\"public\" type=\"kb9r3j08\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9r3j09\" name=\"\" visibility=\"public\" type=\"kb9r3j0a\" association=\"kb9r3j0b\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9r3j0b\" memberEnd=\"kb9r3j09 kb9r3j0c\">\n" +
            "\t<ownedEnd xmi:id=\"kb9r3j0c\" visibility=\"public\" type=\"kb9r3j04\" association=\"kb9r3j0b\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9r3j0a\" name=\"_Blank3\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9r3j0d\" name=\":givenName\" visibility=\"public\" type=\"kb9r3j08\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9r3j0e\" name=\":familyName\" visibility=\"public\" type=\"kb9r3j08\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9r3j0f\" name=\":Employee\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9r3j0g\" name=\"&#38;:name\" visibility=\"public\" type=\"kb9r3izy\" association=\"kb9r3j0h\" ></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9r3j0i\" name=\":employeeId\" visibility=\"public\" type=\"kb9r3j08\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9r3j0h\" memberEnd=\"kb9r3j0g kb9r3j0j\">\n" +
            "\t<ownedEnd xmi:id=\"kb9r3j0j\" visibility=\"public\" type=\"kb9r3j0f\" association=\"kb9r3j0h\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9r3izv\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9r3izs\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9r3izt\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9r3izu\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kb9r3j08\" name=\"Any\"/>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kb9r3j00\" name=\"IRI\"/>\n" +
            "</uml:Model>";
    }

    static getXMI22() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kb9rij4z\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rij54\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9rij55\" name=\"AND\" visibility=\"public\" type=\"kb9rij56\" association=\"kb9rij57\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9rij57\" memberEnd=\"kb9rij55 kb9rij58\">\n" +
            "\t<ownedEnd xmi:id=\"kb9rij58\" visibility=\"public\" type=\"kb9rij54\" association=\"kb9rij57\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rij56\" name=\"_Blank0\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9rij59\" name=\"\" visibility=\"public\" type=\"kb9rij5a\" association=\"kb9rij5b\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9rij5c\" name=\"\" visibility=\"public\" type=\"kb9rij5d\" association=\"kb9rij5e\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9rij5b\" memberEnd=\"kb9rij59 kb9rij5f\">\n" +
            "\t<ownedEnd xmi:id=\"kb9rij5f\" visibility=\"public\" type=\"kb9rij56\" association=\"kb9rij5b\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9rij5e\" memberEnd=\"kb9rij5c kb9rij5g\">\n" +
            "\t<ownedEnd xmi:id=\"kb9rij5g\" visibility=\"public\" type=\"kb9rij56\" association=\"kb9rij5e\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rij5a\" name=\"_Blank1\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9rij5h\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9rij5j\" name=\":owns\" visibility=\"public\" type=\"kb9rij5i\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rij5d\" name=\"_Blank2\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9rij5k\" name=\":owns\" visibility=\"public\" type=\"kb9rij5l\" association=\"kb9rij5m\" ></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9rij5m\" memberEnd=\"kb9rij5k kb9rij5n\">\n" +
            "\t<ownedEnd xmi:id=\"kb9rij5n\" visibility=\"public\" type=\"kb9rij5d\" association=\"kb9rij5m\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rij5o\" name=\":Titanuser\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9rij5p\" name=\"AND\" visibility=\"public\" type=\"kb9rij5q\" association=\"kb9rij5r\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<generalization xmi:id=\"kb9rij5s\" general=\"kb9rij54\" name=\"\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9rij5r\" memberEnd=\"kb9rij5p kb9rij5t\">\n" +
            "\t<ownedEnd xmi:id=\"kb9rij5t\" visibility=\"public\" type=\"kb9rij5o\" association=\"kb9rij5r\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rij5q\" name=\"_Blank3\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9rij5u\" name=\"\" visibility=\"public\" type=\"kb9rij5v\" association=\"kb9rij5w\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kb9rij5x\" name=\"\" visibility=\"public\" type=\"kb9rij5y\" association=\"kb9rij5z\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9rij5w\" memberEnd=\"kb9rij5u kb9rij60\">\n" +
            "\t<ownedEnd xmi:id=\"kb9rij60\" visibility=\"public\" type=\"kb9rij5q\" association=\"kb9rij5w\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kb9rij5z\" memberEnd=\"kb9rij5x kb9rij61\">\n" +
            "\t<ownedEnd xmi:id=\"kb9rij61\" visibility=\"public\" type=\"kb9rij5q\" association=\"kb9rij5z\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rij5v\" name=\"_Blank4\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9rij62\" name=\":titancode\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rij5y\" name=\"_Blank5\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9rij64\" name=\":owns\" visibility=\"public\" type=\"kb9rij63\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rij65\" name=\":Ultrauser\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kb9rij66\" name=\"nodeKind\" visibility=\"public\" type=\"kb9rij63\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<generalization xmi:id=\"kb9rij67\" general=\"kb9rij54\" name=\"\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kb9rij5l\" name=\":Product\">\n" +
            "\t<ownedAttribute xmi:id=\"kb9rij68\" name=\":productId\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<ownedRule xmi:id=\"kb9rij6a\" name=\"MinLength 5\" constrainedElement=\"kb9rij68\">\n" +
            "\n" +
            "</ownedRule>\n" +
            "<ownedRule xmi:id=\"kb9rij6b\" name=\"MaxLength 10\" constrainedElement=\"kb9rij68\">\n" +
            "\n" +
            "</ownedRule>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kb9rij53\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kb9rij50\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9rij51\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kb9rij52\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kb9rij5i\" name=\"IRI\"/>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kb9rij63\" name=\"Literal\"/>\n" +
            "</uml:Model>";
    }

}
module.exports = Xmirepository;