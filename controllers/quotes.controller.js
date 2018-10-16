const Quote = require('../models/Quotes');
const Replies = require('../models/Replies');

module.exports.publish = async (request, response) => {

    try {

        const qt = await Quote.publish(request.body);
        response.send({
            quote: qt
        });

    } catch (err) {
        response.status(400).send({
            msg_err: err.message
        })
    }

}

module.exports.getQuotes = async (request, response) => {

    try {
		const quotes = await Quote.getQuotes();
        
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


       await Replies.reply(request.body).then(reply => {
             Quote.addReply(reply._id, reply.quotes);

            response.send({
                reply: reply
            });
       });

        

    } catch (err) {
        response.status(400).send({
            msg_err: err.message
        });
    }

}

module.exports.getRepliesByQuote = async function (request, response) {

    try {
        
       
        const replies = await Replies.getRepliesByQuote(request.body.quotes);
        
        response.send({
            replies: replies
        });
        
    } catch (err) {
        response.status(400).send({
            msg_err: err.message
        });
    }

}

