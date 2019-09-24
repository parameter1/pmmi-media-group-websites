const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'PMMI Media Group',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pmmi/all/aw_logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/all/aw_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pmmi/all/aw_logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pmmi/all/aw_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/pages/Automation-World/239807359613' },
    { provider: 'twitter', href: 'https://www.twitter.com/automationworld' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/Automation-World-2063159?gid=2063159&trk=hb_side_g' },
  ],
  gtm: {
    containerId: 'GTM-T9B9PZ2',
  },
  wufoo: {
    userName: 'xxxxx',
  },
  magazines: {
    description: '',
  },
};
