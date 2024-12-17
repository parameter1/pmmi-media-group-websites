const { withWebsiteSection } = require('@mindful-web/marko-web/middleware');
const queryFragment = require('@mindful-web/marko-web-theme-monorail/graphql/fragments/website-section-page');
const webinars = require('@pmmi-media-group/package-global/templates/website-section/webinars');
const events = require('@pmmi-media-group/package-global/templates/website-section/events');
const { newsletterState } = require('@pmmi-media-group/package-global/middleware/newsletter-state');

const section = require('../templates/website-section');
// const leaders = require('../templates/website-section/leaders');

module.exports = (app) => {
  app.get('/:alias(events)', withWebsiteSection({
    template: events,
    queryFragment,
  }));

  app.get('/:alias(webinars)', withWebsiteSection({
    template: webinars,
    queryFragment,
  }));

  // app.get('/:alias(leaders)', newsletterState(), withWebsiteSection({
  //   template: leaders,
  //   queryFragment: leadersFragment,
  // }));

  app.get('/:alias([a-z0-9-/]+)', newsletterState(), withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
