const express = require('express');
const pdb = require('pseudodb');

const app = express.Router();

app.get('/delete', (req, res) => {
	pdb.deleteDoc('data', req.query.id);
	res.redirect('/');
});

module.exports = app;
