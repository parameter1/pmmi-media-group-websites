const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const leadersFragment = require('@pmmi-media-group/package-common/graphql/fragments/leaders-section');
const section = require('../templates/website-section');
const contactUs = require('../templates/website-section/contact-us');
const global250 = require('../templates/website-section/global-250');
const global50 = require('../templates/website-section/global-50');
const leaders = require('../templates/website-section/leaders');
const queryFragment = require('../graphql/fragments/website-section-page');

module.exports = (app) => {
  app.get('/:alias(global-250)', (_, res) => { res.marko(global250); });
  app.get('/:alias(global-250/*)', (_, res) => { res.marko(global250); });

  app.get('/:alias(global-50)', (_, res) => { res.marko(global50); });
  app.get('/:alias(global-50/*)', (_, res) => { res.marko(global50); });

  app.get('/:alias(leaders)', withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
