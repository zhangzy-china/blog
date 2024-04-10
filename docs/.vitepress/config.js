
// https://vitepress.dev/reference/site-config
module.export = {
  base: '',
  title: "chintpower",
  lang: 'zh-CN', 
  head: [['link', { rel: 'icon', href: './favicon.ico' }]],
  themeConfig: {
    logo: './favicon.ico',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/index' },
      {
        text: '设备中心',
        items: [
          { text: '电站', link: '/markdown-examples' },
          { text: '网关', link: '/api-examples' }
        ]
      },
      {
        text: '编程',
        items: [
          { text: '前端', link: '/gateway/' },
        ]
      },
    ],
    sidebar: {
      '/gateway/': [{
        text: '前端',
        items: [
          { text: 'npm转pnpm', link: '/gateway/' },
        ]
      }]
    }
    // sidebar: [
    //   {
    //     text: '设备中心',
    //     items: [
    //       { text: '电站', link: '/markdown-examples' },
    //       { text: '网关', link: '/api-examples' }
    //     ]
    //   },{
    //     text:'网关',
    //     items:[
    //       { text: '电站', link: '/gateway/' },
    //     ]
    //   }
    // ],
  }
}
