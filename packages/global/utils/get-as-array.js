const { get } = require('object-path');

module.exports = (obj, path) => {
  const v = get(obj, path, []);
  return Array.isArray(v) ? v : [];
};
