const deletedCompanies = require('@pmmi-media-group/package-common/redirects/deleted-companies');

const exec = (from, pattern) => pattern.exec(from);

module.exports = ({ from }) => {
  const digital = exec(from, /\/sites\/default\/files\/digital_edition\/(.*)/);
  if (digital && digital[1]) return { to: `https://digitaleditions.automationworld.com/${digital[1]}` };

  const s3 = exec(from, /\/sites\/default\/files\/(.*)/);
  if (s3 && s3[1]) return { to: `https://s3.us-east-2.amazonaws.com/pmg-production/Migrated+-+DO+NOT+USE/AW/${s3[1]}` };

  return deletedCompanies({ from });
};
