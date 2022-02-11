const subscribe = { href: 'https://www.pmmimediagroup.com/aw/automation-world', label: 'Advertise', target: '_blank' };

const topics = {
  primary: [
    { href: '/products', label: 'Products' },
    { href: '/factory', label: 'Factory' },
    { href: '/process', label: 'Process' },
    { href: '/downloads', label: 'Downloads' },
  ],
  expanded: [
    // { href: 'https://www.abshow.com', label: 'AB Show', target: '_blank' },
  ],
  secondary: [],
};

const resources = [
  { href: '/page/aw-event-calendar', label: 'Events' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/page/aw-newsletters', label: 'Newsletters' },
  { href: '/page/magazine', label: 'Magazine' },
  { href: '/leaders', label: 'Leaders in Automation' },
  { href: '/videos', label: 'Videos' },
  { href: '/podcasts', label: 'Podcasts' },
  { href: '/webinars', label: 'Webinars' },
];

const utilities = [
  { href: 'https://www.pmmimediagroup.com/aw/automation-world', label: 'Advertise', target: '_blank' },
  { href: '/page/aw-about-us', label: 'About' },
  { href: '/page/aw-contact-us', label: 'Contact' },
  { href: 'https://www.pmmimediagroup.com/privacy', label: 'Privacy', target: '_blank' },
  { href: '/page/aw-terms-use', label: 'Terms of Use' },
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
    //   title: 'AB Magazine',
    //   callToAction: 'Subscribe',
    //   image: {
    //     src: 'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/ab/ab-cover-09-21.jpg?auto=format%2Ccompress&fit=crop&h=78&w=85&crop=top',
    //     srcset: [
    //       'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/ab/ab-cover-09-21.jpg?auto=format%2Ccompress&fit=crop&h=78&dpr=2&w=85&crop=top',
    //     ],
    //   },
    //   link: subscribe.href,
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
      { href: '/leaders', label: 'Leaders' },
      // { href: 'https://www.abshow.com', label: 'AB Show', target: '_blank' },
    ],
  },
  tertiary: {
    items: [],
  },
  footer: {
    items: [
      { href: '/page/about-us', label: 'About Us' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: 'https://www.pmmimediagroup.com/aw/automation-world', label: 'Advertise', target: '_blank' },
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: topics.primary,
    more: [
      ...utilities,
      // { href: '/path', label: 'Path' },
    ],
  },
};
