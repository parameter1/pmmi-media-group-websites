const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

const config = new NativeXConfiguration('https://pmmi.native-x.parameter1.com');

config
  .setAliasPlacements('default', [
    { name: 'syndicated-content', id: '5da64b96d5766a00013c3947' },
    { name: 'load-more', id: '5da66dbed5766a00013c3dd8' },
  ]);

module.exports = config;
