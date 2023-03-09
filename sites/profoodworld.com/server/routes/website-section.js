const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/website-section-page');
const leadersFragment = require('@pmmi-media-group/package-theme-monorail-leaders/graphql/fragments/leaders-section');
const { newsletterState } = require('@pmmi-media-group/package-global/middleware/newsletter-state');
const webinars = require('@pmmi-media-group/package-global/templates/website-section/webinars');
const events = require('@pmmi-media-group/package-global/templates/website-section/events');
const section = require('../templates/website-section');
const leaders = require('../templates/website-section/leaders');
const global250 = require('../templates/website-section/global-250');
const global50 = require('../templates/website-section/global-50');

module.exports = (app) => {
  app.get('/:alias(global-250)', newsletterState(), (_, res) => { res.marko(global250); });
  app.get('/:alias(global-250/*)', newsletterState(), (_, res) => { res.marko(global250); });
  app.get('/:alias(global-50)', newsletterState(), (_, res) => { res.marko(global50); });
  app.get('/:alias(global-50/*)', newsletterState(), (_, res) => { res.marko(global50); });

  app.get('/:alias(events)', withWebsiteSection({
    template: events,
    queryFragment,
  }));

  app.get('/:alias(webinars)', withWebsiteSection({
    template: webinars,
    queryFragment,
  }));

  app.get('/:alias(leaders)', newsletterState(), withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', newsletterState(), withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
