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
  ])
  .setAliasPlacements('coding-printing-labeling', [
    { name: 'audience', id: '66bcc0f64ed1da9f926a24e9' },
  ])
  .setAliasPlacements('flexibles', [
    { name: 'audience', id: '66bcc10d4ed1da9f926a24eb' },
  ])
  .setAliasPlacements('rigid', [
    { name: 'audience', id: '66bcc11b4ed1da9f926a24ed' },
  ])
  .setAliasPlacements('sustainable-packaging', [
    { name: 'audience', id: '66bcc12e1a1dc2f0126279a2' },
  ])
  .setAliasPlacements('secondary-packaging', [
    { name: 'audience', id: '66bcc13f2aefeaff78937dc5' },
  ])
  .setAliasPlacements('trends/contract-packaging', [
    { name: 'audience', id: '66bcc14f2aefeaff78937dc7' },
  ])
  .setAliasPlacements('trends/digital-transformation', [
    { name: 'audience', id: '66bcc1831a1dc2f0126279a4' },
  ])
  .setAliasPlacements('trends/logistics-supply-chain', [
    { name: 'audience', id: '66bcc1942aefeaff78937dc9' },
  ])
  .setAliasPlacements('trends/ecommerce-d2c-packaging', [
    { name: 'audience', id: '66bcc1a62aefeaff78937dcb' },
  ])
  .setAliasPlacements('trends/workforce', [
    { name: 'audience', id: '66bcc1b04ed1da9f926a24ef' },
  ])
  .setAliasPlacements('trends/operational-excellence', [
    { name: 'audience', id: '66bcc1bd1a1dc2f0126279a6' },
  ])
  .setAliasPlacements('trends/package-design', [
    { name: 'audience', id: '66bcc1ca2aefeaff78937dcd' },
  ]);

module.exports = config;
