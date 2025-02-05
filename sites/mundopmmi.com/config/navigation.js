const privacyPolicy = require('./privacy-policy');
const leaders = require('./leaders');

const topics = [
  { href: '/flexibles', label: 'Flexibles' },
  { href: '/rigidos', label: 'Rígidos' },
  { href: '/automatizacion', label: 'Automatización' },
  { href: '/procesamiento', label: 'Procesamiento' },
  { href: '/empaque-sostenible', label: 'Empaque Sostenible' },
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
      { href: '/seminario-web', label: 'Seminario Web' },
      { href: `/${leaders.alias}`, label: 'Líderes' },
      { href: '/videos', label: 'Vídeos' },
      { href: '/downloads', label: 'Recursos Digitales' },
      { href: '/page/newsletterarchive', label: 'Archivo de boletines' },
      // { href: '/noticias-de-los-proveedores', label: 'Noticias de los proveedores' },
    ],
  },
};

module.exports = {
  type: 'navbar-b',
  desktopMenu,
  mobileMenu,
  primary: {
    items: [
      { href: 'https://mundopmmi.dragonforms.com/perspectivas?pk=Mundo_NL_Nav', label: 'Suscríbase', target: '_blank' },
      ...topics,
      { href: '/eventos', label: 'Eventos' },
    ],
  },
  secondary: {
    items: [
      { href: 'https://mundopmmi.dragonforms.com/perspectivas?pk=Mundo_NL_Nav', label: 'Suscríbase', target: '_blank' },
      ...topics,
      { href: '/eventos', label: 'Eventos' },
      { href: `/${leaders.alias}`, label: 'Líderes' },
    ],
  },
  tertiary: {
    items: [],
  },
  contexts: [
    {
      when: ['/flexibles'],
      secondary: {
        items: [
          { href: '/flexibles/ensacado-embolsado', label: 'Ensacado y embolsado' },
          { href: '/flexibles/envoltura', label: 'Envoltura' },
          { href: '/flexibles/materiales', label: 'Materiales' },
        ],
      },
      tertiary: { items: [] },
      primary: {
        items: [
          { href: 'https://mundopmmi.dragonforms.com/perspectivas?pk=Mundo_NL_Nav', label: 'Suscríbase', target: '_blank' },
          ...topics,
          { href: '/eventos', label: 'Eventos' },
        ],
      },
    },
    {
      when: ['/rigidos'],
      secondary: {
        items: [
          { href: '/rigidos/llenado-tapado-cerrado', label: 'Llenado, tapado y cerrado' },
          { href: '/rigidos/empaques-tapas', label: 'Empaques y tapas' },
        ],
      },
      tertiary: { items: [] },
      primary: {
        items: [
          { href: 'https://mundopmmi.dragonforms.com/perspectivas?pk=Mundo_NL_Nav', label: 'Suscríbase', target: '_blank' },
          ...topics,
          { href: '/eventos', label: 'Eventos' },
        ],
      },
    },
    {
      when: ['/automatizacion'],
      secondary: {
        items: [
          { href: '/automatizacion/controles-componentes-de-maquina', label: 'Controles y Componentes de máquina' },
          { href: '/automatizacion/robotica', label: 'Robótica' },
          { href: '/automatizacion/internet-industrial-de-las-cosas-iiot', label: 'IIoT' },
          { href: '/automatizacion/transformacion-digital', label: 'Transformación digital' },
        ],
      },
      tertiary: { items: [] },
      primary: {
        items: [
          { href: 'https://mundopmmi.dragonforms.com/perspectivas?pk=Mundo_NL_Nav', label: 'Suscríbase', target: '_blank' },
          ...topics,
          { href: '/eventos', label: 'Eventos' },
        ],
      },
    },
    {
      when: ['/procesamiento'],
      secondary: {
        items: [
          { href: '/procesamiento/equipo-de-procesamiento', label: 'Equipo de procesamiento' },
          { href: '/procesamiento/seguridad-alimentaria', label: 'Seguridad alimentaria' },
        ],
      },
      tertiary: { items: [] },
      primary: {
        items: [
          { href: 'https://mundopmmi.dragonforms.com/perspectivas?pk=Mundo_NL_Nav', label: 'Suscríbase', target: '_blank' },
          ...topics,
          { href: '/eventos', label: 'Eventos' },
        ],
      },
    },
    {
      when: ['/empaque-sostenible'],
      secondary: {
        items: [
          { href: '/empaque-sostenible/reciclaje', label: 'Reciclaje' },
          { href: '/empaque-sostenible/reutilizacion-retornabilidad', label: 'Reutilización/Retornabilidad' },
          { href: '/empaque-sostenible/biobasados', label: 'Biobasados' },
        ],
      },
      tertiary: { items: [] },
      primary: {
        items: [
          { href: 'https://mundopmmi.dragonforms.com/perspectivas?pk=Mundo_NL_Nav', label: 'Suscríbase', target: '_blank' },
          ...topics,
          { href: '/eventos', label: 'Eventos' },
        ],
      },
    },
  ],
  user: {
    items: [],
  },
  footer: {
    items: [
      { href: 'https://www.pmmimediagroup.com/pw/mundo-pmmi', label: 'Anuncie', target: '_blank' },
      privacyPolicy,
      { href: '/page/condiciones-de-uso', label: 'Condiciones de uso' },
      { href: '/page/terminos-y-condiciones-de-publicidad', label: 'Términos y condiciones de publicidad' },
      { href: '/site-map', label: 'Mapa del sitio' },
    ],
    topics: [...topics],
    more: [
      { href: 'https://mundopmmi.dragonforms.com/perspectivas?pk=Mundo_NL_Nav', label: 'Suscríbase', target: '_blank' },
      { href: 'https://www.pmmimediagroup.com/pw/mundo-pmmi', label: 'Anuncie', target: '_blank' },
      { href: '/page/contacto', label: 'Contacto' },
    ],
  },
};
