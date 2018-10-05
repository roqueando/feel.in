const Person = require('../models/Person');


module.exports.create = async function(request, response) {

    try {

    
        const username = await Person.create(request.body);

		response.send({
            name: username
        });

    } catch(err) {
        response.status(400).send({
            msg_err: err.message
        });
    }

}

module.exports.fetch = async function(request, response) {

    try {

        const user_name = await Person.fetch();
		response.send({
			name: user_name
		});
    }catch(err) {
        response.status(400).send({
            msg_err: err.message
        });
    }

}
