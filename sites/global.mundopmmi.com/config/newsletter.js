const baseConfig = {
  action: 'https://mundopmmi.dragonforms.com/loading.do',
  hiddenInputs: [
    { name: 'omedasite', value: 'perspectivas' },
  ],
};

const defaults = {
  name: '{Name} Newsletter',
  description: 'Get helpful insights and important news delivered straight to your inbox with the <span class="newsletter-name">{Name}</span> newsletter.',
  defaultNewsletter: {
    deploymentTypeId: 0,
    name: 'Newsletter Name',
    eventCategory: 'Newsletter Category',
  },
  newsletters: [
    {
      deploymentTypeId: 0,
      name: 'Newsletter Name',
      eventCategory: 'Newsletter Category',
    },
    {
      deploymentTypeId: 0,
      name: 'Newsletter Name',
      eventCategory: 'Newsletter Category',
    },
  ],
  demographic: {
    id: 0,
    label: 'Demographic Question',
    values: [
      { id: 0, label: 'Demographic answer' },
    ],
  },
};

module.exports = {
  // uses inline omeda form
  signupBanner: {
    ...defaults,
    imagePath: 'files/base/pmmi/all/image/static/newsletter-pushdown/pmmi-full.png',
  },
  pushdown: {
    ...defaults,
    description: 'Get helpful insights and important news delivered straight to your inbox with the <span class="newsletter-name">{Name}</span> newsletter.',
    imagePath: 'files/base/pmmi/all/image/static/newsletter-pushdown/pmmi-half.png',
    disabled: true,
  },

  // links off to seperate omeda dragonform
  signupBannerLarge: {
    ...baseConfig,
    name: '{Name} Newsletter',
    description: 'Get helpful insights and important news delivered straight to your inbox.',
  },
  signupFooter: {
    ...baseConfig,
    name: '{Name} Newsletter',
    description: 'Get helpful insights and important news delivered straight to your inbox.',
  },
};
