const configureGAM = require('@pmmi-media-group/package-global/config/gam');

const config = configureGAM({ basePath: null });

config.lazyLoad = {
  enabled: false, // set to true to enable lazy loading
  fetchMarginPercent: 100, // fetch ad when one viewport away
  renderMarginPercent: 50, // render ad when half viewport away
  mobileScaling: 2, // double these on mobile
};

config.setAliasAdUnits('default', [
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'ppoem_leaderboard' },
  { name: 'rotation', templateName: 'ROTATION', path: 'ppoem_leaderboard' },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'ppoem_leaderboard' },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'ppoem_leaderboard' },
  { name: 'wallpaper-left', templateName: 'WALLPAPER', path: 'ppoem-wallpaper-left' },
  { name: 'wallpaper-right', templateName: 'WALLPAPER', path: 'ppoem-wallpaper-right' },

  // { name: 'leaderboard', templateName: 'leaderboard', path: 'ppoem_leaderboard' },
  // {
  //   name: 'article-top-below-head',
  //   templateName: 'leaderboard',
  //   path: 'ppoem-article-top-below-head'
  // },
  // {
  //   name: 'home-top-below-head',
  //   templateName: 'leaderboard',
  //   path: 'ppoem-home-top-below-head'
  // },
  // { name: 'imu1', size: [300, 250], path: 'ppoem_imu_1' },
  // { name: 'imu2', size: [300, 250], path: 'ppoem_imu_2' },
  // { name: 'skyscraper', options: { size: [300, 600] }, path: 'ppoem_skyscraper' },
  // { name: 'wallpaper-left', templateName: 'WALLPAPER', path: 'ppoem-wallpaper-left' },
  // { name: 'wallpaper-right', templateName: 'WALLPAPER', path: 'ppoem-wallpaper-right' },
]);

module.exports = config;
