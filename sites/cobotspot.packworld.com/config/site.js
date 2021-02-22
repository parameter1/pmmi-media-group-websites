const navigation = require('./navigation');
const nativeX = require('./native-x');

module.exports = {
  navigation,
  nativeX,
  company: 'PMMI Media Group',
  p1events: {
    tenant: 'pmmi',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'cobotspot.packworld.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.packworld.com/files/base/pmmi/cs/universal-robots-logo-white.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.packworld.com/files/base/pmmi/cs/universal-robots-logo-white.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.packworld.com/files/base/pmmi/cs/universal-robots-logo-white.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.packworld.com/files/base/pmmi/cs/universal-robots-logo-white.png?h=120&auto=format,compress&q=70 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'instagram', href: 'https://www.instagram.com/universalrobots' },
    { provider: 'twitter', href: 'https://www.twitter.com/Universal_Robot' },
    { provider: 'facebook', href: 'https://www.facebook.com/UniversalRobots' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/universal-robots-a-s' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCM09iVHDc416V8qLj-qhcWQ' },
  ],
  gtm: {
    containerId: process.env.GTM_CONTAINER_ID || 'GTM-5D5ZGG5',
    slotPrefix: 'cs',
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
    sendFrom: 'Packaging World <noreply@baseplatform.io>',
    logo: 'https://img.packworld.com/files/base/pmmi/cs/universal-robots-logo-white.png?h=45&auto=format,compress&q=70',
    bgColor: '#000',
  },
  packworld: {
    logos: {
      footer: {
        src: 'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=60&auto=format,compress&q=70',
        srcset: [
          'https://img.packworld.com/files/base/pmmi/pw/pw_logo.png?h=120&auto=format,compress&q=70 2x',
        ],
      },
    },
  },
};
