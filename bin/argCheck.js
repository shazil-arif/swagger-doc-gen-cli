/* eslint-disable no-console */
const fs = require('fs-extra');

/**
 * @brief print a usage message for the CLI tool
 */
const usage = () => {
  console.log('Invalid inputs\n');
  console.log('USAGE:');
  console.log('make-spec <relativePathToExpressApp> <yaml> || <json> <relativePathToWriteOutputTo>');
  process.exit(0);
};

/**
 * @brief Validate the command line arguments given to the tool
 * @param {Array} args to validate
 */
module.exports = (args) => {
  const [pathToExpress, fileType, pathToWrite] = args;
  if (!pathToExpress) usage();
  if (!pathToWrite) usage();
  if (fileType === 'json' || fileType === 'yaml') {
    if (!fs.existsSync(`${process.cwd()}/${pathToExpress}`)) {
      console.log('Path to express app not found');
      usage();
    }
    if (!fs.existsSync(`${process.cwd()}/${pathToWrite}`)) {
      console.log('Path to output destination not found');
      usage();
    }
  } else {
    console.log('Only json and yaml are valid formats for the OpenAPI spec');
    usage();
  }


  return { pathToExpress, fileType, pathToWrite };
};
