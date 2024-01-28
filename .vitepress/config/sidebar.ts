// sidebar.ts

import type { DefaultTheme } from 'vitepress'

export function sidebar(): DefaultTheme.SidebarItem[] {
  return {
    '/guide/': [
      {
        text: 'Guide',
        collapsed: false,
        items: [
          { text: '了解', link: '/guide/start' },
          { text: '下载', link: '/guide/download' },
          { text: '使用', link: '/guide/use' }
        ]
      }
    ],
    '/config/': [
      {
        text: 'Config',
        collapsed: false,
        items: [
          { text: 'Index', link: '/config/' },
          { text: 'Three', link: '/config/three' },
          { text: 'Four', link: '/config/four' }
        ]
      }
    ]
  }
}
