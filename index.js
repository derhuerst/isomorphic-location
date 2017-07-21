'use strict'

if (process.browser) {
	module.exports = require('browser-location')
} else {
	module.exports = require('location')
}
