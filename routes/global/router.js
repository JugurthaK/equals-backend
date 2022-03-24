const express = require('express');
const router = express.Router();

const {
  getSalairesParCategorie,
  getTravailHF15_64,
} = require('../travail/data');
const {
  getVictimesAgressions,
  getVictimesHomicides,
  getDiplomes,
  getPersonneVivantSeule,
} = require('../social/data');

const generateTreeView = (categoryName, data) => {
  const tmp = { name: categoryName };
  tmp.children = [];
  data.forEach((dataset) => {
    tmp.children.push({
      title: dataset.title,
      labels: dataset.labels,
      datasets: dataset.datasets,
    });
  });

  return tmp;
};

router.get('/treeview', async (req, res) => {
  const resArr = [];
  Promise.all([getTravailHF15_64(), getSalairesParCategorie()]).then((data) =>
    resArr.push(generateTreeView('Travai', data))
  );

  Promise.all([
    getVictimesAgressions(),
    getVictimesHomicides(),
    getDiplomes(),
    getPersonneVivantSeule(),
  ]).then((data) => {
    resArr.push(generateTreeView('Social', data));
    res.json(resArr);
  });
});

module.exports = router;
