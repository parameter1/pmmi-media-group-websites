const { asyncRoute } = require('@mindful-web/utils');
const fetch = require('node-fetch');
const { GLOBAL_50_250_DOCS_API_KEY } = require('../../env');

module.exports = (app) => {
  app.use('/__global-50-250-sheets', asyncRoute(async (req, res) => {
    const { src } = req.query;
    const url = `${src}?key=${GLOBAL_50_250_DOCS_API_KEY}`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      res.send(json);
    } catch (error) {
      res.status(500).send(error);
    }
  }));
};
