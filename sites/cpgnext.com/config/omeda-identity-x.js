const configure = require('@pmmi-media-group/package-global/config/omeda-identity-x');
const omedaConfig = require('./omeda');
const idxConfig = require('./identity-x');

module.exports = configure({
  omedaConfig,
  idxConfig,
  rapidIdentProductId: 390,
  websiteBehaviorAttributeId: 214674,
  onLoginLinkSentPromoCodes: {
    newsletterSignup: 'CPG_NL_P1',
    default: 'CPG_P1',
  },
});
