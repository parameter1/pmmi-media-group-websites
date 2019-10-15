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
    { name: 'leaderboard', templateName: 'leaderboard', path: 'aw_leaderboard' },
    { name: 'article-top-below-head', templateName: 'leaderboard', path: 'aw-article-top-below-head' },
    { name: 'article-01-right', path: 'aw-article-01-right' },
    { name: 'article-leaders-vote-btn', path: 'aw-article-leaders-vote-btn' },
    { name: 'article-02-right', path: 'aw-article-02-right' },
    { name: 'article-02-right', path: 'aw-article-03-right' },
    { name: 'article-04-left', path: 'aw-article-04-left' },
    { name: 'home-top-below-head', templateName: 'leaderboard', path: 'aw-home-top-below-head' },
    { name: 'home-01-right', path: 'aw-home-01-right' },
    { name: 'home-leaders-vote-btn', path: 'aw-home-leaders-vote-btn' },
    { name: 'home-02-right', path: 'aw-home-02-right' },
    { name: 'home-03-right', path: 'aw-home-03-right' },
    { name: 'home-04-left', path: 'aw-home-04-left' },
    { name: 'imu1', size: [300, 250], path: 'aw_imu_1' },
    { name: 'imu2', size: [300, 250], path: 'aw_imu_2' },
    { name: 'skyscraper', size: [300, 600], path: 'aw_skyscraper' },
  ]);

module.exports = config;
