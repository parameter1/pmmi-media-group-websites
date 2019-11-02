const redirect = (from, pattern) => pattern.exec(from);

module.exports = ({ from }) => {
  const digital = redirect(from, /\/sites\/default\/files\/digital_edition\/(.*)/);
  if (digital && digital[1]) {
    return { to: `https://digitaleditions.packworld.com/${digital[1]}` };
  }

  const s3 = redirect(from, /\/sites\/default\/files\/(.*)/);
  if (s3 && s3[1]) {
    return { to: `https://s3.us-east-2.amazonaws.com/pmg-production/Migrated+-+DO+NOT+USE/AW/${s3[1]}` };
  }

  const showcase = redirect(from, /^\/showcasesubmit/);
  if (showcase && showcase[1]) {
    return { to: 'https://showcasesubmit.packworld.com' };
  }

  const mundoHome = redirect(from, /^\/mundopmmi$/);
  if (mundoHome && mundoHome[1]) {
    return { to: 'https://www.mundopmmi.com' };
  }

  const mundo = redirect(from, /^\/mundopmmi\/.*/);
  if (mundo && mundo[1]) {
    return { to: `https://www.mundopmmi.com${from}` };
  }

  return null;
};
