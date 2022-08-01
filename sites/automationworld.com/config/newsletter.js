const defaults = {
  disabled: process.env.DISABLE_IDX_NEWSLETTER_SIGNUP === 'true',
  name: 'Join thousands of your peers!',
  description: 'Automation intelligence and updates from <strong>Automation World</strong> delivered to your inbox.',
};

module.exports = {
  pushdown: {
    ...defaults,
    imagePath: 'files/base/pmmi/all/image/static/newsletter-pushdown/aw-iphone-Cropped.png',
  },

  signupBanner: {
    name: 'You’re Invited',
    description: 'Don’t miss your weekly dose of automation intelligence and news with <strong>Automation World’s</strong> e-newsletter.',
    imagePath: 'files/base/pmmi/all/image/static/newsletter-pushdown/aw-iphone.png',
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
