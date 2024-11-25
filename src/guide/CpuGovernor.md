---
title: CPU混合调频器 
layout: doc
titleTemplate: Tritium_docs
---

### CpuGovernor - CPU混合调频器  
> 此模块通过在各种不同场景下选择合适的CPU频率以改善使用体验.  
#### params - 调频器参数  
|字段             |类型   |定义                 |
|:---------------|:------|:--------------------|
|maxRateHz    |int    |工作频率上限        |
|minRateHz      |int    |工作频率下限       |
|activeDelay     |int    |活跃状态延迟          |
|FreqStep     |int    |频率差值          |


:::tip
`enable` 字段为是否启用 
:::

```json{3,5-6}
{
"CpuGovernor": {
    "enable": true,
    "params": {
      "maxRateHz": 100,
      "minRateHz": 20,
      "activeDelay": 2000,
      "freqStep": 200
    },
  }
  ...//其他模块
}
```

::: tip 提示

工作频率是CPU混合调频器的重要参数, 通常Linux内核频率为300HZ,即3.33ms记录一次, 活跃时间/总时间*100即为CPU负载百分比.  
如果工作频率过高将会导致调频器的开销增加且无法获得有效的CPU负载(例如100HZ时只能获得0% 33% 66% 100%四种负载), 过低将导致调频器无法应对瞬时负载.  
最小频率`freqStep`差值为生成CPU频率表的关键参数, 设置得过小将会导致调频速度过慢,过大将会导致调频不够精细.  
:::

:::warning 节选自CuToolbox V8.2.0 Alpha更新日志
1. 改进调频器Timer根据不同场景自动调整工作频率的策略, 降低开销的同时允许更高的工作频率(`100HZ`).
  
2.优化功耗模型的生成, 区分`小核/中核/大核`, 更贴近CPU满载时的真实功耗.`little-core,medium-core,big-core`
:::

#### policies - 策略组    
此项配置类型为`ArrayJson`, 即数组中的每个Json元素对应一个策略组.  
每个策略组中的CPU频率将会同步控制, 应当与内核中每个cluster中包含的CPU对应.  
由于是按照数组的序号来为策略组编号的, 所以策略组的排序应与cluster的排序一致.  
例如SDM845为4+4设计, 即`policy0: CPU0-3; policy1: CPU4-7`.  

|字段            |类型    |定义                                    |
|:--------------|:-------|:---------------------------------------|
|coreNum        |int     |策略组中包含的CPU核心数量                 |
|perfRatio      |int     |CPU相对同频算力值                         |
|lowPowerFreq   |int     |CPU功耗最低频率(单位:MHz)                 |
|modelType      |string  |策略组核心类型                            |
|optimalFreq    |int     |CPU最优频率(单位:MHz)                     |
|modelFreq      |int     |用于生成CPU功耗模型的CPU频率(单位:MHz)     |
|modelPower     |int     |处于modelFreq时CPU的满载功耗(单位:mW)      |

`CpuGovernor`模块设定中的所有频率都将会被取近似值, 例如CPU频率表中有`1200, 1450, 1700`三个频率, 设定频率为`1500`, 最终取值将为`1450`.  

```JSON{6,15,24}
    "policies": [
      {
        "coreNum": 4,
        "perfRatio": 100,
        "lowPowerFreq": 600,
        "optimalFreq": 1600,
        "modelType": "little-core",
        "modelFreq": 2000,
        "modelPower": 320
      },
      {
        "coreNum": 3,
        "perfRatio": 320,
        "lowPowerFreq": 700,
        "optimalFreq": 1900,
        "modelType": "medium-core",
        "modelFreq": 2600,
        "modelPower": 1700
      },
      {
        "coreNum": 1,
        "perfRatio": 320,
        "lowPowerFreq": 900,
        "optimalFreq": 2000,
        "modelType": "medium-core",
        "modelFreq": 2600,
        "modelPower": 1800
      }
    ],

```
#### modes - 模式参数  
|字段            |类型     |定义                         |
|:---------------|:-------|:----------------------------|
|powerLimit      |int     |CPU整体功耗限制(单位:mW)      |
|multiLoadLimit  |bool  　|是否启用多核心负载　　         |
|multiLoadThres  |ArrayInt|多核心负载分配(范围:0-100)     |
|maxMargin       |ArrayInt|CPU性能冗余上限(范围:0-100)    |
|maxLatency      |int     |CPU频率提升延迟上限(单位:ms)   |


CPU整体功耗限制会影响CPU频率上限, 调频器计算的是满载功耗,不会随CPU负载变化而改变.  
对于是否启用多核心负载，如果将该字段设置为`true`,`multiLoadThres`字段将会被启用，反之则不会启用

`multiLoadThres`是判断是否是单核负载, 如果丛集里一颗核心负载减去其他核心平均负载的差值达到这个值就不限制频率, 否则就限制到`optimalFreq`
例如: SMD845为4+4设计, `multiLoadThres`为`[50, 50, 50]`, CPU0-2负载为80%, CPU3负载为20%, 该丛集频率将会被限制到将会限制`optimalFreq`频率.
```json{4,5}
     "modes": {
      "powersave": {
        "powerLimit": 3000,
        "multiLoadLimit": true,
        "multiLoadThres": [50, 50, 50],
        "maxMargin": [10, 10, 10],
        "maxLatency": [40, 40, 40]
      },
      "balance": {
        ...
      },
      "performance": {
        ...
      },
      "fast": {
        ...
      }
    }
```
`maxMargin`与`multiLoadThres`使用`ArrayInt`即整数数组方式存储参数, 数组的序号对应策略组编号.`maxMargin`被设置的越高则代表CPU性能冗余越大, 升频的几率越高.就越耗电.CPU频率提升延迟用于降低CPU频率被提升得过高的几率, 每次升频时调频器都会根据频率提升延迟和能耗比变化判定是否需要升频. 

 