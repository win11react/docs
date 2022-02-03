// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Win11React",
  url: "https://win11docs.asylum-os.com",
  baseUrl: "/",
  tagline: "Windows 11 in React",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",
  organizationName: "win11react", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/win11react/docs/edit/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/win11react/docs/edit/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /**  @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Win11React",
        logo: {
          alt: "Win11React Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "about",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://win11.blueedge.me/",
            label: "Win11React",
            position: "right",
          },
        ],
        hideOnScroll: true,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/about",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/qmEZwUhb4b",
              },
              {
                label: "Github",
                href: "https://github.com/blueedgetechno/win11React",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Win11React",
                href: "https://win11.blueedge.me/",
              },
              {
                label: "Status",
                href: "https://win11react.github.io/status/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bluedge. Built with ReactJS.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
