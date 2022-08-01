const home = require('./home');
const websiteSection = require('./website-section');

module.exports = (app) => {
  // Homepage
  home(app);

  // Website Sections
  websiteSection(app);
};
