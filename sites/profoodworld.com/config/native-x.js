const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://pmmi.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'load-more', id: '5da778bd65ebb90001f3ceab' },
  ]);

module.exports = config;
