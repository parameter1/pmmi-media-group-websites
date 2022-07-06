const sharedInquiryConfig = require('@pmmi-media-group/package-global/config/inquiry');
const navigation = require('./navigation');
const leaders = require('./leaders');
const magazine = require('./magazine');
const nativeX = require('./native-x');
const newsletter = require('./newsletter');
const identityX = require('./identity-x');
const omeda = require('./omeda');
const gam = require('./gam');
const search = require('./search');
const subscribe = require('./subscribe');

module.exports = {
  leaders,
  magazine,
  navigation,
  nativeX,
  identityX,
  idxNavItems: {
    enable: true,
  },
  omeda,
  newsletter,
  gam,
  search,
  subscribe,
  company: 'PMMI Media Group',
  copyrightNotice: 'Todos los derechos reservados.',
  p1events: {
    tenant: 'pmmi',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'www.mundopmmi.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.mundopmmi.com/files/base/pmmi/mundo/MundoPMMI_logo_black_notag.png?h=45&auto=format,compress',
      srcset: [
        'https://img.mundopmmi.com/files/base/pmmi/mundo/MundoPMMI_logo_black_notag.png?h=45&auto=format,compress&dpr=2 2x',
      ],
    },
    footer: {
      src: 'https://img.mundopmmi.com/files/base/pmmi/mundo/footerLogos_white.png?h=35&auto=format,compress',
      srcset: [
        'https://img.mundopmmi.com/files/base/pmmi/mundo/footerLogos_white.png?h=35&auto=format,compress&dpr=2 2x',
      ],
    },
    printContent: {
      src: 'https://img.mundopmmi.com/files/base/pmmi/mundo/MundoPMMI_logo_black_notag.png?h=80&auto=format,compress',
      srcset: [
        'https://img.mundopmmi.com/files/base/pmmi/mundo/MundoPMMI_logo_black_notag.png?h=80&auto=format,compress&dpr=2 2x',
      ],
    },
    corporate: {
      alt: 'PMMI Media Group Logo',
      href: 'https://www.pmmimediagroup.com',
      src: 'https://img.mundopmmi.com/files/base/pmmi/all/image/static/pmmi-logo.png?h=50&auto=format,compress',
      srcset: [
        'https://img.mundopmmi.com/files/base/pmmi/all/image/static/pmmi-logo.png?h=50&auto=format,compress&dpr=2 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/mundo-pmmi' },
    { provider: 'twitter', href: 'https://twitter.com/MundoPmmi' },
    { provider: 'facebook', href: 'https://www.facebook.com/MundoPMMI' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCM5Ldhqi4SFRIyoGxuJZV3w?utm_source=MundoWebsite&utm_campaign=MundoYouTube' },
  ],
  gtm: {
    containerId: process.env.GTM_CONTAINER_ID || 'GTM-PWZTDXM',
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
    ...sharedInquiryConfig,
    sendFrom: 'Mundo PMMI <noreply@parameter1.com>',
    logo: 'https://img.mundopmmi.com/files/base/pmmi/mundo/footerLogos_white.png?h=45&auto=format,compress',
  },
  lang: 'es',
  productsParams: { alias: 'noticias-de-los-proveedores' },
};
