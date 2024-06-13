import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
    {
      text: '了解更多',
      items: [
        {
          text: '加入我们',
          link: '/join.md',
        },
        {
          text: '了解团队',
          link: '/team.md',
        },
      ],
    },
    {
      text: '更新日志',
      items: [
        {
          text: '更新日志',
          link: '/log.md',
        },
      ],
    },
    {
      text: '法律相关',
      items: [
        {
          text: '免责声明',
          link: '/disclaimer.md',
        },
        {
          text: '用户协议',
          link: '/agreement.md',
        },
      ],
    }
];