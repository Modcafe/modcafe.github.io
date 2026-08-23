import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',

  title: 'CoffeeDevs Documentation',
  description: 'CoffeeDevs Documentation for all of our Projects',

  base: '/',

  cleanUrls: true,

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      {
        text: 'Projects',
        link: '/projects'
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
      message: 'CoffeeDevs',
      copyright: 'Copyright © 2026 CoffeeDevs'
    }
  }
})
