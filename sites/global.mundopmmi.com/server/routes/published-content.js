const events = require('../templates/published-content/eventos');

module.exports = (app) => {
  app.get('/eventos', (_, res) => { res.marko(events); });
};
