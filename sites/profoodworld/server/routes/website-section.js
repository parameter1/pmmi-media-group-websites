const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const section = require('../templates/website-section');
const contactUs = require('../templates/website-section/contact-us');
const global250 = require('../templates/website-section/global-250');
const global50 = require('../templates/website-section/global-50');
const queryFragment = require('../graphql/fragments/website-section-page');

module.exports = (app) => {
  app.get('/global-250', (_, res) => { res.marko(global250); });
  app.get('/global-50', (_, res) => { res.marko(global50); });

  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
