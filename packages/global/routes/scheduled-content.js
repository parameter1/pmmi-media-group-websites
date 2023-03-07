const publishedContent = require('../templates/scheduled-content/default');
const { newsletterState } = require('../middleware/newsletter-state');

module.exports = (app) => {
  app.get('/supplier-events', newsletterState(), (_, res) => {
    res.marko(
      publishedContent,
      {
        alias: 'supplier-events',
        includeContentTypes: ['Event'],
        title: 'Supplier Events',
        sortField: 'startDate',
        sortOrder: 'asc',
        endingAfter: (new Date()).valueOf(),
      },
    );
  });
  app.get('/white-papers', newsletterState(), (_, res) => {
    res.marko(
      publishedContent,
      {
        alias: 'white-papers',
        includeContentTypes: ['Whitepaper'],
        title: 'Whitepapers',
      },
    );
  });
  app.get('/videos', newsletterState(), (_, res) => {
    res.marko(
      publishedContent,
      {
        alias: 'videos',
        includeContentTypes: ['Video'],
        title: 'Videos',
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
