const https = require('https')
const querystring = require('querystring')

const parse = data => {
	let covers = /<img\s+src="(.+?)"\s+srcset="(.+?)"/i.exec(data)

	if (!covers) return []

	return covers[2].split(', ').map(cover => {
		cover = cover.split(' ')

		return {size: cover[1], url: cover[0]}
	})
}

const get = (
	query,
	host = 'www.amazon.com',
	agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
) =>
	new Promise((resolve, reject) => {
		let data = ''
		const req = {
			host: host,
			path: `/s/${querystring.stringify({'field-keywords': query})}`,
			headers: {'User-Agent': agent}
		}

		https
			.get(req, res => {
				res.on('data', chunk => (data += chunk))
				res.on('end', () => resolve(parse(data)))
			})
			.on('error', reject)
	})

module.exports = {get}
