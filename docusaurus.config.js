// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const defaultSettings = {
  breadcrumbs: false,
  //editUrl: "https://github.com/dyte-in/docs/tree/main/",
  showLastUpdateTime: true,
  sidebarPath: require.resolve("./sidebars.js"),
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Documentación WaaS",
  tagline: "Wallet as a Service",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "koibanx", // Usually your GitHub org/user name.
  projectName: "waas-docu", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          //path: "docs/guides",
          //id: "guides",
          //routeBasePath: "/guides",
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "/img/koibanx-naranja.png",
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "WaaS",
        logo: {
          src: "/logo/koibanx.svg",
          srcDark: "/logo/koibanx.svg",
          alt: "Koibanx Logo",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "waasSidebar",
            position: "left",
            label: "Documentación",
          },
          /*{
            label: "API Reference",
            to: "/api/",
          },*/
          {
            label: "Dashboard",
            href: "https://dashboard-waas.dev.build.koibanx.com/",
            position: "right",
            className: "dev-portal-signup dev-portal-link",
          },
        ],
      },
      footer: {
        style: "light",
        logo: {
          href: "/",
          src: "/logo/koibanx.svg",
          srcDark: "/logo/koibanx.svg",
          alt: "Koibanx Logo",
          height: "36px",
        },

        copyright: `Copyright © ${new Date().getFullYear()} Koibanx.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
