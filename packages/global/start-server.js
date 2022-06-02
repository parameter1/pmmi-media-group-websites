const newrelic = require('newrelic');
const { startServer } = require('@parameter1/base-cms-marko-web');
const { set, get, getAsObject } = require('@parameter1/base-cms-object-path');
const loadInquiry = require('@parameter1/base-cms-marko-web-inquiry');
const htmlSitemapPagination = require('@parameter1/base-cms-marko-web-html-sitemap/middleware/paginated');
const omedaIdentityX = require('@parameter1/base-cms-marko-web-omeda-identity-x');

const document = require('./components/document');
const components = require('./components');
const fragments = require('./fragments');
const sharedRoutes = require('./routes');
const paginated = require('./middleware/paginated');
const newsletterState = require('./middleware/newsletter-state');
const redirectHandler = require('./redirect-handler');
const oembedHandler = require('./oembed-handler');
const idxRouteTemplates = require('./templates/user');
const recaptcha = require('./config/recaptcha');

const contentGatingHandlerEnabled = process.env.CONTENT_GATING_HANDLER_ENABLED
const defaultContentGatingHandler = ({ content, olyEncId }) => {
  // If there is an associated olyEncId skip as they are considered identitfied.
  if (olyEncId) return false;

  // Gate the following content types only.
  const typesToGate = [
    'article',
    'blog',
    'news',
  ];
  if (typesToGate.includes(content.type)) return true;

  return false;
};
const getId = (value) => {
  if (!value) return null;
  const trimmed = `${value}`.trim();
  return /^[a-z0-9]{15}$/i.test(trimmed) ? trimmed : null;
};

const routes = (siteRoutes, siteConfig) => (app) => {
  // Handle submissions on /__inquiry
  loadInquiry(app);
  // Shared/global routes (all sites)
  sharedRoutes(app, siteConfig);
  // Load site routes
  siteRoutes(app);
};

module.exports = (options = {}) => {
  const { onStart } = options;
  const googleNewsInput = {
    days: 7,
    includeContentTypes: ['Article'],
    excludeLabels: ['Sponsored'],
  };
  // Allow for env enable/disable of contentGatingHandler
  const contentGatingHandler = (contentGatingHandlerEnabled)
    ? options.contentGatingHandler || defaultContentGatingHandler
    : () => false;
  return startServer({
    ...options,
    routes: routes(options.routes, options.siteConfig),
    document: options.document || document,
    components: options.components || components,
    fragments: options.fragments || fragments,
    sitemapsHeaders: {
      'x-google-news-input': JSON.stringify(googleNewsInput),
    },
    onStart: async (app) => {
      if (typeof onStart === 'function') await onStart(app);
      app.set('trust proxy', 'loopback, linklocal, uniquelocal');

      set(app.locals, 'contentGatingHandler', contentGatingHandler);

      // Look for and set global for olyEncId off query params or by cookie
      app.use((req, res, next) => {
        const {
          query,
          cookies,
        } = req;

        const idFromQuery = getId(query.oly_enc_id);
        const idFromCookie = cookies.oly_enc_id ? getId(cookies.oly_enc_id.replace(/^"/, '').replace(/"$/, '')) : undefined;
        const olyEncId = idFromQuery || idFromCookie;
        set(app.locals, 'olyEncId', olyEncId);
        next();
      });

      // Use paginated middleware
      app.use(paginated());

      // Use paginated middleware
      app.use(htmlSitemapPagination());

      // Use newsletterState middleware
      app.use(newsletterState());

      // Setup IdentityX + Omeda
      const idxConfig = getAsObject(options, 'siteConfig.identityX');
      const omedaConfig = getAsObject(options, 'siteConfig.omeda');
      omedaIdentityX(app, {
        brandKey: omedaConfig.brandKey,
        clientKey: omedaConfig.clientKey,
        appId: omedaConfig.appId,
        inputId: omedaConfig.inputId,
        rapidIdentProductId: get(omedaConfig, 'rapidIdentification.productId'),
        idxConfig,
        idxRouteTemplates,
      });

      // Setup GAM.
      const gamConfig = get(options, 'siteConfig.gam');
      set(app.locals, 'GAM', gamConfig);

      // Setup NativeX.
      const nativeXConfig = get(options, 'siteConfig.nativeX');
      set(app.locals, 'nativeX', nativeXConfig);

      // i18n
      const i18n = v => v;
      set(app.locals, 'i18n', options.i18n || i18n);

      // Recaptcha
      set(app.locals, 'recaptcha', recaptcha);
    },
    onAsyncBlockError: e => newrelic.noticeError(e),

    redirectHandler,

    embeddedMediaHandlers: {
      oembed: oembedHandler,
    },
  });
};
