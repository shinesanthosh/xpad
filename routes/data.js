const express = require('express');
const path = require('path');
const pdb = require('pseudodb');

const app = express.Router();

app.get('/', (req, res) => {
	const dat = pdb.getDb('data');
	// console.log(dat);
	const result = [];
	const index = [];
	for (let key in dat) {
		result.push(dat[key]);
		index.push(key);
		// console.log('key', key);
	}
	// console.log(result);
	res.render(path.join(__dirname, '..', 'views', 'data.ejs'), {
		arr: result,
		key: index,
	});
});

module.exports = app;
