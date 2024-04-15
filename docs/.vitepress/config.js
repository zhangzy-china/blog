import { defineConfig } from "rollup"


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  title: "blog",
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: './favicon.ico' }]],
  themeConfig: {
    logo: './favicon.ico',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端框架',
        items: [
          { text: 'vue2', link: '/vue/vue2' },
          { text: 'vue3', link: '/vue/vue3' },
          { text: 'react', link: '/react/' }
        ]
      },
      {
        text: '编程',
        items: [
          { text: '前端', link: '/web/' },
        ]
      },
    ],
    sidebar: [
      {
        text: '前端框架',
        items: [
          { text: 'vue2', link: '/vue/vue3' },
          { text: 'vue3', link: '/vue/vue2' }
        ]
      }, {
        text: '优化点',
        items: [
          { text: '电站', link: '/web/' },
        ]
      }
    ],
  }
})
