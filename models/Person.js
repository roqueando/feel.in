const shortid = require(`shortid`);
const Database = require('../model');

const Person = function() {

    return {
        create: function(name) {
            Database.insert({
                id: shortid.generate(),
                name: name
            });
        },
        fetch: function(name) {
            Database.find({name: name}, function(err, docs) {
                if (err) throw err;
                return docs;
            });
        }
    }
}

module.exports = new Person;
