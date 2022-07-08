const defaults = {
  disabled: process.env.DISABLE_IDX_NEWSLETTER_SIGNUP === 'true',
  name: '¡Únase a miles de sus colegas!',
  description: 'Inteligencia de la industria y actualizaciones de <strong>Mundo PMMI</strong> directamente a su bandeja de entrada.',
};

module.exports = {
  pushdown: {
    ...defaults,
    imagePath: 'files/base/pmmi/all/image/static/newsletter-pushdown/mundo-signup-half.png',
  },

  signupBanner: {
    ...defaults,
    name: 'Está invitado',
    description: 'No se pierda la dosis semanal de inteligencia de la industria y noticias con el boletín de <strong>Mundo PMMI</strong>',
    imagePath: 'files/base/pmmi/all/image/static/newsletter-pushdown/mundo-signup-full.png',
  },
  signupBannerLarge: {
    ...defaults,
  },
  signupFooter: {
    ...defaults,
    name: 'mundo PMMI Newsletter',
    description: 'La fuente clave para profesionales de la industria que buscan actualizarse en empaque, noticias, tendencias y mejores prácticas',
  },
  signupBannerStatic: {
    ...defaults,
    name: 'Está invitado',
    description: 'No se pierda la dosis semanal de inteligencia de la industria y noticias con el boletín de <strong>Mundo PMMI</strong>',
  },
};
