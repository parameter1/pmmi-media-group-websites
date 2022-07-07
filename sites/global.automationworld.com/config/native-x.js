const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

const config = new NativeXConfiguration('https://pmmi.native-x.parameter1.com');

config
  .setAliasPlacements('default', [
    { name: 'announcement', id: '62c6e2d408de4000015e9ad5' },
    { name: 'audience', id: '62c5f19108de40000146b7aa' },
    { name: 'marketing', id: '5da64b96d5766a00013c3947' },
    { name: 'default', id: '5da66dbed5766a00013c3dd8' },
  ]);

module.exports = config;
