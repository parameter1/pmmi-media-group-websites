const configureGAM = require('@pmmi-media-group/package-global/config/gam');

const config = configureGAM({ basePath: 'pfw' });

config.setAliasAdUnits('default', [
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'rotation' },
  { name: 'rotation', templateName: 'ROTATION', path: 'rotation' },
  { name: 'inline-content', templateName: 'INLINE-CONTENT', path: 'rotation' },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'rotation' },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'rotation' },
  { name: 'wallpaper-left', templateName: 'WALLPAPER', path: 'wallpaper-left' },
  { name: 'wallpaper-right', templateName: 'WALLPAPER', path: 'wallpaper-right' },
]);

const aliases = [
  { alias: 'automation' },
  { alias: 'automation/controls', prefix: 'controls' },
  { alias: 'automation/iiot', prefix: 'iiot' },
  { alias: 'automation/robotics', prefix: 'robotics' },
  { alias: 'automation/security', prefix: 'security' },
  { alias: 'automation/software', prefix: 'software' },
  { alias: 'automation/workforce', prefix: 'workforce' },
  { alias: 'food-safety' },
  { alias: 'food-safety/cleaning-and-sanitation', prefix: 'cleaning-sanitation' },
  { alias: 'food-safety/inspection', prefix: 'inspection' },
  { alias: 'food-saftey/pest-control', prefix: 'pest-control' },
  { alias: 'food-safety/regulatory', prefix: 'regulatory' },
  { alias: 'food-safety/sterilization-pasteurization', prefix: 'sterilization-pasteurization' },
  { alias: 'processing-equipment' },
  { alias: 'processing-equipment/chilling-freezing', prefix: 'chilling-freezing' },
  { alias: 'processing-equipment/dry-processing', prefix: 'dry-processing' },
  { alias: 'processing-equipment/heating-cooking', prefix: 'heating-cooking' },
  { alias: 'processing-equipment/liquid-processing', prefix: 'liquid-processing' },
  { alias: 'processing-equipment/processing-instrumentation', prefix: 'processing-instrumentation' },
  { alias: 'sustainability' },
];

aliases.forEach(({ alias, prefix = alias }) => config.setAliasAdUnits(alias, [
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: `${prefix}_rotation` },
  { name: 'inline-content', templateName: 'INLINE-CONTENT', path: `${prefix}_rotation` },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: `${prefix}_rotation` },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: `${prefix}_rotation` },
  { name: 'rotation', templateName: 'ROTATION', path: `${prefix}_rotation` },
  { name: 'inline-content-left', templateName: 'NATIVE', path: `${prefix}_lrnative` },
  { name: 'inline-content-right', templateName: 'NATIVE', path: `${prefix}_rrnative` },
]));

module.exports = config;
