const Quote = require('../models/Quotes');
const Replies = require('../models/Replies');
const Notification = require('../models/Notifications');
const emoji = require('node-emoji');

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

module.exports.getQuotesByWho = async (request, response) => {

    try {
        const quotes = await Quote.getQuotesByWho(request.params.who, 5);
        
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
            var addedReply = Quote.addReply(reply._id, reply.quotes);
            var addedPromiseResolved = Promise.resolve(addedReply);

            addedPromiseResolved.then(function(response) {
                const replyUserName = Replies.getReplyById(reply._id);
                var repUser = Promise.resolve(replyUserName);
                repUser.then((rep) => {
                    
                    Notification.addNotification(rep.user.name, response.user.name, reply.comment, emoji.get(reply.emoji));

                });
                
            });

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

