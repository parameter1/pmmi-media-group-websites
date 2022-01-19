const { withContent } = require('@parameter1/base-cms-marko-web/middleware');
const print = require('../templates/content/print');
const queryFragment = require('../graphql/fragments/content-page');

module.exports = (app, siteConfig) => {
  app.get('/print/content/:id(\\d{8})', withContent({
    template: print,
    queryFragment: queryFragment(siteConfig.leaders.alias),
    redirectOnPathMismatch: false,
  }));
};
