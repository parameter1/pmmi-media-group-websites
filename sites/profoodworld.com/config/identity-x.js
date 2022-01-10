const configureIdentityX = require('@pmmi-media-group/package-shared/config/identity-x');

module.exports = configureIdentityX({
  appId: process.env.IDENTITYX_APP_ID || '5e28a4ba58e67b867055ae4c',
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
