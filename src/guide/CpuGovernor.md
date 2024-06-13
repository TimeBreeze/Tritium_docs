---
title: CPU混合调频器 
layout: doc
titleTemplate: Tritium_docs
---

### CpuGovernor - CPU混合调频器  
> 此模块通过在各种不同场景下选择合适的CPU频率以改善使用体验.  
#### params - 调频器参数  


:::tip
`enable` 字段为是否启用 
:::

```json
{
"CpuGovernor": {
    "enable": true,
    "params": {
      "activeRateHz": 60,
      "idleRateHz": 30,
      "activeDelay": 2000,
      "minFreqStep": 200
    },
  }
  ...//其他模块
}
```

::: tip 提示

工作频率是CPU混合调频器的重要参数, 通常Linux内核频率为300HZ,即3.33ms记录一次, 活跃时间/总时间*100即为CPU负载百分比.  
如果工作频率过高将会导致调频器的开销增加且无法获得有效的CPU负载(例如100HZ时只能获得0% 33% 66% 100%四种负载), 过低将导致调频器无法应对瞬时负载.  
最小频率差值为生成CPU频率表的关键参数, 设置得过小将会导致调频速度过慢,过大将会导致调频不够精细.  
:::

#### policies - 策略组    
此项配置类型为`ArrayJson`, 即数组中的每个Json元素对应一个策略组.  
每个策略组中的CPU频率将会同步控制, 应当与内核中每个cluster中包含的CPU对应.  
由于是按照数组的序号来为策略组编号的, 所以策略组的排序应与cluster的排序一致.  
例如SDM845为4+4设计, 即`policy0: CPU0-3; policy1: CPU4-7`.  
|字段            |类型    |定义                                    |
|:--------------|:-------|:---------------------------------------|
|coreNum        |int     |策略组中包含的CPU核心数量                 |
|perfScale      |int     |CPU相对同频算力值                        |
|lowPowerFreq   |int     |CPU功耗最低频率(单位:MHz)                |
|optimalFreq    |int     |CPU最优频率(单位:MHz)                    |
|modelFreq      |int     |用于生成CPU功耗模型的CPU频率(单位:MHz)     |
|modelPower     |int     |处于modelFreq时CPU的满载功耗(单位:mW)     |

`CpuGovernor`模块设定中的所有频率都将会被取近似值, 例如CPU频率表中有`1200, 1450, 1700`三个频率, 设定频率为`1500`, 最终取值将为`1450`.  

```JSON
  "policies": [
      {
        "coreNum": 4,
        "perfScale": 100,
        "lowPowerFreq": 500,
        "optimalFreq": 1200,
        "modelFreq": 2000,
        "modelPower": 360
      },
      {
        "coreNum": 3,
        "perfScale": 320,
        "lowPowerFreq": 500,
        "optimalFreq": 1700,
        "modelFreq": 2600,
        "modelPower": 1400
      },
      {
        "coreNum": 1,
        "perfScale": 320,
        "lowPowerFreq": 700,
        "optimalFreq": 1800,
        "modelFreq": 2600,
        "modelPower": 1750
      }
    ],

```
#### modes - 模式参数  
|字段            |类型     |定义                         |
|:---------------|:-------|:----------------------------|
|powerLimit      |int     |CPU整体功耗限制(单位:mW)       |
|perfMargin      |ArrayInt|CPU性能冗余(范围:0-100)        |
|upRateLatency   |int     |CPU频率提升延迟(单位:ms)       |
|overHeatTemp    |int     |过热温度(单位:°C)              |
|burstCapacity   |int     |频率加速容量(单位:W·ms)        |
|recoverTime     |int     |容量恢复时间(单位:ms)          |

