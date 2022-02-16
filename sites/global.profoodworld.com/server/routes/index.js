const home = require('./home');
const websiteSection = require('./website-section');
const sheets = require('./global-50-250-sheets');

module.exports = (app) => {
  // Homepage
  home(app);

  sheets(app);

  // Website Sections
  websiteSection(app);
};
