const { getAsObject } = require('@mindful-web/object-path');
const { MindfulApiClient } = require('@mindful-web/mindful/api-client');
const { MindfulMarkoWebService } = require('@mindful-web/mindful/marko-web/service');
const { withWebsiteSection } = require('@mindful-web/marko-web/middleware');
const MarkoWebSearchConfig = require('@mindful-web/marko-web-search/config');
const MarkoWebSearch = require('@mindful-web/marko-web-search');
const queryFragment = require('@pmmi-media-group/package-global//graphql/fragments/website-directory-section-page');
const directory = require('../templates/advisor-network/index');

module.exports = (app, siteConfig) => {
  const rootAlias = 'advisor-network';
  const { namespace, view } = getAsObject(siteConfig, 'mindful');
  const config = new MarkoWebSearchConfig({
    resultsPerPage: { default: 18 },
    contentTypes: ['Contact'],
    assignedToWebsiteSectionIds: [90152, 90153],
    defaultSortField: 'NAME',
    mindful: new MindfulMarkoWebService({
      client: new MindfulApiClient({ namespace, view }),
    }),
    useMindful: true,
    rootAlias,
  });

  const searchMiddleware = (req, res, next) => {
    res.locals.$markoWebSearch = new MarkoWebSearch({
      config,
      query: {
        ...req.query,
      },
    });
    res.locals.$markoWebSearchCenturyClub = new MarkoWebSearch({
      config,
      query: {
        ...req.query,
      },
    });
    next();
  };

  app.get(`/:alias(${rootAlias})`, searchMiddleware, withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get(`/:alias(${rootAlias}/[a-z0-9-/]+)`, searchMiddleware, withWebsiteSection({
    template: directory,
    queryFragment,
  }));
};
