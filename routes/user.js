const userController = require('../controllers/user.controller');
module.exports = app => {

    app.post(`/create`, userController.create);
    app.get(`/fetch`, userController.fetch);

}

