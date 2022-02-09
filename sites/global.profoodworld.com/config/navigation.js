const subscribe = { href: 'https://www.pmmimediagroup.com/pfw/profood-world', label: 'Advertise', target: '_blank' };

const topics = {
  primary: [
    { href: '/processing-equipment', label: 'Processing Equipment' },
    { href: '/automation', label: 'Automation' },
    { href: '/food-safety', label: 'Food Safety' },
    { href: '/page/pfw-newsletters-mainnav', label: 'Newsletters' },
    { href: 'https://www.machine.tours', label: 'Machine Tours', target: '_blank' },
  ],
  expanded: [
    // { href: 'https://www.abshow.com', label: 'AB Show', target: '_blank' },
  ],
  secondary: [

  ],
};

const resources = [
  { href: '/page/pfw-event-calendar', label: 'Events' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/page/pfw-newsletter', label: 'Newsletters' },
  { href: '/page/magazine', label: 'Magazine' },
  { href: '/leaders', label: 'Leaders in Processing' },
  // { href: '/global-250', label: 'Global 250' },
  // { href: '/awards', label: 'Awards' },
  { href: '/videos', label: 'Videos' },
  { href: '/podcasts', label: 'Podcasts' },
  { href: '/webinars', label: 'Webinars' },
  { href: 'https://www.opxleadershipnetwork.org', label: 'OpX Leadership Network', target: '_blank' },
  { href: '/page/awards-sema', label: 'Sustainability Awards' },
  { href: '/page/awards-mia', label: 'Manufacturing Awards' },
  // { href: '/page/digital-editions', label: 'Digital Editions' },
];

const utilities = [
  { href: 'https://www.pmmimediagroup.com/pfw/profood-world', label: 'Advertise', target: '_blank' },
  { href: '/page/pfw-about-us', label: 'About' },
  { href: '/page/pfw-contact-us', label: 'Contact' },
  { href: 'https://www.pmmimediagroup.com/privacy', label: 'Privacy', target: '_blank' },
  { href: '/page/pfw-terms-use', label: 'Terms of Use' },
  { href: 'https://www.pmmimediagroup.com/advertising-terms-conditions', label: 'Advertising Terms & Conditions', target: '_blank' },
  { href: '/site-map', label: 'Site Map' },
];

const mobileMenu = {
  primary: [
    ...topics.primary,
    ...topics.expanded,
  ],
  secondary: [
    ...topics.secondary,
    subscribe,
    resources,
  ],
};

const desktopMenu = {
  about: [...utilities],
  sections: [
    ...topics.primary,
    ...topics.expanded,
    ...topics.secondary,
  ],
  resources: [...resources],
};

module.exports = {
  promos: [
    // {
    //   title: ' Magazine',
    //   callToAction: 'Subscribe',
    //   image: {
    //     src: 'imgPath',
    //     srcset: [
    //       'imgPath',
    //     ],
    //   },
    //   link: link,
    // },
  ],
  desktopMenu,
  mobileMenu,
  primary: {
    items: [],
  },
  secondary: {
    items: [
      ...topics.primary,

    ],
  },
  tertiary: {
    items: [],
  },
  footer: {
    items: [

    ],
    topics: topics.primary,
    more: [
      ...utilities,
      // { href: '/path', label: 'Path' },
    ],
  },
};
