const subscribe = { href: 'https://mundopmmi.dragonforms.com/perspectivas?pk=MundoSubNav&r=@{encrypted_customer_id}', label: 'Suscríbase', target: '_blank' };

const topics = [
  { href: '/automatizacion', label: 'Automatización' },
  { href: '/empaque', label: 'Empaque' },
  { href: '/procesamiento', label: 'Procesamiento' },
];

const resources = [];

const utilities = [];

const mobileMenu = {
  primary: [...topics],
  secondary: [
    subscribe,
    resources,
  ],
};

const desktopMenu = {
  about: [...utilities],
  sections: [...topics],
  resources: [...resources],
};

module.exports = {
  desktopMenu,
  mobileMenu,
  primary: {
    items: [],
  },
  secondary: {
    items: [...topics],
  },
  tertiary: {
    items: [],
  },
  footer: {
    items: [
      { href: 'https://www.pmmimediagroup.com/pw/mundo-pmmi', label: 'Anuncie', target: '_blank' },
      { href: '/page/privacidad', label: 'Privacidad' },
      { href: '/page/condiciones-de-uso', label: 'Condiciones de uso' },
      { href: '/page/terminos-y-condiciones-de-publicidad', label: 'Términos y condiciones de publicidad' },
      { href: '/site-map', label: 'Mapa del sitio web' },
    ],
    topics: [...topics],
    more: [...utilities],
  },
};
