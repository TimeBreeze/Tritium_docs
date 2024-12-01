import { defineConfig } from 'vitepress'
import { metaData } from './config/constants';
import { head } from './config/head';
import { markdown } from './config/markdown';
import { themeConfig } from './config/theme';
import { createApp } from 'vue'



export
default defineConfig({

    title: "Tritium_docs",
    description: "A VitePress Site",

    // base: '/Tritium_docs/',
    lastUpdated: true,
    ignoreDeadLinks: true,
    srcDir: 'src',
    outDir: './dist',
    srcExclude: [],
    scrollOffset: 'header',
    cleanUrls: true,
    sitemap: {
        hostname: 'https://tritium.nightrainmilkyway.cn/',
    },

    locales: {
    root: {
      label: '中文',
      lang: 'en'
    },
    fr: {
      label: 'English',
      lang: 'fr', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/fr/guide' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的

      // 其余 locale 特定属性...
    }
  }

    head, // <head>内标签配置
    markdown: markdown, // Markdown配置
    themeConfig,
})