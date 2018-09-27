const NeDB = require('nedb');
const fs = require('fs');

const Persons = new NeDB({
    filename: './database/feel.persons.db',
    autoload: true
});

const Quotes = new NeDB({
    filename: './database/feel.quotes.db',
    autoload: true
});

module.exports = Persons;
module.exports = Quotes;