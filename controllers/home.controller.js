const Person = new require('../models/Person');
module.exports.create = function(request, response) {

    try {

        const { name } = request.body;

        Person.create(name);
        response.send({
            msg: 'success',
            name: name
        });

    }catch(err) {
        response.status(400).send({
            msg_err: err.message
        });
    }

}

module.exports.fetch = function(request, response) {

    try {
        const { name } = request.body;
        const person = Person.fetch(name);
        console.log(person);
        response.send({
            name: person
        });
    }catch(err) {
        response.status(400).send({
            msg_err: err.message
        });
    }

}