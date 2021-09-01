const content = require('@pmmi-media-group/package-shared/routes/content');
const home = require('./home');
const publishedContent = require('./published-content');
const websiteSection = require('./website-section');
const sheets = require('./global-50-250-sheets');

module.exports = (app) => {
  // Homepage
  home(app);

  // Handle Global 50 & 250 google sheets request on /__global-50-250-sheets?src=${sheetSrc}
  sheets(app);

  // Content
  content(app);

  // Published Content
  publishedContent(app);

  // Website Sections
  websiteSection(app);
};
