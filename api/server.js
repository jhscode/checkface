const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');

const home = require('./routes/home');
const signin = require('./routes/signin');
const register = require('./routes/register');
const profile = require('./routes/profile');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', home);
app.use('/signin', signin);
app.use('/register', register);
app.use('/profile', profile);

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    const errors = [
      { message: 'unauthorized' },
    ];
    res.status(401).json({ errors });
  }
});

module.exports = app;
