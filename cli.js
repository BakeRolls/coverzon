#!/usr/bin/env node

const os = require('os')
const coverzon = require('coverzon')

if(process.argv.length < 3) {
	console.warn("$ coverzon artist [size]")
}

coverzon.get(process.argv[2]).then((covers) => {
	if(process.argv.length > 3) {
		covers = covers.filter((cover) => cover.size == process.argv[3])
	}

	covers = covers.map((cover) => cover.url)

	console.log(covers.join(os.EOL))
})
