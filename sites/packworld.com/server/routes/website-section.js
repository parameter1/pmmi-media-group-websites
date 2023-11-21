const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const { asyncRoute } = require('@parameter1/base-cms-utils');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/website-section-page');
const leadersFragment = require('@pmmi-media-group/package-theme-monorail-leaders/graphql/fragments/leaders-section');
const emergingBrandsFragment = require('@pmmi-media-group/package-global/graphql/fragments/emerging-brands-section-page');
const webinars = require('@pmmi-media-group/package-global/templates/website-section/webinars');
const events = require('@pmmi-media-group/package-global/templates/website-section/events');
const withTopStoriesBlock = require('@pmmi-media-group/package-global/templates/website-section/with-top-stories-block');
const { newsletterState } = require('@pmmi-media-group/package-global/middleware/newsletter-state');

const section = require('../templates/website-section');
const leaders = require('../templates/website-section/leaders');
const caseStudies = require('../templates/website-section/case-studies');

module.exports = (app) => {
  app.get('/casestudies-casepacking', asyncRoute(async (_, res) => res.marko(caseStudies, {
    name: 'A Curated Collection of Case Studies: Case Packing',
    description: 'Are you in the market for a case packer and looking for the latest technology and innovations to streamline your packaging operations? Check out our list of case studies featuring case packers and the unique solutions that these pieces of equipment bring to the companies mentioned here. Learn how the equipment works, what it’s capable of, and which machine is right for your line.',
    // Packaging machinery > case erect/seal, Packaging machinery > case/tray packing
    taxonomyIds: [2008384, 2008385],
  })));

  app.get('/casestudies-liquidfilling', asyncRoute(async (_, res) => res.marko(caseStudies, {
    name: 'A Curated Collection of Case Studies: Liquid Filling & Capping',
    description: 'Are you in the market for a liquid filler/capper and looking for the latest technology and innovations to streamline your packaging operations? Check out our list of case studies featuring liquid and viscous fillers and the unique solutions that these pieces of equipment bring to the companies mentioned here. Learn how the equipment works, what they\'re capable of, and which machine is right for your line.',
    // Packaging machinery > Filling/capping, liquid and viscous
    taxonomyIds: [2008393],
  })));

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

  app.get('/:alias(WomenInPackaging)', newsletterState(), withWebsiteSection({
    template: withTopStoriesBlock,
    queryFragment,
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
