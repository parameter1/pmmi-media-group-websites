const { cleanPath } = require('@mindful-web/utils');

module.exports = (app) => {
  // Programatic redirect for legacy digitial edition urls
  // old: "http://www.automationworld.com/sites/default/files/digital_edition/december2014/AW_December_2014_Optimized/index.html",
  // new: "https://digitaleditions.automationworld.com/december2014/AW_December_2014_Optimized/index.html",
  app.get('/sites/default/files/digital_edition/:alias([a-zA-Z0-9-_/]+)/index.html', (req, res) => {
    const digitalOrigin = req.app.locals.config.website('origin').replace('https://www.', 'https://digitaleditions.');
    const { alias } = req.params;
    res.redirect(301, `${digitalOrigin}/${cleanPath(alias)}/index.html`);
  });
};
