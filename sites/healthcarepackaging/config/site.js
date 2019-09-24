const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'PMMI Media Group',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pmmi/all/hp_logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/all/hp_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pmmi/all/hp_logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/all/hp_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/HealthcarePackaging' },
    { provider: 'twitter', href: 'https://twitter.com/healthcarepkg' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/Healthcare-Packaging-2796951/about' },
  ],
  gtm: {
    containerId: 'GTM-KKJXPMG',
  },
  wufoo: {
    userName: 'xxxxx',
  },
  magazines: {
    description: '',
  },
};
