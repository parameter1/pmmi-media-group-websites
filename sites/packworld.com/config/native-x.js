const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://pmmi.native-x.io', { enabled: false });

config
  .setAliasPlacements('default', [
    { name: 'load-more', id: '5da778d7d5766a00013c459d' },
  ]);

module.exports = config;
