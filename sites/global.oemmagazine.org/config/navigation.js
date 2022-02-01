const topics = {
  primary: [
    { href: '/technology', label: 'Technology' },
    { href: '/products', label: 'Products' },
    { href: '/oem-issues', label: 'OEM Issues' },
    { href: '/page/oem-newsletter-mainnav', label: 'Newsletters' },
  ],
  expanded: [],
  secondary: [
    { href: '/page/oem-event-calendar', label: 'Events' },
    { href: '/downloads', label: 'Downloads' },
    { href: '/page/oem-newsletter', label: 'Newsletters', target: '_blank' },
    { href: '/page/magazine', label: 'Magazine' },
    { href: '/leaders', label: 'OEM Partner Leaders' },
    { href: '/videos', label: 'Videos' },
    { href: '/podcasts', label: 'Podcasts' },
  ],
};

const utilities = [
  { href: 'https://pmmi.dragonforms.com/init.do?pk=OEMMagNav&oly_enc_id=@{encrypted_customer_id}@&omedasite=OEMnew', label: 'Subscribe', target: '_blank' },
  { href: 'https://www.pmmimediagroup.com/oem', label: 'Advertise', target: '_blank' },
  { href: 'https://www.pmmimediagroup.com/ppoem/reprints-and-permissions', label: 'Reprints' },
  { href: '/page/oem-about-us', label: 'About' },
  { href: '/page/oem-contact-us', label: 'Contact' },
  { href: 'https://www.pmmimediagroup.com/privacy', label: 'Privacy', target: '_blank' },
  { href: '/page/oem-terms-use', label: 'Terms of Use' },
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
      { href: '/page/oem-about-us', label: 'About' },
      { href: '/page/oem-contact-us', label: 'Contact' },
      { href: 'https://www.pmmimediagroup.com/privacy', label: 'Privacy', target: '_blank' },
      { href: '/page/oem-terms-use', label: 'Terms of Use' },
      { href: 'https://www.pmmimediagroup.com/advertising-terms-conditions', label: 'Advertising Terms & Conditions', target: '_blank' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: [...topics.primary],
    more: [
      ...topics.secondary,
      { href: 'https://pmmi.dragonforms.com/init.do?pk=OEMMagNav&oly_enc_id=@{encrypted_customer_id}@&omedasite=OEMnew', label: 'Subscribe', target: '_blank' },
      { href: 'https://www.pmmimediagroup.com/aw/automation-world', label: 'Advertise', target: '_blank' },
      { href: 'https://www.pmmimediagroup.com/aw/reprints-and-permissions', label: 'Reprints' },
    ],
  },
};
