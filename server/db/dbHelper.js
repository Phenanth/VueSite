'use strict'
const express = require('express')
const createToken = require('../middleware/createToken.js')
const checkToken = require('../middleware/checkToken.js')
const sha1 = require('sha1')

const Register = (req, res) => {
	console.log('Operation: Register. ' + req.body.username + ', ' + req.body.password);
	res.json({
		info: '123',
		success: true
	});
}

// For testing, need to complete afterwards.
const Login = (req, res) => {
	console.log('Operation: Login. ' + req.body.username + ', ' + req.body.password);
	res.json({
		info: '123',
		success: true
	});
}

module.exports = (router) => {
	router.post('/register', Register);
	router.post('/login', Login);
}
