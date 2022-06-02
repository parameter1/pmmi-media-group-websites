const newrelic = require('newrelic');
const { startServer } = require('@parameter1/base-cms-marko-web');
const { set, get, getAsObject } = require('@parameter1/base-cms-object-path');
const htmlSitemapPagination = require('@parameter1/base-cms-marko-web-html-sitemap/middleware/paginated');
const htmlSitemapRoutes = require('@parameter1/base-cms-marko-web-html-sitemap/routes');
const omedaIdentityX = require('@parameter1/base-cms-marko-web-omeda-identity-x');

const document = require('./components/document');
const components = require('./components');
const fragments = require('./fragments');
const sharedRoutes = require('./routes');
const searchRoutes = require('./routes/search');
const oembedHandler = require('./oembed-handler');
const idxRouteTemplates = require('./templates/user');
const idxNavItems = require('./config/identity-x-nav');

const contentGatingHandlerEnabled = process.env.CONTENT_GATING_HANDLER_ENABLED;

const defaultContentGatingHandler = require('./utils/content-gating-handler');

const routes = siteRoutes => (app) => {
  // Shared/global routes (all sites)
  sharedRoutes(app);
  // Load shared search routes
  searchRoutes(app);
  // HTML Sitemap
  htmlSitemapRoutes(app);
  // Load site routes
  siteRoutes(app);
};

module.exports = (options = {}) => {
  const { onStart } = options;
  // Allow for env enable/disable of contentGatingHandler
  const contentGatingHandler = (contentGatingHandlerEnabled)
    ? options.contentGatingHandler || defaultContentGatingHandler
    : () => false;
  return startServer({
    ...options,
    routes: routes(options.routes),
    document: options.document || document,
    components: options.components || components,
    fragments: options.fragments || fragments,
    onStart: async (app) => {
      if (typeof onStart === 'function') await onStart(app);
      app.set('trust proxy', 'loopback, linklocal, uniquelocal');

      set(app.locals, 'contentGatingHandler', contentGatingHandler);

      // i18n
      const i18n = v => v;
      set(app.locals, 'i18n', options.i18n || i18n);

      // Setup GAM.
      const gamConfig = get(options, 'siteConfig.gam');
      set(app.locals, 'GAM', gamConfig);

      // Setup NativeX.
      const nativeXConfig = get(options, 'siteConfig.nativeX');
      set(app.locals, 'nativeX', nativeXConfig);

      // Setup IdentityX + Omeda
      const idxConfig = getAsObject(options, 'siteConfig.identityX');
      const omedaConfig = getAsObject(options, 'siteConfig.omeda');
      omedaIdentityX(app, {
        clientKey: omedaConfig.clientKey,
        brandKey: omedaConfig.brandKey,
        appId: omedaConfig.appId,
        inputId: omedaConfig.inputId,
        rapidIdentProductId: get(omedaConfig, 'rapidIdentification.productId'),
        idxConfig,
        idxRouteTemplates,
      });
      idxNavItems({ site: app.locals.site });

      // Use paginated middleware
      app.use(htmlSitemapPagination());
    },
    onAsyncBlockError: e => newrelic.noticeError(e),

    embeddedMediaHandlers: {
      oembed: oembedHandler,
    },
  });
};
