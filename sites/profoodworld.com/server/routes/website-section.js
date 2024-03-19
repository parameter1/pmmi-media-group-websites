const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const { asyncRoute } = require('@parameter1/base-cms-utils');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/website-section-page');
const leadersFragment = require('@pmmi-media-group/package-global/graphql/fragments/leaders-section');
const emergingBrandsFragment = require('@pmmi-media-group/package-global/graphql/fragments/emerging-brands-section-page');
const { newsletterState } = require('@pmmi-media-group/package-global/middleware/newsletter-state');
const webinars = require('@pmmi-media-group/package-global/templates/website-section/webinars');
const events = require('@pmmi-media-group/package-global/templates/website-section/events');
const collections = require('@pmmi-media-group/package-global/templates/website-section/collections');
const section = require('../templates/website-section');
const leaders = require('../templates/website-section/leaders');
const global250 = require('../templates/website-section/global-250');
const global50 = require('../templates/website-section/global-50');

module.exports = (app) => {
  app.get('/highpressureprocessing', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'High-Pressure Processing: Content Collection',
    description: 'Read through our collection of the most recent content on high-pressure processing. Learn more about the technology and why it’s important to food safety, food quality, shelf life, and more. Plus, read about specific applications, case studies, and the CPGs using HPP in their food or beverage operations.',
    queryParams: {
      // HPP
      includeTaxonomyIds: [3197843],
    },
  })));

  // Get content primary to PW (canonical site is PW)
  app.get('/packaging-technology', newsletterState(), (_, res) => {
    res.marko(
      collections,
      {
        name: 'Packaging Technology',
        alias: 'packaging-technology',
        siteId: '5d88cedef175132c008b456b',
        includeContentTypes: [
          'Article',
          'Blog',
          'Document',
          'Event',
          'News',
          'Podcast',
          'PressRelease',
          'Product',
          'Video',
          'Webinar',
          'Whitepaper',
        ],
      },
    );
  });

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

  app.get('/:alias(emergingbrands)', newsletterState(), withWebsiteSection({
    template: section,
    queryFragment: emergingBrandsFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', newsletterState(), withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
