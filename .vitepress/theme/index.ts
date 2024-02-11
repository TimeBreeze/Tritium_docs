// .vitepress/theme/index.ts
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './styles/vars.css'
import './styles/main.css'
import './styles/linkcard.css'
import timeline from "vitepress-markdown-timeline"; 
import googleAnalytics from 'vitepress-plugin-google-analytics'
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useData , useRoute } from 'vitepress';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import Card from '../theme/components/Card'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    googleAnalytics({
      id: 'G-NHBWV2NV00', //跟踪ID，在analytics.google.com注册即可
    })
    app.component('VPCard', Card)
  },
  
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
    // Get frontmatter and route
    const { frontmatter } = useData();
    
        
    // giscus配置
    giscusTalk({
      repo: 'TimeBreeze/Tritium_docs', //仓库
      repoId: 'R_kgDOKuS8tw id', //仓库ID
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
  
} satisfies Theme


