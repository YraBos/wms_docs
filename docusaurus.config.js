// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'WMS documentation',
  tagline: 'WMS',
  favicon: 'img/favicon.ico',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/wmsdocs/',

  // Set the production url of your site here
  url: 'https://yrabos.github.io',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yrabos', // Usually your GitHub org/user name.
  projectName: 'wmsdocs', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: true,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/YraBos/wms_docs/edit/main',
          editLocalizedFiles: true,
          routeBasePath: '/',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
//          editUrl:
//            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
//      image: 'img/docusaurus-social-card.jpg',
    // Поиск по сайту
    algolia: {
       appId: 'E1PO5EGBDA',
       apiKey: '57774cf7001ec391f7bb1a94e65e77df',
       indexName: 'yrabosio',
       contextualSearch: true,
//       appId: '0S01ATFZLH',
//       apiKey: 'c03ad547b1c3aa86535fc01091e3775e',
//       indexName: 'yrabosio',
//       contextualSearch: true,
    },
      navbar: {
        title: 'WMS',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
//        items: [
//          {
//            type: 'docSidebar',
//            sidebarId: 'tutorialSidebar',
//            position: 'left',
//            label: 'Tutorial',
//          },
//          {to: '/blog', label: 'Blog', position: 'left'},
//          {
//            href: 'https://github.com/yrabos/wms_docs',
//            label: 'GitHub',
//            position: 'right',
//          },
//          {
//            type: 'localeDropdown',
//            position: 'right',
//          },
//        ],
      },
      footer: {
        style: 'dark',
        links: [
//          {
//            title: 'Docs',
//            items: [
//              {
//                label: 'Tutorial',
//                to: '/docs/intro',
//              },
//            ],
//          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/lsfusion_official',
              },
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/lsfusion/shared_invite/zt-1itj7vlmf-9aBIP__nj9iMJglDaecqXg',
              },
              {
                label: 'Stack Overflow',
                href: 'https://ru.stackoverflow.com/questions/tagged/lsfusion',
              },
            ],
          },
//          {
//            title: 'More',
//            items: [
//              {
//                label: 'Blog',
//                to: '/blog',
//              },
//              {
//                label: 'GitHub',
//                href: 'https://github.com/facebook/docusaurus',
//              },
//            ],
//          },
        ],
//        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.nightOwlLight,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: ['bash', 'css', 'java', 'json'],
      },
    }),
};


