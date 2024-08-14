const configureNativeX = require('@pmmi-media-group/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'announcement', id: '62c709ac08de400001633a1a' },
    { name: 'audience', id: '62c709c1c89aa300012dfc8e' },
    { name: 'marketing', id: '5da778b1d5766a00013c4563' },
    { name: 'default', id: '5da778bd65ebb90001f3ceab' },
  ])
  .setAliasPlacements('automation', [
    { name: 'audience', id: '66bcbdb51a1dc2f012627998' },
  ])
  .setAliasPlacements('processing-equipment', [
    { name: 'audience', id: '66bcbdc61a1dc2f01262799a' },
  ])
  .setAliasPlacements('facilities-design-infrastructure', [
    { name: 'audience', id: '66bcbdd52aefeaff78937dc3' },
  ])
  .setAliasPlacements('food-safety', [
    { name: 'audience', id: '66bcbde11a1dc2f01262799c' },
  ])
  .setAliasPlacements('sustainability', [
    { name: 'audience', id: '66bcbdef1a1dc2f01262799e' },
  ])
  .setAliasPlacements('packaging-technology', [
    { name: 'audience', id: '66bcbdfc1a1dc2f0126279a0' },
  ]);

module.exports = config;
