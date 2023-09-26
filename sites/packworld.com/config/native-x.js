const configureNativeX = require('@pmmi-media-group/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'announcement', id: '62c70a74c89aa300012e143c' },
    { name: 'audience', id: '62c70a1608de4000016348e4' },
    { name: 'marketing', id: '5da778ce65ebb90001f3ced6' },
    { name: 'default', id: '5da778d7d5766a00013c459d' },
  ]);

module.exports = config;
