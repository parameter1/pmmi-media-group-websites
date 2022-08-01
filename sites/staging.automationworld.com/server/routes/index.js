const content = require('@pmmi-media-group/package-shared/routes/content');
const home = require('./home');
const websiteSection = require('./website-section');

module.exports = (app) => {
  // Homepage
  home(app);

  // Content
  content(app);

  // Website Sections
  websiteSection(app);
};
