const mongoose = require('../model');

const QuotesSchema = new mongoose.Schema({

	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Persons'
		
	},
	
	quote: {
		type: String,
		required: true
	},

	what_u_need: {
		type: String,
		required: true
	},
	replies: [{

			type: mongoose.Schema.Types.ObjectId,
			ref: 'Replies'

	}],
	createdAt: {
		type: Date,
		default: Date.now()
	}



});

const Quotes = mongoose.model('Quotes', QuotesSchema);


const Quote = function () {

    return {

        publish: async function(request) {
            return await Quotes.create(request);

        },

        addReply: async function(id, quoteId) {

        	const qt = await Quotes.findOne({_id: quoteId});
        	qt.replies.push(id);
        	qt.save();

        },

        getQuotes: async function() {
            return await Quotes.find().populate('persons', 'name').populate('replies');
        },

		getQuotesByWho: async function(who) {
			return await Quotes.findOne({'who': who});
		}

    }

}

module.exports = new Quote;
