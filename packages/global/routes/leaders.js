const allSections = require('@pmmi-media-group/package-theme-monorail-leaders/routes/all-sections');
const contentForSection = require('@pmmi-media-group/package-theme-monorail-leaders/routes/content-for-section');
const leaderById = require('@pmmi-media-group/package-theme-monorail-leaders/routes/leader-by-id');
const sectionsFromContent = require('@pmmi-media-group/package-theme-monorail-leaders/routes/sections-from-content');
const sectionsFromIds = require('@pmmi-media-group/package-theme-monorail-leaders/routes/sections-from-ids');

module.exports = (app) => {
  allSections(app);
  contentForSection(app);
  leaderById(app);
  sectionsFromContent(app);
  sectionsFromIds(app);
};
