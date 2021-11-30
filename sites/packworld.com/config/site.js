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
      src: 'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=120&auto=format,compress&q=70 2x',
      ],
    },
    printContent: {
      src: 'https://img.packworld.com/files/base/pmmi/pw/pw_logo_black.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.packworld.com/files/base/pmmi/pw/pw_logo_black.png?h=90&auto=format,compress&q=70 2x',
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
    enabled: true,
    directSend: false,
    sendTo: 'info-request@pmmimediagroup.com',
    replyTo: 'info-request@pmmimediagroup.com',
    sendFrom: 'Packaging World <noreply@parameter1.com>',
    logo: 'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=45&auto=format,compress&q=70',
    bgColor: '#000',
    onSubmitConsentCheckboxes: [
      { label: 'privacyConsent', html: '<span class="small">I consent to PMMI collecting and storing my information and consent to receive emails as well as sponsored advertisements from PMMI Media Group. I have read PMMI Media Group\'s privacy policy and I understand that I can unsubscribe or opt out at any time, and I can reach your Chief Privacy Officer at <a href="mailto:dataprivacy@pmmi.org">dataprivacy@pmmi.org</a> with any inquiries around privacy policies or practices.</span>' },
      { label: 'notificationConsent', html: '<span class="small">I agree to share my information with and receive occasional updates from the company mentioned in this article.</span>' },
      { label: 'thirdPartyConsent', html: '<span class="small">Note that once shared, future communications may come directly from the sponsor and are not governed by PMMI Media Group\'s privacy policy.</span>' },
    ],
  },
};
