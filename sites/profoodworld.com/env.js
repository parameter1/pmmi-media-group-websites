const { cleanEnv, validators } = require('@parameter1/base-cms-env');

const { nonemptystr } = validators;

// @todo This should be removed once contact us is moved to core and the mailer service is created.
module.exports = cleanEnv(process.env, {
  GLOBAL_50_250_DOCS_API_KEY: nonemptystr({ desc: 'The google doc api secret key.' }),
});
