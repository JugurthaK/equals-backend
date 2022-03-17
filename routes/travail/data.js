const converter = require('../../utils/converter');

const getTravailHF15_64 = async () => {
  const csvPath = 'datasources/travail_genre_age_15_64ans.csv';

  const data = await converter(csvPath);
  const labels = [];
  const datasets = [
    {
      label: 'Femmes',
      data: [],
      borderColor: '#f28de0',
      backgroundColor: '#f28de0',
    },
    {
      label: 'Hommes',
      data: [],
      borderColor: '#2554ff',
      backgroundColor: '#2554ff',
    },
  ];
  data.forEach((d) => {
    labels.unshift(d.Annee);
    datasets[0].data.unshift(parseInt(d.Femmes, 10));
    datasets[1].data.unshift(parseInt(d.Hommes, 10));
  });

  return {
    labels,
    datasets,
    description:
      "Nombre d'hommes et de femmes de 15 à 64 ans actives de 1975 à 2021 (en millions)",
    lecture:
      'Lecture : en 2021, 14 495 000 femmes de 15 à 64 ans sont actives',
    source: {
      title:
        'Activité selon le sexe de 15 à 64 ans - Données annuelles de 1975 à 2021 (INSEE)',
      link: 'https://www.insee.fr/fr/statistiques/2489758#figure1_radio1',
    },
  };
}

module.exports = {
  getTravailHF15_64,
}
