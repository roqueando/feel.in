const NeDB = require('nedb');
const fs = require('fs');

const Database = new NeDB({
    filename: './feelin.db',
    autoload: true
});

module.exports = Database;