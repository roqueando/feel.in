const quotesController = require('../controllers/quotes.controller');
module.exports = app => {

	// =================== POST ======================== //
    app.post(`/publish`, quotesController.publish);
	app.post(`/reply`, quotesController.reply);


	// =================== GET ========================= //
    app.get(`/quotes`, quotesController.getQuotes);
	app.get(`/replies`, quotesController.getRepliesByQuote);


}
