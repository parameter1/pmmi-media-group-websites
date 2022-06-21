const scheduledContent = require('@pmmi-media-group/package-global/templates/scheduled-content/default');

module.exports = (app) => {
  app.get('/podcasts', (_, res) => {
    res.marko(scheduledContent,
      {
        alias: 'podcasts',
        includeContentTypes: ['Podcast'],
        title: 'Podcasts',
      });
  });
};
