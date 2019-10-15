const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://pmmi.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'syndicated-content', id: '5da64b96d5766a00013c3947' },
  ]);

module.exports = config;
