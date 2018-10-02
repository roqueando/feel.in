const mongoose = require('mongoose');


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
	}
});

const Replies = mongoose.model('Replies', RepliesSchema);

const Reply = function () {

    return {

		/**
			Reply gets three parameters to insert a comment into a Quote.
		*/
        reply: async function(id = "", comment = "", image = "", emoji = "") {
            return await Replies.create({
				quote: id,
                comment: comment,
				image: image,
                emoji: emoji,
            });
        },

        getRepliesByQuote: async function(quotes) {
             await Replies.find({'quotes': quotes}).populate({
				path: 'quotes'
			}).exec(function (err, doc) {
				console.log(doc);
			});
        }

    }

}


module.exports = new Reply;
