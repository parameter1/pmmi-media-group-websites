const configure = require('@pmmi-media-group/package-global/config/omeda-identity-x');
const omedaConfig = require('./omeda');
const idxConfig = require('./identity-x');

module.exports = configure({
  omedaConfig,
  idxConfig,
  rapidIdentProductId: 368,
  websiteBehaviorAttributeId: 199632,
  onLoginLinkSentPromoCodes: {
    newsletterSignup: 'PFW_NL_P1',
    default: 'PFW_P1',
  },
});
