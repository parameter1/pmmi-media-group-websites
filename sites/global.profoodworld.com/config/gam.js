const configureGAM = require('@pmmi-media-group/package-global/config/gam');

const config = configureGAM({ basePath: 'pfw' });

config.lazyLoad = {
  enabled: true, // set to true to enable lazy loading
  fetchMarginPercent: 100, // fetch ad when one viewport away
  renderMarginPercent: 50, // render ad when half viewport away
  mobileScaling: 2, // double these on mobile
};

config.setAliasAdUnits('default', [
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'pfw_leaderboard' },
  { name: 'rotation', templateName: 'ROTATION', path: 'pfw_leaderboard' },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'pfw_imu' },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'pfw_imu' },
  { name: 'wallpaper-left', templateName: 'WALLPAPER', path: 'wallpaper-left' },
  { name: 'wallpaper-right', templateName: 'WALLPAPER', path: 'wallpaper-right' },
]);

module.exports = config;
