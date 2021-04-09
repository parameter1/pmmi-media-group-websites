const home = require('./home');
const content = require('./content');
const websiteSection = require('./website-section');

module.exports = (app) => {
  // Homepage
  home(app);

  // Content
  content(app);

  // Website Sections
  websiteSection(app);
};
