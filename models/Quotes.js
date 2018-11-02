const mongoose = require('../model');
const emoji = require('node-emoji');


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
            const quotes = await Quotes.find().populate('user', 'name').populate('replies');

            for(var i in quotes) {
		        quotes[i].what_u_need = emoji.get(quotes[i].what_u_need);


		    }

		    for(var r in quotes[i].replies) {
		        if(quotes[i].replies[r].emoji != undefined){
		            quotes[i].replies[r].emoji = emoji.get(quotes[i].replies[r].emoji);
		            
		        }
		    }

		    return quotes;
        },

        getQuotesByWho: async function(who, lim) {
        	const quotes = await Quotes.find({'user': who})
        					.sort('-replies')
        					.limit(lim);
        	for(var i in quotes) {

		        quotes[i].what_u_need = emoji.get(quotes[i].what_u_need);


		    }

		    /*
		    for(var r in quotes[i].replies) {
		        if(quotes[i].replies[r].emoji != undefined){
		            quotes[i].replies[r].emoji = emoji.get(quotes[i].replies[r].emoji);
		            
		        }
		    }
		    */

		    return quotes;
        },

		getQuotesById: async function(id) {
			return await Quotes.findOne({'_id': id});
		}

    }

}

module.exports = new Quote;
