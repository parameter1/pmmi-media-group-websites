const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

const config = new NativeXConfiguration('https://pmmi.native-x.parameter1.com');

config
  .setAliasPlacements('default', [
    { name: 'announcement', id: '62c70886c89aa300012dbc31' },
    { name: 'audience', id: '62c708ae08de400001630598' },
    { name: 'marketing', id: '5da778e5d5766a00013c45c8' },
    { name: 'default', id: '5da778eb65ebb90001f3cf10' },
  ]);

module.exports = config;
