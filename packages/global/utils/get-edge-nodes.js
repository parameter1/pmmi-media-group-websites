const { getAsArray } = require('@mindful-web/object-path');

module.exports = (obj, path) => getAsArray(obj, `${path}.edges`).map((edge) => edge.node);
