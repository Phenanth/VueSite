'use strict'

const jwt = require('jsonwebtoken');
module.exports = function (req, res, next) {
	if (req.headers['authorization']) {
		let token = req.headers['authorization'].split(' ')[1];
		let decoded = jwt.decode(token, 'secret'); // You can also change the key ramdomly.

		if (token && decoded.exp <= Date.now() / 1000) {
			console.log('Token out of date.');
			return res.json({
				info: 304,
				success: false,
				message: 'Token is out of date, please login again.'
			});
		}
	}
	next();
}
