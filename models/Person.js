const Persons = require('../model');

const Person = function() {

    return {
        create: function(name) {
            Persons.insert({
                name: name
            });
        },
        fetch: function(name, cb) {
            Persons.findOne({'name': name}, function(err, docs) {
                
                cb(err, docs);

            });

        }
    }
}

module.exports = new Person;
