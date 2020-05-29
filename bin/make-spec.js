#!/usr/bin/env node
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable prefer-const */
const listendpoint = require('express-list-endpoints');
const fs = require('fs-extra');
const YAML = require('json-to-pretty-yaml');
const argCheck = require('./argCheck');
const { methods, swagger } = require('./templates');


const { pathToExpress, fileType, pathToWrite } = argCheck(process.argv.splice(2));

const app = require(`${process.cwd()}/${pathToExpress}`);
if (!app) throw new Error('Server file does not export express app. Required for generating spec');

const paths = listendpoint(app);
paths.forEach((apiPath) => {
  const { path } = apiPath;
  swagger.paths[path] = {};

  apiPath.methods.forEach((method) => {
    const m = method.toLowerCase();
    if (methods[m]) swagger.paths[path][m] = methods[m];
  });
});

let out;
fileType === 'yaml' ? out = YAML.stringify(swagger) : out = JSON.stringify(swagger, null, 4);

fs.writeFile(`${process.cwd()}/${pathToWrite}/swagger.${fileType}`, out, (err) => {
  if (err) {
    console.error(err);
    console.log('Could not create swagger spec file...exiting');
    process.exit(0);
  }
});
