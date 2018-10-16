const mongoose = require('mongoose');
const Quote = require('./Quotes');
const Persons = require('./Person');
const emoji = require('node-emoji');


const RepliesSchema = new mongoose.Schema({
	quotes: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Quotes'
	},
	persons: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Persons'
	},
	comment: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: false
	},
	emoji: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const Replies = mongoose.model('Replies', RepliesSchema);
const Reply = function () {

    return {

		/**
			Reply gets three parameters to insert a comment into a Quote.
		*/
        reply: async function(request) {
            return await Replies.create(request);

        },

        getRepliesByQuote: async function(quotes) {
             const replies = await Replies.find({'quotes': quotes}).populate('persons', 'name').exec();

            for(var i in replies) {
		        replies[i].emoji = emoji.get(replies[i].emoji);
		        
		    }

		    return replies;
        }

    }

}


module.exports = new Reply;
