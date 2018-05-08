"use strict"

const express = require('express')
const router = require('./server/router/index.js')
const app = express()

app.use('/api', router)

app.use(function (req, res, next) {
	var err = new Error('Page not found.')
	err.status = 404
	next(err)
});

app.listen(3000, function () {
	console.log("Server running at port 3000...")
})

module.exports = app;
