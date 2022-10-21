const configure = require('@pmmi-media-group/package-global/config/omeda');

module.exports = configure({
  onLoginLinkSentPromoCodes: {
    newsletterSignup: 'AW_NL_P1',
    default: 'AW_P1',
  },
});
