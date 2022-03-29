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
      name: dataset.title,
      children: dataset.datasets.map(dts => ({ name: dts.label, data: dts.data, range: [dataset.labels[0], dataset.labels[dataset.labels.length - 1]] }))
    });
  });

  return tmp;
};

router.get('/treeview', async (req, res) => {
  const resArr = [];
  Promise.all([getTravailHF15_64(), getSalairesParCategorie()]).then((data) =>
    resArr.push(generateTreeView('Travail', data))
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
