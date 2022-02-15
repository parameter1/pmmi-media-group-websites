const privacyPolicy = require('./privacy-policy');
const subscribe = require('./subscribe');

const topics = [
  { href: '/products', label: 'Products' },
  { href: '/factory', label: 'Factory' },
  { href: '/process', label: 'Process' },
];

const resources = [];

const utilities = [
  { href: 'https://www.pmmimediagroup.com/aw/automation-world', label: 'Advertise', target: '_blank' },
  { href: '/page/aw-contact-us', label: 'Contact Us' },
  { href: '/page/aw-newsletters-mainnav', label: 'Newsletters' },
];

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
  secondary: {
    items: [...topics],
  },
  tertiary: {
    items: [],
  },
  footer: {
    items: [
      { href: '/page/aw-about-us', label: 'About Us' },
      privacyPolicy,
      { href: '/page/aw-terms-use', label: 'Terms of Use' },
      { href: 'https://www.pmmimediagroup.com/advertising-terms-conditions', label: 'Advertising Terms & Conditions', target: '_blank' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: [...topics],
    more: [
      ...utilities,
    ],
  },
};
