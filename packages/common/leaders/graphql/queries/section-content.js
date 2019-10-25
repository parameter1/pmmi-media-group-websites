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
        primaryImage{
          id
          src(input: { options: { auto: "format", fillColor: "fff", fit: "fill", h: 100, w: 100, pad: 5, mask: "ellipse" } })
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
                  id
                  src(input: { options: { auto: "format", h: 50, w: 50, mask: "ellipse", fit: "facearea", facepad: 3 } })
                }
              }
            }
          }
          teaser
          website
          promotions: relatedContent(input:{queryTypes:[company], includeContentTypes:[Promotion]}){
            edges {
              node {
                id
                name
                primaryImage{
                  id
                  src(input: { options: { auto: "format", fit: "crop", h: 60, w: 110 } })
                }
                ... on ContentPromotion {
                  linkUrl
                  linkText
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
