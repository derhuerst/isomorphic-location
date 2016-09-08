'use strict'

const isBrowser = require('is-browser')

module.exports = isBrowser
	? require('browser-location')
	: require('location')
