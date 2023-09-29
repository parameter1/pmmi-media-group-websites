const configureIdentityX = require('@pmmi-media-group/package-global/config/identity-x');

module.exports = configureIdentityX({
  appId: process.env.IDENTITYX_APP_ID || '5e28a49458e67b68f255ae49',
  gtmUserFields: {
    primary_business: '62979e4f650fd867b7efed67',
  },
});
