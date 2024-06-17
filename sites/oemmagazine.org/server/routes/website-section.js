const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const { asyncRoute } = require('@parameter1/base-cms-utils');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/website-section-page');
const leadersFragment = require('@pmmi-media-group/package-global/graphql/fragments/leaders-section');
const { newsletterState } = require('@pmmi-media-group/package-global/middleware/newsletter-state');
const events = require('@pmmi-media-group/package-global/templates/website-section/events');
const collections = require('@pmmi-media-group/package-global/templates/website-section/collections');
const webinars = require('@pmmi-media-group/package-global/templates/website-section/webinars');
const withTopStoriesBlock = require('@pmmi-media-group/package-global/templates/website-section/with-top-stories-block');

const section = require('../templates/website-section');
const leaders = require('../templates/website-section/leaders');

module.exports = (app) => {
  app.get('/oem-profiles', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'Content Call-out: OEM Profiles',
    description: 'Read all our OEM profiles and get inspired by what these manufacturing companies are doing to stay competitive in today’s market. Read about their machinery innovation, successful equipment launches, and the family stories behind the companies that help to set them apart.',
    queryName: 'website-scheduled-content',
    queryParams: {
      // Business > OEM Profiles
      sectionId: 87501,
    },
  })));

  app.get('/events', asyncRoute(async (_, res) => res.marko(events, {
    alias: 'events',
    name: 'Events',
    description: '',
  })));

  app.get('/webinars', asyncRoute(async (_, res) => res.marko(webinars, {
    alias: 'webinars',
    name: 'Webinars',
    description: '',
  })));

  app.get('/:alias(leaders)', newsletterState(), withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));

  app.get('/:alias(WomenInPackaging)', newsletterState(), withWebsiteSection({
    template: withTopStoriesBlock,
    queryFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', newsletterState(), withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
