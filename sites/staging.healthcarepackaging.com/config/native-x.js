const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

const config = new NativeXConfiguration('https://pmmi.native-x.parameter1.com');

config
  .setAliasPlacements('default', [
    { name: 'load-more', id: '5da778eb65ebb90001f3cf10' },
  ]);

module.exports = config;
