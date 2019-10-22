const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'PMMI Media Group',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pmmi/pw/pw_logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/pw/pw_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pmmi/pw/pw_logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/pw/pw_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/PackagingWorld' },
    { provider: 'twitter', href: 'https://twitter.com/packagingworld' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/packaging-world' },
  ],
  gtm: {
    containerId: 'GTM-TK8WXJR',
    slotPrefix: 'pw',
  },
  wufoo: {
    userName: 'pmmimediagroup',
  },
  magazines: {
    description: '',
  },
};
