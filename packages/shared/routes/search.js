const { get } = require('@parameter1/base-cms-object-path');
const MarkoWebSearchConfig = require('@parameter1/base-cms-marko-web-search/config');
const middleware = require('@parameter1/base-cms-marko-web-search/middleware');
const template = require('../templates/search');

module.exports = (app) => {
  const { site } = app.locals;
  const { contentTypes, assignedToWebsiteSectionIds } = site.getAsObject('search');
  const config = new MarkoWebSearchConfig({
    resultsPerPage: { default: 18 },
    contentTypes,
    assignedToWebsiteSectionIds,
  });
  app.get('/search', (req, res, next) => {
    if (!get(req, 'query.searchQuery') && get(req, 'query.sortField')) {
      const params = new URLSearchParams(get(req, 'query'));
      params.delete('sortField');
      params.delete('searchQuery');
      if (`${params}`) res.redirect(301, `${get(req, 'route.path')}?${params}`);
      else res.redirect(301, '/search');
    }
    next();
  }, middleware({ config, template }));
};
