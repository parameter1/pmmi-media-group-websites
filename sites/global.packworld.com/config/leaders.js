module.exports = {
  enabled: process.env.LEADERS_ENABLED || true,
  title: 'Leaders in Packaging',
  alias: process.env.LEADERS_ALIAS || 'leaders-2022',
  header: {
    imgSrc: process.env.LEADERS_LOGO || 'https://img.packworld.com/files/base/pmmi/all/leaders/pw-leaders-2022.png?h=90',
  },
};
