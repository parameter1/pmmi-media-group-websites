const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const { asyncRoute } = require('@parameter1/base-cms-utils');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/website-section-page');
const leadersFragment = require('@pmmi-media-group/package-global/graphql/fragments/leaders-section');
const { newsletterState } = require('@pmmi-media-group/package-global/middleware/newsletter-state');
const events = require('@pmmi-media-group/package-global/templates/website-section/events');
const webinars = require('@pmmi-media-group/package-global/templates/website-section/webinars');
const collections = require('@pmmi-media-group/package-global/templates/website-section/collections');

const section = require('../templates/website-section');
const leaders = require('../templates/website-section/leaders');

module.exports = (app) => {
  app.get('/reciclaje-quimico', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'Reciclaje químico: historias de éxito en la industria de empaques',
    description: '¿Quiere conocer de cerca últimas tecnologías e innovaciones en reciclaje de envases? Encuentre en esta colección de Mundo EXPO PACK historias y casos de estudio sobresalientes de América Latina y del mundo, en los que presentamos desarrollos en reciclaje químico y las posibilidades que esta tecnología ofrece para aportarle a las empresas en la región. ¡Encuentre aquí una selección de artículos relacionados con reciclaje químico que podrían responder a las necesidades a corto y mediano plazo de su compañía!',
    queryParams: {
      // Reciclaje quimico
      includeTaxonomyIds: [3199357],
    },
  })));
  app.get('/envases-reutilizables', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'Envases reutilizables: una selección de casos exitosos',
    description: 'Aprenda de primera mano cómo los envases reutilizables están definiendo los criterios de sustentabilidad en distintas industrias de bienes de consumo empacados. Le invitamos a explorar esta fascinante colección de Mundo EXPO PACK, en la que presentamos innovaciones, tendencias y casos exitosos de desarrollo e implementación de envases reutilizables en productos de renombre internacional.',
    queryParams: {
      // Envases reutilizables
      includeTaxonomyIds: [3199410],
    },
  })));
  app.get('/tecnologia-hpp', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'Procesamiento por Alta Presión – HPP: Implementaciones Exitosas en la industria',
    description: 'Navegue por esta selección exclusiva de contenidos de Mundo EXPO PACK y conozca casos de éxito de implementaciones de una tecnología que está impactando la industria de alimentos: el Procesamiento por Alta Presión (HPP, por sus siglas en inglés). Aprenda directamente de compañías de productos de consumo que utilizan HPP y por qué esta tecnología se está volviendo importante para garantizar la calidad, seguridad y extender la vida útil de los alimentos.',
    queryParams: {
      // HPP
      includeTaxonomyIds: [3199452],
    },
  })));
  app.get('/robotica-tendencias', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'Robótica: tendencias que definen los empaques del futuro',
    description: '¿Se ha preguntado cómo será el futuro del empaque con la robótica avanzada? En esta selección de Mundo EXPO PACK podrá vislumbrar las más interesantes tendencias en robótica. Desde la evolución de los robots humanoides hasta los avances tecnológicos que impulsan el mercado, encuentre aquí el más completo panorama de robótica para la industria de empaques y procesamiento.',
    queryParams: {
      // Tendencias robótica
      includeTaxonomyIds: [3199506],
    },
  })));
  app.get('/expopack2024', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'EXPO PACK 2024: La red de envasado y procesamiento más grande en un mismo lugar',
    description: 'Acceda al cubrimiento editorial más completo de EXPO PACK 2024, preparado especialmente por Mundo EXPO PACK para toda su audiencia. Encontrará una serie de videos con algunas de las innovaciones destacadas en maquinaria, tecnología de envasado y procesamiento. Esta colección incluye las tendencias y soluciones avanzadas en la industria y algunos de los desarrollos recientes presentados durante la feria de envasado y procesamiento más grande de América Latina.',
    queryParams: {
      // Expo Pack 2024
      includeTaxonomyIds: [3199623],
    },
  })));
  app.get('/:alias(eventos)', withWebsiteSection({
    template: events,
    queryFragment,
  }));
  app.get('/:alias(seminario-web)', withWebsiteSection({
    template: webinars,
    queryFragment,
  }));

  app.get('/:alias(leaders)', newsletterState(), withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', newsletterState(), withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
