const digital = async (from) => {
  const pattern = /\/sites\/default\/files\/digital_edition\/(.*)/;
  const matches = pattern.exec(from);
  if (matches && matches[1]) {
    return { to: `https://digitaleditions.packworld.com/${matches[1]}` };
  }
  return null;
};

const s3 = async (from) => {
  const pattern = /\/sites\/default\/files\/(.*)/;
  const matches = pattern.exec(from);
  if (matches && matches[1]) {
    return { to: `https://s3.us-east-2.amazonaws.com/pmg-production/Migrated+-+DO+NOT+USE/PW/${matches[1]}` };
  }
  return null;
};

const showcase = async (from) => {
  const pattern = /^\/showcasesubmit/;
  const matches = pattern.exec(from);
  if (matches && matches[1]) {
    return { to: 'https://showcasesubmit.packworld.com' };
  }
  return null;
};

const mundoHome = async (from) => {
  const pattern = /^\/mundopmmi$/;
  const matches = pattern.exec(from);
  if (matches && matches[1]) {
    return { to: 'https://www.mundopmmi.com' };
  }
  return null;
};

const mundo = async (from) => {
  const pattern = /^\/mundopmmi\/.*/;
  const matches = pattern.exec(from);
  if (matches && matches[1]) {
    return { to: `https://www.mundopmmi.com${from}` };
  }
  return null;
};

module.exports = async ({ from }) => {
  const redirects = Promise.all([
    digital(from),
    s3(from),
    showcase(from),
    mundoHome(from),
    mundo(from),
  ]);
  return redirects[1];
};
