const gql = require('graphql-tag');

module.exports = gql`

fragment MagazinePublicationPageFragment on MagazinePublication {
    id
    name
    description
    subscribeUrl
    cancelUrl
    changeAddressUrl
    renewalUrl
    canonicalPath
}
`;
