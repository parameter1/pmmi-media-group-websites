const GAMConfiguration = require('@mindful-web/marko-web-gam/config');

module.exports = ({
  accountId = '152023730',
  basePath,
} = {}) => {
  const config = new GAMConfiguration(accountId, { basePath });

  config.lazyLoad = {
    enabled: true, // set to true to enable lazy loading
    fetchMarginPercent: 100, // fetch ad when one viewport away
    renderMarginPercent: 50, // render ad when half viewport away
    mobileScaling: 2, // double these on mobile
  };

  config
    .setTemplate('LEADERBOARD', {
      size: [
        [970, 90],
        [728, 90],
        [320, 100],
        [300, 250],
        [320, 50],
        [265, 149], // Featured Pushdown / Fluid Banner
        [1060, 596],
        [736, 414],
        [428, 241],
      ],
      sizeMapping: [
        { viewport: [1070, 0], size: [[970, 90], [728, 90], [265, 149], [1060, 596]] },
        { viewport: [980, 0], size: [[970, 90], [728, 90], [265, 149], [736, 414]] },
        { viewport: [750, 0], size: [[728, 90], [265, 149], [736, 414]] },
        { viewport: [300, 0], size: [[320, 100], [300, 250], [320, 50], [265, 149], [428, 241]] },
      ],
    })
    .setTemplate('ROTATION', {
      size: [[970, 250], [970, 90], [728, 90], [320, 100]],
      sizeMapping: [
        { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
        { viewport: [750, 0], size: [[728, 90], [300, 250]] },
        { viewport: [300, 0], size: [[300, 50], [300, 250], [320, 100]] },
      ],
    })
    .setTemplate('INLINE-CONTENT', {
      size: [300, 250],
      sizeMapping: [
        { viewport: [0, 0], size: [300, 250] },
      ],
    })
    .setTemplate('INLINE-CONTENT-MOBILE', {
      size: [300, 250],
      sizeMapping: [
        { viewport: [980, 0], size: [] },
        { viewport: [320, 0], size: [300, 250] },
      ],
    })
    .setTemplate('INLINE-CONTENT-DESKTOP', {
      size: [300, 250],
      sizeMapping: [
        { viewport: [980, 0], size: [300, 250] },
        { viewport: [0, 0], size: [] },
      ],
    })
    .setTemplate('NATIVE', {
      size: ['fluid'],
      sizeMapping: [
        { viewport: [0, 0], size: ['fluid'] },
      ],
    })
    .setTemplate('TOP-ROTATION', {
      size: [[300, 50], [300, 250], [320, 50], ['fluid']],
      sizeMapping: [
        { viewport: [980, 0], size: [[300, 50], [300, 250], [320, 50]] },
        { viewport: [0, 0], size: ['fluid'] },
      ],
    });

  return config;
};
