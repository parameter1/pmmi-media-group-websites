const content = require('./content');
const home = require('./home');
const scheduledContent = require('./scheduled-content');
const websiteSection = require('./website-section');

module.exports = (app) => {
  // Homepage
  home(app);

  // Content
  content(app);

  // Scheduled Content
  scheduledContent(app);

  // Website Sections
  websiteSection(app);
};
