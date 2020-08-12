const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://pmmi.native-x.io', { enabled: false });

config
  .setAliasPlacements('default', [
    { name: 'load-more', id: '5ec2ab49029a4e0001599842' },
  ]);

module.exports = config;
