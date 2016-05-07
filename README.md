```
$ npm i coverzon
```

```js
'use strict'

let coverzon = require('coverzon')

coverzon.get('Deltron 3030 - Event II').then((covers) => {
	console.log(covers)
})
```

```
$ node index.js
[ { size: '1x',
    url: 'http://ecx.images-amazon.com/images/I/51ESfMb6mLL._AA160_.jpg' },
  { size: '1.5x',
    url: 'http://ecx.images-amazon.com/images/I/51ESfMb6mLL._AA240_QL65_.jpg' },
  { size: '2x',
    url: 'http://ecx.images-amazon.com/images/I/51ESfMb6mLL._AA320_QL65_.jpg' },
  { size: '2.5x',
    url: 'http://ecx.images-amazon.com/images/I/51ESfMb6mLL._AA400_QL65_.jpg' },
  { size: '3x',
    url: 'http://ecx.images-amazon.com/images/I/51ESfMb6mLL._AA480_QL65_.jpg' } ]
```