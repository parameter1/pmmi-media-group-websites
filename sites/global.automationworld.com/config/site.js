const sharedInquiryConfig = require('@pmmi-media-group/package-global/config/inquiry');
const navigation = require('./navigation');
const leaders = require('./leaders');
const magazine = require('./magazine');
const newsletter = require('./newsletter');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const omeda = require('./omeda');
const gam = require('./gam');
const search = require('./search');
const subscribe = require('./subscribe');

module.exports = {
  leaders,
  magazine,
  navigation,
  newsletter,
  nativeX,
  identityX,
  omeda,
  gam,
  search,
  subscribe,
  company: 'PMMI Media Group',
  p1events: {
    tenant: 'pmmi',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'automationworld.com' : '',
  },
  publicationIds: [
    '5d8a225ef6d5f267ee95d214',
  ],
  logos: {
    navbar: {
      src: 'https://img.automationworld.com/files/base/pmmi/aw/aw-logo.webp?h=30&auto=format,compress',
      srcset: [
        'https://img.automationworld.com/files/base/pmmi/aw/aw-logo.webp?h=30&auto=format,compress&dpr=2 2x',
      ],
    },
    footer: {
      src: 'https://img.automationworld.com/files/base/pmmi/aw/aw_logo.png?h=35&auto=format,compress',
      srcset: [
        'https://img.automationworld.com/files/base/pmmi/aw/aw_logo.png?h=35&auto=format,compress&dpr=2 2x',
      ],
    },
    printContent: {
      src: 'https://img.automationworld.com/files/base/pmmi/aw/aw_logo_black.png?h=45&auto=format,compress',
      srcset: [
        'https://img.automationworld.com/files/base/pmmi/aw/aw_logo_black.png?h=45&auto=format,compress&dpr=2 2x',
      ],
    },
    corporate: {
      alt: 'PMMI Media Group Logo',
      href: 'https://www.pmmimediagroup.com',
      src: 'https://img.automationworld.com/files/base/pmmi/all/image/static/pmmi-logo.png?h=50&auto=format,compress',
      srcset: [
        'https://img.automationworld.com/files/base/pmmi/all/image/static/pmmi-logo.png?h=50&auto=format,compress&dpr=2 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/AutomationWorldMag' },
    { provider: 'twitter', href: 'https://www.twitter.com/automationworld' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/automation-world' },
    { provider: 'instagram', href: 'https://www.instagram.com/automation_world' },
    { provider: 'youtube', href: 'https://www.youtube.com/c/AutomationWorldTV?utm_source=AWWebsite&utm_campaign=AWYouTube' },
  ],
  gtm: {
    containerId: process.env.GTM_CONTAINER_ID || 'GTM-NM2MBTG',
    slotPrefix: 'aw',
  },
  gcse: {
    id: '003355913687346718228:y5v3j3tlsgb',
  },
  wufoo: {
    userName: 'pmmimediagroup',
  },
  newsletters: {
    subscribeLink: 'https://pmmi.dragonforms.com/loading.do?pk=AWMagNav&oly_enc_id=@{encrypted_customer_id}@&omedasite=PAWnew',
  },
  magazines: {
    description: '',
  },
  inquiry: {
    ...sharedInquiryConfig,
    sendFrom: 'Automation World <noreply@parameter1.com>',
    logo: 'https://img.automationworld.com/files/base/pmmi/aw/aw_logo.png?h=45&auto=format,compress',
  },
};
