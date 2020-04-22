const navigation = require('./navigation');
const leaders = require('./leaders');
const nativeX = require('./native-x');

module.exports = {
  leaders,
  navigation,
  nativeX,
  company: 'PMMI Media Group',
  logos: {
    navbar: {
      src: 'https://img.profoodworld.com/files/base/pmmi/pfw/pfw_logo.png?h=45',
      srcset: [
        'https://img.profoodworld.com/files/base/pmmi/pfw/pfw_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.profoodworld.com/files/base/pmmi/pfw/pfw_logo.png?h=60',
      srcset: [
        'https://img.profoodworld.com/files/base/pmmi/pfw/pfw_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'twitter', href: 'https://twitter.com/ProFoodWorld' },
    { provider: 'facebook', href: 'https://www.facebook.com/ProFoodWorld' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/profoodworld' },
  ],
  gtm: {
    containerId: process.env.GTM_CONTAINER_ID || 'GTM-MW8Q9VC',
    slotPrefix: 'pfw',
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
    sendTo: 'chat@pmmimediagroup.com',
    replyTo: 'chat@pmmimediagroup.com',
    sendFrom: 'ProFood World <noreply@baseplatform.io>',
    logo: 'https://img.profoodworld.com/files/base/pmmi/pfw/pfw_logo.png?h=45',
    bgColor: '#000',
  },
};
