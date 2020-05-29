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
});
