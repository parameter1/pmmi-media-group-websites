const { asyncRoute } = require('@parameter1/base-cms-utils');
const { get } = require('@parameter1/base-cms-object-path');
const gql = require('graphql-tag');

// Content is currently gated by reg fragment
const query = gql`
  query content($input: ContentQueryInput!) {
    content(input: $input){
      id
      type
      userRegistration {
        isCurrentlyRequired
      }
    }
  }
`;

/**
 * @param {object} req The Express request object.
 */
async function getContent(req) {
  const { apollo, params } = req;
  const id = Number(params.id);
  const variables = { input: { id } };
  const { data } = await apollo.query({ query, variables });
  const { content } = data;
  return content;
}

const cookieName = 'enlPrompted';

module.exports = () => asyncRoute(async (req, res, next) => {
  let disableGate = false;
  // check if there is a content id in the request
  const contentRegex = new RegExp(/\d{8}/, 'i');
  const isContent = contentRegex.test(req.params.id);
  const config = req.app.locals.site.getAsObject('newsletterState') || {};
  // If there is a content id see if it is a gated piece of content
  if (isContent) {
    if (config.excludeGatedContent
      || (config.excludeContentTypes && config.excludeContentTypes.length !== 0)
    ) {
      const content = await getContent(req);
      const gatedContent = get(content, 'userRegistration.isCurrentlyRequired') || false;
      const isExcludedByType = config.excludeContentTypes.includes(content.type);
      disableGate = gatedContent || isExcludedByType;
    }
  }
  const hasCookie = Boolean(get(req, `cookies.${cookieName}`));
  const utmMedium = get(req, 'query.utm_medium');
  const olyEncId = get(req, 'query.oly_enc_id');
  const disabled = get(req, 'query.newsletterDisabled');
  const fromEmail = utmMedium === 'email' || olyEncId || false;
  const initiallyExpanded = !disableGate && !(hasCookie || fromEmail || disabled);

  if (initiallyExpanded) {
    // Expire in 14 days (2yr if already signed up)
    const days = fromEmail ? 365 * 2 : 14;
    const maxAge = days * 24 * 60 * 60 * 1000;
    res.cookie(cookieName, true, { maxAge });
  }

  res.locals.newsletterState = { hasCookie, fromEmail, initiallyExpanded };
  next();
});
