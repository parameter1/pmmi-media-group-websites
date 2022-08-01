const configureIdentityX = require('@pmmi-media-group/package-shared/config/identity-x');

module.exports = configureIdentityX({
  appId: process.env.IDENTITYX_APP_ID || '5e28a4ad58e67b166155ae4b',
  requiredServerFields: [
    'givenName',
    'familyName',
    'organization',
    'organizationTitle',
    'countryCode',
    'regionCode',
    'postalCode',
  ],
});
