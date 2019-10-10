const gql = require('graphql-tag');

module.exports = gql`
fragment LeadersSectionFragment on WebsiteSection {
  id
  name
  # @todo limit 0
  children(input: { sort: { field: name, order: asc }, pagination: { limit: 200 } }) {
    edges {
      node {
        id
        name
        # @todo limit 0
        children(input: { sort: { field: name, order: asc }, pagination: { limit: 200 } }) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
  }
}
`;
