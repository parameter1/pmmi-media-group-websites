const configureGAM = require('@pmmi-media-group/package-global/config/gam');

const config = configureGAM({ basePath: 'pw' });

config.setAliasAdUnits('default', [
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'rotation' },
  { name: 'rotation', templateName: 'ROTATION', path: 'rotation' },
  { name: 'inline-content', templateName: 'INLINE-CONTENT', path: 'rotation' },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'rotation' },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'rotation' },
  { name: 'inline-content-left-sustainable-packaging', templateName: 'NATIVE', path: 'lrnative_sustainable-packaging' },
  { name: 'inline-content-right-sustainable-packaging', templateName: 'NATIVE', path: 'rrnative_sustainable-packaging' },
  { name: 'leaderboard-sustainable-packaging', templateName: 'LEADERBOARD', path: 'leaderboard_sustainable-packaging' },
  { name: 'rotation-sustainable-packaging', templateName: 'INLINE-CONTENT', path: 'imu_rotation_sustainable-packaging' },
  { name: 'inline-content-left-secondary-packaging', templateName: 'NATIVE', path: 'lrnative_secondary-packaging' },
  { name: 'inline-content-right-secondary-packaging', templateName: 'NATIVE', path: 'rrnative_secondary-packaging' },
  { name: 'leaderboard-secondary-packaging', templateName: 'LEADERBOARD', path: 'leaderboard_secondary-packaging' },
  { name: 'rotation-secondary-packaging', templateName: 'INLINE-CONTENT', path: 'imu_rotation_secondary-packaging' },
  { name: 'inline-content-left-coding-printing-labeling', templateName: 'NATIVE', path: 'lrnative_coding-printing-labeling' },
  { name: 'inline-content-right-coding-printing-labeling', templateName: 'NATIVE', path: 'rrnative_coding-printing-labeling' },
  { name: 'leaderboard-coding-printing-labeling', templateName: 'LEADERBOARD', path: 'leaderboard_coding-printing-labeling' },
  { name: 'rotation-coding-printing-labeling', templateName: 'INLINE-CONTENT', path: 'imu_rotation_coding-printing-labeling' },
  { name: 'inline-content-left-flexibles', templateName: 'NATIVE', path: 'lrnative_flexibles' },
  { name: 'inline-content-right-flexibles', templateName: 'NATIVE', path: 'rrnative_flexibles' },
  { name: 'leaderboard-flexibles', templateName: 'LEADERBOARD', path: 'leaderboard_flexibles' },
  { name: 'rotation-flexibles', templateName: 'INLINE-CONTENT', path: 'imu_rotation_flexibles' },
  { name: 'inline-content-left-rigid', templateName: 'NATIVE', path: 'lrnative_rigid' },
  { name: 'inline-content-right-rigid', templateName: 'NATIVE', path: 'rrnative_rigid' },
  { name: 'leaderboard-rigid', templateName: 'LEADERBOARD', path: 'leaderboard_rigid' },
  { name: 'rotation-rigid', templateName: 'INLINE-CONTENT', path: 'imu_rotation_rigid' },
  { name: 'inline-content-left-trends', templateName: 'NATIVE', path: 'lrnative_trends' },
  { name: 'inline-content-right-trends', templateName: 'NATIVE', path: 'rrnative_trends' },
  { name: 'leaderboard-trends', templateName: 'LEADERBOARD', path: 'leaderboard_trends' },
  { name: 'rotation-trends', templateName: 'INLINE-CONTENT', path: 'imu_rotation_trends' },
]);

module.exports = config;
