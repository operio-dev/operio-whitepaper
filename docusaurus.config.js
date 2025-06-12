module.exports = {
  title: 'Operio Docs',
  tagline: 'AGI-native ERP whitepaper',
  url: 'https://<operio-dev>.github.io',
  baseUrl: '/operio-whitepaper/',
  projectName: 'operio-whitepaper',
  organizationName: '<operio-dev>',
  onBrokenLinks: 'throw',
  themeConfig: {
    navbar: {
      title: 'Operio Docs',
      items: [{ to: 'docs/01_introduction', label: 'Introduction', position: 'left' }]
    }
  },
  presets: [
    ['@docusaurus/preset-classic', {
      docs: { sidebarPath: require.resolve('./sidebars.js') },
      theme: { customCss: [] },
    }]
  ],
};
