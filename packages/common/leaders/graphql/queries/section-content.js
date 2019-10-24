const gql = require('graphql-tag');

module.exports = gql`
query LeadersScheduledContent($input:WebsiteScheduledContentQueryInput!) {
  websiteScheduledContent(input:$input) {
    edges {
      node {
        id
        name
        siteContext {
          path
        }
        ... on SocialLinkable {
          socialLinks {
            provider
          }
        }
        primaryImage {
          src
        }
        ... on ContentCompany {
          productSummary
          publicContacts {
            edges {
              node {
                id
                name
                title
                primaryImage {
                  src
                }
              }
            }
          }
          teaser
          website
        }
      }
    }
  }
}
`;
