import { baseHelper } from '../theme/utils'
import { socialList } from '../theme/composables/socialList'
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import type { CustomConfig } from './types'

export const META_URL = 'https://github.com/Oldmemorie'
export const META_TITLE = 'Redemption Project'
export const META_DESCRIPTION = 'Redemption Project'
export const META_KEYWORDS =
  ''
export const META_IMAGE = './阿库娅.png'
export const LOCAL_CODE = 'zh-CN'
export const LOCAL_BASE = '/Redemption Project/'

export const zhConfig: LocaleSpecificConfig<
  DefaultTheme.Config & CustomConfig
> = {
  titleTemplate: 'Redemption Project ',
  description: '123123',
    head: [
  ['link', { rel: 'icon', href: './阿库娅.png' }],
  ['link', { rel: 'stylesheet', href: '/styles/custom.css' }],
  ['meta', { name: 'author', content: '旧忆 残梦' }],
  ['meta', { name: 'keywords', content: '基于著名GitHub项目uperf 进行调节，及其CPU&GPU降压调教' }],

  ['meta', { name: 'HandheldFriendly', content: 'True' }],
  ['meta', { name: 'MobileOptimized', content: '320' }],
  ['meta', { name: 'theme-color', content: '#000000' }],
  ['meta', { name: 'baidu_union_verify', content: '19bd8ed3f02a91e23043efdf1d823107' }],
  ],
  themeConfig: {
    siteTitle: 'Redemption Project',
    keyword: META_KEYWORDS,
    description: META_DESCRIPTION,
    image: META_IMAGE,
    outlineTitle: '本页目录',
    logo: './阿库娅.png',
    lastUpdatedText: '更新日期',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '更改语言',
    notFound: {
      title: '这个页面找不到了',
      quote: '可能跟可莉一起去炸鱼了吧',
      linkLabel: '回到首页',
    },
    team: {
      title: '关于团队',
      desc: 'Redemption Project的背后是一个基本来自中国的团队，以下是部分成员的个人信息。',
      coreMember: {
        title: '核心团队成员',
        desc: '核心团队成员是那些积极长期参与维护一个或多个核心项目的人。 他们对Redemption Project的维护与开发做出了核心贡献。',
      },
      emeritiMember: {
        title: '名誉核心团队',
        desc: '我们在此致敬过去曾做出过突出贡献的不再活跃的团队成员。',
      },
      partnerMember: {
        title: '社区伙伴',
        desc: '社区伙伴是参与到本计划的反馈&测试人员，他们为我们提供了大量的矫正数据',
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Olmemorie' },
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
    editLink: {
      pattern: 'https://oldmemories.github.io/Redemption Project/',
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
    link: '/guide/介绍/什么是Redemption Project.md',
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
 ]
}

function footer(): CustomConfig['footer'] {
  return {
    qrcodeTitle: '反馈群',
    qrcodeMessage: '欢迎QQ扫码联系我们',
    qrcodeLink: 'https://qm.qq.com/cgi-bin/qm/qr?authKey=KTuDLwDt00BdCg89qwad4Y4UpXaqLp4%2Bp32fJpDGiIesphW4yBpinyf3t0fl9jrP&k=yCWwXFsMWfjsgk_E_YRbcmq50Yze9bIr&noverify=0',
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
            { text: '什么是Redemption Project', link: '/guide/介绍/什么是Redemption Project.md' },
            { text: '准备工作', link: '/guide/介绍/准备工作.md' },
          ]
        },
        {
          text: '开始',
          items: [
            { text: '选择设备', link: '/guide/开始/开始.md' },
              ]
            },
      ],
  }
}
