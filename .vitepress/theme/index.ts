import {
  onMounted,
  watch,
  nextTick,
  defineAsyncComponent,
  h,
  watchEffect,
} from 'vue'
import { useRoute, inBrowser, useData } from 'vitepress'
import mediumZoom from 'medium-zoom'
import DefaultTheme from 'vitepress/theme';
import DefaultTheme from 'vitepress/theme-without-fonts'
import Link from './components/Link.vue'
import Coins from './components/Coins.vue'
import googleAnalytics from '../plugins/googleAnalytics'
import Card from '../theme/components/Card'
import Badge from '../theme/components/Badge.vue'
import LinkGrid from '../theme/components/LinkGrid.vue'
import { createI18n } from 'vue-i18n'
import 'uno.css'
import './styles/vars.css'
import './styles/main.css'
import "vitepress-markdown-timeline/dist/theme/index.css"
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';


export default {
  ...DefaultTheme,

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () =>
        h(defineAsyncComponent(() => import('./components/Banner.vue'))),
    })
  },
  enhanceApp({ app }) {
    googleAnalytics({
      id: 'G-Q2K9DXZCEY',
      debug: false,
    })
    const i18n = createI18n({
      legacy: false,
      locale: 'zh-CN',
      fallbackLocale: '',
    })
    app.component('Link', Link)
    app.component('Coins', Coins)
    app.component('VPCard', Card)
    app.component('LinkGrid', LinkGrid)
    app.component('VPBadge', Badge)
  },
  setup() {
    const route = useRoute()
    const { lang } = useData()
    const initZoom = () => {
      mediumZoom('.main img:not(.no-zoomable)', {
        background: 'var(--vp-c-bg)',
      })
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () =>
        nextTick(() => {
          initZoom()
        }),
    )
    watchEffect(() => {
      if (inBrowser) {
        document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`
      }
    })
    // Get frontmatter and route
    const { frontmatter } = useData();
        
    // giscus配置
    giscusTalk({
      repo: 'Oldmemorie/Tritium_docs', //仓库
      repoId: 'R_kgDOKuS8tw', //仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'DIC_kwDOKuS8t84CcvVC', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
      }, 
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );
  },
}
