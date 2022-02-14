const subscribe = require('./subscribe');

const topics = [
  { href: '/technology', label: 'Technology' },
  { href: '/products', label: 'Products' },
  { href: '/oem-issues', label: 'OEM Issues' },
  { href: '/page/oem-newsletter-mainnav', label: 'Newsletters' },
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
      { href: '/page/oem-about-us', label: 'About Us' },
      { href: 'https://www.pmmimediagroup.com/privacy', label: 'Privacy Policy', target: '_blank' },
      { href: '/page/oem-terms-use', label: 'Terms of Use' },
      { href: 'https://www.pmmimediagroup.com/advertising-terms-conditions', label: 'Advertising Terms & Conditions', target: '_blank' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: [...topics],
    more: [...utilities],
  },
};
