const defaults = {
  disabled: process.env.DISABLE_IDX_NEWSLETTER_SIGNUP === 'false',
  name: 'Join thousands of your peers!',
  description: 'Industry intelligence and updates from <strong>muno PMMI</strong> delivered to your inbox.',
};

module.exports = {
  pushdown: {
    ...defaults,
    imagePath: 'files/base/pmmi/all/image/static/newsletter-pushdown/mundo-signup-half.png',
  },

  signupBanner: {
    ...defaults,
    name: 'You\'re Invited!',
    description: 'Don\'t miss your weekly dose of industry intelligence and news with <strong>mundo PMMI\'s</strong> e-newsletter.',
    imagePath: 'files/base/pmmi/all/image/static/newsletter-pushdown/mundo-signup-full.png',
  },
  signupBannerLarge: {
    ...defaults,
  },
  signupFooter: {
    ...defaults,
    name: 'mundo PMMI Newsletter',
    description: 'The go-to source for industry professionals looking for <strong>breaking news, industry trends and best practices.</strong>',
  },
  signupBannerStatic: {
    ...defaults,
    name: 'You\'re Invited!',
    description: 'Don\'t miss your weekly dose of industry intelligence and news with <strong>mundo PMMI\'s</strong> e-newsletter.',
  },
};
