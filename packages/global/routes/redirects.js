module.exports = (app) => {
  app.get('/:alias(contact-us|about-us|contact-our-staff)', (req, res) => {
    res.redirect(301, '/page/contact-us');
  });
  app.get('/:alias(feed)', (req, res) => {
    res.redirect(301, '/__rss/website-scheduled-content.xml?input=%7B"sectionAlias"%3A"home"%7D');
  });
  app.get('/rss/:sectionAlias([a-z0-9-/]+)', (req, res) => {
    const { params } = req;
    if (params.sectionAlias) {
      res.redirect(301, `/__rss/website-scheduled-content.xml?input=${encodeURIComponent(JSON.stringify(params))}`);
    }
    res.redirect(301, '/_rss/all-published-content.xml');
  });
};
