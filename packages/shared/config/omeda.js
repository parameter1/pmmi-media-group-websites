module.exports = ({
  clientKey = 'pmmicd',
  brandKey = 'client_pmmi',
  appId = process.env.OMEDA_APP_ID,
  inputId = process.env.OMEDA_INPUT_ID,
  graphqlUri = 'https://graphql.omeda.parameter1.com/',
  rapidIdentification = { productId: 352 },
} = {}) => ({
  clientKey,
  brandKey,
  appId,
  inputId,
  graphqlUri,
  rapidIdentification,
});
