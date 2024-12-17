const IdentityXConfiguration = require('@mindful-web/marko-web-identity-x/config');
const newrelic = require('newrelic');

module.exports = ({
  appId,
  requiredServerFields,
  requiredClientFields,
  forms = [],
  booleanQuestionsLabel = 'Choose your subscriptions:',
  ...rest
} = {}) => {
  const config = new IdentityXConfiguration({
    appId,
    forms,
    apiToken: process.env.IDENTITYX_API_TOKEN,
    requiredServerFields,
    requiredClientFields,
    booleanQuestionsLabel,
    onHookError: newrelic.noticeError.bind(newrelic),
    ...rest,
  });
  return config;
};
