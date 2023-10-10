const getAsArray = require('./get-as-array');

module.exports = (obj, path) => getAsArray(obj, `${path}.edges`).map((edge) => edge.node);
