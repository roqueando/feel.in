const quotesController = require('../controllers/quotes.controller');
module.exports = app => {

    app.post(`/publish`, quotesController.publish);
    app.get(`/quotes`, quotesController.getQuotes);

}

