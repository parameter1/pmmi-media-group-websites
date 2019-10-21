const gql = require('graphql-tag');

module.exports = gql`
fragment LeadersSectionsFragment on WebsiteSection {
  id
  name
  hierarchy{
    id
    alias
  }
}
`;
