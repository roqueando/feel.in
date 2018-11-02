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

    background: {
        type: String,
        required: false
    },

	ip: {
		type: String,
		required: true,
		unique: true
	}
	

});

// Turn that Schema into a model
const Persons = mongoose.model('Persons', PersonsSchema);

// Create my 'class'.
const Person = function() {

    return {
    	checkIpExists: async function(ip) {

    		const address = await Persons.findOne({ip: ip});
    		if(address) {
    			return true;
    		}else {
    			return false;
    		}
    	},
        create: async function(request) {

            return await Persons.create(request);

        },
        fetch: async function() {

            return await Persons.find({});

        },

        fetchByIp: async function(ip) {

        	return await Persons.findOne({'ip': ip});
        },

		fetchByName: async function (name) {
			return await Persons.findOne({'name': name});
		}
    }
}

module.exports = new Person;
