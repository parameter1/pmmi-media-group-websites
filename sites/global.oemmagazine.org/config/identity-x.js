const configureIdentityX = require('@pmmi-media-group/package-global/config/identity-x');

module.exports = configureIdentityX({
  appId: process.env.IDENTITYX_APP_ID || '5e28a4a058e67b7fad55ae4a',
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
