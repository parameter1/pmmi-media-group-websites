const { get } = require('@parameter1/base-cms-object-path');
const htmlSitemap = require('@parameter1/base-cms-marko-web-html-sitemap/routes');
const renderBlock = require('@parameter1/base-cms-marko-web-theme-monorail/routes/render-block');
const search = require('@parameter1/base-cms-marko-web-theme-monorail/routes/search');
const taxonomy = require('@parameter1/base-cms-marko-web-theme-monorail/routes/taxonomy');
const omedaNewsletters = require('@parameter1/base-cms-marko-web-omeda/routes/omeda-newsletters');
const magazine = require('@parameter1/base-cms-marko-web-theme-monorail-magazine/routes');
const mindfulPreview = require('@parameter1/base-cms-marko-web-theme-monorail/routes/ad-preview');

const feed = require('./feed');
const digitalEditionRedirects = require('./digital-edition-redirects');
const content = require('./content');
const scheduledContent = require('./scheduled-content');
const dynamicPage = require('./dynamic-page');
// const identityX = require('./identity-x');
const nativeX = require('./native-x');

const printContent = require('./print-content');
const publicFiles = require('./public-files');
const redirects = require('./redirects');
const staticPage = require('./static-page');
const taxonomyCategory = require('./taxonomy-category');
const publication = require('../templates/magazine/publication');
const publicationFragment = require('../graphql/fragments/magazine-publication-page');

module.exports = (app, siteConfig) => {
  // Mindful Preview Link
  const namespace = get(siteConfig, 'mindful.namespace');
  mindfulPreview(app, namespace);

  // Taxonomy category pages
  taxonomyCategory(app);

  // Feed
  feed(app);

  // IdentityX (user routing and app context)
  // identityX(app);

  scheduledContent(app);

  // Magazine Routes
  magazine(app, { publication }, { publicationFragment });

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

  content(app);

  // Programatic redirect for legacy digitial edition urls
  // old: "http://www.automationworld.com/sites/default/files/digital_edition/december2014/AW_December_2014_Optimized/index.html",
  // new: "https://digitaleditions.automationworld.com/december2014/AW_December_2014_Optimized/index.html",
  digitalEditionRedirects(app);
};
