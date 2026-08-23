import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',

  title: 'CoffeeDevs Docs',
  description: 'CoffeeDevs Documentation for all of our Projects',

  base: '/',

  cleanUrls: true,

  themeConfig: {
    logo: '/CoffeeDevs_final.png',

    nav: [
      {
        text: 'Modrinth',
        link: 'https://modrinth.com/organization/coffeedevs'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/coffeedevsmc'
      }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          {
            text: 'Home',
            link: '/'
          },
          {
            text: 'Projects',
            link: '/projects'
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
      message: 'Made with VitePress by Intensed',
      copyright: 'Copyright © 2026 CoffeeDevs'
    }
  }
})
