const subscribe = { href: 'https://pmmi.dragonforms.com/loading.do?pk=HCPMagNav&oly_enc_id=@{encrypted_customer_id}@&omedasite=HCPnew', label: 'Newsletters', target: '_blank' };

const topics = [
  { href: '/machinery-materials', label: 'Machinery & Materials' },
  { href: '/markets', label: 'Markets' },
  { href: '/logistics-distribution', label: 'Logistics & Cold Chain' },
];

const resources = [];

const utilities = [];

const mobileMenu = {
  primary: [...topics],
  secondary: [
    subscribe,
    resources,
  ],
};

const desktopMenu = {
  about: [...utilities],
  sections: [...topics],
  resources: [...resources],
};

module.exports = {
  desktopMenu,
  mobileMenu,
  primary: {
    items: [],
  },
  secondary: {
    items: [...topics],
  },
  tertiary: {
    items: [],
  },
  footer: {
    items: [
      { href: '/page/hcp-about-us', label: 'About Us' },
      { href: 'https://www.pmmimediagroup.com/privacy', label: 'Privacy Policy', target: '_blank' },
      { href: '/page/hcp-terms-use', label: 'Terms of Use' },
      { href: 'https://www.pmmimediagroup.com/advertising-terms-conditions', label: 'Advertising Terms & Conditions', target: '_blank' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: [...topics],
    more: [...utilities],
  },
};
