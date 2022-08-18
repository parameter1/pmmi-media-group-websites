const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

const config = new NativeXConfiguration('https://pmmi.native-x.parameter1.com');

config
  .setAliasPlacements('default', [
    { name: 'announcement', id: '62c708fec89aa300012dd5cb' },
    { name: 'audience', id: '62c708e308de40000163109f' },
    { name: 'marketing', id: '62e7cdf57bf3ac0001f86336' },
    { name: 'default', id: '608325d3496c2400016b59dd' },
  ]);

module.exports = config;
