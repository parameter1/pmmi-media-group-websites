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
  p1events: {
    tenant: 'pmmi',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'healthcarepackaging.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.healthcarepackaging.com/files/base/pmmi/hcp/hcp_logo.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.healthcarepackaging.com/files/base/pmmi/hcp/hcp_logo.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.healthcarepackaging.com/files/base/pmmi/hcp/hcp_logo.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.healthcarepackaging.com/files/base/pmmi/hcp/hcp_logo.png?h=120&auto=format,compress&q=70 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/HealthcarePackaging' },
    { provider: 'twitter', href: 'https://twitter.com/healthcarepkg' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/healthcare-packaging' },
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
  magazines: {
    description: '',
  },
  inquiry: {
    enabled: true,
    directSend: false,
    sendTo: 'info-request@pmmimediagroup.com',
    replyTo: 'info-request@pmmimediagroup.com',
    sendFrom: 'Healthcare Packaging <noreply@baseplatform.io>',
    logo: 'https://img.healthcarepackaging.com/files/base/pmmi/hcp/hcp_logo.png?h=45&auto=format,compress&q=70',
    bgColor: '#000',
  },
};
