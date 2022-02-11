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
    cookieDomain: process.env.NODE_ENV === 'production' ? 'automationworld.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.automationworld.com/files/base/pmmi/aw/aw_logo.png?h=45&auto=format,compress',
      srcset: [
        'https://img.automationworld.com/files/base/pmmi/aw/aw_logo.png?h=90&auto=format,compress 2x',
      ],
    },
    footer: {
      src: 'https://img.automationworld.com/files/base/pmmi/aw/aw_logo.png?h=60&auto=format,compress',
      srcset: [
        'https://img.automationworld.com/files/base/pmmi/aw/aw_logo.png?h=120&auto=format,compress 2x',
      ],
    },
    printContent: {
      src: 'https://img.automationworld.com/files/base/pmmi/aw/aw_logo_black.png?h=45&auto=format,compress',
      srcset: [
        'https://img.automationworld.com/files/base/pmmi/aw/aw_logo_black.png?h=90&auto=format,compress 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/AutomationWorldMag' },
    { provider: 'twitter', href: 'https://www.twitter.com/automationworld' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/automation-world' },
    { provider: 'instagram', href: 'https://www.instagram.com/automation_world' },
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
