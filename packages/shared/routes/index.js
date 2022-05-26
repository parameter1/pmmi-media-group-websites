const inquiryHandler = require('../inquiry-handler');
const dynamicPages = require('./dynamic-page');
const magazine = require('./magazine');
const printContent = require('./print-content');
const publishedContent = require('./published-content');
const subscribe = require('./subscribe');
const rss = require('./rss');

module.exports = (app) => {
  // Inquiries
  inquiryHandler(app);

  // Magazine Pages
  magazine(app);

  // Dynamic Pages
  dynamicPages(app);

  // Print Content Pages
  printContent(app);

  // Published Content Pages
  publishedContent(app);

  // Subscription Pages
  subscribe(app);

  // RSS Feeds
  rss(app);
};
