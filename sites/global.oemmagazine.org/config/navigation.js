const subscribe = { href: 'https://pmmi.dragonforms.com/init.do?pk=OEMMagNav&oly_enc_id=@{encrypted_customer_id}@&omedasite=OEMnew', label: 'Subscribe', target: '_blank' };

const topics = {
  primary: [
    { href: '/technology', label: 'Technology' },
    { href: '/products', label: 'Products' },
    { href: '/oem-issues', label: 'OEM Issues' },
    { href: '/page/oem-newsletter-mainnav', label: 'Newsletters' },
  ],
  expanded: [
    // { href: 'https://www.abshow.com', label: 'AB Show', target: '_blank' },
  ],
  secondary: [

  ],
};

const resources = [
  { href: '/page/oem-event-calendar', label: 'Events' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/page/oem-newsletter', label: 'Newsletters', target: '_blank' },
  { href: '/page/magazine', label: 'Magazine' },
  { href: '/leaders', label: 'OEM Partner Leaders' },
  { href: '/videos', label: 'Videos' },
  { href: '/podcasts', label: 'Podcasts' },
];

const utilities = [
  { href: 'https://pmmi.dragonforms.com/init.do?pk=OEMMagNav&oly_enc_id=@{encrypted_customer_id}@&omedasite=OEMnew', label: 'Subscribe', target: '_blank' },
  { href: 'https://www.pmmimediagroup.com/oem', label: 'Advertise', target: '_blank' },
  { href: 'https://www.pmmimediagroup.com/ppoem/reprints-and-permissions', label: 'Reprints' },
  { href: '/page/oem-about-us', label: 'About' },
  { href: '/page/oem-contact-us', label: 'Contact' },
  { href: 'https://www.pmmimediagroup.com/privacy', label: 'Privacy', target: '_blank' },
  { href: '/page/oem-terms-use', label: 'Terms of Use' },
  { href: 'https://www.pmmimediagroup.com/advertising-terms-conditions', label: 'Advertising Terms & Conditions', target: '_blank' },
  { href: 'https://pmmi.dragonforms.com/init.do?pk=OEMMagNav&oly_enc_id=@{encrypted_customer_id}@&omedasite=OEMnew', label: 'Subscribe', target: '_blank' },
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
