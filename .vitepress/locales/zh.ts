import { baseHelper } from '../theme/utils'
import { socialList } from '../theme/composables/socialList'
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import type { CustomConfig } from './types'

export const META_URL = 'https://oldmemories.gitee.io/yunzai-bot-docs/'
export const META_TITLE = 'Yunzai bot 构建文档'
export const META_DESCRIPTION = 'Yunzai bot 构建文档。'
export const META_KEYWORDS =
  '基于vitepress书写的yunzai bot 构建文档'
export const META_IMAGE = './刻晴Q.png'
export const LOCAL_CODE = 'zh-CN'
export const LOCAL_BASE = ''

export const zhConfig: LocaleSpecificConfig<
  DefaultTheme.Config & CustomConfig
> = {
  titleTemplate: 'Yunzai bot ',
  description: '123123',
    head: [
  ['link', { rel: 'icon', href: './刻晴Q.png' }],
  ['link', { rel: 'stylesheet', href: '/styles/custom.css' }],
  ['meta', { name: 'author', content: '旧忆 残梦' }],
  ['meta', { name: 'keywords', content: '基于vitepress书写的yunzai bot 构建文档' }],

  ['meta', { name: 'HandheldFriendly', content: 'True' }],
  ['meta', { name: 'MobileOptimized', content: '320' }],
  ['meta', { name: 'theme-color', content: '#000000' }],
  ['meta', { name: 'baidu_union_verify', content: '19bd8ed3f02a91e23043efdf1d823107' }],
  ],
  themeConfig: {
    siteTitle: 'Yunzai bot 文档',
    keyword: META_KEYWORDS,
    description: META_DESCRIPTION,
    image: META_IMAGE,
    outlineTitle: '本页目录',
    logo: './刻晴Q.png',
    lastUpdatedText: '更新日期',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '更改语言',
    notFound: {
      title: '这个页面找不到了',
      quote: '可能跟温迪一起出游了吧',
      linkLabel: '回到首页',
    },
    team: {
      title: '关于团队',
      desc: 'Yunzai bot的背后是一个基本来自中国的团队，以下是部分成员的个人信息。',
      coreMember: {
        title: '核心团队成员',
        desc: '核心团队成员是那些积极长期参与维护一个或多个核心项目的人。 他们对Yunzai bot的维护与开发做出了重大贡献。',
      },
      emeritiMember: {
        title: '名誉核心团队',
        desc: '我们在此致敬过去曾做出过突出贡献的不再活跃的团队成员。',
      },
      partnerMember: {
        title: '社区伙伴',
        desc: '我们与这些主要合作伙伴建立了更加亲密的关系，经常与他们就即将到来的功能展开合作。',
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kongying-tavern/' },
      {
        icon: {
          svg: socialList.gitee.icon,
        },
        link: 'https://gitte.com/Oldmemorie/',
        ariaLabel: 'gitte',
      },
      {
        icon: {
          svg: socialList.coolapk.icon,
        },
        link: 'https://www.coolapk.com/u/21210032?from=qr/',
        ariaLabel: 'coolapk',
      },
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    payment: {
      wechatpay: {
        name: '微信支付',
        address: 'wxp://f2f0dd1rszrnqJc_gnlwV_lRX5dlZ1Dtn9rp',
      },
      alipay: {
        name: '支付宝',
        address: 'https://qr.alipay.com/tsx11609thmpw9odmvdlxd6',
      },
      qqpay: {
        name: 'QQ 支付',
        address:
          'https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&a=1&u=790489566&ac=CAEQ3tP3-AIY0v2k_AU%3D_xxx_sign&n=AAAAAAAA&f=wallet',
      },
      paypal: {
        name: 'Paypal',
        address: 'https://www.paypal.com/paypalme/yuanshenditu',
      },
      bilibili: {
        name: 'bilibili',
        address: 'https://space.bilibili.com/518076785',
      },
    },
    editLink: {
      pattern: 'https://oldmemories.gitee.io/yunzai-bot-docs/',
      text: '报告错误',
    },
    sidebar: baseHelper(sidebar(), LOCAL_BASE),
    footer: baseHelper(footer(), LOCAL_BASE),
    nav: baseHelper(nav(), LOCAL_BASE),
  },
}

function nav(): DefaultTheme.NavItem[] {
  return [
  {
    text: '指导',
    link: '/guide/介绍/什么是Yunzai bot.md',
    activeMatch: '/guide/'
  },
  {
    text: 'FAQ',
    link: 'FAQ/FAQ.md',
    activeMatch: 'FAQ/FAQ.md'
  },
  {
    text: '主页',
    link: 'index.md',
    activeMatch: '/index.md/'
  },
  
  {
    text: '关于',
    items: [
      { text: '关于文档', link: '/about/index', activeMatch: '/about/index.md' },
      { text: '关于我', link: '/about/me', activeMatch: '/about/me.md' },
      { text: 'MIT', link: '/about/MIT', activeMatch: '/about/MIT.md' },
      { text: '贡献者', link: '/about/Contributors', activeMatch: '/about/Contributors.md' },
    ],
    activeMatch: '/about/' // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
  },
 ]
}

function footer(): CustomConfig['footer'] {
  return {
    qrcodeTitle: '反馈群',
    qrcodeMessage: '欢迎QQ扫码联系我们',
    qrcodeLink: 'https://qm.qq.com/cgi-bin/qm/qr?authKey=7N0CiBcvD2KqE2d7GBxz9OA1F14mmhGFANC1xKYqlfVXdUYMkvxneKaiw42aSvyn&k=2MxkLTWk4LNabvMRxWLNlUr2ePqMYtPf&noverify=0',
    navigation: [
      {
        title: '关于',
        items: [
          {
            text: '我们团队',
            link: '/team',
          },
          {
            text: '赞助鸣谢',
            link: '/support-us',
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
            text: '隐私政策',
            link: '/privacy',
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

function sidebar(): DefaultTheme.SidebarItem[] {
  return {
// This sidebar gets displayed when a user
      // is on `guide` directory.
      '/guide/': [
        {
          text: '介绍',
          items: [
            { text: '什么是Yunzai bot', link: '/guide/介绍/什么是Yunzai bot.md' },
            { text: '准备工作', link: '/guide/介绍/准备工作.md' },
          ]
        },
        {
          text: '开始',
          items: [
            { text: '选择设备', link: '/guide/开始/选择设备.md' },
            {
              text: '脚本部署',
              items: [
                { text: 'TRSS管理脚本', link: '/guide/开始/脚本部署/TRSS管理脚本.md' },
                { text: '长楠脚本', link: '/guide/开始/脚本部署/长楠脚本.md' },
                { text: 'Bot-Help', link: '/guide/开始/脚本部署/Bot-Help.md' },
                { text: 'Ubuntu-键安装i脚本', link: '/guide/开始/脚本部署/Ubuntu-键安装Miao-Yunzai脚本.md' },
                { text: 'Yzai-V3 Ubuntu一键部署', link: '/guide/开始/脚本部署/Yzai-V3 Ubuntu一键部署' },
                { text: '3QNmoqy管理脚本', link: '/guide/开始/脚本部署/3QNmoqy-Yunzai.bat Yunzai-Bot管理脚本' },
                
              ]
            },
            {
              text: '手动部署',
              items: [
                { text: '手动部署', link: '/guide/开始/手动部署/手动部署.md' },
                { text: 'Android手动部署', link: '/guide/开始/结构目录.md' },
                { text: 'windows手动部署', link: '/guide/开始/开始.md' },
                { text: '服务器手动部署', link: '/guide/开始/结构目录.md' },
              ]
            },
            { text: '结构目录', link: '/guide/开始/结构目录.md' },
          ]
        }
      ],
  }
}
