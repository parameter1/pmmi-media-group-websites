const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

const config = new NativeXConfiguration('https://pmmi.native-x.parameter1.com');

config
  .setAliasPlacements('default', [
    // { name: 'syndicated-content', id: '5da64b96d5766a00013c3947' },
    { name: 'default', id: '5da778eb65ebb90001f3cf10' },
  ]);

module.exports = config;
