const { withContent } = require('@base-cms/marko-web/middleware');
const content = require('../templates/content');
const webinar = require('../templates/content/webinar');
const queryFragment = require('../graphql/fragments/content-page');

module.exports = (app) => {
  app.get('/*?webinar/:id(\\d{8})*', withContent({
    template: webinar,
    queryFragment,
  }));
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
