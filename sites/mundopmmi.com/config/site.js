const navigation = require('./navigation');
const leaders = require('./leaders');
const nativeX = require('./native-x');
const gam = require('./gam');

module.exports = {
  leaders,
  navigation,
  nativeX,
  gam,
  company: 'PMMI Media Group',
  copyrightNotice: 'Todos los derechos reservados.',
  p1events: {
    tenant: 'pmmi',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'www.mundopmmi.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.mundopmmi.com/files/base/pmmi/mundo/MundoPMMI_logo_White_notag.png?h=80',
      srcset: [
        'https://img.mundopmmi.com/files/base/pmmi/mundo/MundoPMMI_logo_White_notag.png?h=160 2x',
      ],
    },
    footer: {
      src: 'https://img.mundopmmi.com/files/base/pmmi/mundo/footerLogos_white.png?h=60',
      srcset: [
        'https://img.mundopmmi.com/files/base/pmmi/mundo/footerLogos_white.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/mundo-pmmi' },
    { provider: 'twitter', href: 'https://twitter.com/MundoPmmi' },
    { provider: 'facebook', href: 'https://www.facebook.com/MundoPMMI' },
  ],
  gtm: {
    containerId: process.env.GTM_CONTAINER_ID || 'GTM-WKC3D3X',
    slotPrefix: 'mundo',
  },
  gcse: {
    id: '017383739850048358259:ngawhyv_sgi',
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
    enabled: false,
    directSend: false,
    sendTo: 'info-request@pmmimediagroup.com',
    replyTo: 'info-request@pmmimediagroup.com',
    sendFrom: 'Mundo PMMI <noreply@parameter1.com>',
    logo: 'https://img.mundopmmi.com/files/base/pmmi/mundo/footerLogos_white.png?h=45&auto=format,compress&q=70',
    bgColor: '#000',
  },
};
