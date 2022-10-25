import { defineConfig } from 'vitepress';
import { version } from '../../package.json';

export default defineConfig({
  lang: 'en-US',
  title: 'tslib',
  description: 'My awesome typescript library 🌈',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  themeConfig: {
    nav: nav(),
    logo: {
      light: 'https://api.iconify.design/fluent-emoji-high-contrast:dragon-face.svg?color=%23000000',
      dark: 'https://api.iconify.design/fluent-emoji-high-contrast:dragon-face.svg?color=%23ffffff',
      alt: 'logo',
    },
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            {
              text: 'Getting Started',
              link: '/guide/getting-started'
            },
          ],
        },
      ],
    },

    editLink: {
      pattern: 'https://github.com/fengzilong/reponame/edit/main/website/docs/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fengzilong/reponame' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present fengzilong',
    },
  },
  appearance: 'dark',
});

function nav() {
  return [
    {
      text: 'Guide',
      link: '/guide/getting-started',
      activeMatch: '/guide/',
    },
    {
      text: version,
      items: [
        {
          text: 'Release',
          link: 'https://github.com/fengzilong/reponame/releases',
        },
        {
          text: 'Contributing',
          link: 'https://github.com/fengzilong/reponame/blob/main/CONTRIBUTING.md',
        },
      ],
    },
  ];
}
