module.exports = {
  enabled: process.env.LEADERS_ENABLED || true,
  title: 'Leaders in Processing',
  alias: process.env.LEADERS_ALIAS || 'leaders-2021',
  header: {
    imgSrc: process.env.LEADERS_LOGO || 'https://img.profoodworld.com/files/base/pmmi/all/leaders/pfw-leaders-2022.png?h=90',
  },
};
