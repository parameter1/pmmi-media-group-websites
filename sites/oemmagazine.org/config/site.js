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
  disableNativeSlotTwo: true,
  company: 'PMMI Media Group',
  p1events: {
    tenant: 'pmmi',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'oemmagazine.org' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.oemmagazine.org/files/base/pmmi/oem/OEM-logo-colored.png?h=30&auto=format,compress',
      srcset: [
        'https://img.oemmagazine.org/files/base/pmmi/oem/OEM-logo-colored.png?h=30&auto=format,compress&dpr=2 2x',
      ],
      width: '73',
      height: '30',
    },
    footer: {
      src: 'https://img.oemmagazine.org/files/base/pmmi/oem/oem_logo.png?h=35&auto=format,compress',
      srcset: [
        'https://img.oemmagazine.org/files/base/pmmi/oem/oem_logo.png?h=35&auto=format,compress&dpr=2 2x',
      ],
      width: '98',
      height: '35',
    },
    printContent: {
      src: 'https://img.oemmagazine.org/files/base/pmmi/oem/OEM-logo-colored.png?h=45&auto=format,compress',
      srcset: [
        'https://img.oemmagazine.org/files/base/pmmi/oem/OEM-logo-colored.png?h=45&auto=format,compress&dpr=2 2x',
      ],
    },
    corporate: {
      alt: 'PMMI Media Group Logo',
      href: 'https://www.pmmimediagroup.com',
      src: 'https://img.oemmagazine.org/files/base/pmmi/all/image/static/pmmi-logo.png?h=50&auto=format,compress',
      srcset: [
        'https://img.oemmagazine.org/files/base/pmmi/all/image/static/pmmi-logo.png?h=50&auto=format,compress&dpr=2 2x',
      ],
      width: '83',
      height: '40',
    },
  },
  socialMediaLinks: [
    { provider: 'twitter', href: 'https://twitter.com/oemmagazine' },
    { provider: 'facebook', href: 'https://www.facebook.com/OEMMagazine' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/oem-magazine' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCFTwxWPoHELvYMYBa-ZES4A?utm_source=OEMWebsite&utm_campaign=OEMYouTube' },
  ],
  gtm: {
    containerId: process.env.GTM_CONTAINER_ID || 'GTM-M596Q98',
    slotPrefix: 'oem',
  },
  gcse: {
    id: '003355913687346718228:znjzr8aiziw',
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
    sendFrom: 'OEM Magazine <noreply@parameter1.com>',
    logo: 'https://img.oemmagazine.org/files/base/pmmi/oem/oem_logo.png?h=45&auto=format,compress',
  },
  linkOffsite: {
    webinar: 'linkUrl',
    event: 'website',
    target: '_blank',
  },
};
