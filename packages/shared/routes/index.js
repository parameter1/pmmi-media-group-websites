const identityX = require('./identity-x');
const inquiryHandler = require('../inquiry-handler');
const dynamicPages = require('./dynamic-page');
const magazine = require('./magazine');
const printContent = require('./print-content');
const publishedContent = require('./published-content');
const search = require('./search');
const subscribe = require('./subscribe');

module.exports = (app) => {
  // Identity-X
  identityX(app);

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

  // Search
  search(app);

  // Subscription Pages
  subscribe(app);
};
