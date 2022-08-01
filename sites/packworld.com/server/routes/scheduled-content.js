const scheduledContent = require('@pmmi-media-group/package-global/templates/scheduled-content/default');

module.exports = (app) => {
  app.get('/products', (_, res) => {
    res.marko(scheduledContent,
      {
        alias: 'products',
        includeContentTypes: ['Product'],
        title: 'Products',
      });
  });
  app.get('/podcasts', (_, res) => {
    res.marko(scheduledContent,
      {
        alias: 'podcasts',
        includeContentTypes: ['Podcast'],
        title: 'Podcasts',
      });
  });
};
