const privacyPolicy = require('./privacy-policy');
const subscribe = require('./subscribe');

const topics = [
  { href: '/machinery-materials', label: 'Machinery & Materials' },
  { href: '/logistics-distribution', label: 'Logistics & Cold Chain' },
];

const utilities = [
  { href: 'https://www.pmmimediagroup.com/hcp/healthcare-packaging', label: 'Advertise', target: '_blank' },
  { href: 'https://www.pmmimediagroup.com/hcp/reprints-and-permissions', label: 'Reprints' },
  { href: '/page/hcp-about-us', label: 'About' },
  { href: '/page/hcp-contact-us', label: 'Contact' },
];

const mobileMenu = {
  primary: [
    ...topics,
  ],
  secondary: [
    subscribe,
    { href: '/events', label: 'Events' },
    { href: '/downloads', label: 'Downloads' },
    { href: '/page/hcp-newsletters', label: 'Newsletters' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/leaders', label: 'Premier Suppliers' },
    { href: '/videos', label: 'Videos' },
    { href: '/podcasts', label: 'Podcasts' },
    { href: 'https://www.pmmi.org/hall-of-fame', label: 'Hall of Fame', target: '_blank' },
    { href: '/webinars', label: 'Webinars' },
    { href: '/supplier-news', label: 'Supplier News' },
    // { href: '/page/digital-editions', label: 'Digital,
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
      { href: '/news', label: 'News' },
    ],
  },
  rightCol: {
    items: [
      { href: '/events', label: 'Events' },
      { href: '/downloads', label: 'Downloads' },
      { href: '/page/hcp-newsletters', label: 'Newsletters' },
      { href: '/page/magazine', label: 'Magazine' },
      { href: '/leaders', label: 'Premier Suppliers' },
      { href: '/videos', label: 'Videos' },
      { href: '/podcasts', label: 'Podcasts' },
      { href: 'https://www.pmmi.org/hall-of-fame', label: 'Hall of Fame', target: '_blank' },
      { href: '/webinars', label: 'Webinars' },
      { href: '/supplier-news', label: 'Supplier News' },
      { href: 'https://www.pmmi.org/workforce-development/education-partners', label: 'Education', target: '_blank' },
      // { href: '/page/digital-editions', label: 'Digital
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
      { href: '/machinery-materials', label: 'Machinery & Materials' },
      { href: '/webinars', label: 'Webinars' },
      { href: '/leaders', label: 'Suppliers' },
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
      { href: '/page/hcp-about-us', label: 'About Us' },
      privacyPolicy,
      { href: '/page/terms-of-use', label: 'Terms of Use' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: [
      ...topics,
      { href: '/news', label: 'News' },
    ],
    more: [
      subscribe,
      { href: 'https://www.pmmimediagroup.com/hcp/healthcare-packaging', label: 'Advertise', target: '_blank' },
      { href: '/page/hcp-contact-us', label: 'Contact' },
    ],
  },
};
