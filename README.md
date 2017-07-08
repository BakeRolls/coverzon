```bash
$ npm install --global coverzon
$ coverzon "Deltron 3030 - Event II"
https://images-na.ssl-images-amazon.com/images/I/51ESfMb6mLL._AC_US480_QL65_.jpg
```

```js
const coverzon = require('coverzon')

coverzon.get('Deltron 3030 - Event II').then(covers => {
	console.log(covers)
})

// coverzon.get('Deltron 3030 - Event II', 'www.amazon.jp' , 'custom user-agent')
```

```bash
$ node index.js
[ { size: '1x',
		url: 'https://images-na.ssl-images-amazon.com/images/I/51ESfMb6mLL._AC_US160_.jpg' },
	{ size: '1.5x',
		url: 'https://images-na.ssl-images-amazon.com/images/I/51ESfMb6mLL._AC_US240_QL65_.jpg' },
	{ size: '2x',
		url: 'https://images-na.ssl-images-amazon.com/images/I/51ESfMb6mLL._AC_US320_QL65_.jpg' },
	{ size: '2.5x',
		url: 'https://images-na.ssl-images-amazon.com/images/I/51ESfMb6mLL._AC_US400_QL65_.jpg' },
	{ size: '3x',
		url: 'https://images-na.ssl-images-amazon.com/images/I/51ESfMb6mLL._AC_US480_QL65_.jpg' } ]
```
