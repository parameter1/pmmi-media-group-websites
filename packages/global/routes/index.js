const htmlSitemap = require('@parameter1/base-cms-marko-web-html-sitemap/routes');
const renderBlock = require('@pmmi-media-group/package-theme-monorail/routes/render-block');
const search = require('@pmmi-media-group/package-theme-monorail/routes/search');
const taxonomy = require('@pmmi-media-group/package-theme-monorail/routes/taxonomy');
const feed = require('./feed');
const dynamicPage = require('./dynamic-page');
const nativeX = require('./native-x');
const omedaNewsletters = require('./omeda-newsletters');
const printContent = require('./print-content');
const publicFiles = require('./public-files');
const redirects = require('./redirects');
const staticPage = require('./static-page');

module.exports = (app, siteConfig) => {
  // Feed
  feed(app);

  // Omeda newsletter signup
  omedaNewsletters(app);

  // NativeX (Story rendering)
  nativeX(app);

  // Shared Print Content
  printContent(app);

  // Shared Public Files (e.g. ads.txt)
  publicFiles(app);

  // Redirects
  redirects(app);

  // Remote component/block loader
  renderBlock(app);

  // Taxonomy pages (for handling redirects from old WP sites)
  taxonomy(app);

  // Search routes
  search(app, siteConfig);

  // Static pages
  staticPage(app);

  // HTML Sitemap
  htmlSitemap(app);

  // dynamic pages /page/${alias}
  dynamicPage(app);
};