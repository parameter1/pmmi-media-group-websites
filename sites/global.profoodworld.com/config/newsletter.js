const baseConfig = {
  action: 'https://profoodworld.dragonforms.com/loading.do',
  hiddenInputs: [
    { name: 'omedasite', value: 'pfwnlbase' },
  ],
};

const defaults = {
  name: 'Hand Picked Newsletter',
  description: 'Keep up-to-date on Pro Food news, insights and analysis direct from our editors!',
  defaultNewsletter: {
    deploymentTypeId: 363,
    name: 'ProFoodWorld\'s Hand Picked Newsletter',
    eventCategory: 'ProFoodWorld\'s Hand Picked Subscription',
  },
  newsletters: [
    {
      deploymentTypeId: 293,
      name: 'ProFoodWorld\'s Joyces Voice Newsletter',
      eventCategory: 'ProFoodWorld\'s Joyces Voice Newsletter Subscription',
    },
    {
      deploymentTypeId: 31,
      name: 'ProFoodWorld\'s New Issue Alert Newsletter',
      eventCategory: 'ProFoodWorld\'s New Issue Alert Newsletter Subscription',
    },
    {
      deploymentTypeId: 304,
      name: 'ProFoodWorld\'s Processed Newsletter',
      eventCategory: 'ProFoodWorld\'s Processed Newsletter Subscription',
    },
  ],
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
    description: 'Join ###,### pro food world profesionals who get helpful insights and important news delivered straight to their inbox with the <span class="newsletter-name">ProFoodWorld</span> newsletter.',
    imagePath: 'files/base/pmmi/all/image/static/newsletter-pushdown/pmmi-half.png',
  },

  // links off to seperate omeda dragonform
  signupBannerLarge: {
    ...baseConfig,
    name: 'News Insights Newsletter',
    description: 'Keep up-to-date on pro food world news, insights and analysis direct from our editors!',
  },
  signupFooter: {
    ...baseConfig,
    name: 'News Insights Newsletter',
    description: 'Keep up-to-date on pro food world news, insights and analysis direct from our editors!',
  },
};