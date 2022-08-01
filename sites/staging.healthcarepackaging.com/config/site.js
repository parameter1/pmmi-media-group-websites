const sharedInquiryConfig = require('@pmmi-media-group/package-shared/config/inquiry');
const navigation = require('./navigation');
const leaders = require('./leaders');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const omeda = require('./omeda');
const gam = require('./gam');
const search = require('./search');

module.exports = {
  leaders,
  navigation,
  nativeX,
  identityX,
  omeda,
  gam,
  search,
  company: 'PMMI Media Group',
  p1events: {
    tenant: 'pmmi',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'healthcarepackaging.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.healthcarepackaging.com/files/base/pmmi/hcp/hcp_logo.png?h=45&auto=format,compress',
      srcset: [
        'https://img.healthcarepackaging.com/files/base/pmmi/hcp/hcp_logo.png?h=90&auto=format,compress 2x',
      ],
    },
    footer: {
      src: 'https://img.healthcarepackaging.com/files/base/pmmi/hcp/hcp_logo.png?h=60&auto=format,compress',
      srcset: [
        'https://img.healthcarepackaging.com/files/base/pmmi/hcp/hcp_logo.png?h=120&auto=format,compress 2x',
      ],
    },
    printContent: {
      src: 'https://img.healthcarepackaging.com/files/base/pmmi/hcp/hcp_logo_black.png?h=45&auto=format,compress',
      srcset: [
        'https://img.healthcarepackaging.com/files/base/pmmi/hcp/hcp_logo_black.png?h=90&auto=format,compress 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/HealthcarePackaging' },
    { provider: 'twitter', href: 'https://twitter.com/healthcarepkg' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/healthcare-packaging' },
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
};
