const sharedInquiryConfig = require('@pmmi-media-group/package-global/config/inquiry');
const navigation = require('./navigation');
const leaders = require('./leaders');
const nativeX = require('./native-x');
const newsletter = require('./newsletter');
const identityX = require('./identity-x');
const gam = require('./gam');
const search = require('./search');
const subscribe = require('./subscribe');

module.exports = {
  leaders,
  navigation,
  nativeX,
  newsletter,
  identityX,
  gam,
  search,
  subscribe,
  company: 'PMMI Media Group',
  p1events: {
    tenant: 'pmmi',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'www.packworld.com' : '',
  },
  publicationIds: [
    '5d8a239af6d5f267ee9745d0',
  ],
  logos: {
    navbar: {
      src: 'https://img.packworld.com/files/base/pmmi/pw/pw_logo_black.png?h=30&auto=format,compress',
      srcset: [
        'https://img.packworld.com/files/base/pmmi/pw/pw_logo_black.png?h=30&auto=format,compress&dpr=2 2x',
      ],
    },
    footer: {
      src: 'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=35&auto=format,compress',
      srcset: [
        'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=35&auto=format,compress&dpr=2 2x',
      ],
    },
    printContent: {
      src: 'https://img.packworld.com/files/base/pmmi/pw/pw_logo_black.png?h=45&auto=format,compress',
      srcset: [
        'https://img.packworld.com/files/base/pmmi/pw/pw_logo_black.png?h=45&auto=format,compress&dpr=2 2x',
      ],
    },
    corporate: {
      alt: 'PMMI Media Group Logo',
      href: 'https://www.pmmimediagroup.com',
      src: 'https://img.packworld.com/files/base/pmmi/all/image/static/pmmi-logo.png?h=50&auto=format,compress',
      srcset: [
        'https://img.packworld.com/files/base/pmmi/all/image/static/pmmi-logo.png?h=50&auto=format,compress&dpr=2 2x',
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
