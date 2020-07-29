/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-console */
const fs = require('fs-extra');
const listendpoint = require('express-list-endpoints');

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

  const app = require(`${process.cwd()}/${pathToExpress}`);
  let paths;
  if (Object.keys(app).length === 0) {
    console.log('Given Express file does not export anything. Required for generating spec');
    process.exit();
  }
  try {
    paths = listendpoint(app);
  } catch (ex) {
    console.log('No routes detected in express app or app not exported properly in express file');
    process.exit();
  }

  return { paths, fileType, pathToWrite };
};
