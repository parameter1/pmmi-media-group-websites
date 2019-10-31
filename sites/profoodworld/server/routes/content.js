const { withContent } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@base-cms-websites/package-common/graphql/fragments/content-page');
const companyQueryFragment = require('@base-cms-websites/package-common/graphql/fragments/content-company');
const content = require('../templates/content');
const company = require('../templates/content/company');
const webinar = require('../templates/content/webinar');
const document = require('../templates/content/document');

module.exports = (app) => {
  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment: companyQueryFragment,
  }));
  app.get('/*?webinar/:id(\\d{8})*', withContent({
    template: webinar,
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
