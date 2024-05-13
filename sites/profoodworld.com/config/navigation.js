const privacyPolicy = require('./privacy-policy');
const subscribe = require('./subscribe');

const topics = [
  subscribe,
  { href: '/processing-equipment', label: 'Processing Equipment' },
  { href: '/automation', label: 'Automation' },
  { href: '/food-safety', label: 'Food Safety' },
  { href: '/sustainability', label: 'Sustainability' },
  { href: '/downloads', label: 'Downloads' },
];

const resources = [
  { href: '/downloads', label: 'Downloads' },
  { href: '/events', label: 'Events' },
  { href: '/magazine', label: 'Magazine' },
  { href: '/page/pfw-newsletter', label: 'Newsletters' },
  { href: '/podcasts', label: 'Podcasts' },
  { href: '/quizzes', label: 'Quizzes' },
  { href: '/videos', label: 'Videos' },
  { href: '/webinars', label: 'Webinars' },
];

const utilities = [
  { href: 'https://www.pmmimediagroup.com/pfw/profood-world', label: 'Advertise', target: '_blank' },
  { href: 'https://www.pmmimediagroup.com/pfw/reprints-and-permissions', label: 'Reprints' },
  { href: '/page/pfw-about-us', label: 'About' },
  { href: '/page/pfw-contact-us', label: 'Contact' },
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
  middleCol: {
    items: [
      ...topics,
    ],
  },
  rightCol: {
    items: [
      ...resources,
    ],
  },
  extraCol: {
    label: 'Extras',
    items: [
      { href: 'https://www.pmmi.org/workforce-development/education-partners', label: 'Education', target: '_blank' },
      { href: '/emergingbrands', label: 'Emerging Brands' },
      { href: '/leaders', label: 'Leaders in Processing' },
      { href: '/page/awards-mia', label: 'Manufacturing Awards' },
      { href: 'https://www.opxleadershipnetwork.org', label: 'OpX Leadership Network', target: '_blank' },
      { href: '/supplier-news', label: 'Supplier News' },
      { href: '/page/awards-sema', label: 'Sustainability Awards' },
    ],
  },
};

module.exports = {
  type: 'navbar-b',
  desktopMenu,
  mobileMenu,
  primary: {
    items: topics,
  },
  secondary: {
    items: [],
  },
  tertiary: {
    items: [],
  },
  contexts: [
    {
      when: ['/processing-equipment'],
      secondary: {
        items: [
          { href: '/processing-equipment/dry-processing', label: 'Dry Processing' },
          { href: '/processing-equipment/liquid-processing', label: 'Liquid Processing' },
          { href: '/processing-equipment/heating-cooking', label: 'Heating/Cooking' },
          { href: '/processing-equipment/chilling-freezing', label: 'Chilling/Freezing' },
          { href: '/processing-equipment/processing-instrumentation', label: 'Processing Instrumentation' },
        ],
      },
      tertiary: { items: [] },
      primary: { items: topics },
    },
    {
      when: ['/automation'],
      secondary: {
        items: [
          { href: '/automation/robotics', label: 'Robotics' },
          { href: '/automation/controls', label: 'Controls' },
          { href: '/automation/iiot', label: 'IIoT' },
          { href: '/automation/security', label: 'Security' },
          { href: '/automation/software', label: 'Software' },
          { href: '/automation/workforce', label: 'Workforce' },
        ],
      },
      tertiary: { items: [] },
      primary: { items: topics },
    },
    {
      when: ['/food-safety'],
      secondary: {
        items: [
          { href: '/food-safety/cleaning-and-sanitation', label: 'Cleaning & Sanitation' },
          { href: '/food-safety/regulatory', label: 'Regulatory' },
          { href: '/food-safety/pest-control', label: 'Pest Control' },
          { href: '/food-safety/inspection', label: 'Inspection' },
          { href: '/food-safety/sterilization-pasteurization', label: 'Sterilization/Pasteurization' },
        ],
      },
      tertiary: { items: [] },
      primary: { items: topics },
    },
    {
      when: ['/facilities-design-infrastructure'],
      secondary: {
        items: [
          { href: '/facilities-design-infrastructure/air-handling', label: 'Air Handling' },
          { href: '/facilities-design-infrastructure/floors-drains-walls-doors', label: 'Floors/Drain/Walls/Doors' },
          { href: '/facilities-design-infrastructure/pumps-valves', label: 'Pumps/Valves' },
          { href: '/facilities-design-infrastructure/engine-room', label: 'Engine Room' },
          { href: '/facilities-design-infrastructure/wastewater-treatment', label: 'Wastewater Treatment' },
        ],
      },
      tertiary: { items: [] },
      primary: { items: topics },
    },
  ],
  user: {
    items: [],
  },
  footer: {
    items: [
      { href: '/page/pfw-about-us', label: 'About Us' },
      privacyPolicy,
      { href: '/page/terms-of-use', label: 'Terms of Use' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: [...topics],
    more: [
      subscribe,
      { href: 'https://www.pmmimediagroup.com/pfw/profood-world', label: 'Advertise', target: '_blank' },
      { href: '/page/pfw-contact-us', label: 'Contact' },
    ],
  },
};
