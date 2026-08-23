import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  title: 'Modcafe Docs',
  description: 'Modcafe Documentation for all of our Projects',

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
        link: 'https://modrinth.com/organization/modcafe'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/modcafe'
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/JNEYvDfQW'
      }
    ],

    sidebar: [
      {
        text: 'Modcafe',
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
        link: 'https://github.com/modcafe'
      },
      {
        icon: 'modrinth',
        link: 'https://modrinth.com/organization/modcafe'
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
      pattern: 'https://github.com/modcafe/modcafe.github.io/edit/main/docs/:path',
      text: 'Edit this page'
    },

    footer: {
      message: 'Made with VitePress by Modcafe',
      copyright: 'Copyright © 2026 Modcafe'
    }
  }
})
