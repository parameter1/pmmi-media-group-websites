const { get } = require('@mindful-web/object-path');

module.exports = ({ content }) => get(content, 'userRegistration.isCurrentlyRequired', false) && !get(content, 'userRegistration.bypassGating', false);
