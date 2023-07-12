const privacyPolicy = require('./privacy-policy');
const subscribe = require('./subscribe');

const topics = [
  { href: '/manufacturing-software', label: 'Manufacturing Software' },
  { href: '/data-governance-collection', label: 'Data Governance/Collection' },
  { href: '/workforce-development', label: 'Workforce Development' },
  { href: '/emerging-technology', label: 'Emerging Technology' },
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
  { href: '/page/pw-about-us', label: 'About' },
  { href: '/page/pw-contact-us', label: 'Contact' },
];

const mobileMenu = {
  primary: [...topics],
  secondary: [
    subscribe,
    ...resources,
    ...utilities,
  ],
};

const desktopMenu = {
  leftCol: {
    items: [
      subscribe,
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
      subscribe,
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
      { href: '/page/pw-about-us', label: 'About Us' },
      privacyPolicy,
      { href: '/page/pw-terms-use', label: 'Terms of Use' },
      { href: 'https://www.pmmimediagroup.com/advertising-terms-conditions', label: 'Advertising Terms & Conditions', target: '_blank' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics,
    more: [
      subscribe,
      { href: 'https://www.pmmimediagroup.com/pw/packaging-world', label: 'Advertise', target: '_blank' },
      { href: '/page/pw-contact-us', label: 'Contact' },
    ],
  },
};
