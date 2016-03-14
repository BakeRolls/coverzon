'use strict'

let http = require('http')
let querystring = require('querystring')

let base = 'http://www.amazon.com/s/'

let parse = (data) => {
	let covers = /<img\s+src="(.+?)"\s+srcset="(.+?)"/i.exec(data)

	if(!covers) return []

	return covers[2].split(', ').map((cover) => {
		cover = cover.split(' ')

		return { size: cover[1], url: cover[0] }
	})
}

let get = (query) => new Promise((resolve, reject) => {
	let data = ''

	http.get(`${base}${querystring.stringify({ 'field-keywords': query })}`, (res) => {
		res.on('data', (chunk) => data += chunk)
		res.on('end', () => resolve(parse(data)))
	}).on('error', reject)
})

module.exports = { get: get }
