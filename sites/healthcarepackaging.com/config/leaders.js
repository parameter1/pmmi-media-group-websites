module.exports = {
  enabled: process.env.LEADERS_ENABLED || true,
  title: 'Premier Suppliers',
  alias: process.env.LEADERS_ALIAS || 'leaders-2022',
  header: {
    imgSrc: process.env.LEADERS_LOGO || 'https://img.healthcarepackaging.com/files/base/pmmi/all/leaders/hcp-2022.svg?auto=format,compress&h=90',
    imgSrcset: process.env.LEADERS_LOGO || 'https://img.healthcarepackaging.com/files/base/pmmi/all/leaders/hcp-2022.svg?auto=format,compress&h=90&dpr=2 2x',
  },
};
