'use strict'

var jwt = require('jsonwebtoken');

module.exports = function (name) {
	const token = jwt.sign({
		name: name
	}, 'secret', { expiresIn: '168h' }); // You can also change the key ramdomly.
	return token;
}
