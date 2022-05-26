module.exports = (app) => {
  app.get('/rss/:sectionAlias([a-z0-9-/]+)', (req, res) => {
    const { params } = req;
    if (params.sectionAlias) {
      res.redirect(301, `/__rss/website-scheduled-content.xml?input=${encodeURIComponent(JSON.stringify(params))}`);
    }
    res.redirect(301, '/_rss/all-published-content.xml');
  });
};
