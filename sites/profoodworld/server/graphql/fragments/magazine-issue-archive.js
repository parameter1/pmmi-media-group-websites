const gql = require('graphql-tag');

module.exports = gql`

fragment MagazineIssueArchiveFragment on MagazineIssue {
  id
  name
  siteContext {
    path
  }
  coverImage {
    id
    src
  }
  publication {
    id
    name
  }
}

`;
