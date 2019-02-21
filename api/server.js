const bodyParser = require('body-parser');
const express = require('express');
const signin = requre('./routes/signin');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/signin', signin);


module.export = app;
