const topics = {
  primary: [
    { href: '/products', label: 'Products' },
    { href: '/factory', label: 'Factory' },
    { href: '/process', label: 'Process' },
    { href: '/downloads', label: 'Downloads' },
    { href: '/page/aw-newsletters-mainnav', label: 'Newsletters' },
  ],
  expanded: [],
  secondary: [
    { href: '/page/aw-event-calendar', label: 'Events' },
    { href: '/downloads', label: 'Downloads' },
    { href: '/page/aw-newsletters', label: 'Newsletters' },
    { href: '/page/magazine', label: 'Magazine' },
    { href: '/leaders', label: 'Leaders in Automation' },
    { href: '/videos', label: 'Videos' },
    { href: '/podcasts', label: 'Podcasts' },
    { href: '/webinars', label: 'Webinars' },
  ],
};

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
    { href: 'https://pmmi.dragonforms.com/loading.do?pk=AWMagNav&oly_enc_id=@{encrypted_customer_id}@&omedasite=PAWnew', label: 'Subscribe', target: '_blank' },
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
    { href: 'https://pmmi.dragonforms.com/loading.do?pk=AWMagNav&oly_enc_id=@{encrypted_customer_id}@&omedasite=PAWnew', label: 'Subscribe', target: '_blank' },
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
      { href: 'https://www.pmmimediagroup.com/pw/mundo-pmmi', label: 'Anuncie', target: '_blank' },
      { href: '/page/contacto', label: 'Contacto' },
      { href: '/page/privacidad', label: 'Privacidad' },
      { href: '/page/condiciones-de-uso', label: 'Condiciones de uso' },
      { href: '/page/terminos-y-condiciones-de-publicidad', label: 'Términos y condiciones de publicidad' },
      { href: '/site-map', label: 'Mapa del sitio web' },
    ],
    topics: topics.primary,
    more: [
      {
        href: 'https://mundopmmi.dragonforms.com/perspectivas?pk=MundoSubNav&r=@{encrypted_customer_id}',
        label: 'Suscríbase',
        target: '_blank',
      },
      ...utilities,
      { href: 'https://pmmi.dragonforms.com/loading.do?pk=AWMagNav&oly_enc_id=@{encrypted_customer_id}@&omedasite=PAWnew', label: 'Subscribe', target: '_blank' },
      { href: 'https://www.pmmimediagroup.com/aw/automation-world', label: 'Advertise', target: '_blank' },
      { href: 'https://www.pmmimediagroup.com/aw/reprints-and-permissions', label: 'Reprints' },
      { href: '/page/aw-about-us', label: 'About' },
      { href: '/page/aw-contact-us', label: 'Contact' },
      { href: 'https://www.pmmimediagroup.com/privacy', label: 'Privacy', target: '_blank' },
      { href: '/page/aw-terms-use', label: 'Terms of Use' },
      { href: 'https://www.pmmimediagroup.com/advertising-terms-conditions', label: 'Advertising Terms & Conditions', target: '_blank' },
    ],
  },
};
