const urlExists = require('url-exists');

class SchemaGenerator {

    constructor () {
        this.schemas = [];
        this.listSchemas()
    }

    listSchemas () {
        this.schemas.push({prefix: "xsd:", url: "http://www.w3.org/2001/XMLSchema#"});
        this.schemas.push({prefix: "foaf:", url: "http://xmlns.com/foaf/spec/#term_"});
        this.schemas.push({prefix: "schema:", url: "http://schema.org/"});

        this.schemas.push({prefix: ":", url: "http://example.org/"});
    }

    checkSchema(term) {
        return this.schemas.find(value => {
            urlExists(value.url + term, function(err, exists) {
                return exists;
            });
        })
    }
}
module.exports = new SchemaGenerator();