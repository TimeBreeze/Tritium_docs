---
title: Trigger场景触写入模块
layout: doc
titleTemplate: Tritium_docs
---
### Trigger场景触发写入模块
> 支持在特定场景触发时调整Property值和写入文件以改变调度策略， 例如提高CPU调频器的冗余. 

#### scenes - 场景触发器
当触发指定场景时将会自动向文件中写入预设的文本, 写入方式与`echo [text] > [path]`相同且效率更高, 写入单个文件的耗时通常不超过1ms.  
支持的场景如下:  
- `init`: 调度初始化时触发, 仅执行一次.  
- `screenOn`: 屏幕点亮时触发.  
- `screenOff`: 屏幕熄灭时触发.  
- `powersaveMode`: 切换到powersave模式时触发.  
- `balanceMode`: 切换到balance模式时触发.  
- `performanceMode`: 切换到performance模式时触发.  
- `fastMode`: 切换到fast模式时触发.  

此项配置类型为`ArrayJson`, 即数组中的每个Json元素对应一个文件写入任务.  
|字段            |类型    |定义                      |
|:---------------|:-------|:------------------------|
|path            |string  |写入的目标地址            |
|text            |string  |需要写入的文本            | 

:::tip
`path`字段为写入的目标地址, 例如`/sys/devices/system/cpu/cpu0/cpufreq/scaling_max_freq`.
`text`字段为需要写入的文本, 例如`2000000`.
:::

```json{7}
  "Trigger": {
    "enable": true,
    "scenes": {
      "init": {
        "setProperty": [],
        "writeFile": [
          {"path": "/dev/cpuset/restricted/cpus", "text": "0-3"},
          {"path": "/dev/cpuset/system-background/cpus", "text": "0-3"},
          {"path": "/dev/cpuset/background/cpus", "text": "0-3"},
          {"path": "/dev/cpuset/foreground/cpus", "text": "0-7"},
          {"path": "/dev/cpuset/top-app/cpus", "text": "0-7"}
        ]
      },
      "screenOn": {
        "setProperty": [],
        "writeFile": []
      },
    
    },
```
#### hints - 场景触发器  
触发条件包含`tap` `swipe` `gesture` `heavyload` `jank` `bigJank`,分别在 点击屏幕 滑动屏幕 手势操作 重负载 掉帧 严重掉帧 时触发.  
触发的优先级为`none` < `tap` < `swipe` < `gesture` < `heavyload` < `jank` < `bigJank`, 当更高优先级的加速触发时将覆盖低优先级的加速.  

|字段            |类型    |定义                      |
|:---------------|:-------|:------------------------|
|durationTime            |int  |触发持续时间(单位:ms)   |
|cpu.boost               |int  |频率加速值(范围:0-100)  |
|cpu.extra_margin        |int  |额外性能冗余(范围:0-100)|
|cpu.low_latency         |bool |是否降低延迟            |
|mtk_gpu.min_freq        |int  |gpu工作频率下限        | 
|mtk_gpu.boost           |int  |频率加速值(范围:0-100)  |
|mtk_gpu.extra_margin    |int  |额外性能冗余(范围:0-100) | 
|mtk_gpu.low_latency     |bool |是否降低延迟             |
|devfreq.ddr.min_freq    |int  |ddr空闲频率下限          | 
|devfreq.gpu.min_freq    |int  |gpu空闲频率下限          |

当要求调频器降低延迟时调频器将会以最快的速度提升CPU频率, 适用于检测到掉帧等需要迅速提升CPU频率的场景.  
`extraMargin`值用于提供额外的性能冗余, 计算公式如下: `acturalMargin = perfMargin + extraMargin`. `boost`值用于夸大实际的CPU负载, 计算公式如下: `cpuLoad = cpuLoad * freq * (1 + boost / 100)`.

`mtk_gpu.min_freq`和`devfreq.gpu.min_freq`分别为工作和空闲频率下限, 用于设置GPU的最低工作频率和最低空闲频率.

GPU空闲频率下限用于设置GPU的最低空闲频率, 例如`devfreq.gpu.min_freq`为`0`时，GPU将会在空闲时降至最低频率.
DDR空闲频率下限用于设置DDR的最低空闲频率, 例如`devfreq.ddr.min_freq`为`0`时，DDR将会在空闲时降至最低频率.

无论是GPU还是DDR的频率下限，都无法达到锁住某个频率的效果，只能在空闲时降至最低频率，(实际情况受调频器工作频率与自动选择影响，例如`devfreq.ddr.min_freq`设置为`800`，那么大概率DDR不会选择在这个频率，因为受实际负载和实际性能需求，过低的频率会导致设备卡死等意外情况)
:::danger
`mtk_gpu.min_freq`和`devfreq.ddr.min_freq`用于设置GPU和DDR的最低空闲频率, 应与[Thermal温度过载保护模块](./Thermal.md)中字段`devfreq.ddr.max_freq`和`devfreq.gpu.max_freq`注意，max应大于min，否则可能导致意想不到的结果
:::
```json
"hints": {
      "none": {
        "durationTime": 0,
        "modes": {
          "powersave": {
            "setProperty": [
              {"name": "cpu.boost", "value": 0},
              {"name": "cpu.extra_margin", "value": 0},
              {"name": "cpu.low_latency", "value": false},
              {"name": "mtk_gpu.min_freq", "value": 0},
              {"name": "mtk_gpu.boost", "value": 0},
              {"name": "mtk_gpu.extra_margin", "value": 0},
              {"name": "mtk_gpu.low_latency", "value": false},
              {"name": "devfreq.ddr.min_freq", "value": 0},
              {"name": "devfreq.gpu.min_freq", "value": 0}
            ],
            "writeFile": []
          },
          "balance"
          ... // 省略其他模式
        }
      },
      "tap"
      ... // 省略其他触发条件
```

:::warning 节选自CuToolbox V8.2.0 Alpha更新日志
[Trigger] 新增的模块, 支持在特定场景触发时调整Property值和写入文件以改变调度策略, 例如提高CPU调频器的冗余.
:::
