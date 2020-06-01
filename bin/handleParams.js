/**
 * @brief Convert an express endpoint with route parameters to a valid OpenAPI
 * endpoint with parentheses around router parameters
 * @param {String} path the API path to convert
 * @return {String} converted path with parentheses around route parameters
 */
module.exports = (path) => {
  const arr = path.split('');
  const indices = [];
  let offset = 0;

  for (let i = 0; i < arr.length; i += 1) if (arr[i] === ':') indices.push(i);

  indices.forEach((index) => {
    const nextSlash = path.indexOf('/', index);

    // wrap router parameters inside {} brackets while keeping '/' in the route
    arr[index + offset] = '{';

    if (nextSlash !== -1) {
      arr[nextSlash + offset] = '}';
      arr.splice(nextSlash + 1 + offset, 0, '/');
    } else {
      arr.splice(arr.length, 0, '}');
    }

    offset += 1;
  });

  return arr.reduce((a, b) => a + b); // return single string
};
