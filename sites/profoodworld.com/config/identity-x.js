const configureIdentityX = require('@pmmi-media-group/package-global/config/identity-x');

module.exports = configureIdentityX({
  appId: process.env.IDENTITYX_APP_ID || '5e28a4ba58e67b867055ae4c',
  gtmUserFields: {
    primary_business: '62979a481f9729aafe3288cd',
  },
});
