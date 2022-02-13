const subscribe = { href: 'https://pmmi.dragonforms.com/loading.do?pk=HCPMagNav&oly_enc_id=@{encrypted_customer_id}@&omedasite=HCPnew', label: 'Newsletters', target: '_blank' };

const topics = {
  primary: [
    { href: '/machinery-materials', label: 'Machinery & Materials' },
    { href: '/markets', label: 'Markets' },
    { href: '/logistics-distribution', label: 'Logistics & Cold Chain' },
    { href: '/leaders', label: 'Leaders' },
  ],
  expanded: [
    // { href: 'https://www.abshow.com', label: 'AB Show', target: '_blank' },
  ],
  secondary: [
    { href: '/machinery-materials', label: 'Machinery & Materials' },
    { href: '/markets', label: 'Markets' },
    { href: '/logistics-distribution', label: 'Logistics & Cold Chain' },
    { href: '/issues', label: 'Issues' },
  ],
};

const resources = [
  { href: '/page/hcp-event-calendar', label: 'Events' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/page/hcp-newsletters', label: 'Newsletters' },
  { href: '/page/magazine', label: 'Magazine' },
  { href: '/leaders', label: 'Premier Suppliers' },
  { href: '/videos', label: 'Videos' },
  { href: '/podcasts', label: 'Podcasts' },
  { href: 'https://www.pmmi.org/hall-of-fame', label: 'Hall of Fame', target: '_blank' },
  { href: '/webinars', label: 'Webinars' },
];

const utilities = [
  { href: '/page/about-us', label: 'About Us' },
  { href: '/page/contact-us', label: 'Contact Us' },
  { href: 'https://www.pmmimediagroup.com/aw/automation-world', label: 'Advertise', target: '_blank' },
  { href: '/page/privacy-policy', label: 'Privacy Policy' },
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
