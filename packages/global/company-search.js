const loader = require('@mindful-web/marko-web-search/loaders/search');
const jsonErrorHandler = require('@mindful-web/marko-web/express/json-error-handler');
const { asyncRoute } = require('@mindful-web/utils');

const queryFragment = require('./graphql/fragments/company-search');

module.exports = (app, assignedToWebsiteSectionIds) => {
  app.get('/__company-search', asyncRoute(async (req, res) => {
    const { searchQuery } = req.query;
    const { apollo, $baseBrowse } = res.locals;

    const response = await loader(
      {
        // @todo Change this to be the actual new client?
        apolloMindfulWebCMS: apollo,
        apolloBaseBrowse: $baseBrowse,
      },
      {
        status: 1,
        contentTypes: ['COMPANY'],
        assignedToWebsiteSectionIds,
        searchQuery,
        queryFragment,
      },
    );
    res.json(response);
  }), jsonErrorHandler());
};
