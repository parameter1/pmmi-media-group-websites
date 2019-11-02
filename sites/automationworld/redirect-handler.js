const digital = (from) => {
  const pattern = /\/sites\/default\/files\/digital_edition\/(.*)/;
  const matches = pattern.exec(from);
  if (matches && matches[1]) {
    return { to: `https://digitaleditions.automationworld.com/${matches[1]}` };
  }
  return null;
};

const s3 = (from) => {
  const pattern = /\/sites\/default\/files\/(.*)/;
  const matches = pattern.exec(from);
  if (matches && matches[1]) {
    return { to: `https://s3.us-east-2.amazonaws.com/pmg-production/Migrated+-+DO+NOT+USE/AW/${matches[1]}` };
  }
  return null;
};

module.exports = ({ from }) => {
  const digitalRedirect = digital(from);
  if (digitalRedirect) return digitalRedirect;

  const s3Redirect = s3(from);
  if (s3Redirect) return s3Redirect;

  return null;
};
