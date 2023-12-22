const privacyPolicy = require('./privacy-policy');

const sections = [
  { href: '/transformation-trends', label: 'Transformation Trends' },
  { href: '/data-analytics', label: 'Data & Analytics' },
  { href: '/manufacturing-metaverse', label: 'Manufacturing Metaverse' },
  { href: '/efficiency-sustainability', label: 'Efficiency & Sustainability' },
  { href: '/journeys', label: 'Journeys' },
];

const topics = [
  { href: '/data-analytics/data-management', label: 'Data Management' },
  { href: '/data-analytics/iiot', label: 'IIoT' },
  { href: '/data-analytics/artificial-intelligence-machine-learning', label: 'Artificial Intelligence/Machine Learning' },
  { href: '/transformation-trends/cloud-services', label: 'Cloud Services' },
  { href: '/transformation-trends/e-commerce', label: 'E-commerce' },
  { href: '/transformation-trends/connected-workforce', label: 'Connected Workforce' },
  { href: '/manufacturing-metaverse/virtual-augmented-reality', label: 'Virtual/Augmented Reality' },
  { href: '/manufacturing-metaverse/simulation-digital-twins', label: 'Simulation/Digital Twins' },
  { href: '/efficiency-sustainability/predictive-maintenance', label: 'Predictive Maintenance' },
  { href: '/efficiency-sustainability/track-and-trace', label: 'Track and Trace' },
  { href: '/efficiency-sustainability/oee-asset-management', label: 'OEE/Asset Management' },
  { href: '/efficiency-sustainability/energy-management', label: 'Energy Management' },
  { href: '/efficiency-sustainability/production', label: 'Production' },
  { href: '/efficiency-sustainability/logistics-supply-chain', label: 'Logistics/Supply Chain' },
  { href: '/cybersecurity/remote-access-monitoring', label: 'Remote Access/Monitoring' },
  { href: '/cybersecurity/networking-connectivity', label: 'Networking and Connectivity' },
];

const utilities = [
  // { href: 'https://www.pmmimediagroup.com/pw/packaging-world', label: 'Advertise', target: '_blank' },
  // { href: 'https://www.pmmimediagroup.com/pw/reprints-and-permissions', label: 'Reprints' },
  { href: '/page/cpgnext-about-us', label: 'About' },
  { href: '/page/cpgnext-contact-us', label: 'Contact' },
];

const mobileMenu = {
  primary: [...sections],
  secondary: [
    { href: '/downloads', label: 'Downloads' },
    { href: '/webinars', label: 'Webinars' },
    { href: 'https://cpgnext.dragonforms.com/cpgnlsf?pk=CPG_NL_TopNav', label: 'Subscribe', target: '_blank' },
    ...topics,
    ...utilities,
  ],
};

const desktopMenu = {
  leftCol: {
    items: [
      { href: 'https://cpgnext.dragonforms.com/cpgnlsf?pk=CPG_NL_TopNav', label: 'Subscribe', target: '_blank' },
      ...utilities,
    ],
  },
  middleCol: { items: [...sections] },
  rightCol: { label: 'Topics', items: [...topics] },
  extraCol: { label: 'Resources', items: [{ href: '/downloads', label: 'Downloads' }, { href: '/webinars', label: 'Webinars' }] },
};

const primaryNavigationItems = [
  { href: 'https://cpgnext.dragonforms.com/cpgnlsf?pk=CPG_NL_TopNav', label: 'Subscribe', target: '_blank' },
  ...sections,
  { href: '/webinars', label: 'Webinars' },
];

module.exports = {
  type: 'navbar-b',
  desktopMenu,
  mobileMenu,
  primary: {
    items: primaryNavigationItems,
  },
  tertiary: {
    items: [],
  },
  contexts: [
    {
      when: ['/cybersecurity'],
      secondary: {
        items: [
          { href: '/cybersecurity/networking-connectivity', label: 'Networking and Connectivity' },
          { href: '/cybersecurity/remote-access-monitoring', label: 'Remote access/monitoring' },
        ],
      },
      tertiary: { items: [] },
      primary: { items: primaryNavigationItems },
    },
    {
      when: ['/data-analytics'],
      secondary: {
        items: [
          { href: '/data-analytics/artificial-intelligence-machine-learning', label: 'Artificial Intelligence/Machine Learning' },
          { href: '/data-analytics/data-management', label: 'Data Management' },
          { href: '/data-analytics/iiot', label: 'IIoT' },
        ],
      },
      tertiary: { items: [] },
      primary: { items: primaryNavigationItems },
    },
    {
      when: ['/efficiency-sustainability'],
      secondary: {
        items: [
          { href: '/efficiency-sustainability/energy-management', label: 'Energy Management' },
          { href: '/efficiency-sustainability/logistics-supply-chain', label: 'Logistics/Supply Chain' },
          { href: '/efficiency-sustainability/oee-asset-management', label: 'OEE/Asset Management' },
          { href: '/efficiency-sustainability/predictive-maintenance', label: 'Predictive Maintenance' },
          { href: '/efficiency-sustainability/production', label: 'Production' },
          { href: '/efficiency-sustainability/track-and-trace', label: 'Track and Trace' },
        ],
      },
      tertiary: { items: [] },
      primary: { items: primaryNavigationItems },
    },
    {
      when: ['/manufacturing-metaverse'],
      secondary: {
        items: [
          { href: '/manufacturing-metaverse/simulation-digital-twins', label: 'Simulation/Digital Twins' },
          { href: '/manufacturing-metaverse/virtual-augmented-reality', label: 'Virtual/Augmented Reality' },
        ],
      },
      tertiary: { items: [] },
      primary: { items: primaryNavigationItems },
    },
    {
      when: ['/transformation-trends'],
      secondary: {
        items: [
          { href: '/transformation-trends/cloud-services', label: 'Cloud Services' },
          { href: '/transformation-trends/connected-workforce', label: 'Connected Workforce' },
          { href: '/transformation-trends/e-commerce', label: 'E-commerce' },
        ],
      },
      tertiary: { items: [] },
      primary: { items: primaryNavigationItems },
    },
  ],
  user: {
    items: [],
  },
  footer: {
    items: [
      { href: '/page/cpgnext-about-us', label: 'About Us' },
      privacyPolicy,
      { href: '/page/terms-of-use', label: 'Terms of Use' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics,
    more: [
      { href: 'https://cpgnext.dragonforms.com/cpgnlsf?pk=CPG_NL_Footer', label: 'Subscribe', target: '_blank' },
      // { href: 'https://www.pmmimediagroup.com/pw/packaging-world', label: 'Advertise', target: '_blank' },
      { href: '/page/cpgnext-contact-us', label: 'Contact' },
    ],
  },
};
