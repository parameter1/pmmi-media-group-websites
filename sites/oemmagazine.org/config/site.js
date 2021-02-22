const navigation = require('./navigation');
const leaders = require('./leaders');
const nativeX = require('./native-x');

module.exports = {
  leaders,
  navigation,
  nativeX,
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
  wufoo: {
    userName: 'pmmimediagroup',
  },
  magazines: {
    description: '',
  },
  inquiry: {
    enabled: true,
    directSend: false,
    sendTo: 'info-request@pmmimediagroup.com',
    replyTo: 'info-request@pmmimediagroup.com',
    sendFrom: 'OEM Magazine <noreply@baseplatform.io>',
    logo: 'https://img.oemmagazine.org/files/base/pmmi/oem/oem_logo.png?h=45&auto=format,compress&q=70',
    bgColor: '#000',
  },
};
