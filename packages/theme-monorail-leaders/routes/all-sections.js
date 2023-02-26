const jsonErrorHandler = require('@parameter1/base-cms-marko-web/express/json-error-handler');
const { asyncRoute } = require('@parameter1/base-cms-utils');
const { get } = require('@parameter1/base-cms-object-path');

const loader = require('../loaders/all-sections');
const queryFragment = require('../graphql/fragments/all-sections');

module.exports = (app) => {
  app.use('/__all-sections', asyncRoute(async (req, res) => {
    const alias = decodeURIComponent(get(req.query, 'alias'));
    const { apollo } = res.locals;
    const response = await loader(
      {
        apolloBaseCMS: apollo,
      },
      {
        alias,
        queryFragment,
      },
    );
    res.json(response);
  }), jsonErrorHandler());
};
