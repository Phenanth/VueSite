'use strict'
const express = require('express')
const db = require('./connect.js');
const createToken = require('../middleware/createToken.js')
const checkToken = require('../middleware/checkToken.js')
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
				console.log('Login successed.');
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

module.exports = (router) => {
	router.post('/register', Register);
	router.post('/login', Login);
}
