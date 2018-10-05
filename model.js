const mongoose = require('mongoose');

/**
 * [Creates the connection with the DB]
 *
 */
mongoose.connect(`mongodb://localhost:27017/feelin`);

mongoose.Promise = global.Promise;

module.exports = mongoose;