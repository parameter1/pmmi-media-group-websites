const gql = require('graphql-tag');

module.exports = leadersAlias => gql`

fragment WebsiteContentCompanyFragment on Content {
  id
  type
  name
  teaser(input: { maxLength: 0 })
  body

  siteContext {
    path
  }
  ... on ContentCompany {

    address1
    address2
    cityStateZip
    country

    phone
    tollfree
    fax
    website
    title
    mobile
    email
    publicEmail

    youtube {
      username
      channelId
      url
    }

    # kv data
    yearsInOperation
    numberOfEmployees
    salesChannels
    salesRegion

    # long text data
    productSummary
    servicesProvided
    serviceInformation
    trainingInformation
    warrantyInformation

    # circle image
    primaryImage {
      id
      src(input: { options: { auto: "format,compress", q: 70, fillColor: "fff", fit: "fill", h: 125, w: 125, pad: 5, mask: "ellipse" } })
      alt
    }

    isLeader: hasWebsiteSchedule(input: { sectionAlias: "${leadersAlias}" })

    contacts: publicContacts(input: { sort: { field: published, order: asc }}) {
      edges {
        node {
          id
          name
          title
          publicEmail
          primaryImage {
            id
            src(input: { options: { auto: "format,compress", q: 70, h: 100, w: 100, mask: "ellipse", fit: "facearea", facepad: 3 } })
          }
        }
      }
    }

    videos: youtubeVideos(input: { pagination: { limit: 3 } }) {
      edges {
        node {
          id
          url
          title
          published
          thumbnail(input: { size: high })
        }
      }
    }
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
