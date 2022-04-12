const queryFragment = require('@pmmi-media-group/package-theme-monorail/graphql/fragments/content-page');
const companyQueryFragmentFn = require('@pmmi-media-group/package-theme-monorail-leaders/graphql/fragment-factories/content-company');
const contentQueryFragmentFn = require('@pmmi-media-group/package-theme-monorail-leaders/graphql/fragment-factories/content-page');

const withContent = require('../middleware/with-content');
const contact = require('../templates/content/contact');
const company = require('../templates/content/company');
const mediaGallery = require('../templates/content/media-gallery');
const whitepaper = require('../templates/content/whitepaper');
const content = require('../templates/content');

module.exports = (app) => {
  const { site } = app.locals;
  app.get('/*?contact/:id(\\d{8})*', withContent({
    template: contact,
    queryFragment,
  }));
  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment: companyQueryFragmentFn(site.get('leaders.alias')),
  }));
  app.get('/*?media-gallery/:id(\\d{8})*', withContent({
    template: mediaGallery,
    queryFragment: contentQueryFragmentFn(site.get('leaders.alias')),
  }));
  app.get('/*?whitepaper/:id(\\d{8})*', withContent({
    template: whitepaper,
    queryFragment: contentQueryFragmentFn(site.get('leaders.alias')),
  }));
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment: contentQueryFragmentFn(site.get('leaders.alias')),
  }));
};
