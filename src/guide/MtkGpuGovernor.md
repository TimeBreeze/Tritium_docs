---
title: 联发科GPU调频器
layout: doc
titleTemplate: Tritium_docs
---
### MtkGpuGovernor - 联发科GPU调频器  
> 这个简易的GPU调频器可以满足对联发科GPU频率的基础调控  
#### params - 调频器参数  
|字段             |类型    |定义                     |
|:---------------|:-------|:-----------------------|
|baseRateHz    |int     |基准工作频率            |
|burstRateHz      |int     |突发工作频率      |

当GPU负载为0时调频器按照`baseRateHz`频率工作, 当负载非0时调频器按照`burstRateHz`频率工作.  
由于联发科内核提供的GPU频率数量过多, 此调频器将只会选取部分GPU频率,具体信息请查看调度日志.  

#### voltAdjust  - 电压调整
```
"voltAdjust": {
      "minVolt": 0,
      "maxVolt": 100000,
      "voltOffset": 0
    },
    ...
```
|字段             |类型    |定义                     |
|:---------------|:-------|:------------------------|
|minVolt         |int     |最低电压(单位:uV)         |
|maxVolt         |int     |最高电压(单位:uV)         |
|voltOffset      |int     |电压偏移值(单位:uV)       |

**`此功能仅用于适配某些默认电压表不可用的设备, 不建议在通用的配置文件中调整此项参数, 可能导致死机甚至烧毁硬件.`**
#### modes - 模式参数 
|字段            |类型    |定义                      |
|:---------------|:-------|:------------------------|
|margin         |ArrayInt   |GPU性能冗余(范围:0-100)     |
|upRateDelay         |int     |GPU升频延迟(单位:ms)     |
|downRateDelay     |int     |GPU降频延迟(单位:ms)   |

~~当GPU负载大于`upRateThres`时提升频率, 当GPU负载减少的差值大于`downRateDiff`时降低频率.~~
~~例如: 设置`upRateThres=90, downRateDiff=10`, 当GPU负载为`75`时降低GPU频率, 当GPU负载为`85`时GPU频率不变,当GPU负载为`95`时提升GPU频率.~~
~~`upRateThres`的值越小升频越积极, `downRateDiff`的值越大降频越缓慢, `downRateDiff`的值不得大于`upRateThres`.~~

```json
  "MtkGpuGovernor": {
    "enable": true,
    "params": {
      "baseRateHz": 20,
      "burstRateHz": 40
    },
    "voltAdjust": {
      "minVolt": 0,
      "maxVolt": 100000,
      "voltOffset": 0
    },
    "modes": {
      "powersave": {
        "margin": 10,
        "upRateDelay": 50,
        "downRateDelay": 50
      },
      "balance": {
        "margin": 20,
        "upRateDelay": 50,
        "downRateDelay": 50
      },
      "performance": {
        "margin": 30,
        "upRateDelay": 0,
        "downRateDelay": 50
      },
      "fast": {
        "margin": 30,
        "upRateDelay": 0,
        "downRateDelay": 50
      }
    }
  },
```