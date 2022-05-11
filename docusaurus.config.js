const lightCodeTheme = require('prism-react-renderer/themes/dracula');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'DuRoom Documentation',
  tagline: 'Forums made simple.',
  url: 'https://duroom.github.io/docs',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DuRoom',
  projectName: 'duroom',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      vi: {
        label: 'Tiếng Việt',
      }
    }
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
          editUrl: 'https://github.com/DuRoom/docs/tree/master',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'DuRoom Docs Logo',
          src: 'img/logo-docs.svg',
        },
        items: [
          {
            to: '/',
            label: 'Guide',
            position: 'left',
            // Anything that isn't `extend`, `'internal`, or contain a slash.
            // Account for local 2-char code at the start.
            activeBaseRegex: '^(\/[a-z][a-z])?\/(?!(extend\/?|internal\/?|)$).*',
          },
          {
            to: 'extend',
            label: 'Extend',
            position: 'left',
            activeBasePath: `extend`,
          },
          {
            to: 'internal',
            label: 'Internal',
            position: 'left',
            activeBasePath: `internal`,
          },
          {
            href: 'https://api.duroom.js.org/docs/',
            label: 'API Reference',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'DuRoom',
            position: 'right',
            items: [

              {
                href: 'https://duroom.js.org/',
                label: 'Home'
              },
              {
                href: 'https://discuss-duroom.js.org/',
                label: 'Community'
              },
              {
                href: 'https://github.com/DuRoom/core/',
                label: 'GitHub'
              },
            ]
          },{
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} DuRoom. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['php'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }
    }),
});
