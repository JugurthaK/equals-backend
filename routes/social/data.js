const converter = require('../../utils/converter');
const { generateDatasets } = require('../../utils/generator');

const getPreoccupations = async () => {
  const csvPath = 'datasources/preoccupations sociales 2007-2019.csv';

  const data = await converter(csvPath);
  const datasets = generateDatasets(data);

  return {
    ...datasets,
    lecture:
      'en 2019, 9,5 % des femmes âgées de 14 ans ou plus ont déclaré que la délinquance était le problème le plus important dans la société française actuelle parmi la liste des huit items proposés.',
    source: {
      title:
        'Préoccupations des Français selon le sexe - Données annuelles de 2007 à 2019',
      link: 'https://www.insee.fr/fr/statistiques/2383052',
    },
  };
};

const getVictimesAgressions = async () => {
  const csvPath = 'datasources/victimes_agressions_2009-2019.csv';

  const data = await converter(csvPath);
  const datasets = generateDatasets(data);

  return {
    ...datasets,
    lecture:
      "en 2019, 587 000 femmes déclarent avoir été victimes de vols, avec ou sans violences, de la part d'une personne ne vivant pas dans le ménage, dans l'année précédant l’enquête.",
    source: {
      title:
        "Victimes d'agression ou de vol hors ménage selon l'âge et le sexe : effectifs",
      link: 'https://www.insee.fr/fr/statistiques/2525801',
    },
  };
};

const getVictimesHomicides = async () => {
  const csvPath = 'datasources/victimes_homicides_2006-2020.csv';
  const data = await converter(csvPath);
  const datasets = generateDatasets(data);

  return {
    ...datasets,
    lecture: 'en 2020 102 femmes ont été tuées par leur conjoint(e)',
    source: {
      title:
        'Les violences au sein du couple et les violences sexuelles en France en 2020',
      link: 'https://arretonslesviolences.gouv.fr/sites/default/files/2021-12/Lettre%20n%C2%B017%20-%20Les%20violences%20au%20sein%20du%20couple%20et%20les%20violences%20sexuelles%20en%202020.pdf',
    },
  };
};

module.exports = {
  getPreoccupations,
  getVictimesAgressions,
  getVictimesHomicides,
};
