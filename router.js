const express = require('express');
const router = express.Router();
const fs = require('fs');

module.exports = app => {
    fs.readdir('./routes', (err, files) => {
        if (err) throw err;
    
        files.forEach(file => {
            require(`./routes/${file}`)(app);
        });
     });
    
}

