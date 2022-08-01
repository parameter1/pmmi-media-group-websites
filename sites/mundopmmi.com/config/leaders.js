module.exports = {
  enabled: process.env.LEADERS_ENABLED || true,
  title: 'LÍDERES EN LATINOAMÉRICA',
  alias: process.env.LEADERS_ALIAS || 'leaders-2022',
  header: {
    imgSrc: process.env.LEADERS_LOGO || 'https://img.mundopmmi.com/files/base/pmmi/all/leaders/mundo-2022.svg?auto=format,compress&h=90',
    imgSrcset: process.env.LEADERS_LOGO || 'https://img.mundopmmi.com/files/base/pmmi/all/leaders/mundo-2022.svg?auto=format,compress&h=90&dpr=2 2x',
  },
  calloutPrefix: 'BUSQUE ESTOS',
  calloutValue: 'PROVEEDORES LÍDERES',
  viewAllText: 'Vea todas las compañías &gt;',
};
