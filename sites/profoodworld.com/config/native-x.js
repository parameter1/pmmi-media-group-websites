const configureNativeX = require('@pmmi-media-group/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'announcement', id: '62c709ac08de400001633a1a' },
    { name: 'audience', id: '62c709c1c89aa300012dfc8e' },
    { name: 'marketing', id: '5da778b1d5766a00013c4563' },
    { name: 'default', id: '5da778bd65ebb90001f3ceab' },
  ]);

module.exports = config;
