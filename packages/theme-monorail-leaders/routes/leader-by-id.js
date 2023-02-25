const jsonErrorHandler = require('@parameter1/base-cms-marko-web/express/json-error-handler');
const { asyncRoute } = require('@parameter1/base-cms-utils');

const loader = require('../loaders/leader-by-id');
const queryFragment = require('../graphql/fragments/leader-by-id');

module.exports = (app) => {
  app.use('/__leader-by-id', asyncRoute(async (req, res) => {
    const id = parseInt(req.query.id, 10);
    const { apollo } = res.locals;
    const response = await loader(
      {
        apolloBaseCMS: apollo,
      },
      {
        id,
        queryFragment,
      },
    );
    res.json(response);
  }), jsonErrorHandler());
};
