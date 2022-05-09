const configureGAM = require('@pmmi-media-group/package-global/config/gam');

const config = configureGAM({ basePath: null });

config.lazyLoad = {
  enabled: false, // set to true to enable lazy loading
  fetchMarginPercent: 100, // fetch ad when one viewport away
  renderMarginPercent: 50, // render ad when half viewport away
  mobileScaling: 2, // double these on mobile
};

config.setAliasAdUnits('default', [
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'pw_leaderboard' },
  { name: 'rotation', templateName: 'ROTATION', path: 'pw_leaderboard' },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'pw_imu_1' },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'pw_imu_1' },
  { name: 'wallpaper-left', templateName: 'WALLPAPER', path: 'pw-wallpaper-left' },
  { name: 'wallpaper-right', templateName: 'WALLPAPER', path: 'pw-wallpaper-right' },

  // { name: 'leaderboard', templateName: 'leaderboard', path: 'pw_leaderboard' },
  // {
  //   name: 'article-top-below-head',
  //   templateName: 'leaderboard',
  //   path: 'pw-article-top-below-head'
  // },
  // { name: 'home-top-below-head', templateName: 'leaderboard', path: 'pw-home-top-below-head' },
  // { name: 'imu1', size: [300, 250], path: 'pw_imu_1' },
  // { name: 'imu2', size: [300, 250], path: 'pw_imu_3' },
  // { name: 'skyscraper', options: { size: [300, 600] }, path: 'pw_skyscraper' },
  // { name: 'wallpaper-left', templateName: 'WALLPAPER', path: 'pw-wallpaper-left' },
  // { name: 'wallpaper-right', templateName: 'WALLPAPER', path: 'pw-wallpaper-right' },
]);

module.exports = config;
