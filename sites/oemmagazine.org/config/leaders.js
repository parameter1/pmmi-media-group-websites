module.exports = {
  enabled: process.env.LEADERS_ENABLED || true,
  title: 'Partner Leaders',
  alias: process.env.LEADERS_ALIAS || 'leaders-2021',
  header: {
    imgSrc: process.env.LEADERS_LOGO || 'https://img.oemmagazine.org/files/base/pmmi/all/leaders/oem-2021-2.png?h=90',
  },
};
