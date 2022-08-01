const home = require('./home');
const scheduledContent = require('./scheduled-content');
const websiteSection = require('./website-section');
const sheets = require('./global-50-250-sheets');

module.exports = (app) => {
  // Homepage
  home(app);

  sheets(app);

  // Scheduled Content
  scheduledContent(app);

  // Website Sections
  websiteSection(app);
};
