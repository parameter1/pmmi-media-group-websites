const configure = require('@pmmi-media-group/package-global/config/omeda');

module.exports = configure({
  onLoginLinkSentPromoCodes: {
    newsletterSignup: 'MUNDO_NL_P1',
    default: 'MUNDO_P1',
  },
});
