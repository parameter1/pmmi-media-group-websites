const configureGAM = require('@pmmi-media-group/package-global/config/gam');

const config = configureGAM({ basePath: 'oem' });

config.setAliasAdUnits('default', [
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'rotation' },
  { name: 'rotation', templateName: 'ROTATION', path: 'rotation' },
  { name: 'inline-content', templateName: 'INLINE-CONTENT', path: 'rotation' },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'rotation' },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'rotation' },
  { name: 'wallpaper-left', templateName: 'WALLPAPER', path: 'wallpaper-left' },
  { name: 'wallpaper-right', templateName: 'WALLPAPER', path: 'wallpaper-right' },
  { name: 'top-inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'top-rotation' },
  { name: 'top-inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'top-rotation' },
]);

module.exports = config;
