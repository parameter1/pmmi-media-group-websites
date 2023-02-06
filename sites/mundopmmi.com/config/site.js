const sharedInquiryConfig = require('@pmmi-media-group/package-global/config/inquiry');
const gam = require('./gam');
const identityX = require('./identity-x');
const leaders = require('./leaders');
const magazine = require('./magazine');
const nativeX = require('./native-x');
const navigation = require('./navigation');
const newsletter = require('./newsletter');
const omeda = require('./omeda');
const omedaIdentityX = require('./omeda-identity-x');
const search = require('./search');
const subscribe = require('./subscribe');

module.exports = {
  // module configs
  gam,
  identityX,
  idxNavItems: { enable: true },
  leaders,
  magazine,
  nativeX,
  navigation,
  newsletter,
  omeda,
  omedaIdentityX,
  search,
  subscribe,
  // theme configs
  company: 'PMMI Media Group',
  copyrightNotice: 'Todos los derechos reservados.',
  p1events: {
    tenant: 'pmmi',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'www.mundopmmi.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.mundopmmi.com/files/base/pmmi/mundo/Mundo-fullcolor.svg?h=45&auto=format,compress',
      srcset: [
        'https://img.mundopmmi.com/files/base/pmmi/mundo/Mundo-fullcolor.svg?h=45&auto=format,compress&dpr=2 2x',
      ],
      width: '56',
      height: '30',
    },
    footer: {
      src: 'https://img.mundopmmi.com/files/base/pmmi/mundo/footerLogos_white.png?h=35&auto=format,compress',
      srcset: [
        'https://img.mundopmmi.com/files/base/pmmi/mundo/footerLogos_white.png?h=35&auto=format,compress&dpr=2 2x',
      ],
      width: '88',
      height: '35',
    },
    printContent: {
      src: 'https://img.mundopmmi.com/files/base/pmmi/mundo/Mundo-fullcolor.svg?h=80&auto=format,compress',
      srcset: [
        'https://img.mundopmmi.com/files/base/pmmi/mundo/Mundo-fullcolor.svg?h=80&auto=format,compress&dpr=2 2x',
      ],
    },
    corporate: {
      alt: 'PMMI Media Group Logo',
      href: 'https://www.pmmimediagroup.com',
      src: 'https://img.mundopmmi.com/files/base/pmmi/all/image/static/pmmi-logo.png?h=50&auto=format,compress',
      srcset: [
        'https://img.mundopmmi.com/files/base/pmmi/all/image/static/pmmi-logo.png?h=50&auto=format,compress&dpr=2 2x',
      ],
      width: '83',
      height: '40',
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
  completeYourProfileVerbiage: 'Completa tu perfil de Mundo PMMI',
  profileSubmitButtonLabel: 'Enviar',
  linkOffsite: {
    webinar: 'linkUrl',
    event: 'website',
  },
};
