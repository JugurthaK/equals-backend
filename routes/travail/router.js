const express = require('express');
const router = express.Router();
const {getTravailHF15_64, getSalairesParCategorie} = require('./data');

router.get('/15-64ans', async (req, res) => {
  try {
    const data = await getTravailHF15_64();
    res.json(data)
  } catch (error) {
    throw Error(`Cannot serve travail_genre_age_15_64ans: ${error.message} `);
  }
});

router.get('/', async (req, res) => {
  try {
    Promise.all([
      getTravailHF15_64(),
      getSalairesParCategorie(),
    ]).then((data) => res.json(data));
  } catch (error) {
    throw Error(`Cannot serve travail: ${error.message} `);
  }
});


module.exports = router;
