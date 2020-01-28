const { getAsArray } = require('@base-cms/object-path');

module.exports = content => getAsArray(content, 'taxonomy.edges')
  .map(({ node }) => node.hierarchy)
  .reduce((obj, hierarchy) => {
    const [primary, secondary, tertiary] = hierarchy;
    const cat1 = getAsArray(obj, 'primary_cats');
    const cat2 = getAsArray(obj, 'secondary_cats');
    const cat3 = getAsArray(obj, 'tertiary_cats');
    return {
      primary_cats: [...(new Set([...cat1, ...(primary ? [primary.name] : [])]))],
      secondary_cats: [...(new Set([...cat2, ...(secondary ? [secondary.name] : [])]))],
      tertiary_cats: [...(new Set([...cat3, ...(tertiary ? [tertiary.name] : [])]))],
    };
  }, {});
