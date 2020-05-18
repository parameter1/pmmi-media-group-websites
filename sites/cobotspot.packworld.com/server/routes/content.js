const { withContent } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@pmmi-media-group/package-common/graphql/fragments/content-page');
const companyQueryFragment = require('@pmmi-media-group/package-common/graphql/fragments/content-company');
const contactQueryFragment = require('@pmmi-media-group/package-shared/graphql/fragments/content-contact');
const company = require('@pmmi-media-group/package-shared/templates/content/company');
const content = require('../templates/content');
const contact = require('../templates/content/contact');
const podcast = require('../templates/content/podcast');
const webinar = require('../templates/content/webinar');
const document = require('../templates/content/document');

module.exports = (app) => {
  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment: companyQueryFragment,
  }));
  app.get('/*?contact/:id(\\d{8})*', withContent({
    template: contact,
    queryFragment: contactQueryFragment,
  }));
  app.get('/*?webinar/:id(\\d{8})*', withContent({
    template: webinar,
    queryFragment,
  }));
  app.get('/*?podcast/:id(\\d{8})*', withContent({
    template: podcast,
    queryFragment,
  }));
  app.get('/*?document/:id(\\d{8})*', withContent({
    template: document,
    queryFragment,
  }));
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
