const Replies = require('../models/Replies');

module.exports.reply = async function (request, response) {

	try {


		const reply = await Replies.reply(request.body);

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

		const replies = await Replies.getRepliesByQuote(request.body.quote);

		response.send({
			replies: replies
		});

	} catch (err) {
		response.status(400).send({
			msg_err: err.message
		});
	}

}
