const topics = {
  primary: [
    { href: '/processing-equipment', label: 'Processing Equipment' },
    { href: '/automation', label: 'Automation' },
    { href: '/food-safety', label: 'Food Safety' },
    { href: '/page/pfw-newsletters-mainnav', label: 'Newsletters' },
    { href: 'https://www.machine.tours', label: 'Machine Tours', target: '_blank' },
  ],
  expanded: [],
  secondary: [
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
  ],
};

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
    { href: 'https://www.pmmimediagroup.com/pfw/profood-world', label: 'Advertise', target: '_blank' },
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
    { href: 'https://www.pmmimediagroup.com/pfw/profood-world', label: 'Advertise', target: '_blank' },
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
      { href: '/page/pfw-about-us', label: 'About' },
      { href: '/page/pfw-contact-us', label: 'Contact' },
      { href: 'https://www.pmmimediagroup.com/privacy', label: 'Privacy', target: '_blank' },
      { href: '/page/pfw-terms-use', label: 'Terms of Use' },
      { href: 'https://www.pmmimediagroup.com/advertising-terms-conditions', label: 'Advertising Terms & Conditions', target: '_blank' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: [...topics.primary],
    more: [
      { href: 'https://pmmi.dragonforms.com/loading.do?pk=PWMagNav&oly_enc_id=@{encrypted_customer_id}@&omedasite=PPWnew', label: 'Subscribe', target: '_blank' },
      ...topics.secondary,
      { href: 'https://pmmi.dragonforms.com/loading.do?pk=PFWMagNav&oly_enc_id=@{encrypted_customer_id}@&omedasite=PPFWnew ', label: 'Subscribe', target: '_blank' },
      { href: 'https://www.pmmimediagroup.com/pfw/profood-world', label: 'Advertise', target: '_blank' },
      { href: 'https://www.pmmimediagroup.com/pfw/reprints-and-permissions', label: 'Reprints' },
      { href: '/page/pfw-about-us', label: 'About' },
      { href: '/page/pfw-contact-us', label: 'Contact' },
      { href: 'https://www.pmmimediagroup.com/privacy', label: 'Privacy', target: '_blank' },
      { href: '/page/pfw-terms-use', label: 'Terms of Use' },
      { href: 'https://www.pmmimediagroup.com/advertising-terms-conditions', label: 'Advertising Terms & Conditions', target: '_blank' },
    ],
  },
};
