const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const { asyncRoute } = require('@parameter1/base-cms-utils');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/website-section-page');
const leadersFragment = require('@pmmi-media-group/package-global/graphql/fragments/leaders-section');
const { newsletterState } = require('@pmmi-media-group/package-global/middleware/newsletter-state');
const events = require('@pmmi-media-group/package-global/templates/website-section/events');
const webinars = require('@pmmi-media-group/package-global/templates/website-section/webinars');
const collections = require('@pmmi-media-group/package-global/templates/website-section/collections');

const section = require('../templates/website-section');
const leaders = require('../templates/website-section/leaders');
const news = require('../templates/website-section/news');

module.exports = (app) => {
  app.get('/trackandtrace/products', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'Track & Trace: A Collection of Products',
    description: 'Are you interested in track & trace/serialization solutions? Read through our collection of new and noteworthy products in track and trace and find the solution right for you.',
    queryParams: {
      // Logistics > Traceability/Serialization
      sectionId: 33342,
      includeContentTypes: ['Product'],
    },
  })));

  app.get('/casestudies/pharma', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'Case Studies: Pharmaceutical Packaging',
    description: 'Read through our collection of pharmaceutical packaging case studies and get informed and inspired by the latest thinking and newest technology.',
    queryParams: {
      // Industries > Pharmaceuticals
      sectionId: 33334,
      includeLabels: ['Case Study'],
    },
  })));

  app.get('/events', asyncRoute(async (_, res) => res.marko(events, {
    alias: 'events',
    name: 'Events',
    description: 'Connect with healthcare packaging professionals, gain insights into the latest trends, and experience breakthrough technologies.',
  })));

  app.get('/webinars', asyncRoute(async (_, res) => res.marko(webinars, {
    alias: 'webinars',
    name: 'Webinars',
    description: 'Industry experts talk medical packaging technologies, sustainability, and logistics, ranging from fill/finish, package design, automation, and temperature control.',
  })));

  app.get('/:alias(leaders)', newsletterState(), withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));

  app.get('/:alias(news)', newsletterState(), withWebsiteSection({
    template: news,
    queryFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', newsletterState(), withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
