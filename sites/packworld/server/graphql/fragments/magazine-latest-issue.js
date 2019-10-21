const gql = require('graphql-tag');

module.exports = gql`

fragment MagazineCurrentIssueFragment on MagazineIssue {
  id
  name
  digitalEditionUrl
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
    subscribeUrl
    siteContext {
      path
    }
  }
}

`;
