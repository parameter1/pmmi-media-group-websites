const defaults = {
  disabled: process.env.DISABLE_IDX_NEWSLETTER_SIGNUP === 'true',
  name: 'Join the CPG Next community!',
  description: 'The latest in manufacturing digitalization from <i>CPG Next</i> delivered to your inbox.',
};

module.exports = {
  pushdown: {
    ...defaults,
    imagePath: 'files/base/pmmi/all/image/static/newsletter-pushdown/pw-iphone-Cropped.png',
  },

  signupBanner: {
    ...defaults,
    name: 'Stay Connected!',
    description: 'Receive the most pertinent CPG digitalization and cybersecurity updates with <i>CPG Next’s</i> newsletter.',
    imagePath: 'files/base/pmmi/all/image/static/newsletter-pushdown/pw-iphone.png',
  },
  signupBannerLarge: {
    ...defaults,
  },
  signupFooter: {
    ...defaults,
    description: 'Receive the most pertinent CPG digitalization and cybersecurity updates with <i>CPG Next’s</i> newsletter.',
  },
  signupBannerStatic: {
    ...defaults,
    name: 'Stay Connected',
    description: 'Receive the most pertinent CPG digitalization and cybersecurity updates with <i>CPG Next’s</i> newsletter.',
  },
};
