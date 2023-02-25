const startServer = require('@pmmi-media-group/package-global/start-server');

const pkg = require('./package.json');
const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');
const redirectHandler = require('./redirect-handler');
const i18n = require('./config/i18n');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  website: pkg.website,
  coreConfig,
  siteConfig,
  contentGatingHandler: () => false,
  routes,
  redirectHandler,
  i18n: (v) => i18n[`${v}`.toLowerCase()] || v,
}).then(() => log('Website started!')).catch((e) => setImmediate(() => { throw e; }));
