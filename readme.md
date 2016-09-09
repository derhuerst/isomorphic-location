# *isomorphic-location*

**Get your current location in Node & Browser**, using [`location`](https://github.com/derhuerst/location) in Node and [`browser-location`](https://github.com/derhuerst/browser-location) in the browser.

[![npm version](https://img.shields.io/npm/v/isomorphic-location.svg)](https://www.npmjs.com/package/isomorphic-location)
[![build status](https://img.shields.io/travis/derhuerst/isomorphic-location.svg)](https://travis-ci.org/derhuerst/isomorphic-location)
[![dependency status](https://img.shields.io/david/derhuerst/isomorphic-location.svg)](https://david-dm.org/derhuerst/isomorphic-location)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/isomorphic-location.svg)](https://david-dm.org/derhuerst/isomorphic-location#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/isomorphic-location.svg)


## Installing

```shell
npm install derhuerst/isomorphic-location
```


## Usage

```
location([timeout]) // 10s by default
```

```js
const location = require('isomorphic-location')

location()
	.then((l) => console.log(l))
	.catch((err) => console.error(err))
```

This will give you something similar to the following:

```js
{
	  latitude:  52.547172
	, longitude: 13.347745
	, precision: 65  // in meters
	, native:    true
}
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/location/issues).
