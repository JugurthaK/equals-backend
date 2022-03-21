const express = require('express');
const router = express.Router();
const { getPreoccupations } = require('./data');
router.get('/', async (req, res) => {
  const preoccupations = await getPreoccupations();

  res.json(preoccupations);
});

module.exports = router;
