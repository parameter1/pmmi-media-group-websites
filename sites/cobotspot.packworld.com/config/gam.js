const configureGAM = require('@pmmi-media-group/package-shared/config/gam');

const config = configureGAM();

config.lazyLoad = {
  enabled: false, // set to true to enable lazy loading
  fetchMarginPercent: 100, // fetch ad when one viewport away
  renderMarginPercent: 50, // render ad when half viewport away
  mobileScaling: 2, // double these on mobile
};

config.setAliasAdUnits('default', [
  { name: 'skyscraper', options: { size: [300, 600] }, path: 'cs_skyscraper' },
  { name: 'skyscraper-2', options: { size: [300, 600] }, path: 'cs_skyscraper_2' },
]);

module.exports = config;
