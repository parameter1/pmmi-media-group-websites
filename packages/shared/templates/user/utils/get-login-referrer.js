module.exports = (req) => {
  const referrerUrl = req.get('Referrer');
  if (!referrerUrl) return undefined;
  const referrer = new URL(referrerUrl);
  if (req.hostname !== referrer.hostname || req.originalUrl === referrer.pathname) return undefined;
  return referrer.pathname;
};
