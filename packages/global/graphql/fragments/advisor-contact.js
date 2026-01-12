const gql = require('graphql-tag');

module.exports = gql`

fragment DirectorySectionMicroFeedBlockContentFragment on Content {
  id
  type
  shortName
  websiteDeck
  teaser(input: { useFallback: false, maxLength: null })
  body
  siteContext {
    path
  }
  primaryImage {
    id
    src(input: { options: { auto: "format,compress", q: 70 } })
    alt
  }
  websiteSchedules {
    section {
      id
      name
      fullName
      alias
    }
  }
  ... on Addressable {
    cityStateZip
    city
    state
    country
  }
  ... on Contactable {
    website
  }
}

`;
