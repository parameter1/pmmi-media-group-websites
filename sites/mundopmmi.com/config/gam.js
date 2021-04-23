const configureGAM = require('@pmmi-media-group/package-shared/config/gam');

const config = configureGAM();

config.lazyLoad = {
  enabled: false, // set to true to enable lazy loading
  fetchMarginPercent: 100, // fetch ad when one viewport away
  renderMarginPercent: 50, // render ad when half viewport away
  mobileScaling: 2, // double these on mobile
};

config.setAliasAdUnits('default', [
  { name: 'leaderboard', templateName: 'leaderboard', path: 'mundo_leaderboard' },
  { name: 'imu1', size: [300, 250], path: 'mundo_imu1' },
  { name: 'imu2', size: [300, 250], path: 'mundo_imu2' },
  { name: 'skyscraper', options: { size: [300, 600] }, path: 'mundo_skyscraper' },
  { name: 'wallpaper-left', templateName: 'WALLPAPER', path: 'mundo-wallpaper-left' },
  { name: 'wallpaper-right', templateName: 'WALLPAPER', path: 'mundo-wallpaper-right' },
]);

module.exports = config;
