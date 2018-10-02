const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Person Schema
const PersonsSchema = new Schema({

	name: {
		type: String,
		required: true
	}

});

// Turn that Schema into a model
const Persons = mongoose.model('Persons', PersonsSchema);

// Create my 'class'.
const Person = function() {

    return {
        create: async function(name) {

            return await Persons.create({
                name: name
            });

        },
        fetch: async function() {

            return await Persons.find({});

        },

		fetchByName: async function (name) {
			return await Persons.findOne({'name': name});
		}
    }
}

module.exports = new Person;
