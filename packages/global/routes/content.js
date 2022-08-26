const { get } = require('@parameter1/base-cms-object-path');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/content-page');
const companyQueryFragmentFn = require('@pmmi-media-group/package-theme-monorail-leaders/graphql/fragment-factories/content-company');
const contentQueryFragmentFn = require('@pmmi-media-group/package-theme-monorail-leaders/graphql/fragment-factories/content-page');

const newsletterState = require('../middleware/newsletter-state');
const withContent = require('../middleware/with-content');
const contact = require('../templates/content/contact');
const company = require('../templates/content/company');
const mediaGallery = require('../templates/content/media-gallery');
const whitepaper = require('../templates/content/whitepaper');
const webinar = require('../templates/content/webinar');
const contentTemplate = require('../templates/content');

const formatResponse = ({ res, content }) => {
  const {
    initiallyExpanded,
    hasCookie,
    fromEmail,
    disabled,
    cookie,
  } = res.locals.newsletterState;

  if (get(content, 'userRegistration.isCurrentlyRequired') === true) {
    res.locals.newsletterState.initiallyExpanded = false;
  } else if (!initiallyExpanded && !hasCookie && !disabled && !fromEmail) {
    res.cookie(cookie.name, true, { maxAge: cookie.maxAge });
    res.locals.newsletterState.initiallyExpanded = true;
  }
};

module.exports = (app) => {
  const { site } = app.locals;
  app.get('/*?contact/:id(\\d{8})*', newsletterState({ setCookie: false }), withContent({
    template: contact,
    queryFragment,
    formatResponse,
  }));
  app.get('/*?company/:id(\\d{8})*', newsletterState({ setCookie: false }), withContent({
    template: company,
    queryFragment: companyQueryFragmentFn(site.get('leaders.alias')),
    formatResponse,
  }));
  app.get('/*?media-gallery/:id(\\d{8})*', newsletterState({ setCookie: false }), withContent({
    template: mediaGallery,
    queryFragment: contentQueryFragmentFn(site.get('leaders.alias')),
    formatResponse,
  }));
  app.get('/*?whitepaper/:id(\\d{8})*', newsletterState({ setCookie: false }), withContent({
    template: whitepaper,
    queryFragment: contentQueryFragmentFn(site.get('leaders.alias')),
    formatResponse,
  }));
  app.get('/*?webinar/:id(\\d{8})*', newsletterState({ setCookie: false }), withContent({
    template: webinar,
    queryFragment,
    formatResponse,
  }));
  app.get('/*?:id(\\d{8})*', newsletterState({ setCookie: false }), withContent({
    template: contentTemplate,
    queryFragment: contentQueryFragmentFn(site.get('leaders.alias')),
    formatResponse,
  }));
};
