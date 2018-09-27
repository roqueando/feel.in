const Quotes = require('../models/Quotes');
const emoji = require('node-emoji');
module.exports.publish = function(request, response) {

    try {
        
        const { your_feel, what_u_need } = request.body;

        Quotes.publish(your_feel, what_u_need);
        response.send({
            your_feel: your_feel,
            what_u_need: what_u_need
        });

    } catch (err) {
        response.status(400).send({
            msg_err: err.message
        })
    }

}

module.exports.getQuotes = function(request, response) {

    try {
        
        Quotes.getQuotes(function(err, quotes) {
            if (err) {
                response.status(400).send({
                    msg_err: err
                });
            }
            
            response.send({
                quote: quotes
            });
        });

    } catch (err) {
        response.status(400).send({
            msg_err: err.message
        });
    }
}