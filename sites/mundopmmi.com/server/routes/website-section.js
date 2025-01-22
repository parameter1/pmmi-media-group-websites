const { withWebsiteSection } = require('@mindful-web/marko-web/middleware');
const { asyncRoute } = require('@mindful-web/utils');
const queryFragment = require('@mindful-web/marko-web-theme-monorail/graphql/fragments/website-section-page');
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
  app.get('/monomateriales', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'Monomateriales: Innovación en empaques para un futuro sostenible',
    description: 'Mundo EXPO PACK presenta una selección exclusiva de innovaciones y desarrollos exitosos en empaques monomaterial disponibles en el mercado; avances que demuestran por qué los monomateriales son clave para la sustentabilidad de la industria de empaques y procesamiento. Encuentre en esta colección el proceso de desarrollo, la visión de las empresas, el impacto en el comercio electrónico, la reciclabilidad y la contribución a la economía circular de los empaques monomaterial.',
    queryParams: {
      // Monomateriales
      includeTaxonomyIds: [3199683],
    },
  })));
  app.get('/redisenodeempaques', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'Rediseño Innovador: Casos de éxito en empaques que rompen esquemas',
    description: 'Mundo EXPO PACK presenta una curaduría de casos sobresalientes en el rediseño de empaques, destacando soluciones que desafían las convenciones establecidas. Una nueva colección que ilustra cómo el enfoque creativo y funcional está transformando el mercado, introduciendo nuevas perspectivas y rompiendo con los esquemas tradicionales. Encuentre aquí procesos de innovación, estrategias exitosas, impactos en la experiencia del consumidor, lineamientos de sostenibilidad y la contribución a la diferenciación que aportan los procesos de rediseño de empaques en distintos mercados.',
    queryParams: {
      // Rediseño
      includeTaxonomyIds: [3199942],
    },
  })));
  app.get('/manodeobracalificada', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'RETOS DEL TALENTO HUMANO Y DISPONIBILIDAD DE MANO DE OBRA CALIFICADA EN NUESTRA INDUSTRIA',
    description: '¿Cómo está enfrentando la industria de empaques la creciente escasez de mano de obra calificada y la alta rotación de empleados? En esta selección de Mundo EXPO PACK, profundizamos en los desafíos que estas tendencias imponen sobre la eficiencia operativa y las estrategias que las empresas están implementando para adaptarse. Acceda a informes, análisis detallados, estudios y casos que revelan la dinámica laboral actual en la industria y cómo las empresas están ajustando sus procesos de reclutamiento y capacitación para enfrentar uno de los desafíos más críticos que enfrenta la industria.',
    queryParams: {
      // escasez de mano de obra
      includeTaxonomyIds: [3200134],
    },
  })));
  app.get('/IIoT', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'Implementaciones exitosas con IIoT en plantas de fabricantes de productos de consumo',
    description: 'La adopción de tecnologías de Internet Industrial de las Cosas (IIoT) en las instalaciones fabriles de las compañías fabricantes de productos de consumo empacados traza nuevos estándares en términos de eficiencia e innovación en la industria. A través de casos de éxito globales, esta selección de Mundo EXPO PACK muestra cómo la conectividad inteligente y el análisis de datos en tiempo real les permiten a las fábricas optimizar sus operaciones, reducir tiempos de inactividad y mejorar la calidad general de los productos. Vea a continuación resultados tangibles que plantas de producción de compañías fabricantes de bienes de consumo empacados han logrado gracias al IIoT.',
    queryParams: {
      // Casos IIoT
      includeTaxonomyIds: [3200913],
    },
  })));
  app.get('/packexpo', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'PACK EXPO',
    description: '',
    queryName: 'website-scheduled-content',
    queryParams: {
      includeLabels: ['PACK EXPO'],
    },
  })));
  app.get('/packexpointernational2024', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'PACK EXPO INTERNATIONAL 2024: CONEXIONES Y SOLUCIONES PARA ENVASADO Y PROCESAMIENTO',
    description: 'Acceda al cubrimiento editorial de PACK EXPO International 2024, presentado por Mundo EXPO PACK para toda su audiencia en América Latina. Con videos exclusivos, esta cobertura ofrece una selección editorial de innovaciones representativas de la feria más grande de la industria este año. Encuentre las principales tendencias clave y desarrollos de última generación en maquinaria y materiales presentados en McCormick Place, Chicago.',
    queryParams: {
      // PACK EXPO 2024
      includeTaxonomyIds: [3201360],
    },
  })));
  app.get('/transiciondemateriales', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'Transición de materiales de empaques: Tendencias e innovaciones',
    description: 'Esta selección editorial de Mundo EXPO PACK destaca transformaciones clave en el desarrollo y uso de materiales de empaque. Explore reportajes con análisis detallados, estudios y casos destacados como botellas de papel, envases con barreras avanzadas y materiales pioneros como el PETF híbrido, además de iniciativas que combinan funcionalidad, diseño y responsabilidad ambiental. Aprenda de empresas representativas de la industria de bienes de consumo empacados cómo adoptar materiales innovadores y estrategias sostenibles para satisfacer las demandas del mercado y adaptarse a las crecientes regulaciones ambientales.',
    queryParams: {
      // Transición de materiales
      includeTaxonomyIds: [3201569],
    },
  })));
  app.get('/empaquesinteligentes', asyncRoute(async (_, res) => res.marko(collections, {
    name: 'EMPAQUES INTELIGENTES: FUSIÓN ENTRE TECNOLOGÍA, CONECTIVIDAD Y EXPERIENCIA DE USUARIO',
    description: ' ¿Qué tendencias marcarán el desarrollo de empaques inteligentes en los próximos años y cómo evoluciona la integración entre tecnología y experiencia del usuario? Encuentre las respuestas en esta selección especializada de Mundo EXPO PACK, en donde reunimos innovaciones destacadas en empaques inteligentes y conectados. Navegue por casos prácticos, noticias y análisis en profundidad de empresas líderes del sector de bienes de consumo empacados que muestran aplicaciones exitosas de tecnologías como RFID, blockchain y NFC; y aprenda cómo los envases inteligentes impactan la trazabilidad, la transparencia y la interacción con los consumidores.',
    queryParams: {
      // Empaques inteligentes
      includeTaxonomyIds: [3201808],
    },
  })));

  app.get('/eventos', asyncRoute(async (_, res) => res.marko(events, {
    alias: 'eventos',
    name: 'Eventos',
    description: 'Acceda aquí a información clave de las principales ferias, seminarios y eventos internacionales dirigidos a profesionales de las industrias de envasado, procesamiento de alimentos y bebidas, y automatización.',
  })));

  app.get('/seminario-web', asyncRoute(async (_, res) => res.marko(webinars, {
    alias: 'seminario-web',
    name: 'Seminario Web',
    description: 'Perspectivas y análisis de líderes de opinión sobre tecnologías y tendencias de mercado en las industrias de envasado, procesamiento de alimentos y bebidas, y automatización.',
  })));

  app.get('/:alias(leaders)', newsletterState(), withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', newsletterState(), withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
