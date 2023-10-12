const { getAsArray } = require('@parameter1/base-cms-object-path');

module.exports = (obj, path) => getAsArray(obj, `${path}.edges`).map((edge) => edge.node);
