import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const app = {
  name: "AndroidIDE",
  description:
    "Build real, Gradle-based Android applications on Android devices",
  logo: "img/androidide.svg",
  organizationName: "AndroidIDEOfficial",
  projectName: "AndroidIDE",
  url: "https://androidide-site-dev.pages.dev",
  apkRepo: "https://github.com/AndroidIDEOfficial/AndroidIDE",
};

const config: Config = {
  title: app.name,
  tagline: app.description,
  favicon: app.logo,

  // Set the production url of your site here
  url: app.url,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: app.organizationName, // Usually your GitHub org/user name.
  projectName: app.projectName, // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  /* may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  }, */

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    defaultMode: "dark",
    image: "img/androidide.png",
    navbar: {
      title: app.name,
      logo: {
        alt: app.name + ".svg",
        src: app.logo,
      },
      hideOnScroll: true,
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/AndroidIDEOfficial/AndroidIDE",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "AndroidIDE",
          items: [
            {
              html: `<p class="text-sm">An IDE for Android devices to develop Android apps. Provides support for Gradle, OpenJDK 17, GIT and much more.</p>`,
            },
          ],
        },
        {
          title: "Socials",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/androidide_discussions",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/@android-ide",
            },
            {
              label: "GitHub",
              href: app.apkRepo,
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "About Us",
              href: "/about-us",
            },
            {
              label: "Contact",
              href: "/contact",
            },
            {
              label: "Disclaimer",
              href: "/disclaimer",
            },
            {
              label: "Privacy Policy",
              href: "/privacy-policy",
            },
            {
              label: "Terms of Use",
              href: "/terms-of-use",
            },
          ],
        },
        {
          title: "Supported By",
          items: [
            {
              html: `
                <a href="https://m.do.co/c/54add371d1d7" target="_blank">
                  <img style="max-width: 50%;" src="https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/SVG/DO_Logo_horizontal_blue.svg" />
                </a>`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ${
        app.organizationName
      }`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
      type: "text/css",
    },
  ],
};

export default config;
