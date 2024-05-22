const configureGAM = require('@pmmi-media-group/package-global/config/gam');

const config = configureGAM({ basePath: 'pw' });

config.setAliasAdUnits('default', [
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'rotation' },
  { name: 'rotation', templateName: 'ROTATION', path: 'rotation' },
  { name: 'inline-content', templateName: 'INLINE-CONTENT', path: 'rotation' },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'rotation' },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'rotation' },
  // @todo Determine if these natives are loading correctly
  { name: 'inline-content-left-sustainable-packaging', templateName: 'TEST', path: 'lrnative_sustainable-packaging' },
  { name: 'inline-content-right-sustainable-packaging', templateName: 'TEST', path: 'rrnative_sustainable-packaging' },
  { name: 'leaderboard-sustainable-packaging', templateName: 'LEADERBOARD', path: 'leaderboard_sustainable-packaging' },
  // Want only 300x250s here
  { name: 'rotation-sustainable-packaging', templateName: 'INLINE-CONTENT', path: 'imu_rotation_sustainable-packaging' },
]);

module.exports = config;
