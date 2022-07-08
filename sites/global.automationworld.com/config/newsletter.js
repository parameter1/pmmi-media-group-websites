const defaults = {
  disabled: process.env.DISABLE_IDX_NEWSLETTER_SIGNUP === 'false',
  name: 'Join thousands of your peers!',
  description: 'Automation intelligence and updates from <strong>Automation World</strong> delivered to your inbox.',
};

module.exports = {
  pushdown: {
    ...defaults,
    imagePath: 'files/base/pmmi/all/image/static/newsletter-pushdown/aw-signup-half.png',
  },

  signupBanner: {
    ...defaults,
    imagePath: 'files/base/pmmi/all/image/static/newsletter-pushdown/aw-signup-full.png',
  },
  signupBannerLarge: {
    ...defaults,
  },
  signupFooter: {
    ...defaults,
    name: 'Automation World Newsletter',
    description: 'The go-to source for automation professionals looking for <strong>breaking news, industry trends and best practices.</strong>',
  },
  signupBannerStatic: {
    ...defaults,
    name: 'Automation World Newsletter',
    description: 'The go-to source for automation professionals looking for <strong>breaking news, industry trends and best practices.</strong>',
  },
};
