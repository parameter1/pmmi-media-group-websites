const gql = require('graphql-tag');

module.exports = gql`

fragment LeadersSectionFromIds on WebsiteSection {
  id
  name
  hierarchy {
    id
    alias
  }
}
`;
