{
const xmi = require ("../xmi/xmigen.js");
}
start
  = sh:shape+ { return xmi.createXMIHeader() + sh + xmi.createXMIFooter(); }

shape
  = ":" name:ID _ "{" _  attrs:attributes _ "}" _ { return xmi.createXMIClass(name, attrs); }

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
  = at:baseattribute  ";"? _ { return at; }

baseattribute
  = ":" name:ID _ type:type _  { return xmi.createXMIPrimAttribute(name, type); }
    / ":" name:ID _ target:shapereference _ { return xmi.createXMIAsocAttribute(name, target); }

shapereference
  = baseshpref
  / baseshpref _ "*"
  / baseshpref _ "+"
  / baseshpref _ "?"
  / baseshpref _ "{" _ DIGITS _ ("," _ (DIGITS _ )? )? "}"

baseshpref
  = "@:" ID
    / "@<" ID ">"

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
