const digital = (from) => {
  const pattern = /\/sites\/default\/files\/digital_edition\/(.*)/;
  const matches = pattern.exec(from);
  if (matches && matches[1]) {
    return { to: `https://digitaleditions.packworld.com/${matches[1]}` };
  }
  return null;
};

const s3 = (from) => {
  const pattern = /\/sites\/default\/files\/(.*)/;
  const matches = pattern.exec(from);
  if (matches && matches[1]) {
    return { to: `https://s3.us-east-2.amazonaws.com/pmg-production/Migrated+-+DO+NOT+USE/PW/${matches[1]}` };
  }
  return null;
};

const showcase = (from) => {
  const pattern = /^\/showcasesubmit/;
  const matches = pattern.exec(from);
  if (matches && matches[1]) {
    return { to: 'https://showcasesubmit.packworld.com' };
  }
  return null;
};

const mundoHome = (from) => {
  const pattern = /^\/mundopmmi$/;
  const matches = pattern.exec(from);
  if (matches && matches[1]) {
    return { to: 'https://www.mundopmmi.com' };
  }
  return null;
};

const mundo = (from) => {
  const pattern = /^\/mundopmmi\/.*/;
  const matches = pattern.exec(from);
  if (matches && matches[1]) {
    return { to: `https://www.mundopmmi.com${from}` };
  }
  return null;
};

module.exports = ({ from }) => {
  const redirects = Promise.all([
    digital(from),
    s3(from),
    showcase(from),
    mundoHome(from),
    mundo(from),
  ]);
  return redirects[1];
};

module.exports = ({ from }) => {
  const digitalRedirect = digital(from);
  if (digitalRedirect) return digitalRedirect;

  const s3Redirect = s3(from);
  if (s3Redirect) return s3Redirect;

  const showcaseRedirect = showcase(from);
  if (showcaseRedirect) return showcaseRedirect;

  const mundoHomeRedirect = mundoHome(from);
  if (mundoHomeRedirect) return mundoHomeRedirect;

  const mundoRedirect = mundo(from);
  if (mundoRedirect) return mundoRedirect;

  return null;
};
