const digital = async (from) => {
  const pattern = /\/sites\/default\/files\/digital_edition\/(.*)/;
  const matches = pattern.exec(from);
  if (matches && matches[1]) {
    return { to: `https://digitaleditions.oemmagazine.org/${matches[1]}` };
  }
  return null;
};

const s3 = async (from) => {
  const pattern = /\/sites\/default\/files\/(.*)/;
  const matches = pattern.exec(from);
  if (matches && matches[1]) {
    return { to: `https://s3.us-east-2.amazonaws.com/pmg-production/Migrated+-+DO+NOT+USE/OEM/${matches[1]}` };
  }
  return null;
};

module.exports = async ({ from }) => Promise.all([digital(from), s3(from)]).then(l => l[0]);
