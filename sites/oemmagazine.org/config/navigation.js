const privacyPolicy = require('./privacy-policy');
const subscribe = require('./subscribe');
const leaders = require('./leaders');

const topics = [
  { href: '/engineering', label: 'Engineering' },
  { href: '/business', label: 'Business' },
  { href: '/pmmi-news', label: 'PMMI News' },
];

const resources = [
  { href: '/downloads', label: 'Downloads' },
  { href: '/events', label: 'Events' },
  { href: '/magazine', label: 'Magazine' },
  { href: '/page/oem-newsletter', label: 'Newsletters', target: '_blank' },
  { href: '/podcasts', label: 'Podcasts' },
  { href: '/researched-lists', label: 'Researched Lists' },
  { href: '/videos', label: 'Videos' },
  { href: '/webinars', label: 'Webinars' },
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
  extraCol: {
    label: 'Extras',
    items: [
      { href: 'https://www.pmmi.org/workforce-development/education-partners', label: 'Education', target: '_blank' },
      { href: `/${leaders.alias}`, label: 'OEM Partner Leaders' },
      { href: '/supplier-news', label: 'Supplier News' },
      { href: '/WomenInPackaging', label: 'Women in Packaging' },
    ],
  },
};

const primaryNavigationItems = [
  subscribe,
  ...topics,
  { href: `/${leaders.alias}`, label: 'Partner Leaders' },
  { href: '/downloads', label: 'Downloads' },
];

module.exports = {
  type: 'navbar-b',
  desktopMenu,
  mobileMenu,
  primary: {
    items: primaryNavigationItems,
  },
  secondary: {
    items: [],
  },
  tertiary: {
    items: [],
  },
  contexts: [
    {
      when: ['/engineering'],
      secondary: {
        items: [
          { href: '/engineering/machine-design', label: 'Machine Design' },
          { href: '/engineering/automation', label: 'Automation' },
        ],
      },
      tertiary: { items: [] },
      primary: { items: primaryNavigationItems },
    },
    {
      when: ['/business'],
      secondary: {
        items: [
          { href: '/business/oem-profiles', label: 'OEM Profiles' },
          { href: '/business/management', label: 'Management' },
          { href: '/business/sales-marketing', label: 'Sales & Marketing' },
          { href: '/business/operations-it', label: 'Operations & IT' },
          { href: '/business/workforce', label: 'Workforce' },
          { href: '/business/esg', label: 'ESG' },
        ],
      },
      tertiary: { items: [] },
      primary: { items: primaryNavigationItems },
    },
    {
      when: ['/pmmi-news'],
      secondary: {
        items: [
          { href: '/pmmi-news/business-intelligence', label: 'Business Intelligence' },
          { href: '/pmmi-news/PACKEXPO', label: 'PACK EXPO' },
          { href: '/pmmi-news/opx-leadership-network', label: 'OpX Leadership Network' },
          { href: '/pmmi-news/max-member-forums', label: 'Max Member Forums' },
          { href: '/pmmi-news/ppwln', label: 'PPWLN' },
        ],
      },
      tertiary: { items: [] },
      primary: { items: primaryNavigationItems },
    },
  ],
  user: {
    items: [],
  },
  footer: {
    items: [
      { href: '/page/oem-about-us', label: 'About Us' },
      privacyPolicy,
      { href: '/page/terms-of-use', label: 'Terms of Use' },
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
