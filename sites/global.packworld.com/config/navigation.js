const privacyPolicy = require('./privacy-policy');
const subscribe = require('./subscribe');

const topics = [
  { href: '/machinery', label: 'Machinery' },
  { href: '/design', label: 'Design' },
  { href: '/issues', label: 'News' },
];

const resources = [
  { href: '/page/contract-packaging-magazine', label: 'Contract Manufacturing and Packaging' },
  { href: '/page/pw-event-calendar', label: 'Events' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/page/pw-newsletters', label: 'Newsletters' },
  { href: '/page/magazine', label: 'Magazine' },
  { href: '/leaders', label: 'Leaders in Packaging' },
  { href: '/videos', label: 'Videos' },
  { href: '/podcasts', label: 'Podcasts' },
  { href: '/page/packaging-associations', label: 'Packaging Associations' },
  { href: 'https://www.pmmi.org/hall-of-fame', label: 'Hall of Fame', target: '_blank' },
  { href: '/webinars', label: 'Webinars' },
];

const utilities = [
  { href: 'https://www.pmmimediagroup.com/pw/packaging-world', label: 'Advertise', target: '_blank' },
  { href: 'https://www.pmmimediagroup.com/pw/reprints-and-permissions', label: 'Reprints' },
  { href: '/page/pw-about-us', label: 'About' },
  { href: '/page/pw-contact-us', label: 'Contact' },
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
  middleCol: { items: [...topics] },
  rightCol: { items: [...resources] },
};

module.exports = {
  desktopMenu,
  mobileMenu,
  secondary: {
    items: [
      subscribe,
      ...topics,
      { href: '/leaders', label: 'Leaders' },
    ],
  },
  tertiary: {
    items: [],
  },
  footer: {
    items: [
      { href: '/page/pw-about-us', label: 'About Us' },
      privacyPolicy,
      { href: '/page/pw-terms-use', label: 'Terms of Use' },
      { href: 'https://www.pmmimediagroup.com/advertising-terms-conditions', label: 'Advertising Terms & Conditions', target: '_blank' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: [...topics],
    more: [
      subscribe,
      { href: 'https://www.pmmimediagroup.com/pw/packaging-world', label: 'Advertise', target: '_blank' },
      { href: '/page/pw-contact-us', label: 'Contact' },
    ],
  },
};
