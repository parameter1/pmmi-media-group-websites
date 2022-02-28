const sharedInquiryConfig = require('@pmmi-media-group/package-shared/config/inquiry');
const navigation = require('./navigation');
const leaders = require('./leaders');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const gam = require('./gam');
const search = require('./search');

module.exports = {
  leaders,
  navigation,
  nativeX,
  identityX,
  gam,
  search,
  company: 'PMMI Media Group',
  p1events: {
    tenant: 'pmmi',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'www.packworld.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=45&auto=format,compress',
      srcset: [
        'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=90&auto=format,compress 2x',
      ],
    },
    footer: {
      src: 'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=60&auto=format,compress',
      srcset: [
        'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=120&auto=format,compress 2x',
      ],
    },
    printContent: {
      src: 'https://img.packworld.com/files/base/pmmi/pw/pw_logo_black.png?h=45&auto=format,compress',
      srcset: [
        'https://img.packworld.com/files/base/pmmi/pw/pw_logo_black.png?h=90&auto=format,compress 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/PackagingWorld' },
    { provider: 'twitter', href: 'https://twitter.com/packagingworld' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/packaging-world' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCjmotU1o5ij4p3PNUsnBoNQ?utm_source=PWWebsite&utm_campaign=PWYouTube' },
  ],
  gtm: {
    containerId: process.env.GTM_CONTAINER_ID || 'GTM-TK8WXJR',
    slotPrefix: 'pw',
  },
  gcse: {
    id: '003355913687346718228:trgtl90veyh',
  },
  wufoo: {
    userName: 'pmmimediagroup',
  },
  newsletters: {
    subscribeLink: '',
  },
  magazines: {
    description: '',
  },
  inquiry: {
    ...sharedInquiryConfig,
    sendFrom: 'Packaging World <noreply@parameter1.com>',
    logo: 'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=45&auto=format,compress',
  },
};
