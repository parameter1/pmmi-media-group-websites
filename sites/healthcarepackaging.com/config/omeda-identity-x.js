const configure = require('@pmmi-media-group/package-global/config/omeda-identity-x');
const omedaConfig = require('./omeda');
const idxConfig = require('./identity-x');

module.exports = configure({
  omedaConfig,
  idxConfig,
  rapidIdentProductId: 367,
  websiteBehaviorAttributeId: 199629,
  onLoginLinkSentPromoCodes: {
    newsletterSignup: 'HCP_NL_P1',
    default: 'HCP_P1',
    omedaPromoCodeCookieName: 'omeda_promo_code',
  },
});
