const home = require('./home');
const publishedContent = require('./published-content');
const websiteSection = require('./website-section');

module.exports = (app) => {
  // Homepage
  home(app);

  // Published Content
  publishedContent(app);

  // Website Sections
  websiteSection(app);
};
