'use strict'

if (process.browser)
	module.exports = require('browser-location')
else require('location')
