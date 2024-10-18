const scheduledContent = require('@pmmi-media-group/package-global/templates/scheduled-content/default');
const { newsletterState } = require('@pmmi-media-group/package-global/middleware/newsletter-state');

module.exports = (app) => {
  app.get('/podcasts', newsletterState(), (_, res) => {
    res.marko(
      scheduledContent,
      {
        alias: 'podcasts',
        includeContentTypes: ['Podcast'],
        title: 'Podcasts',
      },
    );
  });
  app.get('/noticias-de-los-proveedores', newsletterState(), (_, res) => {
    res.marko(
      scheduledContent,
      {
        alias: 'noticias-de-los-proveedores',
        includeLabels: ['Supplier Submitted', 'Supplier News'],
        title: 'Noticias de los proveedores',
        withSection: true,
      },
    );
  });
};
