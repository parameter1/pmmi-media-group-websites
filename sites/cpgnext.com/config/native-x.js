const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

const config = new NativeXConfiguration('https://pmmi.native-x.parameter1.com');

config
  .setAliasPlacements('default', [
    { name: 'announcement', id: '649064ac240780000107434b' },
    { name: 'audience', id: '649064baae8aa30001196800' },
    { name: 'marketing', id: '649064c6ae8aa3000119692f' },
    { name: 'default', id: '649064d0ae8aa300011969dc' },
  ]);

module.exports = config;
