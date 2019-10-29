const gql = require('graphql-tag');

module.exports = gql`
fragment LeadersListFragment on Content {
  id
  name
  siteContext {
    path
  }
  ... on ContentCompany {
    youtube {
      username
      channelId
    }
  }
}
`;
