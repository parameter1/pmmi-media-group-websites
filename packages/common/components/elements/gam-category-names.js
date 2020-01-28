const { getAsArray } = require('@base-cms/object-path');

module.exports = content => getAsArray(content, 'taxonomy.edges')
  .filter(({ node: { type } }) => type === 'Category')
  .map(({ node }) => `${node.fullName}`
    .replace(`${node.type}: `, '')
    .replace(` (${node.id})`, '')
    .replace(' > ', ': ')
    .replace(/["'=!+#*~;^()[\]<>,.&]/g, ''))
  .join('|');
