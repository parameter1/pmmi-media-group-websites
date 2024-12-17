const { withWebsiteSection } = require('@mindful-web/marko-web/middleware');
const queryFragment = require('@mindful-web/marko-web-theme-monorail/graphql/fragments/website-section-page');
const { newsletterState } = require('@pmmi-media-group/package-global/middleware/newsletter-state');

const home = require('../templates/index');

module.exports = (app) => {
  app.get('/', newsletterState(), withWebsiteSection({
    aliasResolver: () => 'home',
    template: home,
    queryFragment,
  }));
};
