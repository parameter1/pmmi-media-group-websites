const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'PMMI Media Group',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pmmi/all/oem_logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/all/oem_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pmmi/all/oem_logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/all/oem_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'twitter', href: 'https://twitter.com/OEMmagazine' },
    { provider: 'facebook', href: 'https://www.facebook.com/OEMMagazine' },
  ],
  gtm: {
    containerId: 'GTM-MLGVVFW',
  },
  wufoo: {
    userName: 'xxxxx',
  },
  magazines: {
    description: '',
  },
};
