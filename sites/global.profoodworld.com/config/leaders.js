module.exports = {
  enabled: process.env.LEADERS_ENABLED || true,
  title: 'Leaders in Processing',
  alias: process.env.LEADERS_ALIAS || 'leaders-2021',
  header: {
    imgSrc: process.env.LEADERS_LOGO || 'https://img.profoodworld.com/files/base/pmmi/all/leaders/pfw-2021-2.png?auto=format,compress&h=90',
    imgSrcset: process.env.LEADERS_LOGO || 'https://img.profoodworld.com/files/base/pmmi/all/leaders/pfw-2021-2.png?auto=format,compress&h=90&dpr=2 2x',
  },
};
