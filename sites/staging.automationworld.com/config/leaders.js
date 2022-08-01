module.exports = {
  enabled: process.env.LEADERS_ENABLED || true,
  title: 'Leaders in Automation',
  alias: process.env.LEADERS_ALIAS || 'leaders-2022',
  header: {
    imgSrc: process.env.LEADERS_LOGO || 'https://img.automationworld.com/files/base/pmmi/all/leaders/aw-leaders-2022.png?h=90',
  },
};
