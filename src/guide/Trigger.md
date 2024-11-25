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
|text            |string  |需要写入的文本            | 

#### hints - 场景触发器  
触发条件包含`tap` `swipe` `gesture` `heavyload` `jank` `bigJank`,分别在 点击屏幕 滑动屏幕 手势操作 重负载 掉帧 严重掉帧 时触发.  
触发的优先级为`none` < `tap` < `swipe` < `gesture` < `heavyload` < `jank` < `bigJank`, 当更高优先级的加速触发时将覆盖低优先级的加速.  

|字段            |类型    |定义                      |
|:---------------|:-------|:------------------------|
|durationTime            |int  |触发持续时间(单位:ms)          |
|cpu.boost            |int  |频率加速值(范围:0-100)         |
|cpu.extra_margin            |int  |额外性能冗余(范围:0-100)       |
|cpu.low_latency            |bool  |是否降低延迟          |
|mtk_gpu.min_freq            |int  |需要写入的文本            | 
|mtk_gpu.boost            |int  |频率加速值(范围:0-100)         |
|mtk_gpu.extra_margin            |int  |额外性能冗余(范围:0-100)              | 
|mtk_gpu.low_latency            |bool  |是否降低延迟          |
|devfreq.ddr.min_freq            |int  |ddr空闲频率下限        | 
|devfreq.gpu.min_freq            |int  |gpu空闲频率下限          |

当要求调频器降低延迟时调频器将会以最快的速度提升CPU频率, 适用于检测到掉帧等需要迅速提升CPU频率的场景.  
`extraMargin`值用于提供额外的性能冗余, 计算公式如下: `acturalMargin = perfMargin + extraMargin`.  
`boost`值用于夸大实际的CPU负载, 计算公式如下: `cpuLoad = cpuLoad + (100 - cpuLoad) * boost / 100`. 

### Thermal温度过载保护模块
>支持在芯片过热时调整Property值以改变调度策略, 例如降低CPU的最大功耗和限制GPU的最高频率.

#### params - 调频器参数  
|字段             |类型    |定义                     |
|:---------------|:-------|:-----------------------|
|interval    |int     |空闲工作频率            |
|actionDelay      |int     |活动工作频率      |
|matchRule  |null  | null   |

#### modes - 调频器参数  
|字段             |类型    |定义                     |
|:---------------|:-------|:-----------------------|
|temp    |ArrayInt     |过热温度(范围:0-100°C)       |
|cpu.max_power      |int     |CPU功耗上限     |
|mtk_gpu.max_freq    |int     |GPU频率上限            |
|devfreq.ddr.max_freq      |int     |ddr频率余量上限    |
|devfreq.gpu.max_freq    |int     |GPU频率余量上限            |

过热温度为触发调频器温度控制的阈值,当temp设置为-1时则代表忽略过热温度，例如temp设置为80时则表示当CPU温度超过80°C时将触发该字段所包含的变量