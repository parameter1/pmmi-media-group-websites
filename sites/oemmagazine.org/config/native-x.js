const configureNativeX = require('@pmmi-media-group/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'announcement', id: '62c7091bc89aa300012ddbc5' },
    { name: 'audience', id: '62c70986c89aa300012df2f4' },
    { name: 'marketing', id: '5da7789b65ebb90001f3ce71' },
    { name: 'default', id: '5da778a4d5766a00013c4538' },
  ])
  .setAliasPlacements('engineering', [
    { name: 'audience', id: '66bcb63e2aefeaff78937db9' },
  ])
  .setAliasPlacements('business', [
    { name: 'audience', id: '66bcb6111a1dc2f01262798e' },
  ]);

module.exports = config;
