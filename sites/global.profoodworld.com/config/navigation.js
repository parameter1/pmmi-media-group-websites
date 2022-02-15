const privacyPolicy = require('./privacy-policy');
const subscribe = require('./subscribe');

const topics = [
  { href: '/processing-equipment', label: 'Processing Equipment' },
  { href: '/automation', label: 'Automation' },
  { href: '/food-safety', label: 'Food Safety' },
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
      { href: '/page/pfw-about-us', label: 'About Us' },
      privacyPolicy,
      { href: '/page/pfw-terms-use', label: 'Terms of Use' },
      { href: 'https://www.pmmimediagroup.com/advertising-terms-conditions', label: 'Advertising Terms & Conditions', target: '_blank' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: [...topics],
    more: [...utilities],
  },
};
