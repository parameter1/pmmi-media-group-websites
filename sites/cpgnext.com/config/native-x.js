const configureNativeX = require('@pmmi-media-group/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'announcement', id: '649064ac240780000107434b' },
    { name: 'audience', id: '649064baae8aa30001196800' },
    { name: 'marketing', id: '649064c6ae8aa3000119692f' },
    { name: 'default', id: '649064d0ae8aa300011969dc' },
  ]);

module.exports = config;
