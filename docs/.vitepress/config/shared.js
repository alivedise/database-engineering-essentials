import { fileURLToPath, URL } from 'node:url';
import rfcverbPlugin from './rfc-highlighter.js';

export const shared = {
  transformPageData(pageData) {
    pageData.frontmatter.head ??= [];
    if (pageData.frontmatter.id != null) {
      pageData.title = `DEE-${pageData.frontmatter.id}: ${pageData.frontmatter.title}`;
    } else if (pageData.frontmatter.title != null) {
      pageData.title = `${pageData.frontmatter.title}`;
    }
    pageData.frontmatter.head.push([
      'meta',
      {
        name: 'og:title',
        content: pageData.frontmatter.id != null
          ? `DEE-${pageData.frontmatter.id}: ${pageData.frontmatter.title}`
          : pageData.frontmatter.title || 'Database Engineering Essentials',
      },
    ]);
  },
  cleanUrls: true,
  base: '/database-engineering-essentials/',
  lastUpdated: true,
  themeConfig: {
    logo: 'favicon.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/alivedise/database-engineering-essentials' },
    ],
    search: {
      provider: 'local',
    },
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBarTitle\.vue$/,
          replacement: fileURLToPath(
            new URL('../theme/VPNavBarTitle.vue', import.meta.url)
          ),
        },
      ],
    },
    optimizeDeps: {
      include: ['mermaid'],
    },
    ssr: {
      noExternal: ['mermaid'],
    },
  },
  head: [
    ['link', { rel: 'icon', href: 'favicon.svg' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto:300,400,700' }],
  ],
  markdown: {
    config: (md) => {
      md.use(rfcverbPlugin);
    },
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Database Engineering Essentials',
      short_name: 'DEE',
      description: 'Database Engineering Essentials documentation',
      theme_color: '#2d8659',
      icons: [
        {
          src: 'favicon.svg',
          sizes: '192x192',
          type: 'image/svg+xml',
        },
      ],
    },
  },
  ignoreDeadLinks: true,
  mermaid: {},
  mermaidPlugin: {
    class: 'mermaid my-class',
  },
};
