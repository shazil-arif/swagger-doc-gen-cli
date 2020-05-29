/* eslint-disable import/no-dynamic-require */
const listendpoint = require('express-list-endpoints');
const fs = require('fs-extra');
const YAML = require('json-to-pretty-yaml');
const argCheck = require('./argCheck');
const { methods, swagger } = require('./templates');

/**
 * make-spec pathToExpressApp yaml || json pathToWriteFile
 */

const { pathToExpress, fileType, pathToWrite } = argCheck(process.argv.splice(2));

console.log(pathToExpress);
const paths = listendpoint(require(`${pathToExpress}`));
paths.forEach((apiPath) => {
  const { path } = apiPath;
  swagger.paths[path] = {};
  apiPath.methods.forEach((method) => {
    const m = method.toLowerCase();
    if (methods[m]) swagger.paths[path][m] = methods[m];
  });
});
let out = JSON.stringify(swagger);
if (fileType === 'yaml') out = YAML.stringify(out);
fs.writeFileSync(`${pathToWrite}/swagger.${fileType}`, out, 'utf8', (swagger), (err) => {
  if (err) {
    console.error(err);
    console.log('Could not create swagger spec file...exiting');
    process.exit(0);
  }
});
