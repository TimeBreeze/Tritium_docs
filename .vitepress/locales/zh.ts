import { baseHelper } from '../theme/utils'
import { socialList } from '../theme/composables/socialList'
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import type { CustomConfig } from './types'
import { title } from 'process'

export const META_URL = 'https://github.com/Oldmemorie'
export const META_TITLE = 'Tritium'
export const META_DESCRIPTION = 'Tritium'
export const META_KEYWORDS =
  'CuprumTurbo Scheduler的衍生版本'
export const META_IMAGE = './阿库娅.png'
export const LOCAL_CODE = 'zh-CN'
export const LOCAL_BASE = ''


export const zhConfig: LocaleSpecificConfig<
  DefaultTheme.Config & CustomConfig
> = {
    themeConfig: {
    siteTitle: 'Tritium',
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
      desc: 'Tritium的背后是一个基本来自中国的团队，以下是部分成员的个人信息。',
      coreMember: {
        title: '核心团队成员',
        desc: '核心团队成员是那些积极长期参与维护一个或多个核心项目的人。 他们对Tritium的维护与开发做出了核心贡献。',
      },
      emeritiMember: {
        title: '名誉核心团队',
        desc: '名誉核心团队是那些即将维护自定义配置文件的人员，他们积极跟进上游并不断优化体验，',
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
      pattern: 'https://github.com/kongying-tavern/docs/edit/main/src/:path',
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
              link: '/日志.md',
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
        },
      ]
    }

function footer(): CustomConfig['footer'] {
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

function sidebar(): DefaultTheme.SidebarItem[] {
  return {
    // 当用户位于 `guide` 目录时，会显示此侧边栏
      '/guide/': [
        {
          text: 'Guide',
          collapsed: false,
          items: [
            { text: '开始', link: '/guide/start' },
            { text: '下载', link: '/guide/download' },
            { text: '使用', link: '/guide/use' }
          ]
        }
      ],

      // 当用户位于 `config` 目录时，会显示此侧边栏
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
