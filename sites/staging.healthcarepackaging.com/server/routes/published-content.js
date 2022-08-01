const products = require('@pmmi-media-group/package-shared/templates/published-content/products');

module.exports = (app) => {
  app.get('/products', (_, res) => { res.marko(products); });
};
