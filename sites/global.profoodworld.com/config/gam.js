const configureGAM = require('@pmmi-media-group/package-global/config/gam');

const config = configureGAM({ basePath: null });

config.lazyLoad = {
  enabled: false, // set to true to enable lazy loading
  fetchMarginPercent: 100, // fetch ad when one viewport away
  renderMarginPercent: 50, // render ad when half viewport away
  mobileScaling: 2, // double these on mobile
};

config.setAliasAdUnits('default', [
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'pfw_leaderboard' },
  { name: 'rotation', templateName: 'ROTATION', path: 'pfw_leaderboard' },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'pfw_imu' },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'pfw_imu' },
  { name: 'wallpaper-left', templateName: 'WALLPAPER', path: 'pfw-wallpaper-left' },
  { name: 'wallpaper-right', templateName: 'WALLPAPER', path: 'pfw-wallpaper-right' },

  // { name: 'leaderboard', templateName: 'leaderboard', path: 'pfw_leaderoard' },
  // {
  //   name: 'article-top-below-head',
  //   templateName: 'leaderboard',
  //   path: 'pfw-article-top-below-head'
  // },
  // { name: 'home-top-below-head', templateName: 'leaderboard', path: 'pfw-home-top-below-head' },
  // { name: 'imu1', size: [300, 250], path: 'pfw_imu' },
  // { name: 'imu2', size: [300, 250], path: 'pfw_imu_2' },
  // { name: 'skyscraper', options: { size: [300, 600] }, path: 'pfw_skyscraper' },
  // { name: 'wallpaper-left', templateName: 'WALLPAPER', path: 'pfw-wallpaper-left' },
  // { name: 'wallpaper-right', templateName: 'WALLPAPER', path: 'pfw-wallpaper-right' },
]);

module.exports = config;
