const deletedCompanies = require('@pmmi-media-group/package-common/redirects/deleted-companies');

const exec = (from, pattern) => pattern.exec(from);

module.exports = ({ from }) => {
  const digital = exec(from, /\/sites\/default\/files\/digital_edition\/(.*)/);
  if (digital && digital[1]) return { to: `https://digitaleditions.packworld.com/${digital[1]}` };

  const s3 = exec(from, /\/sites\/default\/files\/(.*)/);
  if (s3 && s3[1]) return { to: `https://s3.us-east-2.amazonaws.com/pmg-production/Migrated+-+DO+NOT+USE/PW/${s3[1]}` };

  const showcase = exec(from, /^\/showcasesubmit/);
  if (showcase && showcase[1]) return { to: 'https://showcasesubmit.packworld.com' };

  const mundoHome = exec(from, /^\/mundopmmi$/);
  if (mundoHome && mundoHome[1]) return { to: 'https://www.mundopmmi.com' };

  const mundo = exec(from, /^\/mundopmmi\/.*/);
  if (mundo && mundo[1]) return { to: `https://www.mundopmmi.com${from}` };

  return deletedCompanies({ from });
};
