module.exports = {
  enabled: process.env.LEADERS_ENABLED || true,
  title: 'LÍDERES EN LATINOAMÉRICA',
  alias: process.env.LEADERS_ALIAS || 'leaders/2021',
  header: {
    imgSrc: process.env.LEADERS_LOGO || 'https://img.mundopmmi.com/files/base/pmmi/all/leaders/mundo-leaders-logo.png?h=90',
  },
  calloutPrefix: 'BUSQUE ESTOS',
  calloutValue: 'PROVEEDORES LÍDERES',
  viewAllText: 'Vea todas las compañías &gt;',
};
