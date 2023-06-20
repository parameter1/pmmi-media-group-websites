const sharedInquiryConfig = require('@pmmi-media-group/package-global/config/inquiry');
const gam = require('./gam');
const identityX = require('./identity-x');
const leaders = require('./leaders');
const magazine = require('./magazine');
const nativeX = require('./native-x');
const navigation = require('./navigation');
const newsletter = require('./newsletter');
const omeda = require('./omeda');
const omedaIdentityX = require('./omeda-identity-x');
const search = require('./search');
const subscribe = require('./subscribe');

module.exports = {
  // module configs
  gam,
  identityX,
  idxNavItems: { enable: true },
  leaders,
  magazine,
  nativeX,
  navigation,
  newsletter,
  omeda,
  omedaIdentityX,
  search,
  subscribe,
  // theme configs
  company: 'PMMI Media Group',
  p1events: {
    tenant: 'pmmi',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'www.cpgnext.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.cpgnext.com/files/base/pmmi/cpgn/site-logo.svg?h=30&auto=format,compress',
      srcset: [
        'https://img.cpgnext.com/files/base/pmmi/cpgn/site-logo.svg?h=30&auto=format,compress&dpr=2 2x',
      ],
      width: '120',
      height: '30',
    },
    footer: {
      src: 'https://img.cpgnext.com/files/base/pmmi/cpgn/site-logo-white.svg?h=35&auto=format,compress',
      srcset: [
        'https://img.cpgnext.com/files/base/pmmi/cpgn/site-logo-white.svg?h=35&auto=format,compress&dpr=2 2x',
      ],
      width: '139',
      height: '35',
    },
    printContent: {
      src: 'https://img.cpgnext.com/files/base/pmmi/cpgn/site-logo.svg?h=45&auto=format,compress',
      srcset: [
        'https://img.cpgnext.com/files/base/pmmi/cpgn/site-logo.svg?h=45&auto=format,compress&dpr=2 2x',
      ],
    },
    corporate: {
      alt: 'PMMI Media Group Logo',
      href: 'https://www.pmmimediagroup.com',
      src: 'https://img.cpgnext.com/files/base/pmmi/all/image/static/pmmi-logo.png?h=50&auto=format,compress',
      srcset: [
        'https://img.cpgnext.com/files/base/pmmi/all/image/static/pmmi-logo.png?h=50&auto=format,compress&dpr=2 2x',
      ],
      width: '83',
      height: '40',
    },
  },
  socialMediaLinks: [
    // { provider: 'facebook', href: 'https://www.facebook.com/PackagingWorld' },
    // { provider: 'twitter', href: 'https://twitter.com/packagingworld' },
    // { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/packaging-world' },
    // { provider: 'youtube', href: 'https://www.youtube.com/channel/UCjmotU1o5ij4p3PNUsnBoNQ?utm_source=PWWebsite&utm_campaign=PWYouTube' },
  ],
  gtm: {
    containerId: process.env.GTM_CONTAINER_ID || '',
    slotPrefix: 'cpgn',
  },
  gcse: {
    id: 'd551f21bee9ee4c69',
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
    sendFrom: 'CPG Next <noreply@parameter1.com>',
    logo: '?h=45&auto=format,compress',
  },
  linkOffsite: {
    webinar: 'linkUrl',
    event: 'website',
    target: '_blank',
  },
};
