const navigation = require('./navigation');
const leaders = require('./leaders');

module.exports = {
  leaders,
  navigation,
  company: 'PMMI Media Group',
  logos: {
    navbar: {
      src: 'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=45',
      srcset: [
        'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=60',
      srcset: [
        'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/PackagingWorld' },
    { provider: 'twitter', href: 'https://twitter.com/packagingworld' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/packaging-world' },
  ],
  gtm: {
    containerId: process.env.GTM_CONTAINER_ID || 'GTM-TK8WXJR',
    slotPrefix: 'pw',
  },
  wufoo: {
    userName: 'pmmimediagroup',
  },
  magazines: {
    description: '',
  },
};
