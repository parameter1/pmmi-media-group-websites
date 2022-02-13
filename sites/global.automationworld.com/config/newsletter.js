const baseConfig = {
  action: 'https://automationworld.dragonforms.com/loading.do',
  hiddenInputs: [
    { name: 'omedasite', value: 'awnlblock' },
  ],
};


const defaults = {
  name: 'Automation World Newsletter',
  description: 'Keep up-to-date on automation news, insights and analysis direct from our editors!',
  defaultNewsletter: {
    deploymentTypeId: 299,
    name: 'Automation News Insights Newsletter',
    eventCategory: 'Automation News Insights Newsletter Subscription',
  },
  newsletters: [
    {
      deploymentTypeId: 11,
      name: 'Automation Skills Newsletter',
      eventCategory: 'Automation Skills Newsletter Subscription',
    },
    {
      deploymentTypeId: 19,
      name: 'Automation Factory Automation Newsletter',
      eventCategory: 'Automation Factory Newsletter Subscription',
    },
    {
      deploymentTypeId: 291,
      name: 'Automation Food Bev Pharma Newsletter',
      eventCategory: 'Automation Food Bev Pharma Newsletter Subscription',
    },
    {
      deploymentTypeId: 12,
      name: 'Automation Key Insights Newsletter',
      eventCategory: 'Automation Key Insights Newsletter Subscription',
    },
    {
      deploymentTypeId: 290,
      name: 'Automation Process Automation Newsletter',
      eventCategory: 'Automation Process Automation Newsletter Subscription',
    },
    {
      deploymentTypeId: 303,
      name: 'Automation Product Insights Newsletter',
      eventCategory: 'Automation Product Insights Newsletter Subscription',
    },
    {
      deploymentTypeId: 306,
      name: 'Automation System Integrators Newsletter',
      eventCategory: 'Automation System Integrators Newsletter Subscription',
    },
    {
      deploymentTypeId: 354,
      name: 'Automation The Line-Up Newsletter',
      eventCategory: 'Automation The Line-Up Newsletter Subscription',
    },
    {
      deploymentTypeId: 10,
      name: 'Automation Product Insights Newsletter',
      eventCategory: 'Automation Product Insights Newsletter Subscription',
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
    description: 'Get helpful insights and important news delivered straight to your inbox with the <span class="newsletter-name">Automation World</span> newsletter.',
    imagePath: 'files/base/pmmi/all/image/static/newsletter-pushdown/pmmi-half.png',
    disabled: true,
  },

  // links off to seperate omeda dragonform
  signupBannerLarge: {
    ...baseConfig,
    name: 'Automation World Newsletter',
    description: 'Keep up-to-date on automation news, insights and analysis direct from our editors!',
  },
  signupFooter: {
    ...baseConfig,
    name: 'Automation World Newsletter',
    description: 'Keep up-to-date on automation news, insights and analysis direct from our editors!',
  },
};
