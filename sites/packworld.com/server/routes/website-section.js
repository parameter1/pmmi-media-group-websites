const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const { asyncRoute } = require('@parameter1/base-cms-utils');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/website-section-page');
const leadersFragment = require('@pmmi-media-group/package-global/graphql/fragments/leaders-section');
const emergingBrandsFragment = require('@pmmi-media-group/package-global/graphql/fragments/emerging-brands-section-page');
const webinars = require('@pmmi-media-group/package-global/templates/website-section/webinars');
const events = require('@pmmi-media-group/package-global/templates/website-section/events');
const collections = require('@pmmi-media-group/package-global/templates/website-section/collections');
const withTopStoriesBlock = require('@pmmi-media-group/package-global/templates/website-section/with-top-stories-block');
const superCategory = require('@pmmi-media-group/package-global/templates/website-section/super-category');

const { newsletterState } = require('@pmmi-media-group/package-global/middleware/newsletter-state');

const section = require('../templates/website-section');
const leaders = require('../templates/website-section/leaders');
const description = require('@parameter1/base-cms-marko-web/utils/published-content/description');

module.exports = (app) => {
  app.get('/advancedrecycling', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'Advanced Recycling Content: What You Should Know',
    description: 'Advanced recycling, also known as chemical recycling, is making a name for itself within the recycling space. Check out our curated list of content on this topic so you can learn how this method produces materials that are indistinguishable from virgin plastics. You’ll also read how used plastics are recaptured and remanufactured into new plastics and products -- all through advanced recycling.',
    queryParams: {
      // Advanced Recycling
      includeTaxonomyIds: [3199258],
    },
  })));
  app.get('/reusablepackaging', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'Reusable Packaging: New & Noteworthy Content',
    description: 'In terms of sustainability, reusable and refillable packaging is making a big splash in working to extend the life of common packaging types. Check out our curated list of content on the topic of reusable packaging in markets like food, personal care, and household goods. See which companies are introducing reusable solutions that work toward a circular economy.',
    queryParams: {
      // Reusable Packaging
      includeTaxonomyIds: [3199269],
    },
  })));

  app.get('/machinery/smart-packaging', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'Smart Packaging: New & Noteworthy Content',
    description: 'The stars are aligning on multiple relevant fronts: consumer behavior, legislation, technology, and data management and capacity. This confluence of advancements is slowly but surely unlocking the potential of active, intelligent, connected, and otherwise smart packaging.',
    queryParams: {
      // smart packaging
      includeTaxonomyIds: [3199742],
    },
  })));

  app.get('/packagingrecyclingsummit', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'Packaging Recycling Summit: Event Coverage',
    description: '<i>Packaging World’s</i> annual Packaging Recycling Summit (PRS) brings together brands, retailers, packaging suppliers, reprocessors, and material recovery facilities (MRFs) with a goal of promoting collaboration across the circular supply chain. Check out our content from the conference program that aims to examine all links in the value chain, identifying materials that can and will be recycled, and exploring end-use markets for waste.',
    queryParams: {
      // Packaging Recylcing Summit
      includeTaxonomyIds: [3199350],
    },
  })));

  app.get('/pfas', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'PFAS in Packaging: What You Should Know',
    description: 'Check out our collection of content on the topic of PFAS. Per- and polyfluoroalkyl substances (PFAS) are a diverse group of thousands of chemicals used in hundreds of types of products. Read more about what PFAS is, the regulations surrounding the chemicals, and a look at PFAS-free packaging.',
    queryParams: {
      // pfas, PFAS
      includeTaxonomyIds: [3199281, 3199353],
    },
  })));

  app.get('/casestudies-cartoning', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'A Curated Collection of Case Studies: Cartoning',
    description: 'Are you in the market for cartoning equipment and looking for the latest technology and innovations to streamline your packaging operations? Check out our list of case studies featuring cartoners and the unique solutions that these pieces of equipment bring to the companies mentioned here. Learn how the equipment works, what it’s capable of, and which machine is right for your line.',
    queryName: 'website-scheduled-content',
    queryParams: {
      // Secondary Packaging > Cartoning
      sectionId: 87571,
      includeLabels: ['Case Study'],
    },
  })));

  app.get('/casestudies-casepacking', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'A Curated Collection of Case Studies: Case Packing',
    description: 'Are you in the market for a case packer and looking for the latest technology and innovations to streamline your packaging operations? Check out our list of case studies featuring case packers and the unique solutions that these pieces of equipment bring to the companies mentioned here. Learn how the equipment works, what it’s capable of, and which machine is right for your line.',
    queryName: 'website-scheduled-content',
    queryParams: {
      // Secondary Packaging > Case/Tray Packing
      sectionId: 87573,
      includeLabels: ['Case Study'],
    },
  })));

  app.get('/casestudies-coding/marking', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'A Curated Collection of Case Studies: Coding/Marking',
    description: 'Are you in the market for coding/marking equipment? Want to learn more about the category of equipment and the latest innovations that can help you achieve your packaging goals? Read through our collection of the most recent case studies related to coding, marking, & RFID.',
    queryName: 'website-scheduled-content',
    queryParams: {
      // Coding, Printing & Labeling > Coding & Marking
      sectionId: 87569,
      includeLabels: ['Case Study'],
    },
  })));

  app.get('/casestudies-liquidfilling', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'A Curated Collection of Case Studies: Liquid Filling & Capping',
    description: 'Are you in the market for a liquid filler/capper and looking for the latest technology and innovations to streamline your packaging operations? Check out our list of case studies featuring liquid and viscous fillers and the unique solutions that these pieces of equipment bring to the companies mentioned here. Learn how the equipment works, what they\'re capable of, and which machine is right for your line.',
    queryName: 'website-scheduled-content',
    queryParams: {
      // Leaders (UNIVERSAL TAXONOMY PW) > Machinery > Filling/capping, liquid and viscous
      sectionId: 87073,
      includeLabels: ['Case Study'],
    },
  })));

  app.get('/casestudies-palletizing', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'A Curated Collection of Case Studies: Palletizing',
    description: 'Are you in the market for a palletizer and looking for the latest technology and innovations to streamline your packaging operations? Check out our list of case studies featuring palletizing and depalletizing equipment and the unique solutions that these pieces of equipment bring to the companies mentioned here. Learn how the equipment works, what it’s capable of, and which machine is right for your line.',
    queryName: 'website-scheduled-content',
    queryParams: {
      // Leaders (UNIVERSAL TAXONOMY PW) > Machinery > Palletizing/depalletizing
      sectionId: 87080,
      includeLabels: ['Case Study'],
    },
  })));

  app.get('/paperpackaging', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'Exploring Paper Packaging: A Collection of Case Studies',
    description: 'Read our curated content on the topic of paper/wood/organic packaging. Explore what other brands are doing well, popular use cases for this material type, and success product launches.',
    queryParams: {
      // paper packaging
      includeTaxonomyIds: [3199743],
      includeLabels: ['Case Study'],
    },
  })));

  app.get('/multipacking', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'Multipacking/Shrink Bundling/Banding: Videos & Articles',
    description: 'Do you want the latest news, case studies, and videos on the topic of multipacking, shrink bundling, and banding? Look no further. Check out our collection of content on this equipment type and get informed, inspired, and educated.',
    queryName: 'website-scheduled-content',
    queryParams: {
      // Secondary Packaging > Multipacking
      sectionId: 87572,
      includeContentTypes: ['Article', 'Video'],
    },
  })));

  app.get('/drupa-2024', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'drupa 2024 Report: How Package Printing’s Ongoing Digital Transformation will Impact Brands',
    description: '<p>Thanks to the pandemic, has been eight long years since the last drupa, the world\’s largest paper and plastic printing expo. Packaging, by way of cartonboard, corrugated, labels, and flexible packaging, is increasingly the substrate of choice since traditional print collateral like mailers, catalogs, direct mail, and even some print magazines have moved to digital-only formats. This magazine, of course, is an exception (though digital versions of this article also exist at packworld.com). What\’s clear is that the world has changed significantly since 2016, and an eight-year interval instead of four between today and the previous drupa bring that into sharp relief. Digitalization—the umbrella term for modern businesses\’ ongoing digital transformation—is taking a central role in optimizing time to market and affording more turn-on-a-dime flexibility than ever for brands and CPGs seeking to make packaging changes fast. The ascendancy of AI over the past year and a half, a powerful harbinger of digitalization, was evident in all sorts of nooks and crannies at the show, from mass customization to equipment controls and beyond.</p><p>Digitalization isn\’t the only new trend at drupa. Sustainability has been around for decades, sure, but it has proven to have real cultural staying power and is now fully entrenched in both consumer and corporate mindsets. The explosion of recyclable, monomaterial barrier films—and attendant ways to print on them, make sure they provide shelf life, then collect and recycle them—was also evident on the drupa show floor, especially at the Bobst booth where Sarah Alexander described fascinating collaborations across the value chain. Also, e-commerce and D2C were growing but still nascent trends at the last drupa, in 2016. In 2024, companies like SEE had partnered with digital die-cutting and seaming specialists like Highcon for unique, decorative, sustainable product bracing for the e-comm channel. And Packsize, a corrugated case right-sizing equipment company focused on FC/DC, e-comm, and D2C, partnered with digital printer EFI for mass customization projects and batch-size-one personalized cases to be sent through the e-comm channel.</p><p>Speaking of mass customization, embellishment capabilities from the likes of Scodix and Kurtz have expanded. And a unique high-viscosity ink “3D embellishment” layered printing collaboration between Xaar printheads, Marabu inks, and Kammann digital printers, offer a whole new capability for high-end cosmetics, spirits, and personalization/mass customization projects.</p><p>What follows is a series of conversations held at drupa about digital printing, digitalized packaging asset software, embellishment, e-comm/D2C/FC/DC, all anchored in how the trend will directly impact brand owners and CPGs.</p>',
    queryParams: {
      includeTaxonomyIds: [3199812, 3199813, 3199814, 3199815]
    }
  })))

  app.get('/events', asyncRoute(async (_, res) => res.marko(events, {
    alias: 'events',
    name: 'Events',
    description: 'Connect with industry leaders, gain insights into the latest trends, and experience breakthrough technologies in packaging and processing.',
  })));

  app.get('/webinars', asyncRoute(async (_, res) => res.marko(webinars, {
    alias: 'webinars',
    name: 'Webinars',
    description: 'Packaging webinars cover equipment, machinery, design, materials, sustainability, e-commerce, workforce, regulation, innovation, cannabis, & logistics.',
  })));

  app.get('/:alias(leaders)', newsletterState(), withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));

  app.get('/:alias(WomenInPackaging)', newsletterState(), withWebsiteSection({
    template: withTopStoriesBlock,
    queryFragment,
  }));

  app.get('/:alias(emergingbrands)', newsletterState(), withWebsiteSection({
    template: section,
    queryFragment: emergingBrandsFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', newsletterState(), withWebsiteSection({
    template: superCategory,
    queryFragment,
  }));
};
