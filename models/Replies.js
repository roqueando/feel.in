const mongoose = require('mongoose');
const Quote = require('./Quotes');

const RepliesSchema = new mongoose.Schema({
	quotes: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Quotes'
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
             return await Replies.find({'quotes': quotes}).populate('quotes', '_id').exec();
        }

    }

}


module.exports = new Reply;
