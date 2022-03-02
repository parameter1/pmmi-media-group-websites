module.exports = {
  enabled: process.env.LEADERS_ENABLED || true,
  title: 'Partner Leaders',
  alias: process.env.LEADERS_ALIAS || 'leaders-2022',
  header: {
    imgSrc: process.env.LEADERS_LOGO || 'https://img.oemmagazine.org/files/base/pmmi/all/leaders/oem-leaders-2022-logo.png?h=90',
  },
};
