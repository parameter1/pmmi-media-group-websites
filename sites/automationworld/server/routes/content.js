const { withContent } = require('@base-cms/marko-web/middleware');
const content = require('../templates/content');
const company = require('../templates/content/company');
const whitepaper = require('../templates/content/whitepaper');
const queryFragment = require('../graphql/fragments/content-page');

module.exports = (app) => {
  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment,
  }));
  app.get('/*?whitepaper/:id(\\d{8})*', withContent({
    template: whitepaper,
    queryFragment,
  }));
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
