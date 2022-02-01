const topics = {
  primary: [
    { href: '/machinery', label: 'Machinery' },
    { href: '/design', label: 'Design' },
    { href: '/issues', label: 'Issues' },
    { href: '/page/pw-newsletters-mainnav', label: 'Newsletters' },
    { href: 'https://www.machine.tours', label: 'Machine Tours', target: '_blank' },
  ],
  expanded: [],
  secondary: [
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
  ],
};

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
    { href: 'https://pmmi.dragonforms.com/init.do?pk=OEMMagNav&oly_enc_id=@{encrypted_customer_id}@&omedasite=OEMnew', label: 'Subscribe', target: '_blank' },
    ...topics.primary,
    ...topics.expanded,
  ],
  secondary: [
    ...topics.secondary,
    { href: '/newsletters', label: 'Newsletters' },
  ],
};

const desktopMenu = {
  about: [
    { href: 'https://pmmi.dragonforms.com/init.do?pk=OEMMagNav&oly_enc_id=@{encrypted_customer_id}@&omedasite=OEMnew', label: 'Subscribe', target: '_blank' },
    ...utilities,
  ],
  sections: [
    ...topics.primary,
    ...topics.expanded,
    ...topics.secondary,
  ],
};


module.exports = {
  desktopMenu,
  mobileMenu,
  primary: {
    items: [],
  },
  secondary: {
    items: [...topics.primary],
  },
  tertiary: {
    items: [],
  },
  footer: {
    items: [
      { href: 'https://www.pmmimediagroup.com/pw/packaging-world', label: 'Advertise', target: '_blank' },
      { href: 'https://www.pmmimediagroup.com/pw/reprints-and-permissions', label: 'Reprints' },
      { href: '/page/pw-about-us', label: 'About' },
      { href: '/page/pw-contact-us', label: 'Contact' },
      { href: 'https://www.pmmimediagroup.com/privacy', label: 'Privacy', target: '_blank' },
      { href: '/page/pw-terms-use', label: 'Terms of Use' },
      { href: 'https://www.pmmimediagroup.com/advertising-terms-conditions', label: 'Advertising Terms & Conditions', target: '_blank' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: [...topics.primary],
    more: [
      { href: 'https://pmmi.dragonforms.com/loading.do?pk=PWMagNav&oly_enc_id=@{encrypted_customer_id}@&omedasite=PPWnew', label: 'Subscribe', target: '_blank' },
      ...topics.secondary,
    ],
  },
};
