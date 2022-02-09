const subscribe = { href: 'https://mundopmmi.dragonforms.com/perspectivas?pk=MundoSubNav', label: 'SUSCRÍBASE' };

const topics = {
  primary: [
    { href: '/automatizacion', label: 'Automatización' },
    { href: '/empaque', label: 'Empaque' },
    { href: '/procesamiento', label: 'Procesamiento' },
    { href: '/eventos', label: 'Eventos' },
    { href: '/downloads', label: 'Recursos Digitales' },
    { href: '/leaders', label: 'Leaders' },
  ],
  expanded: [
    // { href: 'https://www.abshow.com', label: 'AB Show', target: '_blank' },
  ],
  secondary: [

  ],
};

const resources = [
  { href: '/reader-rigs', label: 'Reader Rigs' },
  { href: '/overdrive-radio', label: 'Overdrive Radio' },
  { href: '/videos', label: 'Videos' },
  { href: '/white-papers', label: 'Whitepapers' },
];

const utilities = [
  subscribe,
  { href: 'https://www.pmmimediagroup.com/pw/mundo-pmmi', label: 'Anuncie', target: '_blank' },
  { href: '/page/contacto', label: 'Contacto' },
  { href: '/page/privacidad', label: 'Privacidad' },
  { href: '/page/condiciones-de-uso', label: 'Condiciones de uso' },
  { href: '/page/terminos-y-condiciones-de-publicidad', label: 'Términos y condiciones de publicidad' },
  { href: '/site-map', label: 'Mapa del sitio web' },
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