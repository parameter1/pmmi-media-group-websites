const { asyncRoute } = require('@parameter1/base-cms-utils');
const { websiteSection: loader } = require('@parameter1/base-cms-web-common/page-loaders');

module.exports = (app) => {
  app.get('/rss', (_, res) => {
    res.redirect(301, '/__rss/all-published-content.xml');
  });
  app.get('/rss/:sectionAlias([a-z0-9-/]+)', asyncRoute(async (req, res) => {
    const { apollo, params } = req;
    const cleanedAlias = params.sectionAlias.replace(/\/+$/, '').replace(/^\/+/, '');
    const section = await loader(apollo, { alias: cleanedAlias });
    if (section) {
      params.sectionAlias = cleanedAlias;
      res.redirect(301, `/__rss/website-scheduled-content.xml?input=${encodeURIComponent(JSON.stringify(params))}`);
    }
  }));
};
