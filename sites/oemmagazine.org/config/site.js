const sharedInquiryConfig = require('@pmmi-media-group/package-shared/config/inquiry');
const navigation = require('./navigation');
const leaders = require('./leaders');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const gam = require('./gam');
const search = require('./search');

module.exports = {
  disableNativeSlotTwo: true,
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
    cookieDomain: process.env.NODE_ENV === 'production' ? 'oemmagazine.org' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.oemmagazine.org/files/base/pmmi/oem/oem_logo.png?h=45&auto=format,compress',
      srcset: [
        'https://img.oemmagazine.org/files/base/pmmi/oem/oem_logo.png?h=90&auto=format,compress 2x',
      ],
    },
    footer: {
      src: 'https://img.oemmagazine.org/files/base/pmmi/oem/oem_logo.png?h=60&auto=format,compress',
      srcset: [
        'https://img.oemmagazine.org/files/base/pmmi/oem/oem_logo.png?h=120&auto=format,compress 2x',
      ],
    },
    printContent: {
      src: 'https://img.oemmagazine.org/files/base/pmmi/oem/oem_logo_black.png?h=45&auto=format,compress',
      srcset: [
        'https://img.oemmagazine.org/files/base/pmmi/oem/oem_logo_black.png?h=90&auto=format,compress 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'twitter', href: 'https://twitter.com/oemmagazine' },
    { provider: 'facebook', href: 'https://www.facebook.com/OEMMagazine' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/oem-magazine' },
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
};
