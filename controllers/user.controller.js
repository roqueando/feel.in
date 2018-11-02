const Person = require('../models/Person');


module.exports.create = async function(request, response) {

    try {

        if(!await Person.checkIpExists(request.body.ip)) {

            const username = await Person.create(request.body);
            response.send({
                name: username
            });

        }else {
            
            const user_by_ip = await Person.fetchByIp(request.body.ip);

            response.send({
                name: user_by_ip
            });
        }

		

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

module.exports.profile = async function(request, response) {

    try {

        const user_name = await Person.fetchByIp(request.body.ip);
        response.send({
            user: user_name
        });
    }catch(err) {
        response.status(400).send({
            msg_err: err.message
        });
    }

}
