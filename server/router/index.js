// Router for loading functions in case the front side is in need.
const express = require('express');
const router = express.Router();
const dbHelper = require('../db/dbHelper.js');
const stateHelper = require('../state/stateHelper.js');

dbHelper(router);
stateHelper(router);

module.exports = router
