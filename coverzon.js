'use strict'

let http = require('http')
let querystring = require('querystring')

let base = 'http://www.amazon.com/s/'

let parse = (data) => {
	let regex = /<img\s+src="(.+?)"\s+srcset="(.+?)"/i

	let covers = regex.exec(data)[2].split(', ').map((cover) => {
		cover = cover.split(' ')

		return { size: cover[1], url: cover[0] }
	})

	return covers
}

let get = (query) => new Promise((resolve, reject) => {
	let data = ''

	http.get(`${base}${querystring.stringify({ 'field-keywords': query })}`, (res) => {
		res.on('data', (chunk) => data += chunk)
		res.on('end', () => resolve(parse(data)))
	}).on('error', reject)
})

module.exports = { get: get }
