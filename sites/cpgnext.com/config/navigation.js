const privacyPolicy = require('./privacy-policy');
const subscribe = require('./subscribe');

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
  rightCol: { label: 'Topics', items: [...resources] },
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
