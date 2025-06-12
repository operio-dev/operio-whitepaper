module.exports = {
  title: 'Operio Docs',
  tagline: 'AGI-native ERP whitepaper',
  url: 'https://operio-dev.github.io',
  baseUrl: '/operio-whitepaper/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'operio-dev', // GitHub org/user name
  projectName: 'operio-whitepaper', // repo name
  themeConfig: {
    navbar: {
      title: 'Operio Docs',
      logo: {
        alt: 'Operio Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/', label: 'Introduction', position: 'left' },
        {
          href: 'https://github.com/operio-dev/operio-whitepaper',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Introduction', to: '/' },
            { label: 'Architecture', to: '/docs/02_architecture' },
            { label: 'Roadmap', to: '/docs/07_roadmap' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/operio-dev/operio-whitepaper' },
            // aggiungi altri link social o forum qui
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Operio. All rights reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/operio-dev/operio-whitepaper/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
