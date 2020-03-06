{
const xmi = require ("../xmi/xmigen.js");
}
start
  = sh:shape+ { return xmi.createXMIHeader() + sh.join("") + xmi.createXMIFooter(); }

shape
  = name:baseshpname _ "{" _  attrs:attributes _ "}" _ { return xmi.createXMIClass(name, attrs); }

baseshpname
  = ":" name:ID        { return name; }
    / "<" name:ID ">"  { return name; }

attributes
  =  ats:attribute*
            _ atfin:lastattribute?
            {
                if(ats && atfin) {
                    ats.push(atfin);
                    return ats.join("");
                 }
                 else if(ats && !atfin) {
                    return ats.join("");
                 }
             }

attribute
  = at:baseattribute ";" _ { return at; }

lastattribute
  = at:baseattribute  ";"? _ { xmi.pendingAssociations.pop(); return at; }

baseattribute
  = ":" name:ID _ type:type _  { return xmi.createXMIPrimAttribute(name, type); }
    / ":" name:ID _ target:shapereference _ { return xmi.createXMIAsocAttribute(name, target); }

shapereference
  = ref:baseshpref _ "*"    {return { name: ref, cardinality: "*" }; }
  / ref:baseshpref _ "+"    {return { name: ref, cardinality: "+" }; }
  / ref:baseshpref _ "?"    {return { name: ref, cardinality: "?" }; }
  / ref:baseshpref _ "{" _ lower:DIGITS _ opt:("," _ (DIGITS _ )? )? "}"
        {return { name: ref, cardinality: {lower: lower, opt: opt }}; }
  / ref:baseshpref      {return { name: ref, cardinality: "1" }; }

baseshpref
  = "@:" name:ID        { return name; }
    / "@<" name:ID ">"  { return name; }

type
  = SCHEMA ":" pt:PRIMITIVETYPE { return pt; }
    / "." { return "undefined"; }

PRIMITIVETYPE
  = "string" / "integer" / "int" / "boolean"

SCHEMA
  = "xsd" / "foaf" / "schema"

ID
  = letters:[a-zA-Z]+ {return xmi.createString(letters); }

DIGITS
  = digits:[0-9]+ {return xmi.createString(digits); }
_
  = [ \n\r\t]*
