const configureNativeX = require('@pmmi-media-group/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'announcement', id: '62c70a74c89aa300012e143c' },
    { name: 'audience', id: '62c70a1608de4000016348e4' },
    { name: 'marketing', id: '5da778ce65ebb90001f3ced6' },
    { name: 'super-category-labeling', id: '655d00bee9037c000183a628' },
    { name: 'super-category-e-commerce', id: '6564aa2be9037c00018a31cb' },
    { name: 'super-category-package-features-design', id: '6564aa40e9037c00018a31f6' },
    { name: 'super-category-sustainability', id: '6564aa5ee9037c00018a3221' },
    { name: 'super-category-conveying-&-accumulation', id: '6564aa75f2eda200017fd24a' },
    { name: 'super-category-bag-pouch-fill-seal', id: '6564aa8ae9037c00018a3272' },
    { name: 'super-category-palletizing-depalletizing', id: '6564aab0e9037c00018a32cd' },
    { name: 'super-category-cartoning', id: '6564aae0f2eda200017fd2dc' },
    { name: 'super-category-robotics', id: '6564ab02e9037c00018a332d' },
    { name: 'super-category-coding-marking-rfid', id: '6564ab2ce9037c00018a336b' },
    { name: 'super-category-case-tray-packing', id: '6564ab3ef2eda200017fd381' },
    { name: 'super-category-flexible-packaging', id: '6564ab5be9037c00018a33a6' },
    { name: 'super-category-beverage', id: '6564ab79e9037c00018a33cf' },
    { name: 'default', id: '5da778d7d5766a00013c459d' },
  ]);

module.exports = config;
