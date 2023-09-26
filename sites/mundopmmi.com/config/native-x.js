const configureNativeX = require('@pmmi-media-group/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'announcement', id: '62c708fec89aa300012dd5cb' },
    { name: 'audience', id: '62c708e308de40000163109f' },
    { name: 'marketing', id: '62e7cdf57bf3ac0001f86336' },
    { name: 'default', id: '608325d3496c2400016b59dd' },
  ]);

module.exports = config;
