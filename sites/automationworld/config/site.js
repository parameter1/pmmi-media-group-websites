const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'PMMI Media Group',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pmmi/aw/aw_logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/aw/aw_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pmmi/aw/aw_logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/aw/aw_logo.png?h=120 2x',
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
    containerId: 'GTM-NM2MBTG',
  },
  wufoo: {
    userName: 'pmmimediagroup',
  },
  magazines: {
    description: '',
  },
};
