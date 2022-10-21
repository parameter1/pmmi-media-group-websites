const configure = require('@pmmi-media-group/package-global/config/omeda');

module.exports = configure({
  onLoginPromoCodes: {
    newsletterSignup: 'HCP_NL_P1',
    default: 'HCP_P1',
  },
});
