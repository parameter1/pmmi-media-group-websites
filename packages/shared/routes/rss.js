module.exports = (app) => {
  app.get('/rss', (_, res) => {
    res.redirect(301, '/__rss/all-published-content.xml');
  });
  app.get('/rss/:sectionAlias([a-z0-9-/]+)', (req, res) => {
    const { params } = req;
    res.redirect(301, `/__rss/website-scheduled-content.xml?input=${encodeURIComponent(JSON.stringify(params))}`);
  });
};
