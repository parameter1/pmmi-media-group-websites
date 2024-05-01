module.exports = ({ i18n, node }) => {
  if (node.type) {
    const typeName = `${node.type.slice(0, 1).toUpperCase()}${node.type.slice(1)}`;
    const name = `${typeName}s`;
    const fullName = name;
    const alias = `${node.type}s`;
    const canonicalPath = `/${i18n(alias)}`;
    return {
      name: `${i18n(name)}`,
      fullName: `${i18n(fullName)}`,
      alias: `${i18n(alias)}`,
      canonicalPath,
    };
  }
  return node.primarySection;
};
