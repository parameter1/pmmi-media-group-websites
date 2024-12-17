const olyticsCookie = require('@mindful-web/marko-web-omeda/olytics/customer-cookie');

module.exports = ({ content, req }) => {
  const incomingEncId = olyticsCookie.clean(req.query.oly_enc_id);

  if (incomingEncId) return false;

  // Gate the following content types only.
  const typesToGate = [
    // 'article',
    'blog',
    'news',
  ];
  if (typesToGate.includes(content.type)) return true;

  return false;
};
