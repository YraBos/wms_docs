// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'WMS documentation',
  tagline: 'WMS documentation',
  favicon: 'img/favicon.ico',
  baseUrl: '/wmsdocs/',
  url: 'https://yrabos.github.io',
  organizationName: 'yrabos', // Usually your GitHub org/user name.
  projectName: 'wmsdocs', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: true,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

      // локальный поиск
      themes: [
        // ... Настройки вашей темы
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            ({
                // ... Ваши опции
                // рекомендуется использовать `hashed`, поскольку возможно долгосрочное кэширование индексного файла
                hashed: true,
                language: ["en", "ru"], // включаем обрабатываемые языки
                indexPages: true, // индексируем страницы для поиска
                highlightSearchTermsOnTargetPage: true, // подсветка найденного
            }),
        ],
      ],

  themeConfig:
    ({
//    algolia: { // Поиск по сайту
//       appId: 'E1PO5EGBDA',
//       apiKey: '57774cf7001ec391f7bb1a94e65e77df',
//       indexName: 'yrabosio',
//       contextualSearch: true,
//    },
      navbar: {
        title: 'WMS',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
      },
      footer: {
        style: 'dark',
        links: [
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
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LuxSoft`,
      },
      prism: {
        theme: prismThemes.nightOwlLight,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: ['bash', 'css', 'java', 'json'],
      },
    }),
};


