"use strict"

const express = require('express');
var routes = require('./router/index.js');
var app = express();

app.use('/', routes);
//app.use('/api', router)
//const router = require('./router/index.js')


app.use(function (req, res, next) {
	var err = new Error('Page not found.')
	err.status = 404
	next(err)
});

app.listen(3000, function () {
	console.log("Server running at port 3000...")
})

module.exports = app;
