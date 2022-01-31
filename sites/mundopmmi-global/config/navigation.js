const topics = {
  primary: [
    { href: '/automatizacion', label: 'Automatización' },
    { href: '/empaque', label: 'Empaque' },
    { href: '/procesamiento', label: 'Procesamiento' },
    { href: '/eventos', label: 'Eventos' },
    { href: '/downloads', label: 'Recursos Digitales' },
  ],
  expanded: [],
  secondary: [
    { href: '/reader-rigs', label: 'Reader Rigs' },
    { href: '/overdrive-radio', label: 'Overdrive Radio' },
    { href: '/videos', label: 'Videos' },
    { href: '/white-papers', label: 'Whitepapers' },
  ],
};

const utilities = [
  { href: 'https://www.pmmimediagroup.com/pw/mundo-pmmi', label: 'Anuncie', target: '_blank' },
  { href: '/page/contacto', label: 'Contacto' },
  { href: '/page/privacidad', label: 'Privacidad' },
  { href: '/page/condiciones-de-uso', label: 'Condiciones de uso' },
  { href: '/page/terminos-y-condiciones-de-publicidad', label: 'Términos y condiciones de publicidad' },
  { href: '/site-map', label: 'Mapa del sitio web' },
];

const mobileMenu = {
  primary: [
    {
      href: 'https://mundopmmi.dragonforms.com/perspectivas?pk=MundoSubNav&r=@{encrypted_customer_id}',
      label: 'Suscríbase',
      target: '_blank',
    },
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
    {
      href: 'https://mundopmmi.dragonforms.com/perspectivas?pk=MundoSubNav&r=@{encrypted_customer_id}',
      label: 'Suscríbase',
      target: '_blank',
    },
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
    ],
  },
};
