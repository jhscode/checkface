const express = require('express');
const router = express.Router();

router.get('/', async(req, res, next) => {
  res.json('profile')
})

router.get('/:id', async(req, res, next) => {
  const { id } = req.params;
  let found = false;
  database.users.forEach(user => {
    if(user.id === id) {
      found = true;
      return res.json(user);
    }
  })
  if(!found) {
    res.status(400).json('not found');
  }
});



module.exports = router;