const gql = require('graphql-tag');

module.exports = gql`
fragment ContactPageFragment on Content {
  id
  name
  labels
  teaser(input: { useFallback: false, maxLength: null })
  body
  status
  published
  company {
    id
    name
    siteContext {
      path
    }
  }
  primarySection {
    id
    name
    alias
    canonicalPath
    hierarchy {
      id
      name
      alias
      canonicalPath
    }
  }
  primaryImage {
    id
    src
    alt
    caption
    credit
    isLogo
  }
  images(input:{ pagination: { limit: 100 }, sort: { order: values } }) {
    edges {
      node {
        id
        src
        alt
        displayName
        caption
        credit
        isLogo
      }
    }
  }
  gating {
    surveyType
    surveyId
  }
  ... on Addressable {
    address1
    address2
    cityStateZip
    country
  }
  ... on Contactable {
    phone
    tollfree
    fax
    website
    title
    mobile
    publicEmail
  }
  ... on SocialLinkable {
    socialLinks {
      provider
      url
      label
    }
  }
}
`;
