const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

const config = new NativeXConfiguration('https://pmmi.native-x.parameter1.com');

config
  .setAliasPlacements('default', [
    { name: 'announcement', id: '62c7091bc89aa300012ddbc5' },
    { name: 'audience', id: '62c70986c89aa300012df2f4' },
    { name: 'marketing', id: '5da7789b65ebb90001f3ce71' },
    { name: 'default', id: '5da778a4d5766a00013c4538' },
  ]);

module.exports = config;
