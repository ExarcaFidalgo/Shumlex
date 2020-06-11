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
            " xmi:id=\"kbaoidci\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbaoidcn\" name=\":HomePage\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbaoidcr\" name=\"nodeKind\" visibility=\"public\" type=\"kbaoidcq\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbaoidco\" name=\":CanVoteAge\">\n" +
            "\t<ownedAttribute xmi:id=\"kbaoidco\" name=\"datatype\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Integer\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<ownedRule xmi:id=\"kbaoidct\" name=\"MinInclusive 18\" constrainedElement=\"kbaoidco\">\n" +
            "\n" +
            "</ownedRule>\n" +
            "<ownedRule xmi:id=\"kbaoidcu\" name=\"TotalDigits 3\" constrainedElement=\"kbaoidco\">\n" +
            "\n" +
            "</ownedRule>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbaoidcp\" name=\":Special\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbaoidcv\" name=\"datatype\" visibility=\"public\" type=\"kbaoidcw\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbaoidcm\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kbaoidcj\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbaoidck\" name=\"prefix : &lt;http://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbaoidcl\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kbaoidcw\" name=\":custom\"/>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kbaoidcq\" name=\"IRI\"/>\n" +
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
            " xmi:id=\"kbam4jq9\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbam4jqe\" name=\":Car\">\n" +
            "\t<ownedAttribute xmi:id=\"kbam4jqk\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbam4jql\" name=\":belongs\" visibility=\"public\" type=\"kbam4jqj\" association=\"kbam4jqm\" ></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbam4jqm\" memberEnd=\"kbam4jql kbam4jqn\">\n" +
            "\t<ownedEnd xmi:id=\"kbam4jqn\" visibility=\"public\" type=\"kbam4jqe\" association=\"kbam4jqm\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbam4jqf\" name=\":Garage\"/>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbam4jqg\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kbam4jqo\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbam4jqp\" name=\":worksFor\" visibility=\"public\" type=\"kbam4jqq\" association=\"kbam4jqr\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbam4jqr\" memberEnd=\"kbam4jqp kbam4jqs\">\n" +
            "\t<ownedEnd xmi:id=\"kbam4jqs\" visibility=\"public\" type=\"kbam4jqg\" association=\"kbam4jqr\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbam4jqq\" name=\"_:2\">\n" +
            "\t<generalization xmi:id=\"kbam4jqt\" general=\"kbam4jqh\" name=\"\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbam4jqh\" name=\":Company\"/>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbam4jqi\" name=\":GreatGrandson\">\n" +
            "\t<ownedAttribute xmi:id=\"kbam4jqu\" name=\":parent\" visibility=\"public\" type=\"kbam4jqv\" association=\"kbam4jqw\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbam4jqw\" memberEnd=\"kbam4jqu kbam4jqx\">\n" +
            "\t<ownedEnd xmi:id=\"kbam4jqx\" visibility=\"public\" type=\"kbam4jqi\" association=\"kbam4jqw\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbam4jqv\" name=\"_:3\">\n" +
            "\t<ownedAttribute xmi:id=\"kbam4jqy\" name=\":parent\" visibility=\"public\" type=\"kbam4jqz\" association=\"kbam4jr0\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbam4jr0\" memberEnd=\"kbam4jqy kbam4jr1\">\n" +
            "\t<ownedEnd xmi:id=\"kbam4jr1\" visibility=\"public\" type=\"kbam4jqv\" association=\"kbam4jr0\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbam4jqz\" name=\"_:4\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbam4jr3\" name=\":parent\" visibility=\"public\" type=\"kbam4jr4\" isUnique=\"true\">\n" +
            "\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kbam4jr2\" value=\"*\"/>\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbam4jqj\" name=\"_:1\">\n" +
            "\t<generalization xmi:id=\"kbam4jr5\" general=\"kbam4jqf\" name=\"\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbam4jqd\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kbam4jqa\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbam4jqb\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbam4jqc\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kbam4jr4\" name=\"Any\"/>\n" +
            "</uml:Model>";
    }

    static getXMI17() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kbamopd3\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamopd8\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kbamopdb\" name=\"AND\" visibility=\"public\" type=\"kbamopdc\" association=\"kbamopdd\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbamopdf\" name=\"nodeKind\" visibility=\"public\" type=\"kbamopde\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<ownedRule xmi:id=\"kbamopda\" name=\"CLOSED\" constrainedElement=\"kbamopd8\">\n" +
            "\n" +
            "</ownedRule>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamopdd\" memberEnd=\"kbamopdb kbamopdg\">\n" +
            "\t<ownedEnd xmi:id=\"kbamopdg\" visibility=\"public\" type=\"kbamopd8\" association=\"kbamopdd\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamopdc\" name=\"_Blank0\">\n" +
            "\t<ownedAttribute xmi:id=\"kbamopdh\" name=\"\" visibility=\"public\" type=\"kbamopdi\" association=\"kbamopdj\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamopdj\" memberEnd=\"kbamopdh kbamopdk\">\n" +
            "\t<ownedEnd xmi:id=\"kbamopdk\" visibility=\"public\" type=\"kbamopdc\" association=\"kbamopdj\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamopdi\" name=\"_Blank1\">\n" +
            "\t<ownedAttribute xmi:id=\"kbamopdl\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbamopdo\" name=\":age\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"kbamopdn\" />\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbamopdq\" name=\":gender\" visibility=\"public\" type=\"kbamopdp\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbamopdr\" name=\":knows\" visibility=\"public\" type=\"kbamopd8\" association=\"kbamopds\" ></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamopds\" memberEnd=\"kbamopdr kbamopdt\">\n" +
            "\t<ownedEnd xmi:id=\"kbamopdt\" visibility=\"public\" type=\"kbamopdi\" association=\"kbamopds\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamopd9\" name=\":Company\">\n" +
            "\t<ownedAttribute xmi:id=\"kbamopdu\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<ownedRule xmi:id=\"kbamopdm\" name=\"MaxLength 3\" constrainedElement=\"kbamopdl\">\n" +
            "\n" +
            "</ownedRule>\n" +
            "<ownedRule xmi:id=\"kbamopdv\" name=\"CLOSED\" constrainedElement=\"kbamopd9\">\n" +
            "\n" +
            "</ownedRule>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbamopd7\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kbamopd4\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbamopd5\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbamopd6\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbamopdp\" name=\":gender\">\n" +
            "\t<ownedLiteral xmi:id=\"kbamopdw\" name=\":Male\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbamopdx\" name=\":Female\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kbamopde\" name=\"IRI\"/>\n" +
            "</uml:Model>";
    }

    static getXMI18() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kbamo85s\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamo85x\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kbamo85y\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbamo85z\" name=\":parent\" visibility=\"public\" type=\"kbamo860\" association=\"kbamo861\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbamo862\" name=\":parent\" visibility=\"public\" type=\"kbamo863\" association=\"kbamo864\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamo861\" memberEnd=\"kbamo85z kbamo865\">\n" +
            "\t<ownedEnd xmi:id=\"kbamo865\" visibility=\"public\" type=\"kbamo85x\" association=\"kbamo861\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamo864\" memberEnd=\"kbamo862 kbamo866\">\n" +
            "\t<ownedEnd xmi:id=\"kbamo866\" visibility=\"public\" type=\"kbamo85x\" association=\"kbamo864\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamo860\" name=\"_:1\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbamo868\" name=\":gender\" visibility=\"public\" type=\"kbamo867\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamo863\" name=\"_:2\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbamo86a\" name=\":gender\" visibility=\"public\" type=\"kbamo869\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbamo85w\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kbamo85t\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbamo85u\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbamo85v\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbamo867\" name=\":gender\">\n" +
            "\t<ownedLiteral xmi:id=\"kbamo86b\" name=\":Male\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbamo869\" name=\":gender\">\n" +
            "\t<ownedLiteral xmi:id=\"kbamo86c\" name=\":Female\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI19() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kbamltd5\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamltda\" name=\":Person\"/>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamltdb\" name=\":User\">\n" +
            "\t<generalization xmi:id=\"kbamltdd\" general=\"kbamltda\" name=\"^\"/>\n" +
            "\t<ownedAttribute xmi:id=\"kbamltde\" name=\"^:name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbamltdg\" name=\"^:gender\" visibility=\"public\" type=\"kbamltdf\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamltdc\" name=\":Company\">\n" +
            "\t<ownedAttribute xmi:id=\"kbamltdh\" name=\"^:worksFor\" visibility=\"public\" type=\"kbamltdb\" association=\"kbamltdi\" >\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kbamltdj\" value=\"*\"/></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamltdi\" memberEnd=\"kbamltdh kbamltdk\">\n" +
            "\t<ownedEnd xmi:id=\"kbamltdk\" visibility=\"public\" type=\"kbamltdc\" association=\"kbamltdi\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbamltd9\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kbamltd6\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbamltd7\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbamltd8\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbamltdf\" name=\"^:gender\">\n" +
            "\t<ownedLiteral xmi:id=\"kbamltdl\" name=\":Male\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbamltdm\" name=\":Female\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI20() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kbaml03i\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbaml03n\" name=\":FollowSpaniards\">\n" +
            "\t<ownedAttribute xmi:id=\"kbaml03o\" name=\":follows\" visibility=\"public\" type=\"kbaml03p\" association=\"kbaml03q\" aggregation=\"composite\">\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"kbaml03r\" value=\"*\"/></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbaml03n\" name=\"Extra\" visibility=\"public\" type=\"kbaml03s\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbaml03q\" memberEnd=\"kbaml03o kbaml03u\">\n" +
            "\t<ownedEnd xmi:id=\"kbaml03u\" visibility=\"public\" type=\"kbaml03n\" association=\"kbaml03q\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbaml03p\" name=\"_:1\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbaml03w\" name=\":nationality\" visibility=\"public\" type=\"kbaml03v\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbaml03m\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kbaml03j\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbaml03k\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbaml03l\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbaml03s\" name=\"Extra_:FollowSpaniards\">\n" +
            "\t<ownedLiteral xmi:id=\"kbaml03x\" name=\":follows\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbaml03v\" name=\":nationality\">\n" +
            "\t<ownedLiteral xmi:id=\"kbaml03y\" name=\":Spain\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getXMI21() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kbamkh16\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamkh1b\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kbamkh1d\" name=\"$:name\" visibility=\"public\" type=\"kbamkh1e\" association=\"kbamkh1f\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbamkh1h\" name=\":email\" visibility=\"public\" type=\"kbamkh1g\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamkh1f\" memberEnd=\"kbamkh1d kbamkh1i\">\n" +
            "\t<ownedEnd xmi:id=\"kbamkh1i\" visibility=\"public\" type=\"kbamkh1b\" association=\"kbamkh1f\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamkh1e\" name=\"_Blank1\">\n" +
            "\t<ownedAttribute xmi:id=\"kbamkh1j\" name=\"OneOf\" visibility=\"public\" type=\"kbamkh1k\" association=\"kbamkh1l\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamkh1l\" memberEnd=\"kbamkh1j kbamkh1m\">\n" +
            "\t<ownedEnd xmi:id=\"kbamkh1m\" visibility=\"public\" type=\"kbamkh1e\" association=\"kbamkh1l\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamkh1k\" name=\"_Blank2\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbamkh1n\" name=\":name\" visibility=\"public\" type=\"kbamkh1o\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbamkh1p\" name=\"\" visibility=\"public\" type=\"kbamkh1q\" association=\"kbamkh1r\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamkh1r\" memberEnd=\"kbamkh1p kbamkh1s\">\n" +
            "\t<ownedEnd xmi:id=\"kbamkh1s\" visibility=\"public\" type=\"kbamkh1k\" association=\"kbamkh1r\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamkh1q\" name=\"_Blank3\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbamkh1t\" name=\":givenName\" visibility=\"public\" type=\"kbamkh1o\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbamkh1u\" name=\":familyName\" visibility=\"public\" type=\"kbamkh1o\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamkh1c\" name=\":Employee\">\n" +
            "\t<ownedAttribute xmi:id=\"kbamkh1v\" name=\"&#38;:name\" visibility=\"public\" type=\"kbamkh1e\" association=\"kbamkh1w\" ></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbamkh1x\" name=\":employeeId\" visibility=\"public\" type=\"kbamkh1o\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamkh1w\" memberEnd=\"kbamkh1v kbamkh1y\">\n" +
            "\t<ownedEnd xmi:id=\"kbamkh1y\" visibility=\"public\" type=\"kbamkh1c\" association=\"kbamkh1w\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbamkh1a\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kbamkh17\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbamkh18\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbamkh19\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kbamkh1o\" name=\"Any\"/>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kbamkh1g\" name=\"IRI\"/>\n" +
            "</uml:Model>";
    }

    static getXMI22() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"kbamjwtg\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamjwtl\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"kbamjwtp\" name=\"AND\" visibility=\"public\" type=\"kbamjwtq\" association=\"kbamjwtr\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamjwtr\" memberEnd=\"kbamjwtp kbamjwts\">\n" +
            "\t<ownedEnd xmi:id=\"kbamjwts\" visibility=\"public\" type=\"kbamjwtl\" association=\"kbamjwtr\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamjwtq\" name=\"_Blank0\">\n" +
            "\t<ownedAttribute xmi:id=\"kbamjwtt\" name=\"\" visibility=\"public\" type=\"kbamjwtu\" association=\"kbamjwtv\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbamjwtw\" name=\"\" visibility=\"public\" type=\"kbamjwtx\" association=\"kbamjwty\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamjwtv\" memberEnd=\"kbamjwtt kbamjwtz\">\n" +
            "\t<ownedEnd xmi:id=\"kbamjwtz\" visibility=\"public\" type=\"kbamjwtq\" association=\"kbamjwtv\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamjwty\" memberEnd=\"kbamjwtw kbamjwu0\">\n" +
            "\t<ownedEnd xmi:id=\"kbamjwu0\" visibility=\"public\" type=\"kbamjwtq\" association=\"kbamjwty\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamjwtu\" name=\"_Blank1\">\n" +
            "\t<ownedAttribute xmi:id=\"kbamjwu1\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbamjwu3\" name=\":owns\" visibility=\"public\" type=\"kbamjwu2\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamjwtx\" name=\"_Blank2\">\n" +
            "\t<ownedAttribute xmi:id=\"kbamjwu4\" name=\":owns\" visibility=\"public\" type=\"kbamjwto\" association=\"kbamjwu5\" ></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamjwu5\" memberEnd=\"kbamjwu4 kbamjwu6\">\n" +
            "\t<ownedEnd xmi:id=\"kbamjwu6\" visibility=\"public\" type=\"kbamjwtx\" association=\"kbamjwu5\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamjwtm\" name=\":Titanuser\">\n" +
            "\t<ownedAttribute xmi:id=\"kbamjwu7\" name=\"AND\" visibility=\"public\" type=\"kbamjwu8\" association=\"kbamjwu9\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<generalization xmi:id=\"kbamjwua\" general=\"kbamjwtl\" name=\"\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamjwu9\" memberEnd=\"kbamjwu7 kbamjwub\">\n" +
            "\t<ownedEnd xmi:id=\"kbamjwub\" visibility=\"public\" type=\"kbamjwtm\" association=\"kbamjwu9\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamjwu8\" name=\"_Blank3\">\n" +
            "\t<ownedAttribute xmi:id=\"kbamjwuc\" name=\"\" visibility=\"public\" type=\"kbamjwud\" association=\"kbamjwue\" aggregation=\"composite\"></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"kbamjwuf\" name=\"\" visibility=\"public\" type=\"kbamjwug\" association=\"kbamjwuh\" aggregation=\"composite\"></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamjwue\" memberEnd=\"kbamjwuc kbamjwui\">\n" +
            "\t<ownedEnd xmi:id=\"kbamjwui\" visibility=\"public\" type=\"kbamjwu8\" association=\"kbamjwue\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"kbamjwuh\" memberEnd=\"kbamjwuf kbamjwuj\">\n" +
            "\t<ownedEnd xmi:id=\"kbamjwuj\" visibility=\"public\" type=\"kbamjwu8\" association=\"kbamjwuh\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamjwud\" name=\"_Blank4\">\n" +
            "\t<ownedAttribute xmi:id=\"kbamjwuk\" name=\":titancode\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamjwug\" name=\"_Blank5\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbamjwum\" name=\":owns\" visibility=\"public\" type=\"kbamjwul\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamjwtn\" name=\":Ultrauser\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"kbamjwun\" name=\"nodeKind\" visibility=\"public\" type=\"kbamjwul\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<generalization xmi:id=\"kbamjwuo\" general=\"kbamjwtl\" name=\"\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"kbamjwto\" name=\":Product\">\n" +
            "\t<ownedAttribute xmi:id=\"kbamjwup\" name=\":productId\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<ownedRule xmi:id=\"kbamjwur\" name=\"MinLength 5\" constrainedElement=\"kbamjwup\">\n" +
            "\n" +
            "</ownedRule>\n" +
            "<ownedRule xmi:id=\"kbamjwus\" name=\"MaxLength 10\" constrainedElement=\"kbamjwup\">\n" +
            "\n" +
            "</ownedRule>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"kbamjwtk\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"kbamjwth\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbamjwti\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"kbamjwtj\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kbamjwu2\" name=\"IRI\"/>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"kbamjwul\" name=\"Literal\"/>\n" +
            "</uml:Model>";
    }

}
module.exports = Xmirepository;