class TestRepository {

    static removeUniqueIDs(text) {
        return text.replace(/xmi:id="[0-9a-zA-Z]+"/g, "xmi:id=\"\"")
            .replace(/type="[0-9a-zA-Z]+"/g, "type=\"\"")
            .replace(/association="[0-9a-zA-Z]+"/g, "association=\"\"")
            .replace(/memberEnd="[ 0-9a-zA-Z]+"/g, "memberEnd=\"\"")
            .replace(/general="[0-9a-zA-Z]+"/g, "general=\"\"")
            .replace(/constrainedElement="[0-9a-zA-Z]+"/g, "constrainedElement=\"\"");
    }

    static getShex1() {
        return "prefix : <https://schema.org/>\n" +
            "base <http://example.org/>\n\n"
            + ":User {\n" +
            "}\n\n"
            + "<TypeTest> {\n" +
            "}\n\n";
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
            "base <http://example.org/>\n\n"
            + ":User {\n" +
            "\t:name xsd:string;\n" +
            "\t:age xsd:int;\n" +
            "}\n\n"
            + "<TypeTest> {\n" +
            "\t:z xsd:string;\n" +
            "\t:b xsd:date;\n" +
            "\t:c xsd:time;\n" +
            "\t:d xsd:dateTime;\n" +
            "\t:e xsd:duration;\n" +
            "\t:f xsd:byte;\n" +
            "\t:g xsd:decimal;\n" +
            "\t:h xsd:int;\n" +
            "\t:i xsd:integer;\n" +
            "\t:j xsd:long;\n" +
            "\t:k xsd:short;\n" +
            "\t:l xsd:boolean;\n" +
            "\t:m xsd:double;\n" +
            "\t:n xsd:float;\n" +
            "\t:xyz xsd:invent;\n" +
            "}\n\n";
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
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8ftbvow\" name=\"TypeTest\">\n" +
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

    static getShex3() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string;\n" +
            "\t:knows @:User;\n" +
            "\t:worksFor @:Company;\n" +
            "\t:buys @<Product> {1,10};\n" +
            "}\n" +
            "\n" +
            ":Company {\n" +
            "\t:name xsd:string;\n" +
            "\t:hasEmployee @:User *;\n" +
            "\t:possess @<Product> {5,};\n" +
            "}\n" +
            "\n" +
            "<Product> {\n" +
            "\t:name xsd:string;\n" +
            "\t:manufacturer @<Organization> +;\n" +
            "}\n" +
            "\n" +
            "<Organization> {\n" +
            "\t:name xsd:string;\n" +
            "\t:isPartOf @<Organization> ?;\n" +
            "\t:hasDirectives @:User {5};\n" +
            "}\n" +
            "\n"
    }

