const gql = require('graphql-tag');
const { extractFragmentData } = require('@parameter1/base-cms-web-common/utils');

const buildBaseCMSQuery = ({ queryFragment } = {}) => {
  const { spreadFragmentName, processedFragment } = extractFragmentData(queryFragment);
  return gql`
    query content($input: ContentQueryInput!) {
      content(input: $input) {
        ${spreadFragmentName}
      }
    }
    ${processedFragment}
  `;
};

/**
 * @param {object} clients
 * @param {ApolloClient} clients.apolloBaseCMS The BaseCMS client that will perform the query.
 * @param {object} params
 * @param {string} [params.queryFragment] The `graphql-tag` fragment
 *                                        to apply to the `allContent` query.
 * @param {string} [params.opSuffix] A suffix to add to the GraphQL operation name.
 */
module.exports = async ({ apolloBaseCMS } = {}, {
  id,
  queryFragment,
} = {}) => {
  if (!apolloBaseCMS) throw new Error('Both the BaseCMS and Base Browse Apollo clients must be provided.');
  const input = {
    id,
  };
  // const data = {
  //   hitting: true,
  //   queryFragment,
  //   id,
  //   input,
  // };
  const { data } = await apolloBaseCMS.query({
    query: buildBaseCMSQuery({ queryFragment }),
    variables: { input },
  });
  return data;
};
