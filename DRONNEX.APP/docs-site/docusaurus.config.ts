import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Dronnex',
  tagline: 'Projects | Documentations | Blogs',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.dronnex.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/doc',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'], 
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pleycothh/DRONNEX/tree/main/docs-site/',
          path: 'docs',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pleycothh/DRONNEX/tree/main/docs-site/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,

    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Dronnex',
      logo: {
        alt: '',
        src: 'img/logo.svg',
      },
      items: [
        // left side
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/blog', 
          label: 'Blog', 
          position: 'left'
        },

        // right side
        {
          type: 'localeDropdown',
          position: 'right',
        },
      
        {
          href: 'https://www.dronnex.com',
          label: 'Back to Dronnex',
          position: 'right'
        },
        {
          href: 'https://github.com/pleycothh/DRONNEX',
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
            {
              label: 'Tutorial',
              to: '/docs/category/tutorials---embedded',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkdIn',
              href: 'https://www.linkedin.com/in/ben-zhuoheng-li/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/dronnex.info/',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@Dronnex-info',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io/',
            },
            {
              label: 'Berkeley Humanoid',
              href: 'https://lite.berkeley-humanoid.org/'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dronnex-Doc, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  // markdown support
  markdown: {
    mermaid: true,
  },

  // Add KaTeX support for math rendering
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themes: ['@docusaurus/theme-mermaid'],

  // ... rest of config (like themeConfig) goes here
};

export default config;