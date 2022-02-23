const publishedContent = require('@pmmi-media-group/package-global/templates/published-content/default');

module.exports = (app) => {
  app.get('/products', (_, res) => {
    res.marko(publishedContent,
      {
        alias: 'products',
        includeContentTypes: ['Product'],
        title: 'Products',
      });
  });
};
