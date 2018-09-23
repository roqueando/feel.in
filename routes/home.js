const homeController = require('../controllers/home.controller');
module.exports = app => {

    app.get(`/create`, homeController.create);
    app.get(`/fetch`, homeController.fetch);

}

