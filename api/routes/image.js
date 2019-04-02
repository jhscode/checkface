const express = require('express');
const router = express.Router();

router.get('/', async(req, res, next) => {
  res.json('image')
});

router.put('/', async(req, res, next) => {
  const { id } = req.body;
  let found = false;
  database.users.forEach(user => {
    if(user.id === id) {
      found = true;
      user.entries++;
      return res.json(user.entries);
    }
  })
  if (!found) {
    res.status(400).json('not found');
  }
});

module.exports = router;