const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@pmmi-media-group/package-theme-monorail/graphql/fragments/website-section-page');
const leadersFragment = require('@pmmi-media-group/package-theme-monorail/graphql/fragments/leaders-section');
const section = require('../templates/website-section');
const leaders = require('../templates/website-section/leaders');
const global250 = require('../templates/website-section/global-250');
const global50 = require('../templates/website-section/global-50');

module.exports = (app) => {
  app.get('/:alias(global-250)', (_, res) => { res.marko(global250); });
  app.get('/:alias(global-250/*)', (_, res) => { res.marko(global250); });
  app.get('/:alias(global-50)', (_, res) => { res.marko(global50); });
  app.get('/:alias(global-50/*)', (_, res) => { res.marko(global50); });

  app.get('/:alias(leaders)', withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
