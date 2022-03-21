const converter = require('../../utils/converter');

const { numberFormatter } = require('../../utils/typemanager');

const getPreoccupations = async () => {
  const csvPath = 'datasources/preoccupations sociales 2007-2019.csv';

  const data = await converter(csvPath);
  const labels = [];
  const headers = Object.keys(data[0]);
  const year = headers[0];
  const headersWithoutYear = headers.slice(1);
  const datasets = headersWithoutYear.map((header) => ({
    label: header,
    data: [],
    borderColor: '#f28de0',
    backgroundColor: '#f28de0',
    ...(header.indexOf('Hommes & Femmes') > -1 && { hidden: true }),
  }));

  data.forEach((d) => {
    labels.push(d[year]);
    headersWithoutYear.forEach((header, index) => {
      const value = d[header];
      datasets[index].data.push(numberFormatter(value));
    });
  });

  return datasets;
};

module.exports = { getPreoccupations };
