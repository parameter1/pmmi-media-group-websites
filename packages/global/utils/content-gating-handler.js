const olyticsCookie = require('@mindful-web/marko-web-omeda/olytics/customer-cookie');
const { get } = require('@mindful-web/object-path');

module.exports = ({ content, req }) => {
  const incomingEncId = olyticsCookie.clean(req.query.oly_enc_id);

  if (incomingEncId) return false;

  return get(content, 'userRegistration.isCurrentlyRequired', false) && !get(content, 'userRegistration.bypassGating', false);
};
