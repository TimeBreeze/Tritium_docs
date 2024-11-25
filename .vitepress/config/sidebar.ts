// sidebar.ts
import type { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/guide/': [
      {
        text: 'Guide',
        collapsed: false,
        items: [
          { text: '了解', link: '/guide/start' },
          { text: '下载', link: '/guide/download' },
          { text: '使用', link: '/guide/use' }
        ]
      },
      {
        text: 'Customize',
        collapsed: false,
        items: [
          { text: '自定义开发', link: '/guide/Customize.md' },
          { text: 'JSON配置模块', link: '/guide/Json.md' },
          { text: 'CPU配置模块', link: '/guide/CpuGovernor.md' },
          { text: '线程配置模块', link: '/guide/ThreadSchedOpt.md' },
          { text: 'GPU配置模块', link: '/guide/MtkGpuGovernor.md' },
          { text: '场景触写入模块', link: '/guide/Trigger.md' }
        ]
      }
    ]
}
