const gql = require('graphql-tag');

module.exports = gql`

fragment LeadershipCompanyVideosFragment on Content {
  id
  name
  siteContext {
    path
  }
  ... on ContentCompany {
    isLeader: hasWebsiteSchedule(input: { sectionAlias: "leaders" })
    youtube {
      url
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
}

`;
