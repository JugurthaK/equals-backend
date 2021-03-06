const converter = require('../../utils/converter');

const getTravailHF15_64 = async () => {
  const csvPath = 'datasources/travail_genre_age_15_64ans.csv';

  const data = await converter(csvPath);
  const labels = [];
  const datasets = [
    {
      label: 'Femmes',
      data: [],
      borderColor: '#0a9396',
      backgroundColor: '#0a9396',
    },
    {
      label: 'Hommes',
      data: [],
      borderColor: '#bb3e03',
      backgroundColor: '#bb3e03',
    },
  ];
  data.forEach((d) => {
    labels.unshift(d.Annee);
    datasets[0].data.unshift(parseInt(d.Femmes, 10));
    datasets[1].data.unshift(parseInt(d.Hommes, 10));
  });

  return {
    id: 1,
    labels,
    title: "Nombre d'hommes et de femmes de 15 à 64 ans actives de 1975 à 2021 (en millions)",
    datasets,
    description:
      "Nombre d'hommes et de femmes de 15 à 64 ans actives de 1975 à 2021 (en millions)",
    lecture: 'en 2021, 14 495 000 femmes de 15 à 64 ans sont actives',
    source: {
      title:
        'Activité selon le sexe de 15 à 64 ans - Données annuelles de 1975 à 2021 (INSEE)',
      link: 'https://www.insee.fr/fr/statistiques/2489758#figure1_radio1',
    },
  };
};

const getSalairesParCategorie = async () => {
  const csvPath = 'datasources/salaires_par_categorie.csv';

  const data = await converter(csvPath);
  const labels = [];
  const datasets = [
    {
      label: 'Cadres',
      data: [],
      borderColor: '#0a9396',
      backgroundColor: '#0a9396',
    },
    {
      label: 'Ouvriers',
      data: [],
      borderColor: '#bb3e03',
      backgroundColor: '#bb3e03',
    },
    {
      label: 'Professions intermédiaires',
      data: [],
      borderColor: '#94d2bd',
      backgroundColor: '#94d2bd',
    },
    {
      label: 'Employés (comptable, secrétaire...)',
      data: [],
      borderColor: '#ca6702',
      backgroundColor: '#ca6702',
    },
  ];
  data.forEach((d) => {
    labels.push(d.Annee);
    datasets[0].data.push(parseFloat(d.ecart_sm_cadre.replace(',', '.'), 10));
    datasets[1].data.push(parseFloat(d.ecart_sm_ouvrier.replace(',', '.'), 10));
    datasets[2].data.push(
      parseFloat(d.ecart_sm_intermediaire.replace(',', '.'), 10)
    );
    datasets[3].data.push(parseFloat(d.ecart_sm_employe.replace(',', '.'), 10));
  });

  return {
    labels,
    datasets,
    title: 'Écart de rémunération femmes-hommes',
    description:
      'Écart de salaire en pourcentage entre hommes et femmes par catégorie (le salaire moyen des hommes étant systématiquement plus élevé que celui des femmes)',
    lecture:
      'en 2019, les femmes ont un salaire net en équivalent temps plein inférieur de 15,6% à celui des hommes.',
    source: {
      title: 'Insee, bases Tous salariés',
      link: 'https://www.insee.fr/fr/statistiques/4514861',
    },
  };
};

const getTauxChomage = async () => {
  const csvPath = 'datasources/taux_chomage_1975-2021.csv';

  const data = await converter(csvPath);
  const labels = [];
  const datasets = [
    {
      label: 'Femmes',
      data: [],
      borderColor: '#0a9396',
      backgroundColor: '#0a9396',
    },
    {
      label: 'Hommes',
      data: [],
      borderColor: '#bb3e03',
      backgroundColor: '#bb3e03',
    },
  ];
  data.forEach((d) => {
    labels.push(d.Annee);
    datasets[0].data.push(parseFloat(d.Femmes.replace(',', '.'), 10));
    datasets[1].data.push(parseFloat(d.Hommes.replace(',', '.'), 10));
  });

  return {
    labels,
    title: 'Taux de chômage en pourcentage entre hommes et femmes',
    datasets,
    description:
      'Taux de chômage en pourcentage entre hommes et femmes',
    lecture:
      'en 2021, 7,8% des femmes actives sont au chômage.',
    source: {
      title: "Chômage selon le sexe et l'âge - Données annuelles de 1975 à 2021",
      link: 'https://www.insee.fr/fr/outil-interactif/5367857/details/40_SOC/44_EGF/44D_Figure4#',
    },
  };
};

module.exports = {
  getTravailHF15_64,
  getSalairesParCategorie,
  getTauxChomage,
};
