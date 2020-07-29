/* eslint-disable no-unused-vars */
const { exec } = require('child_process');
const fs = require('fs-extra');
const swaggerParser = require('swagger-parser');

describe('Test make-spec', () => {
  it('should generate a valid json file', () => {
    exec('cd ./test && make-spec ./server.js json ./', (err, stdout, stderr) => {
      expect(fs.existsSync('./test/swagger.json')).toBe(true);
      swaggerParser.validate('./test/swagger.json', (SwaggerError, api) => {
        expect(SwaggerError).toBe(null);
      });
    });
  });

  it('should generate a valid yaml file', () => {
    exec('cd ./test && make-spec ./server.js yaml ./', (err, stdout, stderr) => {
      expect(fs.existsSync('./test/swagger.yaml')).toBe(true);
      swaggerParser.validate('./test/swagger.yaml', (SwaggerError, api) => {
        expect(SwaggerError).toBe(null);
        exec('cd ./test && rm swagger.*');
      });
    });
  });

  it('should throw an error when nothing is exported from the express file', () => {
    exec('cd ./test && make-spec ./server-2.js yaml ./', (err, stdout, stderr) => {
      expect(stdout).toBe('Given Express file does not export anything. Required for generating spec\n');
    });
  });

  it('should throw an error when no routes are found in the express file', () => {
    exec('cd ./test && make-spec ./server-3.js yaml ./', (err, stdout, stderr) => {
      expect(stdout).toBe('No routes detected in express app or app not exported properly in express file\n');
    });
  });
});
