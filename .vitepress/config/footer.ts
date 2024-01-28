// footer.ts

import type { CustomConfig } from './types'

export function footer(): CustomConfig['footer'] {
  return {
    qrcodeTitle: '开发反馈群',
    qrcodeMessage: '欢迎QQ扫码联系我们',
    qrcodeLink: 'https://jq.qq.com/?_wv=1027&k=nbveGrfQ',
    navigation: [
      {
        title: '关于',
        items: [
          {
            text: '加入我们',
            link: '/join',
          },
          {
            text: '友情链接',
            link: '/friends-links',
          },
        ],
      },
      {
        title: '政策',
        items: [
          {
            text: '免责声明',
            link: '/disclaimer',
          },
          {
            text: '用户协议',
            link: '/agreement',
          },
        ],
      },
    ],
  }
}
