const contentMetering = require('@parameter1/base-cms-marko-web-theme-monorail/middleware/content-metering');
const qf = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/content-page');
const companyQueryFragmentFn = require('../graphql/fragment-factories/content-company');
const { factory: leadersContentQueryFactory } = require('../graphql/fragment-factories/content-page');

const { newsletterState } = require('../middleware/newsletter-state');
const { formatContentResponse } = require('../middleware/format-content-response');
const withContent = require('../middleware/with-content');
const contact = require('../templates/content/contact');
const company = require('../templates/content/company');
const mediaGallery = require('../templates/content/media-gallery');
const whitepaper = require('../templates/content/whitepaper');
const webinar = require('../templates/content/webinar');
const contentTemplate = require('../templates/content');

module.exports = (app) => {
  const { site } = app.locals;

  // base on site config||USE_LINK_INJECTED_BODY to enable bcl
  const useLinkInjectedBody = site.get('useLinkInjectedBody');
  const queryFragment = qf.factory ? qf.factory({ useLinkInjectedBody }) : qf;

  const routesList = [
    { // contact
      regex: '/*?contact/:id(\\d{8})*',
      template: contact,
      queryFragment,
    },
    { // company
      regex: '/*?company/:id(\\d{8})*',
      template: company,
      queryFragment: companyQueryFragmentFn(site.get('leaders.alias')),
    },
    { // product
      regex: '/*?media-gallery/:id(\\d{8})*',
      template: mediaGallery,
      queryFragment: leadersContentQueryFactory({
        useLinkInjectedBody,
        leadersAlias: site.get('leaders.alias'),
      }),
    },
    { // webinar
      regex: '/*?webinar/:id(\\d{8})*',
      template: webinar,
      queryFragment: leadersContentQueryFactory({
        useLinkInjectedBody,
        leadersAlias: site.get('leaders.alias'),
      }),
    },
    { // whitepaper
      regex: '/*?whitepaper/:id(\\d{8})*',
      template: whitepaper,
      queryFragment: leadersContentQueryFactory({
        useLinkInjectedBody,
        leadersAlias: site.get('leaders.alias'),
      }),
    },
    { // default
      regex: '/*?/:id(\\d{8})/*|/:id(\\d{8})(/|$)*',
      template: contentTemplate,
      queryFragment: leadersContentQueryFactory({
        useLinkInjectedBody,
        leadersAlias: site.get('leaders.alias'),
      }),
      withContentMeter: true,
    },
  ];

  const cmConfig = site.getAsObject('contentMeter');
  const contentMeterEnable = cmConfig.enabled;
  // determin to use newsletterstate or contentMeter middleware
  routesList.forEach((route) => {
    if (route.withContentMeter && contentMeterEnable) {
      app.get(
        route.regex,
        newsletterState({ setCookie: false }),
        contentMetering(cmConfig),
        withContent({
          template: route.template,
          queryFragment: route.queryFragment,
          formatResponse: formatContentResponse,
        }),
      );
    } else {
      app.get(route.regex, newsletterState({ setCookie: false }), withContent({
        template: route.template,
        queryFragment: route.queryFragment,
        formatResponse: formatContentResponse,
      }));
    }
  });
};
