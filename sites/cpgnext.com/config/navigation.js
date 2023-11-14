const privacyPolicy = require('./privacy-policy');

const sections = [
  { href: '/transformation-trends', label: 'Transformation Trends' },
  { href: '/data-analytics', label: 'Data & Analytics' },
  { href: '/manufacturing-metaverse', label: 'Manufacturing Metaverse' },
  { href: '/efficiency-sustainability', label: 'Efficiency & Sustainbility' },
  { href: '/journeys', label: 'Journeys' },
];

const topics = [
  { href: '/data-analytics/data-management', label: 'Data Management' },
  { href: '/data-analytics/iiot', label: 'IIoT' },
  { href: '/data-analytics/artificial-intelligence-machine-learning', label: 'Artificial Intelligence/Machine Learning' },
  { href: '/transformation-trends/cloud-services', label: 'Cloud Services' },
  { href: '/manufacturing-metaverse/virtual-augmented-reality', label: 'Virtual/Augmented Reality' },
  { href: '/manufacturing-metaverse/simulation-digital-twins', label: 'Simulation/Digital Twins' },
  { href: '/efficiency-sustainability/predictive-maintenance', label: 'Predictive Maintenance' },
  { href: '/efficiency-sustainability/track-and-trace', label: 'Track and Trace' },
  { href: '/efficiency-sustainability/oee-asset-management', label: 'OEE/Asset Management' },
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
};

module.exports = {
  type: 'navbar-b',
  desktopMenu,
  mobileMenu,
  primary: {
    items: [
      { href: 'https://cpgnext.dragonforms.com/cpgnlsf?pk=CPG_NL_TopNav', label: 'Subscribe', target: '_blank' },
      ...sections,
      // { href: '/leaders', label: 'Leaders' },
      // { href: '/downloads', label: 'Downloads' },
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