    static getXMI3() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"k8h3gbxi\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8h3gbxn\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"k8h3gbxo\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8h3gbxp\" name=\":knows\" visibility=\"public\" type=\"k8h3gbxn\" association=\"k8h3gbxq\"></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8h3gbxr\" name=\":worksFor\" visibility=\"public\" type=\"k8h3gbxs\" association=\"k8h3gbxt\"></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8h3gbxu\" name=\":buys\" visibility=\"public\" type=\"k8h3gbxv\" association=\"k8h3gbxw\">\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"k8h3gbxx\" value=\"10\"/></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"k8h3gbxq\" memberEnd=\"k8h3gbxp k8h3gbxy\">\n" +
            "\t<ownedEnd xmi:id=\"k8h3gbxy\" visibility=\"public\" type=\"k8h3gbxn\" association=\"k8h3gbxq\"/>\n" +
            "</packagedElement>\n" +
            "\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"k8h3gbxt\" memberEnd=\"k8h3gbxr k8h3gbxz\">\n" +
            "\t<ownedEnd xmi:id=\"k8h3gbxz\" visibility=\"public\" type=\"k8h3gbxn\" association=\"k8h3gbxt\"/>\n" +
            "</packagedElement>\n" +
            "\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"k8h3gbxw\" memberEnd=\"k8h3gbxu k8h3gby0\">\n" +
            "\t<ownedEnd xmi:id=\"k8h3gby0\" visibility=\"public\" type=\"k8h3gbxn\" association=\"k8h3gbxw\"/>\n" +
            "</packagedElement>\n" +
            "\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8h3gbxs\" name=\":Company\">\n" +
            "\t<ownedAttribute xmi:id=\"k8h3gby1\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8h3gby2\" name=\":hasEmployee\" visibility=\"public\" type=\"k8h3gbxn\" association=\"k8h3gby3\">\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"k8h3gby4\"/>\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"k8h3gby5\" value=\"*\"/></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8h3gby6\" name=\":possess\" visibility=\"public\" type=\"k8h3gbxv\" association=\"k8h3gby7\">\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"k8h3gby8\" value=\"5\"/>\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"k8h3gby9\" value=\"*\"/></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"k8h3gby3\" memberEnd=\"k8h3gby2 k8h3gbya\">\n" +
            "\t<ownedEnd xmi:id=\"k8h3gbya\" visibility=\"public\" type=\"k8h3gbxs\" association=\"k8h3gby3\"/>\n" +
            "</packagedElement>\n" +
            "\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"k8h3gby7\" memberEnd=\"k8h3gby6 k8h3gbyb\">\n" +
            "\t<ownedEnd xmi:id=\"k8h3gbyb\" visibility=\"public\" type=\"k8h3gbxs\" association=\"k8h3gby7\"/>\n" +
            "</packagedElement>\n" +
            "\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8h3gbxv\" name=\"Product\">\n" +
            "\t<ownedAttribute xmi:id=\"k8h3gbyc\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8h3gbyd\" name=\":manufacturer\" visibility=\"public\" type=\"k8h3gbye\" association=\"k8h3gbyf\">\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"k8h3gbyg\" value=\"*\"/></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"k8h3gbyf\" memberEnd=\"k8h3gbyd k8h3gbyh\">\n" +
            "\t<ownedEnd xmi:id=\"k8h3gbyh\" visibility=\"public\" type=\"k8h3gbxv\" association=\"k8h3gbyf\"/>\n" +
            "</packagedElement>\n" +
            "\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8h3gbye\" name=\"Organization\">\n" +
            "\t<ownedAttribute xmi:id=\"k8h3gbyi\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8h3gbyj\" name=\":isPartOf\" visibility=\"public\" type=\"k8h3gbye\" association=\"k8h3gbyk\">\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"k8h3gbyl\"/></ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8h3gbym\" name=\":hasDirectives\" visibility=\"public\" type=\"k8h3gbxn\" association=\"k8h3gbyn\">\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"k8h3gbyo\" value=\"5\"/>\n" +
            "\t\t<upperValue xmi:type=\"uml:LiteralUnlimitedNatural\" xmi:id=\"k8h3gbyp\" value=\"5\"/></ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"k8h3gbyk\" memberEnd=\"k8h3gbyj k8h3gbyq\">\n" +
            "\t<ownedEnd xmi:id=\"k8h3gbyq\" visibility=\"public\" type=\"k8h3gbye\" association=\"k8h3gbyk\"/>\n" +
            "</packagedElement>\n" +
            "\n" +
            "<packagedElement xmi:type=\"uml:Association\" xmi:id=\"k8h3gbyn\" memberEnd=\"k8h3gbym k8h3gbyr\">\n" +
            "\t<ownedEnd xmi:id=\"k8h3gbyr\" visibility=\"public\" type=\"k8h3gbye\" association=\"k8h3gbyn\"/>\n" +
            "</packagedElement>\n" +
            "\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8h3gbxj\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"k8h3gbxk\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8h3gbxl\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8h3gbxm\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getShex4() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string;\n" +
            "\t:age xsd:int ?;\n" +
            "\t:gender [:Male :Female \"Wo\" 99 \"+34\"~ ];\n" +
            "\t:id .;\n" +
            "}\n\n" +
            ":Spanish {\n" +
            "\t:country [:Spain ];\n" +
            "}\n" +
            "\n";
    }

    static getXMI4() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"k8h3m4fk\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8h3m4fp\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"k8h3m4fq\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8h3m4fs\" name=\":age\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"k8h3m4fr\"/>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8h3m4fu\" name=\":gender\" visibility=\"public\" type=\"k8h3m4ft\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8h3m4fw\" name=\":id\" visibility=\"public\" type=\"k8h3m4fv\" isUnique=\"false\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8omjpqh\" name=\":Spanish\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8omjpqj\" name=\":country\" visibility=\"public\" type=\"k8omjpqi\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8h3m4fl\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"k8h3m4fm\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8h3m4fn\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8h3m4fo\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8h3m4fv\" name=\"Any\"/>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8h3m4ft\" name=\":gender\">\n" +
            "\n" +
            "\t<ownedLiteral xmi:id=\"k8h3m4fx\" name=\":Male\"/>\n" +
            "\n" +
            "\t<ownedLiteral xmi:id=\"k8h3m4fy\" name=\":Female\"/>\n" +
            "\n" +
            "\t<ownedLiteral xmi:id=\"k8odaidz\" name=\"&quot;Wo&quot;\"/>\n" +
            "\n" +
            "\t<ownedLiteral xmi:id=\"k8odaie0\" name=\"99\"/>\n" +
            "\n" +
            "\t<ownedLiteral xmi:id=\"k8odaie1\" name=\"&quot;+34&quot;~\"/>" +
            "\n" +
            "\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8omjpqi\" name=\":country\">\n" +
            "\n" +
            "\t<ownedLiteral xmi:id=\"k8omjpqk\" name=\":Spain\"/>\n" +
            "\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getShex5() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string;\n" +
            "\t:age xsd:int ?;\n" +
            "}\n" +
            "\n" +
            ":Ultrauser {\n" +
            "\ta [:User];\n" +
            "}\n" +
            "\n" +
            ":Titanuser @:User AND {\n" +
            "\t:titancode xsd:string;\n" +
            "}\n" +
            "\n" +
            ":VIPUser EXTRA a { \n" +
            "\ta @:User; \n" +
            "}\n" +
            "\n";
    }

    static getGenShex5() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string;\n" +
            "\t:age xsd:int ?;\n" +
            "}\n" +
            "\n" +
            ":Ultrauser {\n" +
            "\ta [:User];\n" +
            "}\n" +
            "\n" +
            ":Titanuser {\n" +
            "\ta [:User];\n" +
            "\t:titancode xsd:string;\n" +
            "}\n" +
            "\n" +
            ":VIPUser {\n" +
            "\ta [:User];\n" +
            "}\n" +
            "\n";
    }

    static getXMI5() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"k8h527l8\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8h4wtb2\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"k8h527ld\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8h527lf\" name=\":age\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"k8h527le\"/>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8h4wtb6\" name=\":Ultrauser\">\n" +
            "\t<generalization xmi:id=\"k8h527lg\" general=\"k8h4wtb2\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8h4wtb8\" name=\":Titanuser\">\n" +
            "\t<ownedAttribute xmi:id=\"k8h527li\" name=\":titancode\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<generalization xmi:id=\"k8h527lh\" general=\"k8h4wtb2\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8h4wtbb\" name=\":VIPUser\">\n" +
            "\t<generalization xmi:id=\"k8h527lj\" general=\"k8h4wtb2\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8h527l9\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"k8h527la\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8h527lb\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8h527lc\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getShex6() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string;\n" +
            "\t:age xsd:int ?;\n" +
            "}\n" +
            "\n" +
            "<Citizen> {\n" +
            "\t:id .;\n" +
            "}\n" +
            "\n" +
            ":Ultrauser {\n" +
            "\ta [:User];\n" +
            "\ta [<Citizen>];\n" +
            "}\n" +
            "\n" +
            ":Titanuser @:User AND @<Citizen> AND {\n" +
            "    :titancode xsd:string;\n" +
            "}\n" +
            "\n" +
            ":VIPUser EXTRA a {\n" +
            "  a @:User;\n" +
            "  a @<Citizen>;\n" +
            "}\n" +
            "\n";
    }

    static getGenShex6() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string;\n" +
            "\t:age xsd:int ?;\n" +
            "}\n" +
            "\n" +
            "<Citizen> {\n" +
            "\t:id .;\n" +
            "}\n" +
            "\n" +
            ":Ultrauser {\n" +
            "\ta [:User];\n" +
            "\ta [<Citizen>];\n" +
            "}\n" +
            "\n" +
            ":Titanuser {\n" +
            "\ta [:User];\n" +
            "\ta [<Citizen>];\n" +
            "\t:titancode xsd:string;\n" +
            "}\n" +
            "\n" +
            ":VIPUser {\n" +
            "\ta [:User];\n" +
            "\ta [<Citizen>];\n" +
            "}\n" +
            "\n";
    }

    static getXMI6() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"k8h56pon\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8h4wtb2\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"k8h56pos\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:id=\"k8h56pou\" name=\":age\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#Int\">\n" +
            "\t\t</type>\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"k8h56pot\"/>\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8h56pov\" name=\"Citizen\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8h56pox\" name=\":id\" visibility=\"public\" type=\"k8h56pow\" isUnique=\"false\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8h4wtb6\" name=\":Ultrauser\">\n" +
            "\t<generalization xmi:id=\"k8h56poy\" general=\"k8h4wtb2\"/>\n" +
            "\t<generalization xmi:id=\"k8h56poz\" general=\"k8h56pov\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8h4wtb8\" name=\":Titanuser\">\n" +
            "\t<ownedAttribute xmi:id=\"k8h56pp2\" name=\":titancode\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<generalization xmi:id=\"k8h56pp0\" general=\"k8h4wtb2\"/>\n" +
            "\t<generalization xmi:id=\"k8h56pp1\" general=\"k8h56pov\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8h4wtbb\" name=\":VIPUser\">\n" +
            "\t<generalization xmi:id=\"k8h56pp3\" general=\"k8h4wtb2\"/>\n" +
            "\t<generalization xmi:id=\"k8h56pp4\" general=\"k8h56pov\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8h56poo\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"k8h56pop\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8h56poq\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8h56por\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8h56pow\" name=\"Any\"/>\n" +
            "</uml:Model>";
    }

    static getShex7() {
        return "prefix : <https://schema.org/>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:aa IRI;\n" +
            "\t:b Literal ?;\n" +
            "\t:c BNode;\n" +
            "\t:d NonLiteral;\n" +
            "\t:e iri;\n" +
            "\t:f bnode;\n" +
            "\t:g nonliteral;\n" +
            "\t:h literal;\n" +
            "}\n";
    }

    static getGenShex7() {
        return "prefix : <https://schema.org/>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:aa IRI;\n" +
            "\t:b Literal ?;\n" +
            "\t:c BNode;\n" +
            "\t:d NonLiteral;\n" +
            "\t:e IRI;\n" +
            "\t:f BNode;\n" +
            "\t:g NonLiteral;\n" +
            "\t:h Literal;\n" +
            "}\n\n";
    }

    static getXMI7() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"k8lhqt0s\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8lhqt0w\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8lhqt0y\" name=\":aa\" visibility=\"public\" type=\"k8lhqt0x\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8lhqt11\" name=\":b\" visibility=\"public\" type=\"k8lhqt0z\" isUnique=\"true\">\n" +
            "\n" +
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"k8lhqt10\"/>\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8lhqt13\" name=\":c\" visibility=\"public\" type=\"k8lhqt12\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8lhqt15\" name=\":d\" visibility=\"public\" type=\"k8lhqt14\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8lhqt16\" name=\":e\" visibility=\"public\" type=\"k8lhqt0x\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8lhqt17\" name=\":f\" visibility=\"public\" type=\"k8lhqt12\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8lhqt18\" name=\":g\" visibility=\"public\" type=\"k8lhqt14\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8lhqt19\" name=\":h\" visibility=\"public\" type=\"k8lhqt0z\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8lhqt0t\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"k8lhqt0u\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8lhqt0v\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8lhqt0x\" name=\"IRI\">\n" +
            "\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8lhqt0z\" name=\"Literal\">\n" +
            "\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8lhqt12\" name=\"BNode\">\n" +
            "\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8lhqt14\" name=\"NonLiteral\">\n" +
            "\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getShex8() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User IRI {\n" +
            "  :name xsd:string\n" +
            "}\n" +
            "\n" +
            ":Ultrauser Literal AND {\n" +
            "    a [:User];\n" +
            "}\n" +
            "\n" +
            ":Titanuser @:User AND NonLiteral AND{\n" +
            "}\n" +
            "\n" +
            "<Product> BNode\n" +
            "\n" +
            "<AThing> IRI\n";
    }

    static getGenShex8() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User IRI {\n" +
            "\t:name xsd:string;\n" +
            "}\n" +
            "\n" +
            ":Ultrauser Literal AND {\n" +
            "\ta [:User];\n" +
            "}\n" +
            "\n" +
            ":Titanuser NonLiteral AND {\n" +
            "\ta [:User];\n" +
            "}\n" +
            "\n" +
            "<Product> BNode AND {\n" +
            "}\n" +
            "\n" +
            "<AThing> IRI {\n" +
            "}\n" +
            "\n";
    }

    static getXMI8() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<uml:Model xmi:version=\"2.1\" xmlns:xmi=\"http://schema.omg.org/spec/XMI/2.1\" xmlns:uml=\"http://www.eclipse.org/uml2/3.0.0/UML\"\n" +
            " xmi:id=\"k8mx00cz\" name=\"ShExGeneratedXMI\">\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8mx00d4\" name=\":User\">\n" +
            "\t<ownedAttribute xmi:id=\"k8mx00d7\" name=\":name\" visibility=\"public\" isUnique=\"false\">\n" +
            "\t\t<type xmi:type=\"uml:PrimitiveType\" href=\"pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#String\">\n" +
            "\t\t</type>\n" +
            "\t</ownedAttribute>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8mx00d6\" name=\"nodeKind\" visibility=\"public\" type=\"k8mx00d5\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8mx00dq\" name=\":Ultrauser\">\n" +
            "\t<generalization xmi:id=\"k8mx00dt\" general=\"k8mx00d4\"/>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8mx00ds\" name=\"nodeKind\" visibility=\"public\" type=\"k8mx00dr\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8mx00du\" name=\":Titanuser\">\n" +
            "\t<generalization xmi:id=\"k8mx00dv\" general=\"k8mx00d4\"/>\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8mx00dx\" name=\"nodeKind\" visibility=\"public\" type=\"k8mx00dw\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8mx00dy\" name=\"Product\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8mx00e0\" name=\"nodeKind\" visibility=\"public\" type=\"k8mx00dz\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Class\" xmi:id=\"k8mx00e1\" name=\"AThing\">\n" +
            "\t<ownedAttribute xmi:type=\"uml:Property\" xmi:id=\"k8mx00e2\" name=\"nodeKind\" visibility=\"public\" type=\"k8mx00d5\" isUnique=\"true\">\n" +
            "\t</ownedAttribute>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8mx00d0\" name=\"Prefixes\">\n" +
            "\t<ownedLiteral xmi:id=\"k8mx00d1\" name=\"prefix : &lt;https://schema.org/>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8mx00d2\" name=\"prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#>\"/>\n" +
            "\t<ownedLiteral xmi:id=\"k8mx00d3\" name=\"base &lt;http://example.org/>\"/>\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8mx00d5\" name=\"IRI\">\n" +
            "\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8mx00dr\" name=\"Literal\">\n" +
            "\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8mx00dw\" name=\"NonLiteral\">\n" +
            "\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:PrimitiveType\" xmi:id=\"k8mx00dz\" name=\"BNode\">\n" +
            "\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }

    static getShex9() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string /[a-z]+/;\n" +
            "\t:age xsd:int MinInclusive 18 ?;\n" +
            "\t:c xsd:int TotalDigits 3;\n" +
            "\t:d xsd:int FractionDigits 4;\n" +
            "\t:e xsd:string Length 6;\n" +
            "\t:f xsd:string MinLength 3;\n" +
            "\t:g xsd:string MaxLength 15;\n" +
            "}\n\n";
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
            "\t\t<lowerValue xmi:type=\"uml:LiteralInteger\" xmi:id=\"k8nc59wu\"/>\n" +
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

    static getShex10() {
        return "prefix : <https://schema.org/>\n" +
            "prefix codes: <http://example.codes/>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":Product {\n" +
            "\t:status [codes:~ - codes:unknown - codes:bad.~  \"111\" ];\n" +
            "\t:phone [\"+34\"~ - \"+3468031\" - \"+3467182\"~  ];\n" +
            "\t:quantity [99~ - 9987 - 991~  ];\n" +
            "\t:url [codes:Personal~ ];\n" +
            "}\n" +
            "\n";
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
            "\n" +
            "\t<ownedLiteral xmi:id=\"k8op805n\" name=\"codes:~ - codes:unknown - codes:bad.~ \"/>\n" +
            "\n" +
            "\t<ownedLiteral xmi:id=\"k8op805o\" name=\"&quot;111&quot;\"/>\n" +
            "\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8op805h\" name=\":phone\">\n" +
            "\n" +
            "\t<ownedLiteral xmi:id=\"k8op805p\" name=\"&quot;+34&quot;~ - &quot;+3468031&quot; - &quot;+3467182&quot;~ \"/>\n" +
            "\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8op805j\" name=\":quantity\">\n" +
            "\n" +
            "\t<ownedLiteral xmi:id=\"k8op805q\" name=\"99~ - 9987 - 991~ \"/>\n" +
            "\n" +
            "</packagedElement>\n" +
            "<packagedElement xmi:type=\"uml:Enumeration\" xmi:id=\"k8op805l\" name=\":url\">\n" +
            "\n" +
            "\t<ownedLiteral xmi:id=\"k8op805r\" name=\"codes:Personal~\"/>\n" +
            "\n" +
            "</packagedElement>\n" +
            "</uml:Model>";
    }
}
module.exports = TestRepository;