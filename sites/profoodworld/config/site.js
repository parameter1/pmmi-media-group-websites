const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'PMMI Media Group',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pmmi/all/pfw_logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/all/pfw_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pmmi/all/pfw_logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/all/pfw_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'twitter', href: 'https://twitter.com/ProFoodWorld' },
  ],
  gtm: {
    containerId: 'GTM-NHJNQPG',
  },
  wufoo: {
    userName: 'xxxxx',
  },
  magazines: {
    description: '',
  },
};
