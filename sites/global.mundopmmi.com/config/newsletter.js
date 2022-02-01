const baseConfig = {
  action: 'https://mundopmmi.dragonforms.com/loading.do',
};

const defaults = {
  name: 'Stay Connected with Automation New & Trends',
  description: 'Get the business tips, industry insights and trending news every owner-operator needs to know in the <span class="newsletter-name">Automation News & Trends</span> newsletter.',
  defaultNewsletter: {
    deploymentTypeId: 20,
    name: 'Automation News & Trends',
    eventCategory: 'Daily Newsletter Subscription',
  },
  newsletters: [
    {
      deploymentTypeId: 20,
      name: 'Automation News & Trends',
      description: 'Automation News & Trends: Description Will Go Here',
      eventCategory: 'Newsletter Subscription',
    },
  ],
  demographic: {},
};

module.exports = {
  // uses inline omeda form
  signupBanner: {
    ...defaults,
    // imagePath: 'files/base/randallreilly/all/image/static/newsletter-pushdown/ovd-full.png',
  },
  pushdown: {
    ...defaults,
    description: 'Join 135,000 owner-operators who get helpful insights and important news delivered straight to their inbox with the <span class="newsletter-name">Overdrive</span> newsletter.',
    // imagePath: 'files/base/randallreilly/all/image/static/newsletter-pushdown/ovd-half.png',
  },

  // links off to seperate omeda dragonform
  signupBannerLarge: {
    ...baseConfig,
    name: 'Stay Connected with Automation New & Trends',
    description: 'Get the business tips, industry insights and trending news every owner-operator needs to know in the <span class="newsletter-name">Automation News & Trends</span> newsletter.',
  },
  signupFooter: {
    ...baseConfig,
    name: 'Stay Connnected wit Automation News & Trends',
    description: 'Get owner-operator news and insights, plus diesel prices and gear reviews — delivered straight to your inbox.',
  },
};
