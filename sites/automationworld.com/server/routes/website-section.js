const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@pmmi-media-group/package-shared/graphql/fragments/website-section-page');
const section = require('../templates/website-section');

module.exports = (app) => {
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
