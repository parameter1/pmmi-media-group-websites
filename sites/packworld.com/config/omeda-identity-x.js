const configure = require('@pmmi-media-group/package-global/config/omeda-identity-x');
const omedaConfig = require('./omeda');
const idxConfig = require('./identity-x');

module.exports = configure({
  omedaConfig,
  idxConfig,
  rapidIdentProductId: 366,
  websiteBehaviorAttributeId: 199630,
  onLoginLinkSentPromoCodes: {
    newsletterSignup: 'PW_NL_P1',
    default: 'PW_P1',
  },
});
