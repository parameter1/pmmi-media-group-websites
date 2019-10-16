const { asyncRoute } = require('@base-cms/utils');
const { getAsArray } = require('@base-cms/object-path');
const { json } = require('body-parser');
const query = require('./graphql/queries/section-content');

const exception = (message, code = 400) => {
  const err = new Error(message);
  err.statusCode = code;
  return err;
};

module.exports = (app) => {
  app.post('/__leaders-content', json(), asyncRoute(async (req, res) => {
    const { apollo } = req;
    const { sectionId } = req.body;
    const limit = req.body.limit || 10;

    const variables = {
      input: {
        sectionId,
        pagination: {
          limit,
        },
        sort: {
          field: 'name',
          order: 'asc',
        },
      },
    };
    try {
      const response = await apollo.query({ query, variables });
      const items = getAsArray(response, 'data.websiteScheduledContent.edges').map(({ node }) => node);
      res.status(200).send(items);
    } catch (e) {
      throw exception(e);
    }
  }));
};
