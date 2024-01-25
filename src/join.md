---
title: 加入我们
layout: doc
titleTemplate: 空荧酒馆
description: 加入我们
---

# 加入我们

为了进一步完善和优化项目，我们诚招各位小伙伴加入团队一起完成项目，本项目及其衍生项目完全免费。
或者如果您有任何其他有任何好的想法或者设计，也欢迎加入我们一起实现。

:::raw

> ## 自定义配置文件
>
> [立即申请](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=AQ5hVKOY6qvzMrr91SXOx-IAzHOP9Ash&authKey=aqDLyIeABeDLQ5lcVbaBB%2BDUrRdGcb%2BkGJrwmM3uEaUfVfTnLj019izlWiQc5KJb&noverify=0&group_code=955219205)

### 负责内容

1. 负责根据开发者提供config文件，对参数进行调试修改；

:::

:::raw

> ## 参加测试
>
	> [立即申请](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=AQ5hVKOY6qvzMrr91SXOx-IAzHOP9Ash&authKey=aqDLyIeABeDLQ5lcVbaBB%2BDUrRdGcb%2BkGJrwmM3uEaUfVfTnLj019izlWiQc5KJb&noverify=0&group_code=955219205)

### 负责内容

1. 负责根据修改过的自定义配置导入使用，反馈测试数据；

:::



<script setup>
import { useUrlSearchParams } from '@vueuse/core'
import { onMounted } from 'vue'
import { isNumber } from '../.vitepress/theme/utils'

const params = useUrlSearchParams('history')
const group = [
  {id: 'dd', link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=-HGS3II1no-AEcWHYdrhsJCN2IfKQeji&authKey=qbjuuv5VygEdFUAZSCCr2kim3V0lYvLvRjJwM7nv8KplMKjVAO4m2FuDovmcx%2FJP&noverify=0&group_code=522563995 '},
  {id: 'kf', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=wXbtoDmXCjlR8iJ-3lRwdNIOWio3quit&jump_from=webapi&authKey=aS/Be7vKSbcu/6zrmYVlpF6DsSnkHVMGT6Arn+RU+IiJf8ItKIFEXnVvfFmOL9We' }
]

function jump() {
    const target = String(params.q).toLocaleLowerCase()

    group.forEach((val) => {
      if (val.id === target) {
        location.href = val.link
      }
    })
}

onMounted(()=> {
  jump()
})
</script>

<style lang="scss" scoped>

.vp-raw {
  padding: 0 28px 24px 28px;
  box-shadow: var(--vp-shadow-2);
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 36px;
  font-size: 15px;
  transition: all .5s,box-shadow .25s ease,border-color .25s ease;
  border-radius: 6px;
  background-color: var(--vp-custom-block-info-bg);
  margin-top: 2rem;
  &::after {

  }
  
  .layer.tiny {
  z-index: -2;
  width: 80%;
  transform: translate(-50%,12px);
  background: #F1F2F3;
  }
  
  &:hover{
    transform: translate3d(0, -8px, 0);
    box-shadow: var(--vp-shadow-3);
  }
    
  .header-anchor {
    display: none;
  }
  h3 {
    margin: 0;
  }
  code {
    font-weight: 600;
  }
  blockquote {
    display: flex;
    border-left: none;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid var(--vp-c-divider);
    padding-bottom: 18px;
    padding-left: 0;
    h2 {
      padding-top: 0;
      letter-spacing: 0;
      margin: 0;
    }
    a {
      display: inline-block;
      border-radius: 6px;
      padding: 0 20px;
      line-height: 34px;
      font-size: 14px;
      border-color: var(--vp-button-brand-border);
      color: var(--vp-button-brand-text);
      background-color: var(--vp-button-brand-bg);
      border: 1px solid transparent;
      text-align: center;
      font-weight: 600;
      white-space: nowrap;
      transition: color 0.25s, border-color 0.25s, background-color 0.25s;
      text-decoration: none;
      &:hover {
        border-color: var(--vp-button-brand-hover-border);
        color: var(--vp-button-brand-hover-text);
        background-color: var(--vp-button-brand-hover-bg);
      }
    }
  }
}
</style>
