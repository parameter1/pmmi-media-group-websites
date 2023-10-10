const { asyncRoute } = require('@parameter1/base-cms-utils');
const gql = require('graphql-tag');
const createError = require('http-errors');
const template = require('../templates/taxonomy-category');
const getEdgeNodes = require('../utils/get-edge-nodes');

const query = gql`
  query WithTaxonomy($input: TaxonomyQueryInput!) {
    taxonomy(input: $input) {
      id
      name
      type
      urlPath
    }
  }
`;

const relatedLeadersSectionsQuery = gql`
  query LeadersSectionsFromTaxonomy($siteId: ObjectID, $taxonomyIds: [Int!]!) {
    websiteSections(input: {
      siteId: $siteId,
      taxonomyIds: $taxonomyIds,
      pagination: { limit: 0 },
      sort: { field: name, order: asc },
    }) {
      edges {
        node {
          id
        }
      }
    }
  }
`;

module.exports = (app) => {
  app.get('/taxonomy-category/:id(\\d+)', asyncRoute(async (req, res) => {
    const { apollo } = res.locals;
    const id = parseInt(req.params.id, 10);
    const input = { id };
    const variables = { input };
    const { data } = await apollo.query({ query, variables });
    const { taxonomy } = data;
    if (!taxonomy || taxonomy.type !== 'Category') {
      throw createError(404, `No taxonomy category was found for ID '${id}'`);
    }

    const siteId = req.app.locals.config.website('id');
    const { data: sectionData } = await apollo.query({
      query: relatedLeadersSectionsQuery,
      variables: { siteId, taxonomyIds: [id] },
    });
    const sections = getEdgeNodes(sectionData, 'websiteSections');
    const leadersSectionIds = sections.map((section) => section.id);

    return res.marko(template, { ...taxonomy, leadersSectionIds });
  }));
};
