const { withContent } = require('@parameter1/base-cms-marko-web/middleware');
const contentQueryFragmentFn = require('@pmmi-media-group/package-theme-monorail-leaders/graphql/fragment-factories/content-page');
const print = require('../templates/content/print');

module.exports = (app) => {
  const { site } = app.locals;
  app.get('/print/content/:id(\\d{8})', withContent({
    template: print,
    queryFragment: contentQueryFragmentFn(site.get('leaders.alias')),
    redirectOnPathMismatch: false,
  }));
};
