module.exports = {
  enabled: process.env.LEADERS_ENABLED || true,
  title: 'Premier Suppliers',
  alias: process.env.LEADERS_ALIAS || 'leaders-2021',
  header: {
    imgSrc: process.env.LEADERS_LOGO || 'https://img.healthcarepackaging.com/files/base/pmmi/all/leaders/hcp-2021-2.png?h=90',
  },
};
