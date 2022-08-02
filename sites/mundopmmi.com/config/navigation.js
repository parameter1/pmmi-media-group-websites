const privacyPolicy = require('./privacy-policy');
const subscribe = require('./subscribe');

const topics = [
  { href: '/automatizacion', label: 'Automatización' },
  { href: '/empaque', label: 'Empaque' },
  { href: '/procesamiento', label: 'Procesamiento' },
];

const resources = [];

const utilities = [
  { href: 'https://mundopmmi.dragonforms.com/perspectivas?pk=Mundo_NL_Nav', label: 'Suscríbase', target: '_blank' },
  { href: 'https://www.pmmimediagroup.com/pw/mundo-pmmi', label: 'Anuncie', target: '_blank' },
  { href: '/page/acerca-de-nosotros', label: 'Acerca de nosotros' },
  { href: '/page/contacto', label: 'Contacto' },
];

const mobileMenu = {
  primary: [
    ...topics,
  ],
  secondary: [
    subscribe,
    ...resources,
    ...utilities,
  ],
};

const desktopMenu = {
  leftCol: {
    label: 'Acerca de nosotros',
    items: [...utilities],
  },
  middleCol: {
    label: 'Temas',
    items: [...topics],
  },
  rightCol: {
    label: 'Recursos',
    items: [
      { href: '/eventos', label: 'Eventos' },
      { href: '/leaders', label: 'Líderes' },
      { href: '/videos', label: 'Vídeos' },
      { href: '/downloads', label: 'Recursos Digitales' },
      { href: '/page/newsletterarchive', label: 'Archivo de boletines' },
    ],
  },
};

module.exports = {
  desktopMenu,
  mobileMenu,
  primary: {
    items: [],
  },
  secondary: {
    items: [
      { href: 'https://mundopmmi.dragonforms.com/perspectivas?pk=Mundo_NL_Nav', label: 'Suscríbase', target: '_blank' },
      ...topics,
      { href: '/downloads', label: 'Recursos Digitales' },
      { href: '/leaders', label: 'Líderes' },
    ],
  },
  tertiary: {
    items: [],
  },
  user: {
    items: [],
  },
  footer: {
    items: [
      { href: 'https://www.pmmimediagroup.com/pw/mundo-pmmi', label: 'Anuncie', target: '_blank' },
      privacyPolicy,
      { href: '/page/condiciones-de-uso', label: 'Condiciones de uso' },
      { href: '/page/terminos-y-condiciones-de-publicidad', label: 'Términos y condiciones de publicidad' },
      { href: '/site-map', label: 'Mapa del sitio web' },
    ],
    topics: [...topics],
    more: [
      { href: 'https://mundopmmi.dragonforms.com/perspectivas?pk=Mundo_NL_Nav', label: 'Suscríbase', target: '_blank' },
      { href: 'https://www.pmmimediagroup.com/pw/mundo-pmmi', label: 'Anuncie', target: '_blank' },
      { href: '/page/contacto', label: 'Contacto' },
    ],
  },
};
