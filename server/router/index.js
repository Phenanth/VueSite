// Router for loading functions in case the front side is in need.
const express = require('express')
const dbHelper = require('../db/dbHelper.js')
const router = express.Router()

// router.post('/test', function(req, res, next) {
// 	console.log('Login function called.')
// 	res.json({
// 		success: true
// 	})
// })

dbHelper(router);

module.exports = router
