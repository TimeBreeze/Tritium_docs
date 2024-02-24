---
title: 线程调度优化
layout: doc
titleTemplate: Tritium_docs
---

### ThreadSchedOpt - 线程调度优化  
> 此模块通过智能分类线程来实现较为合理的线程调度策略  
  
ThreadSchedOpt模块基于线程名称和CPU占用等数据分类前台线程, 组别如下:  
`GameRenderThread`分组: 包含游戏程序中负责画面渲染的相关线程.   
`GameMainThread`分组: 包含游戏程序中的主线程.  
`GameProcessThread`分组: 包含游戏程序中负责数据处理的相关线程.  
`UIThread`分组: 包含应用程序中参与渲染用户界面的相关线程.  
`MediaThread`分组: 包含应用程序中负责媒体（例如音频/视频解码）的相关线程.  
`WebViewThread`分组: 包含应用程序中WebView组件的相关线程.  
`ProcessThread`分组: 包含应用程序中负责数据处理的相关线程.  
`CoProcessThread`分组: 包含应用程序中负责辅助处理的相关线程.  
`JunkThread`分组: 包含应用程序中负责日志记录和性能追踪等功能的垃圾线程.  
`Initial`分组: 初始状态.  
|字段           |类型    |定义                              |
|:--------------|:-------|:--------------------------------|
|cpus           |ArrayInt|此分组的cpu亲和性设定              |
|nice           |int     |此分组的调度优先级(范围:-20~19)    |

::: tip
cpu亲和性设定即为限制线程仅能在指定的CPU核心上运行, 例如`"cpus": [0, 1]`将限制线程仅能运行在CPU0, CPU1上.  
调度优先级与系统调度nice值定义相同, 范围为-20~19,数字越小优先级越高.  
:::

```json {5-8,11-16}

  "ThreadSchedOpt": {
    "enable": true,
    "GameRenderThread": {
      "cpus": [
        7
      ],
      "nice": -20
    },
    "GameMainThread": {
      "cpus": [
        4,
        5,
        6
      ],
      "nice": -20
    },
    "GameProcessThread": {
      "cpus": [
        4,
        5,
        6
      ],
      "nice": -16
    },
    "UIThread": {
      "cpus": [
        4,
        5,
        6
      ],
      "nice": -16
    },
    "MediaThread": {
      "cpus": [
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "nice": -20
    },
    "WebViewThread": {
      "cpus": [
        4,
        5,
        6,
        7
      ],
      "nice": -16
    },
    "ProcessThread": {
      "cpus": [
        4,
        5,
        6
      ],
      "nice": -12
    },
    "CoProcessThread": {
      "cpus": [
        0,
        1,
        2,
        3
      ],
      "nice": -12
    },
    "JunkThread": {
      "cpus": [
        0,
        1,
        2,
        3
      ],
      "nice": 0
    },
    "Initial": {
      "cpus": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ],
      "nice": 0
    }
  }

```