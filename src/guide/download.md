---
title: 下载配置
layout: doc
---


# 下载配置文件并cutoolbox导入使用<Badge type="tip" text="推荐" />

### Title <Badge type="info" text="default" />
### Title <Badge type="tip" text="^1.9.0" />
### Title <Badge type="warning" text="beta" />
### Title <Badge type="danger" text="caution" />



可选择下方任意方式下载

<LinkGrid :items="downloadMethod" />

如果您有兴趣参与本项目的开发和维护，欢迎[加入我们](./join.md)参与其中~

## 客户端使用教程

```card
title: 使用手册
link: ./use
theme: medium
```



<script setup>
import { useUrlSearchParams } from '@vueuse/core'
import { onMounted } from 'vue'
import { isNumber } from '../../.vitepress/theme/utils'

const params = useUrlSearchParams('history')
const downloadMethod = [
  { id:'bd', name: '蓝奏云网盘', target: '_blank',secondary: '访问码：g2kn', link: 'https://chenzyyzd.lanzouq.com/i5ksM1m63vpe', icon: '/svg/蓝奏云.svg' 
  },
  { id: 'kk', name: 'github-release', target: '_blank', link: 'https://github.com/chenzyadb/CuprumTurbo-Scheduler/releases/tag/v18(20240124)', icon: '/svg/release.svg' 
  },
  { id: 'ty', name: '123云盘', target: '_blank', link: 'https://cloud.189.cn/t/YF7Fj2zIRVbi', icon: '/svg/123云盘.svg' 
  },
  { id:'gd', name: 'Alist', target: '_blank', link: 'http://175.178.3.56:5244/', icon: '/svg/alist.svg' }
]

function jump() {
    const target = String(params.q).toLocaleLowerCase()

    downloadMethod.forEach((val) => {
      if (val.id === target) {
        location.href = val.link
      }
    })
}

onMounted(()=> {
  jump()
})
</script>


