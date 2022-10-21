const configure = require('@pmmi-media-group/package-global/config/omeda');

module.exports = configure({
  onLoginLinkSentPromoCodes: {
    newsletterSignup: 'PW_NL_P1',
    default: 'PW_P1',
  },
});
