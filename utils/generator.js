const { numberFormatter } = require('./typemanager');

const generateDatasets = (data) => {
  const nanFlag = false;
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
      const formatted = numberFormatter(value);
      if (formatted !== null) datasets[index].data.push(formatted);
      else {
        datasets[index].data.push(NaN);
        nanFlag = true;
      }
    });
  });

  return { labels, datasets, ...(nanFlag && { spanGaps: true }) };
};

module.exports = { generateDatasets };
