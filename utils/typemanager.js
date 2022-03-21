const numberFormatter = (value) => {
  if (typeof value === 'string') {
    return parseFloat(value.replace(',', '.'));
  }
};

module.exports = { numberFormatter };
