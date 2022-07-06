const privacyPolicy = require('./privacy-policy');
const subscribe = require('./subscribe');

const topics = [
  { href: '/products', label: 'Products' },
  { href: '/factory', label: 'Factory' },
  { href: '/process', label: 'Process' },
];

const utilities = [
  subscribe,
  { href: 'https://www.pmmimediagroup.com/aw/automation-world', label: 'Advertise', target: '_blank' },
  { href: 'https://www.pmmimediagroup.com/aw/reprints-and-permissions', label: 'Reprints' },
  { href: '/page/aw-about-us', label: 'About' },
  { href: '/page/aw-contact-us', label: 'Contact' },
];

const mobileMenu = {
  primary: [
    ...topics,
    { href: '/leaders', label: 'Leaders in Automation' },
    { href: '/downloads', label: 'Downloads' },
  ],
  secondary: [
    subscribe,
    { href: '/page/aw-event-calendar', label: 'Events' },
    { href: '/page/aw-newsletters', label: 'Newsletters' },
    { href: '/page/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/podcasts', label: 'Podcasts' },
    { href: '/webinars', label: 'Webinars' },
    ...utilities,
  ],
};

const desktopMenu = {
  leftCol: {
    items: [
      subscribe,
      { href: 'https://www.pmmimediagroup.com/aw/automation-world', label: 'Advertise', target: '_blank' },
      { href: 'https://www.pmmimediagroup.com/aw/reprints-and-permissions', label: 'Reprints' },
      { href: '/page/aw-about-us', label: 'About' },
    ],
  },
  middleCol: { items: [...topics] },
  rightCol: {
    items: [
      { href: '/page/aw-event-calendar', label: 'Events' },
      { href: '/downloads', label: 'Downloads' },
      { href: '/page/aw-newsletters', label: 'Newsletters' },
      { href: '/page/magazine', label: 'Magazine' },
      { href: '/leaders', label: 'Leaders in Automation' },
      { href: '/videos', label: 'Videos' },
      { href: '/podcasts', label: 'Podcasts' },
      { href: '/webinars', label: 'Webinars' },
    ],
  },
};

module.exports = {
  desktopMenu,
  mobileMenu,
  secondary: {
    items: [
      subscribe,
      ...topics,
      { href: '/leaders', label: 'Leaders' },
      { href: '/downloads', label: 'Downloads' },
    ],
  },
  tertiary: {
    items: [],
  },
  user: {
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
      subscribe,
      { href: 'https://www.pmmimediagroup.com/aw/automation-world', label: 'Advertise', target: '_blank' },
    ],
  },
};
