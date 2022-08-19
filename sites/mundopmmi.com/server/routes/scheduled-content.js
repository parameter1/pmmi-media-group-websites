const scheduledContent = require('@pmmi-media-group/package-global/templates/scheduled-content/default');
const newsletterState = require('@pmmi-media-group/package-global/middleware/newsletter-state');

module.exports = (app) => {
  app.get('/eventos', newsletterState(), (_, res) => {
    res.marko(scheduledContent,
      {
        alias: 'eventos',
        includeContentTypes: ['Event'],
        title: 'Eventos',
        sortField: 'startDate',
        sortOrder: 'asc',
        endingAfter: (new Date()).valueOf(),
      });
  });
  app.get('/podcasts', newsletterState(), (_, res) => {
    res.marko(scheduledContent,
      {
        alias: 'podcasts',
        includeContentTypes: ['Podcast'],
        title: 'Podcasts',
      });
  });
};
