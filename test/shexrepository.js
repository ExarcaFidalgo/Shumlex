class ShExRepository {

    static getShex1() {
        return "prefix : <https://schema.org/>\n" +
            "base <http://example.org/>\n\n"
            + ":User {\n" +
            "}\n\n"
            + "<TypeTest> {\n" +
            "}\n\n";
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
            ":VIPUser EXTRA a {\n" +
            "\ta [:User];\n" +
            "}\n" +
            "\n";
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
            ":VIPUser EXTRA a {\n" +
            "\ta [:User];\n" +
            "\ta [<Citizen>];\n" +
            "}\n" +
            "\n";
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
            "<AThing> IRI\n\n";
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

    static getShex11() {
        return "prefix codes: <http://example.codes/>\n" +
            "prefix : <http://schema.org/>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":Product {\n" +
            "\t:status [. - codes:bad  ];\n" +
            "\t:name [. - \"Trademark\"  ];\n" +
            "\t:price [. - 66  ];\n" +
            "}\n" +
            "\n";
    }

    static getShex12() {
        return "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "prefix : <http://schema.org/>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":HomePage IRI\n" +
            "\n" +
            ":CanVoteAge xsd:integer MinInclusive 18 TotalDigits 3\n" +
            "\n" +
            ":Special :custom\n" +
            "\n";
    }

    static getShex13() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":FrenchProduct {\n" +
            "\t:label [@fr  ];\n" +
            "}\n" +
            "\n" +
            ":EnglishProduct {\n" +
            "\t:label [@en~  ];\n" +
            "}\n" +
            "\n" +
            ":SpanishProduct {\n" +
            "\t:label [@es~ - @es-AR - @es-ES  ];\n" +
            "}\n" +
            "\n" +
            ":AnyProduct {\n" +
            "\t:label [. - @kz  ];\n" +
            "}\n" +
            "\n";
    }

    static getShex14() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string;\n" +
            "( \n" +
            "\t:givenName xsd:string;\n" +
            "\t:familyName xsd:string; ) ? ;\n" +
            "( \n" +
            "\t:has @<Something> {2,};\n" +
            "\t:c xsd:string; ) * ;\n" +
            "\t:owns @:Garage;\n" +
            "}\n" +
            "\n" +
            ":Garage {\n" +
            "( \n" +
            "\t<AE86> xsd:string;\n" +
            "( \n" +
            "\t<Levin> xsd:string;\n" +
            "\t<Cilinders> xsd:int; ) ? ;\n" +
            "( \n" +
            "\t<Trueno> xsd:string;\n" +
            "\t<Cilinders> xsd:int; ) ? ; ) + ;\n" +
            "}\n" +
            "\n" +
            "<Something> {\n" +
            "}\n\n";
    }

    static getShex15() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string; |\n" +
            "( \n" +
            "\t:givenName xsd:string +;\n" +
            "\t:familyName xsd:string; ) ;\n" +
            "}\n" +
            "\n" +
            ":Car {\n" +
            "\t:model xsd:string;\n" +
            " (\n" +
            "\t:turbo xsd:string; |\n" +
            "\t:misfiring xsd:string; |\n" +
            "\t:atm xsd:string;)  {1,2};\n" +
            "}\n" +
            "\n";
    }

    static getShex16() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            "\n" +
            ":Car {\n" +
            "\t:name xsd:string ;\n" +
            "\t:belongs @_:1\n" +
            "}\n" +
            "\n" +
            "_:1 { a [ :Garage ] }\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string ;\n" +
            "\t:worksFor {\n" +
            "\t\ta [ :Company];\n" +
            "}\n" +
            "}\n" +
            "\n" +
            ":GreatGrandson {\n" +
            ":parent { :parent { :parent . + } + }+ ;\n" +
            "}\n";
    }

    static getGenShex16() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":Car {\n" +
            "\t:name xsd:string;\n" +
            "\t:belongs @_:1;\n" +
            "}\n" +
            "\n" +
            "_:1 {\n" +
            "\ta [:Garage];\n" +
            "}\n" +
            "\n" +
            ":Garage {\n" +
            "}\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string;\n" +
            "\t:worksFor @_:2;\n" +
            "}\n" +
            "\n" +
            "_:2 {\n" +
            "\ta [:Company];\n" +
            "}\n" +
            "\n" +
            ":Company {\n" +
            "}\n" +
            "\n" +
            ":GreatGrandson {\n" +
            "\t:parent @_:3 +;\n" +
            "}\n" +
            "\n" +
            "_:3 {\n" +
            "\t:parent @_:4 +;\n" +
            "}\n" +
            "\n" +
            "_:4 {\n" +
            "\t:parent . +;\n" +
            "}\n" +
            "\n";
    }

    static getShex17() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User IRI CLOSED {\n" +
            "\t:name xsd:string MaxLength 3;\n" +
            "\t:age xsd:int ?;\n" +
            "\t:gender [:Male :Female ];\n" +
            "\t:knows @:User;\n" +
            "}\n" +
            "\n" +
            ":Company CLOSED {\n" +
            "\t:name xsd:string;\n" +
            "}\n" +
            "\n";
    }

    static getShex18() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string;\n" +
            "\t:parent {\n" +
            "\t\t:gender [:Male ]\n" +
            "} ;\n" +
            "\t:parent {\n" +
            "\t\t:gender [:Female ]\n" +
            "} ;\n" +
            "}\n" +
            "\n";
    }

    static getGenShex18() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string;\n" +
            "\t:parent @_:1;\n" +
            "\t:parent @_:2;\n" +
            "}\n" +
            "\n" +
            "_:1 {\n" +
            "\t:gender [:Male ];\n" +
            "}\n" +
            "\n" +
            "_:2 {\n" +
            "\t:gender [:Female ];\n" +
            "}\n" +
            "\n";
    }

    static getShex19() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":Person {\n" +
            "}\n" +
            "\n" +
            ":User {\n" +
            "\t^a [:Person];\n" +
            "\t^:name xsd:string;\n" +
            "\t^:gender [:Male :Female ];\n" +
            "}\n" +
            "\n" +
            ":Company {\n" +
            "\t^:worksFor @:User +;\n" +
            "}\n" +
            "\n";
    }

    static getShex20() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":FollowSpaniards EXTRA :follows {\n" +
            "\t:follows { \n" +
            "      :nationality [:Spain] \n" +
            "    }+\n" +
            "}\n";
    }

    static getGenShex20() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":FollowSpaniards EXTRA :follows {\n" +
            "\t:follows @_:1 +;\n" +
            "}\n" +
            "\n" +
            "_:1 {\n" +
            "\t:nationality [:Spain ];\n" +
            "}\n" +
            "\n";
    }

    static getShex21() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t$:name (\n" +
            "\t:name .; |\n" +
            "( \n" +
            "\t:givenName .;\n" +
            "\t:familyName .; ) ;) ;\n" +
            "\t:email IRI;\n" +
            "}\n" +
            "\n" +
            ":Employee {\n" +
            "\t&:name;\n" +
            "\t:employeeId .;\n" +
            "}\n" +
            "\n"
    }

    static getShex22() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User { :name xsd:string ; :owns IRI }\n" +
            "AND { :owns @:Product }\n" +
            "\n" +
            ":Titanuser @:User AND {\n" +
            ":titancode xsd:string;\n" +
            "} AND { :owns Literal }\n" +
            "\n" +
            ":Ultrauser Literal AND {\n" +
            "a [:User];\n" +
            "}\n" +
            "\n" +
            ":Product {\n" +
            ":productId xsd:string AND MINLENGTH 5 AND MAXLENGTH 10\n" +
            "}";
    }

    static getGenShex22() {
        return "prefix : <https://schema.org/>\n" +
            "prefix xsd: <http://www.w3.org/2001/XMLSchema#>\n" +
            "base <http://example.org/>\n" +
            "\n" +
            ":User {\n" +
            "\t:name xsd:string;\n" +
            "\t:owns IRI;\n" +
            "\t:owns @:Product;\n" +
            "}\n" +
            "\n" +
            ":Titanuser {\n" +
            "\ta [:User];\n" +
            "\t:titancode xsd:string;\n" +
            "\t:owns Literal;\n" +
            "}\n" +
            "\n" +
            ":Ultrauser Literal AND {\n" +
            "\ta [:User];\n" +
            "}\n" +
            "\n" +
            ":Product {\n" +
            "\t:productId xsd:string MinLength 5 MaxLength 10;\n" +
            "}\n" +
            "\n";
    }



}
module.exports = ShExRepository;