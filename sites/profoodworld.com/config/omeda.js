const configure = require('@pmmi-media-group/package-global/config/omeda');

module.exports = configure({
  onLoginLinkSentPromoCodes: {
    newsletterSignup: 'PFW_NL_P1',
    default: 'PFW_P1',
  },
});
