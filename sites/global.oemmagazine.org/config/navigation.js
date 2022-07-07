const privacyPolicy = require('./privacy-policy');
const subscribe = require('./subscribe');

const topics = [
  { href: '/technology', label: 'Technology' },
  { href: '/products', label: 'Products' },
  { href: '/business', label: 'Business' },
];

const resources = [
  { href: '/page/oem-event-calendar', label: 'Events' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/page/oem-newsletter', label: 'Newsletters', target: '_blank' },
  { href: '/page/magazine', label: 'Magazine' },
  { href: '/leaders', label: 'OEM Partner Leaders' },
  { href: '/videos', label: 'Videos' },
  { href: '/podcasts', label: 'Podcasts' },
  { href: '/supplier-news', label: 'Supplier News' },
];

const utilities = [
  { href: 'https://www.pmmimediagroup.com/oem', label: 'Advertise', target: '_blank' },
  { href: 'https://www.pmmimediagroup.com/ppoem/reprints-and-permissions', label: 'Reprints' },
  { href: '/page/oem-about-us', label: 'About' },
  { href: '/page/oem-contact-us', label: 'Contact' },
];

const mobileMenu = {
  primary: [...topics],
  secondary: [
    subscribe,
    ...resources,
    ...utilities,
  ],
};

const desktopMenu = {
  leftCol: {
    items: [
      subscribe,
      ...utilities,
    ],
  },
  middleCol: {
    items: [
      ...topics,
    ],
  },
  rightCol: {
    items: [
      ...resources,
    ],
  },
};

module.exports = {
  desktopMenu,
  mobileMenu,
  primary: {
    items: [],
  },
  secondary: {
    items: [
      subscribe,
      ...topics,
      { href: '/leaders', label: 'Partner Leaders' },
    ],
  },
  tertiary: {
    items: [],
  },
  footer: {
    items: [
      { href: '/page/oem-about-us', label: 'About Us' },
      privacyPolicy,
      { href: '/page/oem-terms-use', label: 'Terms of Use' },
      { href: 'https://www.pmmimediagroup.com/advertising-terms-conditions', label: 'Advertising Terms & Conditions', target: '_blank' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: [...topics],
    more: [
      subscribe,
      { href: 'https://www.pmmimediagroup.com/oem', label: 'Advertise', target: '_blank' },
      { href: '/page/oem-contact-us', label: 'Contact' },
    ],
  },
};
