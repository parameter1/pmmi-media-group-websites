const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/website-section-page');
const leadersFragment = require('@pmmi-media-group/package-theme-monorail-leaders/graphql/fragments/leaders-section');
const newsletterState = require('@pmmi-media-group/package-global/middleware/newsletter-state');

const section = require('../templates/website-section');
const leaders = require('../templates/website-section/leaders');
const podcasts = require('../templates/website-section/podcasts');

module.exports = (app) => {
  app.get('/:alias(leaders)', newsletterState(), withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));

  app.get('/:alias(podcasts)', newsletterState(), withWebsiteSection({
    template: podcasts,
    queryFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', newsletterState(), withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
