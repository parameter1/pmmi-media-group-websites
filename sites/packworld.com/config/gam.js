const configureGAM = require('@pmmi-media-group/package-global/config/gam');

const config = configureGAM({ basePath: 'pw' });

config.setAliasAdUnits('default', [
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'rotation' },
  { name: 'rotation', templateName: 'ROTATION', path: 'rotation' },
  { name: 'inline-content', templateName: 'INLINE-CONTENT', path: 'rotation' },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'rotation' },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'rotation' },
  { name: 'top-inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'top-rotation' },
  { name: 'top-inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'top-rotation' },
  { name: 'wallpaper-left', templateName: 'WALLPAPER', path: 'wallpaper-left' },
  { name: 'wallpaper-right', templateName: 'WALLPAPER', path: 'wallpaper-right' },
]);

config.setTemplate('INLINE-CONTENT', {
  size: [[300, 250], [300, 50], [320, 50]],
  sizeMapping: [
    { viewport: [0, 0], size: [[300, 250], [300, 50], [320, 50]] },
  ],
});

const aliases = [
  { alias: 'sustainable-packaging' },
  { alias: 'sustainable-packaging/recycling', prefix: 'recycling' },
  { alias: 'sustainable-packaging/bio-based', prefix: 'bio-based' },
  { alias: 'sustainable-packaging/reusable-returnable', prefix: 'reusable-returnable' },
  { alias: 'flexibles' },
  { alias: 'flexibles/bagging-pouching', prefix: 'bagging-pouching' },
  { alias: 'flexibles/wrapping', prefix: 'wrapping' },
  { alias: 'rigid' },
  { alias: 'rigid/filling-capping-closing', prefix: 'filling-capping-closing' },
  { alias: 'rigid/containers-closures', prefix: 'containers-closures' },
  { alias: 'coding-printing-labeling' },
  { alias: 'coding-printing-labeling/labeling', prefix: 'labeling' },
  { alias: 'coding-printing-labeling/coding-marking', prefix: 'coding-marking' },
  { alias: 'coding-printing-labeling/package-printing', prefix: 'package-printing' },
  { alias: 'secondary-packaging' },
  { alias: 'secondary-packaging/cartoning', prefix: 'cartoning' },
  { alias: 'secondary-packaging/multipacking', prefix: 'multipacking' },
  { alias: 'secondary-packaging/case-tray-packing', prefix: 'case-tray-packing' },
  { alias: 'secondary-packaging/robotics', prefix: 'robotics' },
  { alias: 'trends' },
  { alias: 'trends/contract-packaging', prefix: 'contract-packaging' },
  { alias: 'trends/logistics-supply-chain', prefix: 'logistics-supply-chain' },
  { alias: 'trends/controls-machine-components', prefix: 'controls-machine-components' },
  { alias: 'trends/ecommerce-d2c-packaging', prefix: 'ecommerce-d2c-packaging' },
  { alias: 'trends/package-design', prefix: 'package-design' },
  { alias: 'trends/pmmi-news', prefix: 'pmmi-news' },
  { alias: 'trends/workforce', prefix: 'workforce' },
];

aliases.forEach(({ alias, prefix = alias }) => config.setAliasAdUnits(alias, [
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: `${prefix}_rotation` },
  { name: 'inline-content', templateName: 'INLINE-CONTENT', path: `${prefix}_rotation` },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: `${prefix}_rotation` },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: `${prefix}_rotation` },
  { name: 'top-inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: `${prefix}_top-rotation` },
  { name: 'top-inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: `${prefix}_top-rotation` },
  { name: 'rotation', templateName: 'ROTATION', path: `${prefix}_rotation` },
  { name: 'inline-content-left', templateName: 'NATIVE', path: `${prefix}_lrnative` },
  { name: 'inline-content-right', templateName: 'NATIVE', path: `${prefix}_rrnative` },
]));

module.exports = config;
