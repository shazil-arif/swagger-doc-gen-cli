#!/usr/bin/env node
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable prefer-const */
const fs = require('fs-extra');
const YAML = require('json-to-pretty-yaml');
const argCheck = require('./argCheck');
const { methods, swagger, getParameters } = require('./templates');
const handleParams = require('./handleParams');

const { paths, fileType, pathToWrite } = argCheck(process.argv.splice(2));

paths.forEach((apiPath) => {
  let { path } = apiPath;
  let hasRouteParam = false;
  let routeParams;
  if (path.includes(':')) {
    hasRouteParam = true;
    path = handleParams(path);
    routeParams = path.match(/{([^}]+)}/g).map((res) => res.replace(/{|}/g, ''));
  }

  swagger.paths[path] = {};

  apiPath.methods.forEach((method) => {
    const m = method.toLowerCase();
    if (methods()[m]) {
      swagger.paths[path][m] = methods()[m];
      if (hasRouteParam) {
        routeParams.forEach((param) => {
          let params = getParameters();
          params.name = param;
          swagger.paths[path][m].parameters.push(params);
        });
      }
    }
  });
});

let out;
fileType === 'yaml' ? out = YAML.stringify(swagger) : out = JSON.stringify(swagger, null, 4);

fs.writeFile(`${process.cwd()}/${pathToWrite}/swagger.${fileType}`, out, (err) => {
  if (err) throw new Error('Could not create swagger spec file...exiting');
});
