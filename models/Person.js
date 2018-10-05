const mongoose = require('../model');
const Schema = mongoose.Schema;
// Person Schema
const PersonsSchema = new Schema({

	name: {
		type: String,
		required: true
	},
	photo: {
		type: String,
		required: false
	},
	question: {
		type: String,
		required: false
	},
	answer: {
		type: String,
		required: false
	}

});

// Turn that Schema into a model
const Persons = mongoose.model('Persons', PersonsSchema);

// Create my 'class'.
const Person = function() {

    return {
        create: async function(request) {

            return await Persons.create(request);

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
