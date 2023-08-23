const privacyPolicy = require('./privacy-policy');

const topics = [
  { href: '/digital-factory-software', label: 'Digital Factory Software' },
  { href: '/data-analytics', label: 'Data & Analytics' },
  { href: '/connected-workforce', label: 'Connected Workforce' },
  { href: '/manufacturing-metaverse', label: 'Manufacturing Metaverse' },
  { href: '/cybersecurity', label: 'Cybersecurity' },
];

const resources = [
  { href: '/big-data-analytics-data-management', label: 'Big Data Analytics/Data Management' },
  { href: '/iiot-industrial-internet-of-things', label: 'IIoT (Industrial Internet of Things' },
  { href: '/machine-learning-artificial-intelligence', label: 'Machine Learning/Artificial Intelligence' },
  { href: '/cloud-computing', label: 'Cloud Computing' },
  { href: '/virtual-augmented-reality', label: 'Virtual/Augmented Reality' },
  { href: '/simulation-digital-twins', label: 'Simulation/Digital Twins' },
  { href: '/asset-lifecycle-management', label: 'Asset Lifecycle Management' },
  { href: '/predictive-maintenance', label: 'Predictive Maintenance' },
  { href: '/track-and-trace', label: 'Track and Trace' },
];

const utilities = [
  { href: 'https://www.pmmimediagroup.com/pw/packaging-world', label: 'Advertise', target: '_blank' },
  // { href: 'https://www.pmmimediagroup.com/pw/reprints-and-permissions', label: 'Reprints' },
  { href: '/page/cpgnext-about-us', label: 'About' },
  { href: '/page/cpgnext-contact-us', label: 'Contact' },
];

const mobileMenu = {
  primary: [...topics],
  secondary: [
    { href: 'https://cpgnext.dragonforms.com/cpgnlsf?pk=CPG_NL_TopNav', label: 'Subscribe', target: '_blank' },
    ...resources,
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
  middleCol: { items: [...topics] },
  rightCol: { items: [...resources] },
};

module.exports = {
  type: 'navbar-b',
  desktopMenu,
  mobileMenu,
  primary: {
    items: [
      { href: 'https://cpgnext.dragonforms.com/cpgnlsf?pk=CPG_NL_TopNav', label: 'Subscribe', target: '_blank' },
      ...topics,
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
      { href: '/page/cpgnext-terms-use', label: 'Terms of Use' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics,
    more: [
      { href: 'https://cpgnext.dragonforms.com/cpgnlsf?pk=CPG_NL_Footer', label: 'Subscribe', target: '_blank' },
      { href: 'https://www.pmmimediagroup.com/pw/packaging-world', label: 'Advertise', target: '_blank' },
      { href: '/page/cpgnext-contact-us', label: 'Contact' },
    ],
  },
};
