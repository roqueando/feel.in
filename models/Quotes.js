const mongoose = require('mongoose');

const QuotesSchema = new mongoose.Schema({

	who: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Persons',
		required: false
	},
	quote: {
		type: String,
		required: true
	},

	what_u_need: {
		type: String,
		required: true
	},

	answers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Replies'
		}
	]

});

const Quotes = mongoose.model('Quotes', QuotesSchema);


const Quote = function () {

    return {

        publish: async function(your_feel, need) {
            return await Quotes.create({
                quote: your_feel,
                what_u_need: need,
            });

        },

        getQuotes: async function() {
            return await Quotes.find({})
					.populate('Replies')
					.exec();

        },

		getQuotesByWho: async function(who) {
			return await Quotes.findOne({'who': who});
		}

    }

}


module.exports = new Quote;
