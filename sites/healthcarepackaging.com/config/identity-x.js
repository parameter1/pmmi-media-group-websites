const configureIdentityX = require('@pmmi-media-group/package-shared/config/identity-x');

module.exports = configureIdentityX({
  appId: process.env.IDENTITYX_APP_ID || '5e28a49458e67b68f255ae49',
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
