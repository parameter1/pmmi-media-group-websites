const configureGAM = require('@pmmi-media-group/package-global/config/gam');

const config = configureGAM();

config.lazyLoad = {
  enabled: false, // set to true to enable lazy loading
  fetchMarginPercent: 100, // fetch ad when one viewport away
  renderMarginPercent: 50, // render ad when half viewport away
  mobileScaling: 2, // double these on mobile
};

config.setAliasAdUnits('default', [
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'aw_leaderboard' },
  { name: 'rotation', templateName: 'ROTATION', path: 'aw_leaderboard' },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'aw_imu_1' },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'aw_imu_1' },
  { name: 'wallpaper-left', templateName: 'WALLPAPER', path: 'aw-wallpaper-left' },
  { name: 'wallpaper-right', templateName: 'WALLPAPER', path: 'aw-wallpaper-right' },
  // { name: 'leaderboard', templateName: 'leaderboard', path: 'aw_leaderboard' },
  // { name: 'imu1', size: [300, 250], path: 'aw_imu_1' },
  // { name: 'imu2', size: [300, 250], path: 'aw_imu_2' },
  // { name: 'skyscraper', options: { size: [300, 600] }, path: 'aw_skyscraper' },
  // { name: 'wallpaper-left', templateName: 'WALLPAPER', path: 'aw-wallpaper-left' },
  // { name: 'wallpaper-right', templateName: 'WALLPAPER', path: 'aw-wallpaper-right' },
]);

module.exports = config;
