const express = require('express');
const router = express.Router();

const database = {
  users: [
    {
      id: '124',

    }
  ]
};

router.post('/', async(req, res, next) => {
  if (req.body.email === database.users[0].email && req.body
    .password === database.users[0].password) {
      res.json('success') 
    } else {
      res.status(400).json('error logging in')
    }
  res.json('signing');
});

module.exports = router;