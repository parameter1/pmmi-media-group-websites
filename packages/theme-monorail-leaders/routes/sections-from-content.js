const jsonErrorHandler = require('@parameter1/base-cms-marko-web/express/json-error-handler');
const { asyncRoute } = require('@parameter1/base-cms-utils');

const loader = require('../loaders/sections-from-content');
const queryFragment = require('../graphql/fragments/sections-from-ids');

module.exports = (app) => {
  app.use('/__sections-from-content', asyncRoute(async (req, res) => {
    const { sectionIds, taxonomyIds } = req.query;
    const secIds = sectionIds ? sectionIds.split(',').map(id => parseInt(id, 0)) : null;
    const taxIds = taxonomyIds ? taxonomyIds.split(',').map(id => parseInt(id, 0)) : null;
    const { apollo } = res.locals;
    const response = await loader(
      {
        apolloBaseCMS: apollo,
      },
      {
        sectionIds: secIds,
        taxonomyIds: taxIds,
        queryFragment,
      },
    );
    res.json(response);
  }), jsonErrorHandler());
};
