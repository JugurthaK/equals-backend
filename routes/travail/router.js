const express = require('express');
const router = express.Router();
const {getTravailHF15_64, getSalairesParCategorie, getTauxChomage} = require('./data');

router.get('/15-64ans', async (req, res) => {
  try {
    const data = await getTravailHF15_64();
    res.json(data)
  } catch (error) {
    throw Error(`Cannot serve travail_genre_age_15_64ans: ${error.message} `);
  }
});

router.get('/taux-chomage', async (req, res) => {
  try {
    const data = await getTauxChomage();
    res.json(data)
  } catch (error) {
    throw Error(`Cannot serve taux_chomage_1975-2021: ${error.message} `);
  }
});

router.get('/', async (req, res) => {
  try {
    Promise.all([
      getTravailHF15_64(),
      getSalairesParCategorie(),
      getTauxChomage(),
    ]).then((data) => res.json(data));
  } catch (error) {
    throw Error(`Cannot serve travail: ${error.message} `);
  }
});


module.exports = router;
