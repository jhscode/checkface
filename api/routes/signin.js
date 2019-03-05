const express = require('express');
const router = express.Router();

router.post('/', async(req, res, next) => {
  res.json('signing');
});

module.exports = router;