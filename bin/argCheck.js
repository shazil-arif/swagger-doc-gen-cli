/* eslint-disable no-console */
const fs = require('fs-extra');

const usage = () => {
  console.log('Invalid inputs\n');
  console.log('USAGE:');
  console.log('make-spec <relativePathToExpressApp> <yaml> || <json> <relativePathToWriteOutputTo>');
  process.exit(0);
};
module.exports = (args) => {
  const [pathToExpress, fileType, pathToWrite] = args;
  if (!pathToExpress) usage();
  if (!pathToWrite) usage();
  if (fileType === 'json' || fileType === 'yaml') {
    console.log(pathToExpress);
    console.log(__dirname);
    if (!fs.existsSync(pathToExpress)) {
      console.log('Path to express app not found');
      usage();
    }
    if (!fs.existsSync(pathToWrite)) {
      console.log('Path to output destination not found');
      usage();
    }
  } else {
    console.log('Only json and yaml are valid formats for the OpenAPI spec');
    usage();
  }


  return { pathToExpress, fileType, pathToWrite };
};
