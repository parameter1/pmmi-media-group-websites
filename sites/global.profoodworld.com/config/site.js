const sharedInquiryConfig = require('@pmmi-media-group/package-global/config/inquiry');
const navigation = require('./navigation');
const leaders = require('./leaders');
const nativeX = require('./native-x');
const newsletter = require('./newsletter');
const identityX = require('./identity-x');
const gam = require('./gam');
const search = require('./search');

module.exports = {
  disableNativeSlotTwo: true,
  leaders,
  navigation,
  nativeX,
  newsletter,
  identityX,
  gam,
  search,
  company: 'PMMI Media Group',
  p1events: {
    tenant: 'pmmi',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'profoodworld.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.profoodworld.com/files/base/pmmi/pfw/pfw_logo_black.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.profoodworld.com/files/base/pmmi/pfw/pfw_logo_black.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.profoodworld.com/files/base/pmmi/pfw/pfw_logo.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.profoodworld.com/files/base/pmmi/pfw/pfw_logo.png?h=120&auto=format,compress&q=70 2x',
      ],
    },
    printContent: {
      src: 'https://img.profoodworld.com/files/base/pmmi/pfw/pfw_logo_black.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.profoodworld.com/files/base/pmmi/pfw/pfw_logo_black.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'twitter', href: 'https://twitter.com/ProFoodWorld' },
    { provider: 'facebook', href: 'https://www.facebook.com/ProFoodWorld' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/profoodworld' },
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
    logo: 'https://img.profoodworld.com/files/base/pmmi/pfw/pfw_logo.png?h=45&auto=format,compress&q=70',
  },
};
