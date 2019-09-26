const { asyncRoute } = require('@base-cms/utils');
const bodyParser = require('body-parser');
const query = require('./graphql/queries/section-content');

const { error } = console;

const exception = (message, code = 400) => {
  const err = new Error(message);
  err.statusCode = code;
  return err;
};

module.exports = (app) => {
  app.post('/__leaders-content', bodyParser.json(), asyncRoute(async (req, res) => {
    const { apollo } = req;
    const { sectionId } = req.body;
    const limit = req.body.limit || 10;

    const variables = {
      input: {
        sectionId,
      },
      pagination: {
        limit,
      },
    };
    try {
      const { data } = await apollo.query({ query, variables });
      const { edges } = data.websiteScheduledContent;
      const items = edges.map(({ node }) => node);
      res.status(200).send(items);
    } catch (e) {
      error(e);
      throw exception(e);
    }
  }));
};
