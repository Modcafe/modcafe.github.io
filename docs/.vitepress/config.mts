import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',

  title: 'CoffeeDevs',
  description: 'Documentation for CoffeeDevs Projects',

  // For:
  // https://coffeedevsmc.github.io/
  base: '/',

  cleanUrls: true,

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      {
        text: 'Guide',
        link: '/getting-started'
      },
      {
        text: 'API',
        link: '/api/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/coffeedevsmc/coffeefevsmc.github.io'
      }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          {
            text: 'Introduction',
            link: '/'
          },
          {
            text: 'Getting Started',
            link: '/getting-started'
          },
          {
            text: 'Installation',
            link: '/installation'
          }
        ]
      },

      {
        text: 'Guide',
        collapsed: false,
        items: [
          {
            text: 'Overview',
            link: '/guide/'
          },
          {
            text: 'Configuration',
            link: '/guide/configuration'
          },
          {
            text: 'Usage',
            link: '/guide/usage'
          }
        ]
      },

      {
        text: 'API Reference',
        collapsed: true,
        items: [
          {
            text: 'Overview',
            link: '/api/'
          },
          {
            text: 'Reference',
            link: '/api/reference'
          }
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/coffeedevsmc'
      }
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/coffeedevsmc/coffeedevsmc.github.io/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the IGPL-1.0 License.',
      copyright: 'Copyright © 2026 CoffeeDevs'
    }
  }
})
