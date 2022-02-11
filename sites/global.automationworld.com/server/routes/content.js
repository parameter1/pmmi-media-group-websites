const withContent = require('@pmmi-media-group/package-global/middleware/with-content');
const companyQueryFragmentFn = require('@pmmi-media-group/package-global/graphql/fragment-factories/content-company');
const contentQueryFragmentFn = require('@pmmi-media-group/package-global/graphql/fragment-factories/content-page');
const queryFragment = require('@pmmi-media-group/package-theme-monorail/graphql/fragments/content-page');
const contact = require('@pmmi-media-group/package-global/templates/content/contact');
const company = require('@pmmi-media-group/package-global/templates/content/company');
const mediaGallery = require('@pmmi-media-group/package-global/templates/content/media-gallery');
const whitepaper = require('@pmmi-media-group/package-global/templates/content/whitepaper');
const content = require('@pmmi-media-group/package-global/templates/content');

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
