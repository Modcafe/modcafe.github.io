import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  title: 'CoffeeDevs Docs',
  description: 'CoffeeDevs Documentation for all of our Projects',

  base: '/',

  cleanUrls: true,

  themeConfig: {
    logo: '/CoffeeDevs.png',
    lastUpdated: {
      text: 'Last Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    nav: [
      {
        text: 'Modrinth',
        link: 'https://modrinth.com/organization/coffeedevs'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/coffeedevsmc'
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/JNEYvDfQW'
      }
    ],

    sidebar: [
      {
        text: 'CoffeeDevs',
        items: [
          {
            text: 'Getting Started',
            link: '/selection'
          },
          {
            text: 'Licenses',
            link: '/licenses'
          }
        ]
      },
      {
        text: 'Cratty',
        items: [
          {
            text: 'Getting Started',
            link: '/cratty/getting-started'
          },
          {
            text: 'Icon Overview',
            link: '/cratty/icon-overview'
          },
          {
            text: 'Use Icons',
            link: '/cratty/use-icons'
          }
        ]
      },
      {
        text: 'Fallback',
        items: [
          {
            text: 'Getting Started',
            link: '/fallback/getting-started'
          },
          {
            text: 'Installation',
            link: '/fallback/installation'
          }
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/coffeedevsmc'
      },
      {
        icon: 'modrinth',
        link: 'https://modrinth.com/organization/coffeedevs'
      },
      {
        icon: 'discord',
        link: 'https://discord.gg/JNEYvDfQW'
      }
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/coffeedevsmc/coffeedevsmc.github.io/edit/main/docs/:path',
      text: 'Edit this page'
    },

    footer: {
      message: 'Made with VitePress by CoffeeDevs',
      copyright: 'Copyright © 2026 CoffeeDevs'
    }
  }
})
