"use strict"
const express = require('express')
const createToken = require('../middleware/createToken.js')
const checkToken = require('../middleware/checkToken.js')
const sha1 = require('sha1')

// For testing, need to complete afterwards.
const Login = (req, res) => {
	console.log('Login function called.')
	res.json({
		info: '123',
		success: true
	})
}

module.exports = (router) => {
	// router.post('/login', Login)
	router.get('/login', Login)
}
