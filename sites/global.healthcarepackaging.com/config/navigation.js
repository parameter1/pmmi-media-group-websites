const privacyPolicy = require('./privacy-policy');
const subscribe = require('./subscribe');

const topics = [
  { href: '/machinery-materials', label: 'Machinery & Materials' },
  { href: '/markets', label: 'Markets' },
  { href: '/logistics-distribution', label: 'Logistics & Cold Chain' },
];

const resources = [];

const utilities = [];

const mobileMenu = {
  primary: [...topics],
  secondary: [
    subscribe,
    resources,
  ],
};

const desktopMenu = {
  about: [...utilities],
  sections: [...topics],
  resources: [...resources],
};

module.exports = {
  desktopMenu,
  mobileMenu,
  primary: {
    items: [],
  },
  secondary: {
    items: [...topics],
  },
  tertiary: {
    items: [],
  },
  footer: {
    items: [
      { href: '/page/hcp-about-us', label: 'About Us' },
      privacyPolicy,
      { href: '/page/hcp-terms-use', label: 'Terms of Use' },
      { href: 'https://www.pmmimediagroup.com/advertising-terms-conditions', label: 'Advertising Terms & Conditions', target: '_blank' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: [...topics],
    more: [...utilities],
  },
};
