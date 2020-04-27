const { withDynamicPage } = require('@base-cms/marko-web/middleware');
const page = require('@pmmi-media-group/package-shared/templates/dynamic-page');
const queryFragment = require('@pmmi-media-group/package-shared/graphql/fragments/dynamic-page');

module.exports = (app) => {
  app.get('/page/:alias(*)', withDynamicPage({
    template: page,
    queryFragment,
  }));
};
