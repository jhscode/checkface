const express = require('express');
const router = express.Router();
const bcrypt = require('brcrypt-nodejs');

const database = {
  users: [
    {
      id: '124',

    }
  ]
};

router.post('/', async(req, res, next) => {
  const { email, name, password } = req.body;
  bcrypt.hash(password, null, null, function(err, hash) {
    console.log(hash);
  });
  database.users.push({
    id: '125',
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date()    
  });
  res.json(database.users[database.users.length-1]);
});

module.exports = router;