const { isArray } = Array;

module.exports = ({ site }) => {
  const idxConfig = site.get('identityX');
  const enabled = process.env.ENABLE_IDENTITY_X || false;
  if (!enabled) return;
  const navConfig = [
    {
      href: idxConfig.getEndpointFor('login'),
      label: 'Log In',
      when: 'logged-out',
      modifiers: ['user'],
    },
    {
      href: idxConfig.getEndpointFor('profile'),
      label: 'My Profile',
      when: 'logged-in',
      modifiers: ['user'],
    },
    {
      href: idxConfig.getEndpointFor('logout'),
      label: 'Log Out',
      when: 'logged-in',
      modifiers: ['user'],
    },
    {
      href: idxConfig.getEndpointFor('register'),
      label: 'Register',
      when: 'logged-out',
      modifiers: ['user'],
    },
  ];
  // Add Items to tertiary nav
  const tertiaryNav = site.get('navigation.tertiary.items');
  if (isArray(tertiaryNav)) tertiaryNav.unshift(...navConfig);
  // Add Items to menu nav
  const menuNav = site.get('navigation.menu.2.items');
  if (isArray(menuNav)) menuNav.unshift(...navConfig);
};
