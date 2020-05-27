const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const addData = require('./routes/addData');
const data = require('./routes/data');
const detail = require('./routes/detail');
const del = require('./routes/del');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(addData);
app.use(data);
app.use(detail);
app.use(del);

app.use((req, res) => {
	res.status(404).send("That page doesn't exist");
});

app.listen(3000);
