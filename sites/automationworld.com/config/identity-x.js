const configureIdentityX = require('@pmmi-media-group/package-shared/config/identity-x');

module.exports = configureIdentityX({
  appId: process.env.IDENTITYX_APP_ID || '5e28a48458e67b06dc55ae48',
});
