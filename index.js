'use strict'

let coverzon = require('./coverzon')

coverzon.get('Deltron 3030 - Event II').then((covers) => {
	console.log(covers)
})