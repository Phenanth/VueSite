// Router for loading functions in case the front side is in need.
const express = require('express')
const router = express.Router()
const dbHelper = require('../db/dbHelper.js')

dbHelper(router)

module.exports = router
