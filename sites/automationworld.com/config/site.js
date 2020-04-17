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
      src: 'https://img.automationworld.com/files/base/pmmi/aw/aw_logo.png?h=45',
      srcset: [
        'https://img.automationworld.com/files/base/pmmi/aw/aw_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.automationworld.com/files/base/pmmi/aw/aw_logo.png?h=60',
      srcset: [
        'https://img.automationworld.com/files/base/pmmi/aw/aw_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/AutomationWorldMag' },
    { provider: 'twitter', href: 'https://www.twitter.com/automationworld' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/automation-world' },
    { provider: 'instagram', href: 'https://www.instagram.com/automation_world' },
  ],
  gtm: {
    containerId: process.env.GTM_CONTAINER_ID || 'GTM-NM2MBTG',
    slotPrefix: 'aw',
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
    sendFrom: 'Automation World <noreply@baseplatform.io>',
    logo: 'https://img.automationworld.com/files/base/pmmi/aw/aw_logo.png?h=45',
    bgColor: '#000',
  },
};
