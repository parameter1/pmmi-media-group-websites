
const subscribe = { href: 'https://pmmi.dragonforms.com/init.do?pk=OEMMagNav&oly_enc_id=@{encrypted_customer_id}@&omedasite=OEMnew', label: 'Subscribe', target: '_blank' };

const topics = [
  { href: '/machinery', label: 'Machinery' },
  { href: '/design', label: 'Design' },
  { href: '/issues', label: 'Issues' },
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
  secondary: {
    items: [...topics],
  },
  tertiary: {
    items: [],
  },
  footer: {
    items: [
      { href: '/page/pw-about-us', label: 'About Us' },
      { href: 'https://www.pmmimediagroup.com/privacy', label: 'Privacy Policy', target: '_blank' },
      { href: '/page/pw-terms-use', label: 'Terms of Use' },
      { href: 'https://www.pmmimediagroup.com/advertising-terms-conditions', label: 'Advertising Terms & Conditions', target: '_blank' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: [...topics],
    more: [...utilities],
  },
};
