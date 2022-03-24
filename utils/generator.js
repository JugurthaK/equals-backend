const { numberFormatter } = require('./typemanager');
const colors = require('./colors');

const generateDatasets = (data) => {
  const labels = [];
  const headers = Object.keys(data[0]);
  const year = headers[0];
  const headersWithoutYear = headers.slice(1);
  const datasets = headersWithoutYear.map((header, index) => ({
    label: header,
    data: [],
    borderColor: colors[index % colors.length],
    backgroundColor: colors[index % colors.length],
    ...(header.indexOf('Hommes & Femmes') > -1 && { hidden: true }),
  }));

  data.forEach((d) => {
    labels.push(d[year]);
    headersWithoutYear.forEach((header, index) => {
      const value = d[header];
      const formatted = numberFormatter(value);
      if (isNaN(formatted)) datasets[index].spanGaps = true;
      if (parseInt(d[year], 10) < 2000) datasets[index].startDate = 2000;
      datasets[index].data.push(formatted);
    });
  });

  return { labels, datasets };
};

module.exports = { generateDatasets };
