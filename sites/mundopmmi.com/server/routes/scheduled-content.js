const publishedContent = require('@pmmi-media-group/package-global/templates/scheduled-content/default');
const podcastContent = require('@pmmi-media-group/package-global/templates/scheduled-content/podcasts');
const { newsletterState } = require('@pmmi-media-group/package-global/middleware/newsletter-state');

module.exports = (app) => {
  app.get('/podcasts', newsletterState(), (_, res) => {
    res.marko(
      podcastContent,
      {
        alias: 'podcasts',
        includeContentTypes: ['Podcast'],
        title: 'Podcasts',
      },
    );
  });
  app.get('/downloads', newsletterState(), (_, res) => {
    res.marko(
      publishedContent,
      {
        alias: 'downloads',
        includeContentTypes: ['Document'],
        title: 'Downloads',
      },
    );
  });
};
