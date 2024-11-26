---
title: Thermal温度过载保护模块
layout: doc
titleTemplate: Tritium_docs
---

### Thermal温度过载保护模块
>支持在芯片过热时调整Property值以改变调度策略, 例如降低CPU的最大功耗和限制GPU的最高频率.

#### params - 调频器参数  
| 字段        | 类型 | 定义         |
| :---------- | :--- | :----------- |
| interval    | int  | 空闲工作频率 |
| actionDelay | int  | 活动工作频率 |
| matchRule   | null | null         |

```json{3-5}
  "Thermal": {
    "params": {
      "interval": 1000,
      "actionDelay": 1000,
      "matchRule": null
    },
```

#### modes - 调频器参数  
| 字段                 | 类型     | 定义                   |
| :------------------- | :------- | :--------------------- |
| temp                 | ArrayInt | 过热温度(范围:0-100°C) |
| cpu.max_power        | int      | CPU整体功耗上限            |
| mtk_gpu.max_freq     | int      | GPU整体频率上限            |
| devfreq.ddr.max_freq | int      | DDR频率余量上限        |
| devfreq.gpu.max_freq | int      | GPU频率余量上限        |

:::tip
过热温度为触发调频器温度控制的阈值,当`temp`设置为`-1`时则代表忽略过热温度，例如temp设置为`80`时则表示当CPU温度超过`80°C`时将触发该字段所包含的变量,当超过90°C时将触发下一个字段.并由`setProperty`字段中的`name`和`value`来设置对应的属性值.
:::
::: warning
`powerLimit`在`boost extra_margin，low_latency`为`0/false`的时候生效，但是`max_power`还是会限制功耗，max_power的功耗限制是优先级最高
:::

```json{5,14,23}
 "modes": {
      "powersave": {
        "actions": [
          {
            "temp": -1, 
            "setProperty": [
              {"name": "cpu.max_power", "value": 8000},
              {"name": "mtk_gpu.max_freq", "value": 600},
              {"name": "devfreq.ddr.max_freq", "value": 10000},
              {"name": "devfreq.gpu.max_freq", "value": 10000}
            ]
          },
          {
            "temp": 80, 
            "setProperty": [
              {"name": "cpu.max_power", "value": 5000},
              {"name": "mtk_gpu.max_freq", "value": 500},
              {"name": "devfreq.ddr.max_freq", "value": 10000},
              {"name": "devfreq.gpu.max_freq", "value": 10000}
            ]
          },
          {
            "temp": 90, 
            "setProperty": [
              {"name": "cpu.max_power", "value": 2000},
              {"name": "mtk_gpu.max_freq", "value": 500},
              {"name": "devfreq.ddr.max_freq", "value": 10000},
              {"name": "devfreq.gpu.max_freq", "value": 10000}
            ]
          }
        ]
      },
```
:::warning 节选自CuToolbox V8.2.0 Alpha更新日志
[Thermal] 新增的模块, 支持在芯片过热时调整Property值以改变调度策略, 例如降低CPU的最大功耗和限制GPU的最高频率.
:::
