const jsonErrorHandler = require('@parameter1/base-cms-marko-web/express/json-error-handler');
const { asyncRoute } = require('@parameter1/base-cms-utils');

const loader = require('../loaders/sections-from-ids');
const queryFragment = require('../graphql/fragments/sections-from-ids');

module.exports = (app) => {
  app.use('/__sections-from-ids', asyncRoute(async (req, res) => {
    const { sectionIds } = req.query;
    const ids = sectionIds ? sectionIds.split(',').map(id => parseInt(id, 0)) : null;
    const { apollo } = res.locals;
    const response = await loader(
      {
        apolloBaseCMS: apollo,
      },
      {
        sectionIds: ids,
        queryFragment,
      },
    );
    res.json(response);
  }), jsonErrorHandler());
};
