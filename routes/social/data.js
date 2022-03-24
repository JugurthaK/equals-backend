const converter = require('../../utils/converter');
const { generateDatasets } = require('../../utils/generator');

const getPreoccupations = async () => {
  const csvPath = 'datasources/preoccupations sociales 2007-2019.csv';

  const data = await converter(csvPath);
  const datasets = generateDatasets(data);

  return {
    ...datasets,
    title: 'Préoccupations des Français selon le sexe',
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
    title: "Victimes d'agression ou de vol hors ménage selon l'âge et le sexe",
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
    title: "Nombre et sexe des victimes d'homicide au sein du couple",
    lecture: 'en 2020 102 femmes ont été tuées par leur conjoint(e)',
    source: {
      title:
        'Les violences au sein du couple et les violences sexuelles en France en 2020',
      link: 'https://arretonslesviolences.gouv.fr/sites/default/files/2021-12/Lettre%20n%C2%B017%20-%20Les%20violences%20au%20sein%20du%20couple%20et%20les%20violences%20sexuelles%20en%202020.pdf',
    },
  };
};

const getDiplomes = async () => {
  const csvPath = 'datasources/diplomes_femmes_hommes_2006-2018.csv';
  const data = await converter(csvPath);
  const datasets = generateDatasets(data);
  return {
    ...datasets,
    title: 'Niveau de diplome selon le sexe',
    lecture:
      'en 2018 8 067 871 femmes ont un niveau de diplome supérieur à Bac + 2',
    source: {
      title: 'Niveau de diplome selon le sexe, en France entre 2006 et 2018 ',
      link: 'https://www.insee.fr/fr/statistiques/5397599?geo=FE-1&sommaire=5397601',
    },
  };
};

const getPersonneVivantSeule = async () => {
  const csvPath = 'datasources/personne_seule_age_sexe_1090-2018.csv';
  const data = await converter(csvPath);
  const datasets = generateDatasets(data);
  return {
    ...datasets,
    title: "Personnes vivant seules dans leur logement selon l'âge et le sexe",
    lecture: `en 2018, parmi les femmes de 20 à 39 ans vivant dans un logement ordinaire, 14,8% résident seules.`,
    source: {
      title:
        "Personnes vivant seules dans leur logement selon l'âge et le sexe",
      link: 'https://www.insee.fr/fr/statistiques/2381512#tableau-figure1',
    },
  };
};

module.exports = {
  getPreoccupations,
  getVictimesAgressions,
  getVictimesHomicides,
  getDiplomes,
  getPersonneVivantSeule,
};
