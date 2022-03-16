const csv = require('csvtojson');

const converter = async (sourcePath) => {
  try {
    console.log(sourcePath);
    const json = await csv().fromFile(sourcePath);
    return json;
  } catch (error) {
    console.error(`Cannot convert CSV to JSON: ${error.message}`);
  }
};

module.exports = converter;
