const configure = require('@pmmi-media-group/package-global/config/omeda-identity-x');
const omedaConfig = require('./omeda');
const idxConfig = require('./identity-x');

module.exports = configure({
  omedaConfig,
  idxConfig,
  rapidIdentProductId: 365,
  websiteBehaviorAttributeId: 199627,
  onLoginLinkSentPromoCodes: {
    newsletterSignup: 'AW_NL_P1',
    default: 'AW_P1',
  },
});
