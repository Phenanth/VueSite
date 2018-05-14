'use strict'
const express = require('express')
const router = express.Router()
const db = require('./connect.js');
const createToken = require('../middleware/createToken.js')
const checkToken = require('../middleware/checkToken.js')
const emailer = require('../middleware/emailer.js');
const sha1 = require('sha1')

// For testing, need to complete afterwards.
const Register = (req, res) => {
	let queryString = {
		sql: 'SELECT username FROM users WHERE username = ?',
		values: [req.body.username],
		timeout: 40000
	};
	let insertQuery = {
		sql: 'INSERT INTO users VALUES (?, ?)',
		values: [req.body.username, req.body.password],
		timeout: 40000
	}
	db.query(queryString, function(error, results, fields) {
		if (error) {
			throw error;
		}
		if (results[0]) {
			console.log('Duplicated account!');
			res.json({
				info: 504,
				success: false
			});
		} else {
			db.query(insertQuery, function(error, results, fields) {
				if (error) {
					throw error;
				}
				console.log('Account registed.');
				res.json({
					info: 200,
					success: true
				});
			});
		}
	});
	
}

// For testing, need to complete afterwards.
const Login = (req, res) => {
	let queryString = {
		sql: 'SELECT password FROM users WHERE username = ?',
		values: [req.body.username],
		timeout: 40000
	}
	db.query(queryString, function (error, results, fields) {
		if (error) {
			throw error;
		}
		if (!results[0]) {
			console.log('Account not found.');
			res.json({
				info: 404,
				success: false
			});
		} else {
			if (req.body.password == results[0].password) {
				console.log('Login successed, user:' + req.body.username);
				res.json({
					info: 200,
					success: true,
					token: createToken(req.body.username)
				});
			} else {
				console.log('Login failed.');
				res.json({
					info: 200,
					success: false
				});
			}
		}
	});
	
}

const SendValidEmail = (req, res) => {

	let user = {
		email: req.body.username,
		validCode: ''
	}

	let queryString = {
		sql: 'SELECT username FROM users WHERE username = ?',
		values: [req.body.username],
		timeout: 40000
	}

	db.query(queryString, function (error, results, fields) {
		if (results[0]) {
			console.log('Duplicated account!');
			res.json({
				info: 504,
				success: false,
				message: 'Account already existed.'
			});
		} else {
			user.validCode = emailer(user.email);
			/* 
			Problem:
			Always returns a valid code either the mail was
			sent successfully or failed.
			 */
			if (!user.validCode) {
				res.json({
					info: 304,
					success: false,
					message: 'Please input a valid email.'
				})
			} else {
				res.json({
					info: 200,
					success: true,
					validData: user.validCode
				});
			}
		}
	});
}

module.exports = (router) => {

	router.post('/register', Register);

	router.post('/login', Login);

	router.post('/sendValidCode', SendValidEmail);

}
