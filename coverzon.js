'use strict'

const https = require('https')
const querystring = require('querystring')

const base = 'https://www.amazon.com/s/'

const parse = (data) => {
	let covers = /<img\s+src="(.+?)"\s+srcset="(.+?)"/i.exec(data)

	if(!covers) return []

	return covers[2].split(', ').map((cover) => {
		cover = cover.split(' ')

		return { size: cover[1], url: cover[0] }
	})
}

const get = (query) => new Promise((resolve, reject) => {
	let data = ''

	https.get(`${base}${querystring.stringify({ 'field-keywords': query })}`, (res) => {
		res.on('data', (chunk) => data += chunk)
		res.on('end', () => resolve(parse(data)))
	}).on('error', reject)
})

module.exports = { get: get }
