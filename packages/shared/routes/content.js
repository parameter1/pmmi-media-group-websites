const { withContent } = require('@parameter1/base-cms-marko-web/middleware');
const companyQueryFragmentFn = require('@pmmi-media-group/package-common/graphql/fragment-factories/content-company');
const contentQueryFragmentFn = require('../graphql/fragment-factories/content-page');
const contactQueryFragment = require('../graphql/fragments/content-contact');
const company = require('../templates/content/company');
const content = require('../templates/content');
const contact = require('../templates/content/contact');
const podcast = require('../templates/content/podcast');
const webinar = require('../templates/content/webinar');
const document = require('../templates/content/document');

module.exports = (app) => {
  const { site } = app.locals;
  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment: companyQueryFragmentFn(site.get('leaders.alias')),
  }));
  app.get('/*?contact/:id(\\d{8})*', withContent({
    template: contact,
    queryFragment: contactQueryFragment,
  }));
  app.get('/*?webinar/:id(\\d{8})*', withContent({
    template: webinar,
    queryFragment: contentQueryFragmentFn(site.get('leaders.alias')),
  }));
  app.get('/*?podcast/:id(\\d{8})*', withContent({
    template: podcast,
    queryFragment: contentQueryFragmentFn(site.get('leaders.alias')),
  }));
  app.get('/*?document/:id(\\d{8})*', withContent({
    template: document,
    queryFragment: contentQueryFragmentFn(site.get('leaders.alias')),
  }));
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment: contentQueryFragmentFn(site.get('leaders.alias')),
  }));
};
