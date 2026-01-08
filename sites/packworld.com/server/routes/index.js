const advisorNetwork = require('./advisor-network');
const home = require('./home');
const scheduledContent = require('./scheduled-content');
const websiteSection = require('./website-section');

module.exports = (app, siteConfig) => {
  // Homepage
  home(app);

  advisorNetwork(app, siteConfig);

  // Scheduled Content
  scheduledContent(app);

  // Website Sections
  websiteSection(app);
};
