const gql = require('graphql-tag');

module.exports = gql`

fragment LeadersByIds on Content {
  id
  taxonomy(input: { type: Category, pagination: { limit: 0 } }) {
    edges {
      node {
        id
      }
    }
  }
  primarySection {
    id
  }
}
`;
