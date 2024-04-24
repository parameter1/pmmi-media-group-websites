const configureGAM = require('@pmmi-media-group/package-global/config/gam');

const config = configureGAM();

config.setAliasAdUnits('default', [
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'pw/rotation' },
  { name: 'rotation', templateName: 'ROTATION', path: 'pw/rotation' },
  { name: 'inline-content', templateName: 'INLINE-CONTENT', path: 'pw/rotation' },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'pw/rotation' },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'pw/rotation' },
]);

module.exports = config;
