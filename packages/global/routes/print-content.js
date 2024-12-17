const { withContent } = require('@mindful-web/marko-web/middleware');
const { factory: leadersContentQueryFactory } = require('../graphql/fragment-factories/content-page');
const print = require('../templates/content/print');

module.exports = (app) => {
  const { site } = app.locals;
  const useLinkInjectedBody = site.get('useLinkInjectedBody');

  app.get('/print/content/:id(\\d{8})', withContent({
    template: print,
    queryFragment: leadersContentQueryFactory({
      useLinkInjectedBody,
      leadersAlias: site.get('leaders.alias'),
    }),
    redirectOnPathMismatch: false,
  }));
};
