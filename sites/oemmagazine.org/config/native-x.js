const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://pmmi.native-x.io', { enabled: false });

config
  .setAliasPlacements('default', [
    { name: 'load-more', id: '5da778a4d5766a00013c4538' },
  ]);

module.exports = config;
