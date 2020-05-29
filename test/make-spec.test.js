const cp = require('child_process');
const fs = require('fs-extra');

describe('Test make-spec', () => {
  it('should generate a valid json file', () => {
    const data = cp.exec('./node ../bin/make-spec.js ../test/server.js json ./', (err, stdout, stderr) => {
      if (err) throw new Error(err.message);
      expect(fs.pathExistsSync('./swagger.json')).toBe(true);
    });
  });
});
