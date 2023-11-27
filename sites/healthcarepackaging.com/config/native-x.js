const configureNativeX = require('@pmmi-media-group/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'announcement', id: '62c70886c89aa300012dbc31' },
    { name: 'audience', id: '62c708ae08de400001630598' },
    { name: 'marketing', id: '5da778e5d5766a00013c45c8' },
    { name: 'super-category-nutraceutical', id: '6564a661e9037c00018a2dd8' },
    { name: 'super-category-pharmaceutical', id: '6564a650f2eda200017fcd60' },
    { name: 'super-category-package-features-design', id: '6564a63af2eda200017fcd36' },
    { name: 'super-category-medical-devices', id: '6564a5dbe9037c00018a2cba' },
    { name: 'default', id: '5da778eb65ebb90001f3cf10' },
  ]);

module.exports = config;
