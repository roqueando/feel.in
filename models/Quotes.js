const Quotes = require('../model');

const Quote = function () {

    return {

        publish: function(your_feel, need) {
            Quotes.insert({
                quote: your_feel,
                what_u_need: {
                    emoji: need.emoji,
                    need: need.text  
                },
                answers: []
            });
        },

        getQuotes: function(cb) {
            Quotes.find({quotes: 'quotes'}, function(err, docs) {
                cb(err, docs);
            });
        }

    }

}


module.exports = new Quote;