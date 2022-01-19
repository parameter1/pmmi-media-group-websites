const content = require('@pmmi-media-group/package-shared/routes/content');
const home = require('./home');
const websiteSection = require('./website-section');
const siteConfig = require('../../config/site');

module.exports = (app) => {
  // Homepage
  home(app);

  // Content
  content(app, siteConfig);

  // Website Sections
  websiteSection(app);
};
