const privacyPolicy = require('./privacy-policy');
const subscribe = require('./subscribe');
// const leaders = require('./leaders');

const topics = [
  { href: '/sustainable-packaging', label: 'Sustainable Packaging' },
  { href: '/flexibles', label: 'Flexibles' },
  { href: '/rigid', label: 'Rigid' },
  { href: '/coding-printing-labeling', label: 'Coding, Printing & Labeling' },
  { href: '/secondary-packaging', label: 'Secondary Packaging' },
  { href: '/trends', label: 'Trends' },
  { href: '/trends/contract-packaging', label: 'Contract Manufacturing and Packaging' },
  { href: '/downloads', label: 'Downloads' },
];

const resources = [
  { href: '/events', label: 'Events' },
  { href: '/magazine', label: 'Magazine' },
  { href: '/page/pw-newsletters', label: 'Newsletters' },
  { href: '/podcasts', label: 'Podcasts' },
  { href: '/quizzes', label: 'Quizzes' },
  { href: '/researched-lists', label: 'Researched Lists' },
  { href: '/videos', label: 'Videos' },
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
  extraCol: {
    label: 'Extras',
    items: [
      { href: 'https://www.pmmi.org/workforce-development/education-partners', label: 'Education', target: '_blank' },
      { href: 'https://www.pmmi.org/hall-of-fame', label: 'Hall of Fame', target: '_blank' },
      { href: '/leaders', label: 'Leaders in Packaging' },
      { href: '/page/packaging-associations', label: 'Packaging Associations' },
      { href: '/supplier-news', label: 'Supplier News' },
      { href: '/magazine/50370', label: 'Women in Packaging' },
      { href: '/trends/operational-excellence', label: 'Operational Excellence' },
    ],
  },
};

const primaryNavigationItems = [
  subscribe,
  { href: '/sustainable-packaging', label: 'Sustainable Packaging' },
  { href: '/flexibles', label: 'Flexibles' },
  { href: '/rigid', label: 'Rigid' },
  { href: '/coding-printing-labeling', label: 'Coding, Printing & Labeling' },
  { href: '/secondary-packaging', label: 'Secondary Packaging' },
  { href: '/trends', label: 'Trends' },
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
      when: ['/sustainable-packaging'],
      secondary: {
        items: [
          { href: '/sustainable-packaging/recycling', label: 'Recycling' },
          { href: '/sustainable-packaging/bio-based', label: 'Bio-based' },
          { href: '/sustainable-packaging/reusable-returnable', label: 'Reusable/Returnable' },
        ],
      },
      tertiary: { items: [] },
      primary: { items: primaryNavigationItems },
    },
    {
      when: ['/flexibles'],
      secondary: {
        items: [
          { href: '/flexibles/bagging-pouching', label: 'Bagging & Pouching' },
          { href: '/flexibles/wrapping', label: 'Wrapping' },
        ],
      },
      tertiary: { items: [] },
      primary: { items: primaryNavigationItems },
    },
    {
      when: ['/rigid'],
      secondary: {
        items: [
          { href: '/rigid/filling-capping-closing', label: 'Filling, Capping & Closing' },
          { href: '/rigid/containers-closures', label: 'Containers & Closures' },
        ],
      },
      tertiary: { items: [] },
      primary: { items: primaryNavigationItems },
    },
    {
      when: ['/coding-printing-labeling'],
      secondary: {
        items: [
          { href: '/coding-printing-labeling/labeling', label: 'Labeling' },
          { href: '/coding-printing-labeling/coding-marking', label: 'Coding & Marking' },
          { href: '/coding-printing-labeling/package-printing', label: 'Package Printing' },
        ],
      },
      tertiary: { items: [] },
      primary: { items: primaryNavigationItems },
    },
    {
      when: ['/secondary-packaging'],
      secondary: {
        items: [
          { href: '/secondary-packaging/cartoning', label: 'Cartoning' },
          { href: '/secondary-packaging/multipacking', label: 'Multipacking' },
          { href: '/secondary-packaging/case-tray-packing', label: 'Case/Tray Packing' },
          { href: '/secondary-packaging/robotics', label: 'Robotics' },
        ],
      },
      tertiary: { items: [] },
      primary: { items: primaryNavigationItems },
    },
    {
      when: ['/trends'],
      secondary: {
        items: [
          { href: '/trends/contract-packaging', label: 'Contract Packaging' },
          { href: '/trends/logistics-supply-chain', label: 'Logistics/Supply Chain' },
          { href: '/trends/controls-machine-components', label: 'Controls & Machine Components' },
          { href: '/trends/ecommerce-d2c-packaging', label: 'E-commerce/D2C packaging' },
          { href: '/trends/package-design', label: 'Package Design' },
          { href: '/trends/pmmi-news', label: 'PMMI News' },
          { href: '/trends/workforce', label: 'Workforce' },
        ],
      },
      tertiary: { items: [] },
      primary: { items: primaryNavigationItems },
    },
    {
      when: ['/industries'],
      secondary: {
        items: [
          { href: '/industries/beverage', label: 'Beverage' },
          { href: '/industries/food', label: 'Food' },
          { href: '/industries/other-packaged-goods', label: 'Other Packaged Goods' },
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
      { href: '/page/pw-about-us', label: 'About Us' },
      privacyPolicy,
      { href: '/page/terms-of-use', label: 'Terms of Use' },
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
