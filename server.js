// Some requires
const express = require("express");
const app = express();
const bp = require('body-parser');
/**
 * Requires
 */
require('./router')(app);
require('./model');
/**
 * Configs
 */
app.use(bp.json());
app.use(bp.urlencoded({ extended: true, limit: '50mb'}));

// Up the server
app.listen(8080, () => {
    console.log(`Running on port 8080 🚀`);
});
