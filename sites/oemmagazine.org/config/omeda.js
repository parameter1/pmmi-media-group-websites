const configure = require('@pmmi-media-group/package-global/config/omeda');

module.exports = configure({
  onLoginPromoCodes: {
    newsletterSignup: 'OEM_NL_P1',
    default: 'OEM_P1',
  },
});
