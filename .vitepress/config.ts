import Unocss from 'unocss/vite'
import MarkdownItFootnote from 'markdown-it-footnote'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig, HeadConfig } from 'vitepress'
import { colorPreviewPlugin } from './theme/markdown/colorPreview'
import { cardPlugin } from './theme/markdown/card'
import { imgLazyload } from '@mdit/plugin-img-lazyload'
import { figure } from '@mdit/plugin-figure'
import { imgSize, obsidianImageSize } from '@mdit/plugin-img-size'
import { mark } from '@mdit/plugin-mark'
import { sub } from '@mdit/plugin-sub'
import { sup } from '@mdit/plugin-sup'


import { zhConfig } from './locales/zh'

export const isProd = process.env.NODE_ENV === 'production'
export const commitRef = process.env.COMMIT_REF?.slice(0, 8) || 'dev'
export const productionHead: HeadConfig[] = [
  [
    'script',
    {
      id: 'clarity-script',
    },
    `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "gx0jeyqvg5")`,
  ],
  [
    'script',
    {
      id: 'application-json',
      type: 'application/ld+json',
    },
    `
    {"@context":"https://schema.org","@type":"WebPage","name":Kongying Tavern Genshin Interactive Map"}`,
  ],
]

export default defineConfig({
  lastUpdated: true,
  srcDir: 'src',
  outDir: './dist',
  srcExclude: [],
  scrollOffset: 'header',
  cleanUrls: true,
  sitemap: {
    hostname: 'https://yuanshen.site',
  },
  themeConfig: {
  //侧边栏文字更改(移动端) 
    sidebarMenuLabel:'目录',
    //返回顶部文字修改 
    returnToTopLabel:'返回顶部',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      ...zhConfig,
    },
   
  },

  ignoreDeadLinks: [
    // ignore exact url "/playground"
    '/playground',
    // ignore all localhost links
    /^https?:\/\/localhost/,
    // ignore all links include "/repl/""
    /\/repl\//,
    // custom function, ignore all links include "ignore"
    (url) => {
      return url.toLowerCase().includes('ignore')
    },
  ],
  vite: {
    server: {
      host: true,
      fs: {
        allow: ['../..'],
      },
    },
    resolve: {
      alias: [
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/Footer.vue', import.meta.url),
          ),
        },
        {
          find: /^.*\/VPSwitchAppearance\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/SwitchAppearance.vue', import.meta.url),
          ),
        },
      ],
    },
    plugins: [
      // https://github.com/antfu/unocss
      Unocss(),
    ],
    json: {
      stringify: true,
    },
  },
  markdown: {
    config(md) {
      md.use(MarkdownItFootnote)
      md.use(colorPreviewPlugin)
      md.use(cardPlugin)
      md.use(sub)
      md.use(sup)
      md.use(mark)
      md.use(imgLazyload)
      md.use(imgSize)
      md.use(obsidianImageSize)
      md.use(figure)
    },
  },
})
