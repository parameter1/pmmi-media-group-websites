const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('152023730');

config
  .setTemplate('leaderboard', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  });

config
  .setAliasAdUnits('default', [
    { name: 'leaderboard', templateName: 'leaderboard', path: 'pw_leaderboard' },
    { name: 'article-top-below-head', templateName: 'leaderboard', path: 'pw-article-top-below-head' },
    { name: 'home-top-below-head', templateName: 'leaderboard', path: 'pw-home-top-below-head' },
    { name: 'imu1', size: [300, 250], path: 'pw_imu_1' },
    { name: 'imu2', size: [300, 250], path: 'pw_imu_3' },
    { name: 'skyscraper', options: { size: [300, 600] }, path: 'pw_skyscraper' },
  ]);

module.exports = config;
