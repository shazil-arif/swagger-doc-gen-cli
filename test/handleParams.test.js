const handleParams = require('../bin/handleParams');

describe('Test handle param with single route parameter', () => {
  it('should replace the route parameter with curly parentheses', () => {
    const res = handleParams('/api/:parameter/');
    expect(res).toBe('/api/{parameter}/');
  });
});

describe('Test handle param with multiple route parameters but no parameter at end of path', () => {
  it('should replace the route parameter with curly parentheses', () => {
    const res = handleParams('/api/:parameter/:user/feed/');
    expect(res).toBe('/api/{parameter}/{user}/feed/');
  });
});


describe('Test handle param with multiple route parameters and one at end of path', () => {
  it('should replace the route parameter with curly parentheses', () => {
    const res = handleParams('/:api/:parameter/:user/:userID');
    expect(res).toBe('/{api}/{parameter}/{user}/{userID}');
  });
});
