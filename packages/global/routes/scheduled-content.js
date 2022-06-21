const publishedContent = require('../templates/scheduled-content/default');

module.exports = (app) => {
  app.get('/supplier-events', (_, res) => {
    res.marko(publishedContent,
      {
        alias: 'supplier-events',
        includeContentTypes: ['Event'],
        title: 'Supplier Events',
        sortField: 'startDate',
        sortOrder: 'asc',
        endingAfter: (new Date()).valueOf(),
      });
  });
  app.get('/webinars', (_, res) => {
    res.marko(publishedContent,
      {
        alias: 'webinars',
        includeContentTypes: ['Webinar'],
        title: 'Webinars',
        sortField: 'startDate',
        sortOrder: 'desc',
      });
  });
  app.get('/white-papers', (_, res) => {
    res.marko(publishedContent,
      {
        alias: 'white-papers',
        includeContentTypes: ['Whitepaper'],
        title: 'Whitepapers',
      });
  });
  app.get('/videos', (_, res) => {
    res.marko(publishedContent,
      {
        alias: 'videos',
        includeContentTypes: ['Video'],
        title: 'Videos',
      });
  });
  app.get('/downloads', (_, res) => {
    res.marko(publishedContent,
      {
        alias: 'downloads',
        includeContentTypes: ['Document'],
        title: 'Downloads',
      });
  });
};
