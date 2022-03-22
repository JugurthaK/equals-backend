const express = require('express');
const router = express.Router();
const {
  getPreoccupations,
  getVictimesAgressions,
  getVictimesHomicides,
} = require('./data');
router.get('/', async (req, res) => {
  Promise.all([
    getPreoccupations(),
    getVictimesAgressions(),
    getVictimesHomicides(),
  ]).then((data) => res.json(data));
});

module.exports = router;
