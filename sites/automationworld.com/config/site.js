const sponsoredSearchNav = require('../../../packages/common/components/blocks/sponsored-search-nav');
const navigation = require('./navigation');
const leaders = require('./leaders');

const sponsoredSearch = {
  enabled: process.env.SPONSORED_SEARCH_ENABLED || false,
  navImage: 'https://img.automationworld.com/files/base/pmmi/all/PROFINET-white.png',
  blockImage: 'https://img.automationworld.com/files/base/pmmi/all/PROFINET-rgb.png',
};

if (sponsoredSearch.enabled) {
  const label = sponsoredSearchNav.renderToString({ image: sponsoredSearch.navImage });
  navigation.tertiary.items[0] = { href: '/search', label };
}

module.exports = {
  navigation,
  leaders,
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
    containerId: 'GTM-NM2MBTG',
    slotPrefix: 'aw',
  },
  wufoo: {
    userName: 'pmmimediagroup',
  },
  magazines: {
    description: '',
  },
  sponsoredSearch,
};
