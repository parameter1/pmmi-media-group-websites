const sharedInquiryConfig = require('@pmmi-media-group/package-global/config/inquiry');
const navigation = require('./navigation');
const leaders = require('./leaders');
const magazine = require('./magazine');
const nativeX = require('./native-x');
const newsletter = require('./newsletter');
const identityX = require('./identity-x');
const omeda = require('./omeda');
const omedaIdentityX = require('./omeda-identity-x');
const gam = require('./gam');
const search = require('./search');
const subscribe = require('./subscribe');

module.exports = {
  disableNativeSlotTwo: true,
  leaders,
  magazine,
  navigation,
  nativeX,
  newsletter,
  identityX,
  idxNavItems: {
    enable: true,
  },
  omeda,
  omedaIdentityX,
  gam,
  search,
  subscribe,
  company: 'PMMI Media Group',
  p1events: {
    tenant: 'pmmi',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'profoodworld.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.profoodworld.com/files/base/pmmi/pfw/pfw-color.svg?h=30&auto=format,compress',
      srcset: [
        'https://img.profoodworld.com/files/base/pmmi/pfw/pfw-color.svg?h=30&auto=format,compress&dpr=2 2x',
      ],
    },
    footer: {
      src: 'https://img.profoodworld.com/files/base/pmmi/pfw/pfw_logo.png?h=35&auto=format,compress',
      srcset: [
        'https://img.profoodworld.com/files/base/pmmi/pfw/pfw_logo.png?h=35&auto=format,compress&dpr=2 2x',
      ],
    },
    printContent: {
      src: 'https://img.profoodworld.com/files/base/pmmi/pfw/pfw-color.svg?h=45&auto=format,compress',
      srcset: [
        'https://img.profoodworld.com/files/base/pmmi/pfw/pfw-color.svg?h=45&auto=format,compress&dpr=2 2x',
      ],
    },
    corporate: {
      alt: 'PMMI Media Group Logo',
      href: 'https://www.pmmimediagroup.com',
      src: 'https://img.profoodworld.com/files/base/pmmi/all/image/static/pmmi-logo.png?h=50&auto=format,compress',
      srcset: [
        'https://img.profoodworld.com/files/base/pmmi/all/image/static/pmmi-logo.png?h=50&auto=format,compress&dpr=2 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'twitter', href: 'https://twitter.com/ProFoodWorld' },
    { provider: 'facebook', href: 'https://www.facebook.com/ProFoodWorld' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/profoodworld' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCMtji4GViRU_1PfKnVpu2Yw?utm_source=PFWWebsite&utm_campaign=PFWYouTube' },
  ],
  gtm: {
    containerId: process.env.GTM_CONTAINER_ID || 'GTM-MW8Q9VC',
    slotPrefix: 'pfw',
  },
  gcse: {
    id: '003355913687346718228:spwkpiwssik',
  },
  wufoo: {
    userName: 'pmmimediagroup',
  },
  magazines: {
    description: '',
  },
  inquiry: {
    ...sharedInquiryConfig,
    sendFrom: 'ProFood World <noreply@parameter1.com>',
    logo: 'https://img.profoodworld.com/files/base/pmmi/pfw/pfw_logo.png?h=45&auto=format,compress',
  },
};
