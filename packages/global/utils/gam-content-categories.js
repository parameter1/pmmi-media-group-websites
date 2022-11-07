const { getAsArray } = require('@parameter1/base-cms-object-path');

// For more information on why this is being done please consult: https://support.google.com/admanager/answer/10020177?hl=en
// Replace chars that aren't forward slash, space, letter, number, underscore or dash with nothing
// Replace double space with single underscore (prevents a case of Foo & Bar becoming Foo__Bar)
// Replace spaces and forward slashes with underscores
const gamifyCategoryName = name => name
  .replace(/[^/" "a-zA-Z0-9_-]/g, '')
  .replace(/[" "]{2}/g, '_')
  .replace(/[" "/]/g, '_');

const categories = (obj, key, value) => ([...new Set([
  ...getAsArray(obj, key),

  ...(value ? [gamifyCategoryName(value.name)] : []),
])]);

module.exports = content => getAsArray(content, 'taxonomy.edges')
  .map(({ node }) => node.hierarchy)
  .reduce((obj, hierarchy) => {
    const [primary, secondary, tertiary] = hierarchy;
    return {
      primary_cats: categories(obj, 'primary_cats', primary),
      secondary_cats: categories(obj, 'secondary_cats', secondary),
      tertiary_cats: categories(obj, 'tertiary_cats', tertiary),
    };
  }, {});
