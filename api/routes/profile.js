const express = require('express');
const router = express.Router();

router.get('/', async(req, res, next) => {
  res.json('profile')
})

router.get('/:id', async(req, res, next) => {
  const { id } = req.params;
  let found = false;
  res.json('profile id');
});



module.exports = router;