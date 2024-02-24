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
|activeRateHz    |int     |活跃时工作频率            |
|idleRateHz      |int     |空闲时工作频率            |
|preferredFreq   |ArrayInt|偏好GPU频率(单位:MHz)     |

当GPU负载为0时调频器按照`idleRateHz`频率工作, 当负载非0时调频器按照`activeRateHz`频率工作.  
由于联发科内核提供的GPU频率数量过多, 此调频器将只会选取部分GPU频率,具体信息请查看调度日志.  
`preferredFreq`为偏好的GPU频率, 调度选取GPU频率时将优先考虑这些频率.  
#### modes - 模式参数 
|字段            |类型    |定义                      |
|:---------------|:-------|:------------------------|
|maxFreq         |int     |GPU频率上限(单位:MHz)     |
|minFreq         |int     |GPU频率下限(单位:MHz)     |
|upRateThres     |int     |GPU升频阈值(范围:0-100)   |
|downRateDiff    |int     |GPU降频差值(范围:0-100)   |

当GPU负载大于`upRateThres`时提升频率, 当GPU负载减少的差值大于`downRateDiff`时降低频率.  
例如: 设置`upRateThres=90, downRateDiff=10`, 当GPU负载为`75`时降低GPU频率, 当GPU负载为`85`时GPU频率不变,当GPU负载为`95`时提升GPU频率.  
`upRateThres`的值越小升频越积极, `downRateDiff`的值越大降频越缓慢, `downRateDiff`的值不得大于`upRateThres`.  

```json

"MtkGpuGovernor": {
    "enable": true,
    "params": {
      "activeRateHz": 60,
      "idleRateHz": 30,
      "preferredFreq": [
        540,
        660,
        770
      ]
    },
    "modes": {
      "powersave": {
        "maxFreq": 540,
        "minFreq": 0,
        "upRateThres": 90,
        "downRateDiff": 10
      },
      "balance": {
        "maxFreq": 660,
        "minFreq": 0,
        "upRateThres": 80,
        "downRateDiff": 10
      },
      "performance": {
        "maxFreq": 770,
        "minFreq": 0,
        "upRateThres": 70,
        "downRateDiff": 10
      },
      "fast": {
        "maxFreq": 890,
        "minFreq": 0,
        "upRateThres": 70,
        "downRateDiff": 20
      }
    }
  },
```