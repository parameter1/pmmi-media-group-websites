
const subscribe = { href: 'https://pmmi.dragonforms.com/init.do?pk=OEMMagNav&oly_enc_id=@{encrypted_customer_id}@&omedasite=OEMnew', label: 'Subscribe', target: '_blank' };
const topics = {
  primary: [
    { href: '/machinery', label: 'Machinery' },
    { href: '/design', label: 'Design' },
    { href: '/issues', label: 'Issues' },
    { href: '/page/pw-newsletters-mainnav', label: 'Newsletters' },
    { href: 'https://www.machine.tours', label: 'Machine Tours', target: '_blank' },
  ],
  expanded: [
    // { href: 'https://www.abshow.com', label: 'AB Show', target: '_blank' },
  ],
  secondary: [
    { href: '/newsletters', label: 'Newsletters' },
  ],
};

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
  { href: '/page/pw-about-us', label: 'About' },
  { href: '/page/pw-contact-us', label: 'Contact' },
  { href: 'https://www.pmmimediagroup.com/privacy', label: 'Privacy', target: '_blank' },
  { href: '/page/pw-terms-use', label: 'Terms of Use' },
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
