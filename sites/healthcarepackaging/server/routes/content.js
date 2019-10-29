const { withContent } = require('@base-cms/marko-web/middleware');
const content = require('../templates/content');
const company = require('../templates/content/company');
const webinar = require('../templates/content/webinar');
const queryFragment = require('../graphql/fragments/content-page');
const companyQueryFragment = require('../../../../packages/common/graphql/fragments/content-company');

module.exports = (app) => {
  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment: companyQueryFragment,
  }));
  app.get('/*?webinar/:id(\\d{8})*', withContent({
    template: webinar,
    queryFragment,
  }));
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
