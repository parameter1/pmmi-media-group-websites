const baseConfig = {
  action: 'https://mundopmmi.dragonforms.com/loading.do',
  hiddenInputs: [
    { name: 'omedasite', value: 'perspectivas' },
  ],
};

const defaults = {
  name: 'Mundo Perspectivas Newsletter',
  description: 'Keep up-to-date on healthcare packaging news, insights and analysis direct from our editors!',
  defaultNewsletter: {
    deploymentTypeId: 25,
    name: 'Mundo Perspectivas  Newsletter',
    eventCategory: 'Mundo Perspectivas  Newsletter Subscription',
  },
  newsletters: [],
  demographic: {
    id: 108,
    label: 'Your primary Industry',
    values: [
      { id: 885, label: 'Aerospace, aircraft and defense products' },
      { id: 878, label: 'All Other Machinery' },
      { id: 890, label: 'Alternative Energy (Wind, hydro, solar, and bio fu' },
      { id: 896, label: 'Automation Supplier' },
      { id: 879, label: 'Automotive, truck, rail and marine transportation' },
      { id: 887, label: 'Chemical' },
      { id: 884, label: 'Communication devices and equipment' },
      { id: 883, label: 'Computers and related equipment, electronics' },
      { id: 893, label: 'Consumer Packaged Goods (other than Food/Beverage)' },
      { id: 889, label: 'Electrical Utilities/Power Generation' },
      { id: 892, label: 'Food and Beverage' },
      { id: 882, label: 'Instrumentation, control, and measurement products' },
      { id: 894, label: 'Life Sciences' },
      { id: 881, label: 'Medical equipment and devices' },
      { id: 877, label: 'Metals, primary and fabricated' },
      { id: 880, label: 'Off-highway equip: Const, agric, mining, etc.' },
      { id: 886, label: 'Oil and gas including LNG' },
      { id: 876, label: 'Packaging, Printing, & Converting Machinery' },
      { id: 891, label: 'Paper, Wood and Allied products' },
      { id: 895, label: 'Plastics and rubber products' },
      { id: 2992, label: 'System integration/panel builder/consultant' },
      { id: 888, label: 'Water and wastewater' },
      { id: 897, label: 'Other' },
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
    description: 'Join ###,### healthcare packaging profesionals who get helpful insights and important news delivered straight to their inbox with the <span class="newsletter-name">Healthcare Packaging</span> newsletter.',
    imagePath: 'files/base/pmmi/all/image/static/newsletter-pushdown/pmmi-half.png',
  },

  // links off to seperate omeda dragonform
  signupBannerLarge: {
    ...baseConfig,
    name: 'News Insights Newsletter',
    description: 'Keep up-to-date on healthcare packaging news, insights and analysis direct from our editors!',
  },
  signupFooter: {
    ...baseConfig,
    name: 'News Insights Newsletter',
    description: 'Keep up-to-date on healthcare packaging news, insights and analysis direct from our editors!',
  },
};
