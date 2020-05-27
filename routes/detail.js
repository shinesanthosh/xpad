const express = require('express');
const path = require('path');
const pdb = require('pseudodb');

const app = express.Router();

app.get('/detail', (req, res) => {
	const data = pdb.getDoc('data', req.query.id);
	// const date = [];
	// date.push(data.date);
	// date.push(data.time);
	res.render(path.join(__dirname, '..', 'views', 'detail.ejs'), {
		data,
		id: req.query.id,
	});
});

module.exports = app;
