---
title: 文件写入器
layout: doc
titleTemplate: Tritium_docs
---
### FileWriter - 文件写入器
> 此模块用于在触发某些场景时自动写入文件  
#### scenes - 场景触发器
当触发指定场景时将会自动向文件中写入预设的文本, 写入方式与`echo [text] > [path]`相同且效率更高, 写入单个文件的耗时通常不超过1ms.  
支持的场景如下:  
`init`: 调度初始化时触发, 仅执行一次.  
`screenOn`: 屏幕点亮时触发.  
`screenOff`: 屏幕熄灭时触发.  
`powersaveMode`: 切换到powersave模式时触发.  
`balanceMode`: 切换到balance模式时触发.  
`performanceMode`: 切换到performance模式时触发.  
`fastMode`: 切换到fast模式时触发.  
此项配置类型为`ArrayJson`, 即数组中的每个Json元素对应一个文件写入任务.  
|字段            |类型    |定义                      |
|:---------------|:-------|:------------------------|
|path            |string  |写入的目标地址            |
|text            |string  |需要写入的文本     | 

## 举个例子
::: tip
当某个节点写入文本时，`path` 应该是绝对路径，而不是相对路径，例如下面，目标路径为`/dev/cpuset/restricted/cpus`，写入的文本是 `0-3`
:::

```json {7,8}

"FileWriter": {
    "enable": true,
    "scenes": {
      "init": [
        {
          "path": "/dev/cpuset/restricted/cpus",
          "text": "0-3"
        },
        {
          "path": "/dev/cpuset/system-background/cpus",
          "text": "0-3"
        },
        {
          "path": "/dev/cpuset/background/cpus",
          "text": "0-3"
        },
        {
          "path": "/dev/cpuset/foreground/cpus",
          "text": "0-7"
        },
        {
          "path": "/dev/cpuset/top-app/cpus",
          "text": "0-7"
        }
      ],
      "screenOn": [],
      "screenOff": [],
      "powersaveMode": [],
      "balanceMode": [],
      "performanceMode": [],
      "fastMode": []
    }
  }
```