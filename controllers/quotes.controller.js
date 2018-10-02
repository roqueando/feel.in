const Quotes = require('../models/Quotes');
const Replies = require('../models/Replies');
module.exports.publish = async function(request, response) {

    try {

        const { quote, what_u_need } = request.body;

        const qt = await Quotes.publish(quote, what_u_need);
        response.send({
            quote: qt
        });

    } catch (err) {
        response.status(400).send({
            msg_err: err.message
        })
    }

}

module.exports.getQuotes = async function(request, response) {

    try {
		const quotes = await Quotes.getQuotes();
		response.send({
			quotes: quotes
		});

    } catch (err) {
        response.status(400).send({
            msg_err: err.message
        });
    }
}

module.exports.reply = async function (request, response) {

	try {

		const { quote, comment, image, emoji } = request.body;

		const reply = await Replies.reply(quote, comment, image, emoji);

		response.send({
			reply: reply
		});

	} catch (err) {
		response.status(400).send({
			msg_err: err.message
		});
	}

}

module.exports.getRepliesByQuote = async function (request, response) {

	try {
		const { quotes } = request.body;
		const replies = await Replies.getRepliesByQuote(quotes);

		response.send({
			replies: replies
		});

	} catch (err) {
		response.status(400).send({
			msg_err: err.message
		});
	}

}
