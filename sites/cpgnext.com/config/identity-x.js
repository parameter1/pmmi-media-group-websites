const configureIdentityX = require('@pmmi-media-group/package-global/config/identity-x');

module.exports = configureIdentityX({
  appId: process.env.IDENTITYX_APP_ID || '649063f19a64332c8ec42eed',
  gtmUserFields: {
    primary_business: '64e4b0ab178ace3bf5003c1f',
  },
});
