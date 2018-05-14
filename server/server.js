"use strict"

const Express = require('express');
var BodyParser = require('body-parser')
var routes = require('./router/index.js');
// var db = require('./db/connect.js');
var app = Express();

// Change default receiving data type from 'x-www-form-urlencoded' to 'json'
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use('/', routes);
//app.use('/api', routes);

app.use(function (req, res, next) {
	var err = new Error('Page not found.')
	err.status = 404
	next(err)
});

app.listen(3000, function () {
	console.log("Server running at port 3000...")
})

module.exports = app;
