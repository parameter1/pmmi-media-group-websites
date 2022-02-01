const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

const config = new NativeXConfiguration('https://pmmi.native-x.parameter1.com');
config.enabled = false;

config
  .setAliasPlacements('default', [
    { name: 'load-more', id: '608325d3496c2400016b59dd' },
  ]);

module.exports = config;
