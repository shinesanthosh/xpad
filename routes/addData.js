const express = require('express');
const path = require('path');
const pdb = require('pseudodb');

const app = express.Router();

app.get('/addData', (req, res) => {
	res.render(path.join(__dirname, '..', 'views', 'add.ejs'));
});

app.post('/addData', (req, res) => {
	pdb.addDoc('data', req.body);
	res.redirect('/');
});

module.exports = app;
