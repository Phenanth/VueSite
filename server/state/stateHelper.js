const express = require('express');
const router = express.Router();
const checkToken = require('../middleware/checkToken.js');

// Check if there is any user's logged in.
const isLogin = (req, res) => {

	let login = req.headers['authorization'];

	if (login) {
		console.log('User has logded in.');
		res.json({
			info: 200,
			success: true,
			message: 'You have loged in.'
		});
	} else {
		console.log('No user was loged in.');
		res.json({
			info: 404,
			success: false,
			message: 'Please login first.'
		})
	}
	
}

module.exports = (router) => {

	router.get('/isLogin', isLogin, checkToken);

}
