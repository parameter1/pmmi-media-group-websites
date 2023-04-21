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
  p1events: {
    tenant: 'pmmi',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'healthcarepackaging.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.healthcarepackaging.com/files/base/pmmi/hcp/hcp-logo.png?h=30&auto=format,compress',
      srcset: [
        'https://img.healthcarepackaging.com/files/base/pmmi/hcp/hcp-logo.png?h=30&auto=format,compress&dpr=2 2x',
      ],
      width: '120',
      height: '30',
    },
    footer: {
      src: 'https://img.healthcarepackaging.com/files/base/pmmi/hcp/hcp_logo.png?h=35&auto=format,compress',
      srcset: [
        'https://img.healthcarepackaging.com/files/base/pmmi/hcp/hcp_logo.png?h=35&auto=format,compress&dpr=2 2x',
      ],
      width: '139',
      height: '35',
    },
    printContent: {
      src: 'https://img.healthcarepackaging.com/files/base/pmmi/hcp/hcp_logo_black.png?h=45&auto=format,compress',
      srcset: [
        'https://img.healthcarepackaging.com/files/base/pmmi/hcp/hcp_logo_black.png?h=45&auto=format,compress&dpr=2 2x',
      ],
    },
    corporate: {
      alt: 'PMMI Media Group Logo',
      href: 'https://www.pmmimediagroup.com',
      src: 'https://img.healthcarepackaging.com/files/base/pmmi/all/image/static/pmmi-logo.png?h=50&auto=format,compress',
      srcset: [
        'https://img.healthcarepackaging.com/files/base/pmmi/all/image/static/pmmi-logo.png?h=50&auto=format,compress&dpr=2 2x',
      ],
      width: '83',
      height: '40',
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/HealthcarePackaging' },
    { provider: 'twitter', href: 'https://twitter.com/healthcarepkg' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/healthcare-packaging-/' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCP5NjADH2XxjuAkyZjRdnAg?utm_source=HCPWebsite&utm_campaign=HCPYouTube' },
  ],
  gtm: {
    containerId: process.env.GTM_CONTAINER_ID || 'GTM-T7LSZ5W',
    slotPrefix: 'hcp',
  },
  gcse: {
    id: '003355913687346718228:67nzwbjjldd',
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
    sendFrom: 'Healthcare Packaging <noreply@parameter1.com>',
    logo: 'https://img.healthcarepackaging.com/files/base/pmmi/hcp/hcp_logo.png?h=45&auto=format,compress',
  },
  linkOffsite: {
    webinar: 'linkUrl',
    event: 'website',
    target: '_blank',
  },
};
