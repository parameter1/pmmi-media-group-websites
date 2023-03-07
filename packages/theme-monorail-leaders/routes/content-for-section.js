const jsonErrorHandler = require('@parameter1/base-cms-marko-web/express/json-error-handler');
const { asyncRoute } = require('@parameter1/base-cms-utils');

const loader = require('../loaders/content-for-section');
const queryFragment = require('../graphql/fragments/content-for-section');

module.exports = (app) => {
  app.use('/__content-for-section', asyncRoute(async (req, res) => {
    const sectionId = parseInt(req.query.sectionId, 10);
    const { apollo } = res.locals;
    const response = await loader(
      {
        apolloBaseCMS: apollo,
      },
      {
        sectionId,
        queryFragment,
      },
    );
    res.json(response);
  }), jsonErrorHandler());
};
