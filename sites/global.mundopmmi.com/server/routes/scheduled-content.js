const scheduledContent = require('@pmmi-media-group/package-global/templates/scheduled-content/default');

module.exports = (app) => {
  app.get('/eventos', (_, res) => {
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
};
