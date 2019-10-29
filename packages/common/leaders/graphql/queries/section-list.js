const gql = require('graphql-tag');

module.exports = gql`
query LeadersScheduledContentLink($input:WebsiteScheduledContentQueryInput!) {
  websiteScheduledContent(input:$input) {
    edges {
      node {
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
    }
  }
}
`;
