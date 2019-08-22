const fs = require('fs').promises;

const createFolder = require('../utils/create-folder');

const formatDate = () => {
  const date = new Date();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  return `${year}-${month}-${day}`;
};

const writeHTML = async (html) => {
  const date = formatDate();
  const filename = `./output/${date}.html`;
  await createFolder('output');
  await fs.writeFile(filename, html);
};

module.exports = writeHTML;