CPU整体功耗限制会影响CPU频率上限, 调频器计算的是满载功耗,不会随CPU负载变化而改变.  
`perfMargin`使用`ArrayInt`即整数数组方式存储参数, 数组的序号对应策略组编号.  
CPU频率提升延迟用于降低CPU频率被提升得过高的几率, 每次升频时调频器都会根据频率提升延迟和能耗比变化判定是否需要升频.  
过热温度为触发调频器温度控制的阈值, 当CPU温度超过该值时将限制CPU功耗在`powerLimit`以内并忽略频率加速直到温度降低.  
当触发CPU频率加速时调频器将会忽略`powerLimit`, 如果实时功耗超过`powerLimit`就会消耗`burstCapacity`, 直到容量耗尽时恢复功耗限制.  
当实时功耗低于功耗限制值时将会逐渐恢复`burstCapacity`, `recoverTime`即为容量从耗尽到完全恢复所需的时间.  
##### freqBurst - CPU频率加速  
CPU频率加速可以在特定条件触发时调高CPU频率提升积极性, 用于降低部分场景下卡顿的几率.  
|字段            |类型   |定义                         |
|:---------------|:------|:---------------------------|
|durationTime    |int    |频率加速持续时间(单位:ms)     |
|lowLatency      |bool   |是否降低延迟                 |
|extraMargin     |int    |额外性能冗余(范围:0-100)      |
|boost           |int    |频率加速值(范围:0-100)       |

触发条件包含`tap` `swipe` `gesture` `heavyload` `jank` `bigJank`,分别在 点击屏幕 滑动屏幕 手势操作 重负载 掉帧 严重掉帧 时触发.  
触发的优先级为`none` < `tap` < `swipe` < `gesture` < `heavyload` < `jank` < `bigJank`, 当更高优先级的加速触发时将覆盖低优先级的加速.  
当要求调频器降低延迟时调频器将会以最快的速度提升CPU频率, 适用于检测到掉帧等需要迅速提升CPU频率的场景.  
`extraMargin`值用于提供额外的性能冗余, 计算公式如下: `acturalMargin = perfMargin + extraMargin`.  
`boost`值用于夸大实际的CPU负载, 计算公式如下: `cpuLoad = cpuLoad + (100 - cpuLoad) * boost / 100`.  
当CPU温度小于80度时将不限制最大功耗, CPU温度大于等于80度小于90度时最大功耗限制在5000mW, CPU温度大于等于90度时最大功耗限制在4000mW.

### 例如

```JSON {9,3}
"modes": {
        "powersave": {
        "powerLimit": 3000,
        "perfMargin": [
          10,
          10,
          10
         ],
        "upRateLatency": 800,
        "overHeatTemp": 80,
        
       ...
}


```

::: warning
当CPU温度小于80度时将不限制最大功耗, CPU温度大于等于80度时最大功耗限制在3000mW, 
:::


```JSON 
"modes": {
        "powersave": {
        "powerLimit": 2000,
        "perfMargin": [
          10,
          10,
          10
         ],
        "upRateLatency": 800,
        "overHeatTemp": 80,
        "burstCapacity": 8000,
        "recoverTime": 2000,
        "freqBurst": {
          "none": {
            "durationTime": 0,
            "lowLatency": false,
            "extraMargin": 0,
            "boost": 0
          },
          "tap": {
            "durationTime": 200,
            "lowLatency": false,
            "extraMargin": 10,
            "boost": 0
          },
          "swipe": {
            "durationTime": 100,
            "lowLatency": false,
            "extraMargin": 10,
            "boost": 10
          },
          "gesture": {
            "durationTime": 200,
            "lowLatency": false,
            "extraMargin": 20,
            "boost": 20
          },
          "heavyload": {
            "durationTime": 1000,
            "lowLatency": false,
            "extraMargin": 20,
            "boost": 0
          },
          "jank": {
            "durationTime": 100,
            "lowLatency": true,
            "extraMargin": 0,
            "boost": 40
          },
          "bigJank": {
            "durationTime": 200,
            "lowLatency": true,
            "extraMargin": 0,
            "boost": 60
          }
        }
      },
      "balance"，
      "performance",
      "fast",
}


```