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
      src: 'https://img.oemmagazine.org/files/base/pmmi/oem/oem_logo.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.oemmagazine.org/files/base/pmmi/oem/oem_logo.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.oemmagazine.org/files/base/pmmi/oem/oem_logo.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.oemmagazine.org/files/base/pmmi/oem/oem_logo.png?h=120&auto=format,compress&q=70 2x',
      ],
    },
    printContent: {
      src: 'https://img.oemmagazine.org/files/base/pmmi/oem/oem_logo_black.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.oemmagazine.org/files/base/pmmi/oem/oem_logo_black.png?h=90&auto=format,compress&q=70 2x',
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
    enabled: true,
    directSend: false,
    sendTo: 'info-request@pmmimediagroup.com',
    replyTo: 'info-request@pmmimediagroup.com',
    sendFrom: 'OEM Magazine <noreply@parameter1.com>',
    logo: 'https://img.oemmagazine.org/files/base/pmmi/oem/oem_logo.png?h=45&auto=format,compress&q=70',
    bgColor: '#000',
    consentCheckboxes: {
      privacyConsent: '<span class="small">I consent to PMMI collecting and storing my information and consent to receive emails as well as sponsored advertisements from PMMI Media Group. I have read PMMI Media Group\'s privacy policy and I understand that I can unsubscribe or opt out at any time, and I can reach your Chief Privacy Officer at <a href="mailto:dataprivacy@pmmi.org">dataprivacy@pmmi.org</a> with any inquiries around privacy policies or practices.</span>',
      notificationConsent: '<span class="small">I agree to share my information with and receive occasional updates from the company mentioned in this article.</span>',
      thirdPartyConsent: '<span class="small">Note that once shared, future communications may come directly from the sponsor and are not governed by PMMI Media Group\'s privacy policy.</span>',
    },
  },
};
