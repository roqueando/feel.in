const quotesController = require('../controllers/quotes.controller');
module.exports = app => {

	// =================== POST ======================== //
    app.post(`/publish`, quotesController.publish);
	app.post(`/reply`, quotesController.reply);
	app.post(`/replies`, quotesController.getRepliesByQuote);

	// =================== GET ========================= //
    app.get(`/quotes`, quotesController.getQuotes);
    app.get(`/quotes/:who`, quotesController.getQuotesByWho);


}
