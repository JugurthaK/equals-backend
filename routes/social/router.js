const express = require('express');
const router = express.Router();
const {
  getPreoccupations,
  getVictimesAgressions,
  getVictimesHomicides,
  getDiplomes,
  getPersonneVivantSeule,
} = require('./data');
router.get('/', async (req, res) => {
  Promise.all([
    getDiplomes(),
    getPreoccupations(),
    getVictimesAgressions(),
    getVictimesHomicides(),
    getPersonneVivantSeule(),
  ]).then((data) => res.json(data));
});

module.exports = router;
