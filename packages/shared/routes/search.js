const { getAsObject } = require('@parameter1/base-cms-object-path');
const MarkoWebSearchConfig = require('@parameter1/base-cms-marko-web-search/config');
const middleware = require('@parameter1/base-cms-marko-web-search/middleware');
const template = require('../templates/search');

module.exports = (app) => {
  const { site } = app.locals;
  const {
    contentTypes,
    assignedToWebsiteSectionIds,
  } = getAsObject(getAsObject(site, 'config'), 'search');
  const config = new MarkoWebSearchConfig({
    resultsPerPage: { default: 18 },
    contentTypes,
    assignedToWebsiteSectionIds,
  });
  app.get('/search', middleware({ config, template }));
};
