const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('152023730');

config
  .setAliasAdUnits('default', [
    { name: 'skyscraper', options: { size: [300, 600] }, path: 'cs_skyscraper' },
  ]);

module.exports = config;
