const io = require('../server');
console.log('aaa');
const Notification = function () {
	
	return {

		addNotification: function(from, to, content, emoji) {
			console.log(io);
			io.emit('notification message', {
				from: from,
				to: to,
				content: content,
				emoji: emoji
			});

		}


	}

}


module.exports = new Notification;