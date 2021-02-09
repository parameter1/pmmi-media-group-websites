const GAMConfiguration = require('@parameter1/base-cms-marko-web-gam/config');

const config = new GAMConfiguration('152023730');

config
  .setAliasAdUnits('default', [
    { name: 'skyscraper', options: { size: [300, 600] }, path: 'cs_skyscraper' },
    { name: 'skyscraper-2', options: { size: [300, 600] }, path: 'cs_skyscraper_2' },
  ]);

module.exports = config;
