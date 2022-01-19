const { withContent } = require('@parameter1/base-cms-marko-web/middleware');
const companyQueryFragment = require('@pmmi-media-group/package-common/graphql/fragments/content-company');
const queryFragment = require('../graphql/fragments/content-page');
const contactQueryFragment = require('../graphql/fragments/content-contact');
const company = require('../templates/content/company');
const content = require('../templates/content');
const contact = require('../templates/content/contact');
const podcast = require('../templates/content/podcast');
const webinar = require('../templates/content/webinar');
const document = require('../templates/content/document');

module.exports = (app, siteConfig) => {
  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment: companyQueryFragment(siteConfig.leaders.alias),
  }));
  app.get('/*?contact/:id(\\d{8})*', withContent({
    template: contact,
    queryFragment: contactQueryFragment,
  }));
  app.get('/*?webinar/:id(\\d{8})*', withContent({
    template: webinar,
    queryFragment: queryFragment(siteConfig.leaders.alias),
  }));
  app.get('/*?podcast/:id(\\d{8})*', withContent({
    template: podcast,
    queryFragment: queryFragment(siteConfig.leaders.alias),
  }));
  app.get('/*?document/:id(\\d{8})*', withContent({
    template: document,
    queryFragment: queryFragment(siteConfig.leaders.alias),
  }));
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment: queryFragment(siteConfig.leaders.alias),
  }));
};
