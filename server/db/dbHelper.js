"use strict"
const express = require('express')
const createToken require('./middleware/createToken.js')
const checkToken require('./middleware/checkToken.js')
const sha1 = require('sha1')

// For testing, need to complete afterwards.
const Login = (req, res) => {
	res.json({
		success: true,
		token: createToken('miotokyo')
	})
}

module.exports = (router) => {
	router.post('/login', Login)
}
