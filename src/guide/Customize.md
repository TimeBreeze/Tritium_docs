---
title: 自定义配置开发文档
layout: doc
titleTemplate: Tritium_docs
---


## CuprumTurbo V19 自定义配置开发文档 
> *本文档来自于上游开发者*我们只是对其字段进行通俗理解，当然我们不可能比开发者更懂这些参数

## 导航

* [JSON配置模块](./Json.md)
* [CPU配置模块](./CpuGovernor.md)
* [线程配置模块](./ThreadSchedOpt.md)
* [GPU配置模块](MtkGpuGovernor.md)
* [文件写入配置模块](./FileWriter.md)

## 完整config以高通865为例
```json
{
  "name": "Snapdragon865/865+/870",
  "author": "Suni",
  "configVersion": 10,
  "CpuGovernor": {
    "enable": true,
    "params": {
      "activeRateHz": 60,
      "idleRateHz": 30,
      "activeDelay": 2000,
      "minFreqStep": 200
    },
    "policies": [
      {
        "coreNum": 4,
        "perfScale": 100,
        "lowPowerFreq": 600,
        "optimalFreq": 1400,
        "modelFreq": 1800,
        "modelPower": 320
      },
      {
        "coreNum": 3,
        "perfScale": 300,
        "lowPowerFreq": 700,
        "optimalFreq": 1800,
        "modelFreq": 2420,
        "modelPower": 1400
      },
      {
        "coreNum": 1,
        "perfScale": 300,
        "lowPowerFreq": 800,
        "optimalFreq": 2000,
        "modelFreq": 2840,
        "modelPower": 1880
      }
    ],
    "modes": {
      "powersave": {
        "powerLimit": 1500,
        "perfMargin": [10, 10, 10],
        "upRateLatency": 600,
        "overHeatTemp": 65,
        "burstCapacity": 12000,
        "recoverTime": 4000,
        "freqBurst": {
          "none": {
            "durationTime": 0,
            "lowLatency": false,
            "extraMargin": 0,
            "boost": 0
          },
          "tap": {
            "durationTime": 300,
            "lowLatency": false,
            "extraMargin": 10,
            "boost": 5
          },
          "swipe": {
            "durationTime": 200,
            "lowLatency": false,
            "extraMargin": 10,
            "boost": 10
          },
          "gesture": {
            "durationTime": 100,
            "lowLatency": false,
            "extraMargin": 5,
            "boost": 10
          },
          "heavyload": {
            "durationTime": 1000,
            "lowLatency": false,
            "extraMargin": 10,
            "boost": 10
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
      "balance": {
        "powerLimit": 2800,
        "perfMargin": [15, 20, 20],
        "upRateLatency": 360,
        "overHeatTemp": 70,
        "burstCapacity": 16000,
        "recoverTime": 4000,
        "freqBurst": {
          "none": {
            "durationTime": 0,
            "lowLatency": false,
            "extraMargin": 0,
            "boost": 0
          },
          "tap": {
            "durationTime": 300,
            "lowLatency": false,
            "extraMargin": 10,
            "boost": 15
          },
          "swipe": {
            "durationTime": 360,
            "lowLatency": false,
            "extraMargin": 5,
            "boost": 10
          },
          "gesture": {
            "durationTime": 510,
            "lowLatency": false,
            "extraMargin": 15,
            "boost": 20
          },
          "heavyload": {
            "durationTime": 1100,
            "lowLatency": false,
            "extraMargin": 15,
            "boost": 20
          },
          "jank": {
            "durationTime": 500,
            "lowLatency": true,
            "extraMargin": 5,
            "boost": 40
          },
          "bigJank": {
            "durationTime": 960,
            "lowLatency": true,
            "extraMargin": 10,
            "boost": 50
          }
        }
      },
      "performance": {
        "powerLimit": 4600,
        "perfMargin": [10, 30, 40],
        "upRateLatency": 200,
        "overHeatTemp": 90,
        "burstCapacity": 20000,
        "recoverTime": 4000,
        "freqBurst": {
          "none": {
            "durationTime": 0,
            "lowLatency": false,
            "extraMargin": 0,
            "boost": 0
          },
          "tap": {
            "durationTime": 280,
            "lowLatency": false,
            "extraMargin": 0,
            "boost": 15
          },
          "swipe": {
            "durationTime": 390,
            "lowLatency": false,
            "extraMargin": 10,
            "boost": 10
          },
          "gesture": {
            "durationTime": 100,
            "lowLatency": false,
            "extraMargin": 0,
            "boost": 0
          },
          "heavyload": {
            "durationTime": 1200,
            "lowLatency": false,
            "extraMargin": 20,
            "boost": 25
          },
          "jank": {
            "durationTime": 530,
            "lowLatency": true,
            "extraMargin": 10,
            "boost": 40
          },
          "bigJank": {
            "durationTime": 1100,
            "lowLatency": true,
            "extraMargin": 15,
            "boost": 55
          }
        }
      },
      "fast": {
        "powerLimit": 10000,
        "perfMargin": [30, 80, 90],
        "upRateLatency": 0,
        "overHeatTemp": 95,
        "burstCapacity": 0,
        "recoverTime": 0,
        "freqBurst": {
          "none": {
            "durationTime": 0,
            "lowLatency": false,
            "extraMargin": 0,
            "boost": 0
          },
          "tap": {
            "durationTime": 100,
            "lowLatency": false,
            "extraMargin": 20,
            "boost": 0
          },
          "swipe": {
            "durationTime": 200,
            "lowLatency": false,
            "extraMargin": 10,
            "boost": 0
          },
          "gesture": {
            "durationTime": 100,
            "lowLatency": false,
            "extraMargin": 20,
            "boost": 0
          },
          "heavyload": {
            "durationTime": 1000,
            "lowLatency": false,
            "extraMargin": 20,
            "boost": 35
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
      }
    }
  },
  "ThreadSchedOpt": {
    "enable": true,
    "defaultCpus": [0, 1, 2, 3, 4, 5, 6, 7],
    "defaultPriority": 0,
    "appTypes": {
      "unity_genshin": {
        "pkgName": "*(.Yuanshen|.GenshinImpact)|*.ys.*",
        "symbol": null
      },
      "unity_common": {
        "pkgName": null,
        "symbol": "Unity*"
      },
      "unreal_engine": {
        "pkgName": null,
        "symbol": "(TaskGraph|RHIThread)*"
      },
      "minecraft": {
        "pkgName": null,
        "symbol": "MINECRAFT*"
      },
      "neox_engine": {
        "pkgName": "*(.mrzh|.qrzd|.jddsaef|.lglr|.zmq|.ldxy|.s4na|.g93na|.g78na|.onmyoji|.harrypotter|.moba|.party)*",
        "symbol": null
      },
      "sky_game": {
        "pkgName": "(com.netease.sky|com.tgc.sky)*",
        "symbol": null
      },
      "benchmark": {
        "pkgName": "com.futuremark.*|*[Bb]ench*",
        "symbol": null
      }
    },
    "schedRules": {
      "DEFAULT_RULE": [
        {
          "threadName": "MAIN_THREAD",
          "heavyCpus": null,
          "commonCpus": [4, 5, 6],
          "priority": -12
        },
        {
          "threadName": "*[Rr]ender*",
          "heavyCpus": [7],
          "commonCpus": [4, 5, 6],
          "priority": -20
        },
        {
          "threadName": "(GLThread|[Vv]sync|JNISurface|hwui|UiThread|ged-|mali-)*|*(.raster|.ui|.anim|.display)*",
          "heavyCpus": null,
          "commonCpus": [4, 5, 6],
          "priority": -12
        },
        {
          "threadName": "(glide-|Fresco|[Ii]mage|[Ll]auncher)*|*([Bb]lur|[Aa]nim|[Oo]verlay|[Cc]horeographer)*",
          "heavyCpus": null,
          "commonCpus": [4, 5, 6],
          "priority": -12
        },
        {
          "threadName": "(HWC release|GPU completion|FrameThread|FramePolicy|ScrollPolicy)*",
          "heavyCpus": null,
          "commonCpus": [0, 1, 2, 3],
          "priority": -20
        },
        {
          "threadName": "(Vlc|[Ii][Jj][Kk])*|*([Aa]udio|[Mm]ixer|[Vv]ideo|[Pp]layer|[Mm]edia|[Cc]odec|[Dd]ecode)*",
          "heavyCpus": null,
          "commonCpus": [0, 1, 2, 3, 4, 5, 6],
          "priority": -16
        },
        {
          "threadName": "(Chrome_|Compositor|CrGpuMain|CrRenderer|Viz|Gecko)*|*[Ww]eb[Vv]iew*",
          "heavyCpus": null,
          "commonCpus": [4, 5, 6],
          "priority": -12
        },
        {
          "threadName": "(WeexJsBridge|libweexjsb|V8 DefaultWork|hippy.js|mqt_)*|*[Jj]ava[Ss]cript*",
          "heavyCpus": null,
          "commonCpus": [4, 5, 6],
          "priority": -8
        },
        {
          "threadName": "*([Ww]ork|[Hh]andle|[Pp]ool|[Mm]essage|[Dd]ispatch|[Ee]xecutor|[Bb]ridge|[Cc]amera)*",
          "heavyCpus": null,
          "commonCpus": [0, 1, 2, 3, 4, 5, 6],
          "priority": -8
        },
        {
          "threadName": "(Chronos.|CRON.|AsyncTask|Thread-|Timer-)*",
          "heavyCpus": null,
          "commonCpus": [0, 1, 2, 3, 4, 5, 6],
          "priority": -8
        },
        {
          "threadName": "(HeapTask|HeapTrimmer|Finalizer|CleanupReferenc|GC)*",
          "heavyCpus": null,
          "commonCpus": [0, 1, 2, 3],
          "priority": -8
        },
        {
          "threadName": "(queued-work-|Jit thread pool|Signal Catcher|Profile Saver|ReferenceQueue)*",
          "heavyCpus": null,
          "commonCpus": [0, 1, 2, 3],
          "priority": -8
        },
        {
          "threadName": "(Moss|OkHttp|Okio|Rx|rx-)*|*([Nn]etwork|[Cc]ookie|[Ss]cheduler|[Cc]apture)*",
          "heavyCpus": null,
          "commonCpus": [0, 1, 2, 3],
          "priority": -8
        },
        {
          "threadName": "(BLog|xlog|[Bb]ugly|BUGLY|LogThread)*|*([Cc]rash|[Ll]ogger|[Rr]eport)*",
          "heavyCpus": null,
          "commonCpus": [0, 1, 2, 3],
          "priority": 0
        },
        {
          "threadName": "(APM-|TVKDL-|Firebase|koom|ADB-JDWP|MemoryInfra)*|*([Ww]atch[Dd]og|[Tt]racker|[Mm]onitor)*",
          "heavyCpus": null,
          "commonCpus": [0, 1, 2, 3],
          "priority": 0
        }
      ],
      "unity_genshin": [
        {
          "threadName": "MAIN_THREAD",
          "heavyCpus": null,
          "commonCpus": [0, 1, 2, 3, 4, 5, 6],
          "priority": -12
        },
        {
          "threadName": "UnityGfx*",
          "heavyCpus": [7],
          "commonCpus": [4, 5, 6],
          "priority": -20
        },
        {
          "threadName": "(UnityMain|UnityMulti|UnityPreload|UnityChoreograp|UnityCCeograp)*",
          "heavyCpus": null,
          "commonCpus": [4, 5, 6],
          "priority": -12
        },
        {
          "threadName": "FMOD*",
          "heavyCpus": null,
          "commonCpus": [0, 1, 2, 3, 4, 5, 6],
          "priority": -16
        },
        {
          "threadName": "(Worker Thread|Job.Worker|NativeThread|IL2CPP|CoreThread|Thread-)*",
          "heavyCpus": null,
          "commonCpus": [4, 5, 6],
          "priority": -12
        }
      ],
      "unity_common": [
        {
          "threadName": "MAIN_THREAD",
          "heavyCpus": null,
          "commonCpus": [0, 1, 2, 3, 4, 5, 6],
          "priority": -12
        },
        {
          "threadName": "UnityMain*",
          "heavyCpus": [7],
          "commonCpus": [4, 5, 6],
          "priority": -20
        },
        {
          "threadName": "(UnityGfx|UnityMulti|UnityPreload|UnityChoreograp|UnityCCeograp)*",
          "heavyCpus": null,
          "commonCpus": [4, 5, 6],
          "priority": -20
        },
        {
          "threadName": "FMOD*",
          "heavyCpus": null,
          "commonCpus": [0, 1, 2, 3, 4, 5, 6],
          "priority": -16
        },
        {
          "threadName": "(Worker Thread|Job.Worker|NativeThread|IL2CPP|ace_worker|Apollo-|CoreThread|Thread-)*",
          "heavyCpus": null,
          "commonCpus": [4, 5, 6],
          "priority": -12
        }
      ],
      "unreal_engine": [
        {
          "threadName": "MAIN_THREAD",
          "heavyCpus": null,
          "commonCpus": [4, 5, 6],
          "priority": -12
        },
        {
          "threadName": "(RenderThread|GameThread|RHIThread)*",
          "heavyCpus": [7],
          "commonCpus": [4, 5, 6],
          "priority": -20
        },
        {
          "threadName": "(TaskGraph|CmpJob|Apollo-|glp|glt|NativeThread|SDLThread|Thread-)*",
          "heavyCpus": null,
          "commonCpus": [4, 5, 6],
          "priority": -12
        },
        {
          "threadName": "FMOD*",
          "heavyCpus": null,
          "commonCpus": [0, 1, 2, 3, 4, 5, 6],
          "priority": -16
        }
      ],
      "minecraft": [
        {
          "threadName": "MAIN_THREAD",
          "heavyCpus": null,
          "commonCpus": [0, 1, 2, 3, 4, 5, 6],
          "priority": -12
        },
        {
          "threadName": "(Rendering Pool|MINECRAFT)*",
          "heavyCpus": [7],
          "commonCpus": [4, 5, 6],
          "priority": -20
        },
        {
          "threadName": "Thread-*",
          "heavyCpus": null,
          "commonCpus": [0, 1, 2, 3, 4, 5, 6, 7],
          "priority": -8
        },
        {
          "threadName": "FMOD*",
          "heavyCpus": null,
          "commonCpus": [0, 1, 2, 3, 4, 5, 6],
          "priority": -16
        }
      ],
      "neox_engine": [
        {
          "threadName": "MAIN_THREAD",
          "heavyCpus": null,
          "commonCpus": [0, 1, 2, 3, 4, 5, 6],
          "priority": -12
        },
        {
          "threadName": "(MainThread|Thread-)*",
          "heavyCpus": [7],
          "commonCpus": [4, 5, 6],
          "priority": -20
        },
        {
          "threadName": "(IO|Compute|Resource|NativeThread)*",
          "heavyCpus": null,
          "commonCpus": [4, 5, 6],
          "priority": -12
        }
      ],
      "sky_game": [
        {
          "threadName": "MAIN_THREAD",
          "heavyCpus": null,
          "commonCpus": [0, 1, 2, 3, 4, 5, 6],
          "priority": -12
        },
        {
          "threadName": "(MainThread|Program Thread)*",
          "heavyCpus": [7],
          "commonCpus": [4, 5, 6],
          "priority": -20
        },
        {
          "threadName": "(JobThread|Thread-)*",
          "heavyCpus": null,
          "commonCpus": [4, 5, 6],
          "priority": -12
        }
      ],
      "benchmark": []
    }
  },
  "MtkGpuGovernor": {
    "enable": false
  },
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
}
```



