---
title: 如何使用
layout: doc
titleTemplate: Tritium_docs
---
<div align="center">

#  如何使用

</div>



## 使用须知

- 安装软件或者模块之前请务必并卸载`Magisk_AsoulOpt`模块
- 使用软件和模块时请勿开启系统的性能模式开关，保持均衡即可
- 模块是由`scene`控制，`scene`需要关闭`核心分配`
- 请务必安装`cu_jank_detector.zip`和`cu_util_monitor.zip`和附加模块(强烈建议)
- 请务必仔细阅读本文档



::: danger
模块和app是2种不同的选择，Magisk 模块和 Cutoolbox 只能使用其中一种 ,config.zip为APP导入方式，需要解压后导入app使用，模块刷入需要下载模块刷入即可(建议一并下载附加模块)
:::

## 使用方法1 -app导入
> **如果你不会导入配置建议使用Tritium box**  

![](https://tritium.YumeYuka.cn/img/ResizedImage_2024-02-11_18-52-03_8500.png)

:::tip
导入之后查看日志调度是否正常启动，出现`Daemon Running`即为调度正常运行
切换模式为APP主页，如果你认为这太麻烦，你可以在`扩展功能`中打开`无障碍`和调整电源管理策略为`无限制`，另外打开`管理权限`,
* 还可以通过App内的应用清单调整调度策略，注意：要在设置中打开`读取应用了列表权限`
:::

## 使用方法2 -模块刷入

![](https://tritium.YumeYuka.cn/img/ResizedImage_2024-02-11_18-42-00_2162.png)

:::tip
同理，模块是由scene进行接管，相应的你应该授予和上面一样的权限
:::

## 使用方法3 -Tritium box
:::tip
适合小白新手使用，开箱即用，注意授予`自启动和root权限`
:::
![](https://img.YumeYuka.cn/img/202411102113524.png)

:::tip
关于 Tritium box，同样的授予上面的权限，与上面两种不同的是，我们去掉了状态栏通知常驻，因为我们感觉很不好，现在我们可以通过在控制中心中添加`应用快捷开关`，一共有4个，你可以将他们固定，每次且切换只需要，通过控制中心，减去了状态栏常驻，我们认为这是美观的，与oem厂商的切换策略保持一致
:::

## 关于附加模块
::: danger
附加模块需要在App内打开开关就能将`附加模块`输出到`download`文件夹下，方便定位
:::

### 检查日志
- 如果为`APP`导入使用，即可在APP内查看日志
- 如果为模块，则CuprumTurbo Scheduler日志输出路径为`/storage/emulated/0/Android/ct/scheduler.log`

出现`Daemon Running`即为调度正常运行

#### 附加模块是否加载

需要在日志输出内查看输出的附加模块是否加载，例如下面高亮部分

```shell{12,16}
12-07 20:58:29 [I] CuprumTurbo Scheduler V20 (20241202) by chenzyadb.
12-07 20:58:29 [I] Config "Dimensity9200/9200+" by "chenzyadb".
12-07 20:58:29 [I] Thermal is enabled.
12-07 20:58:29 [I] Trigger is enabled.
12-07 20:58:29 [I] CpuGovernor is enabled.
12-07 20:58:29 [I] ThreadSchedOpt is enabled.
12-07 20:58:29 [I] MtkGpuGovernor is enabled.
12-07 20:58:29 [I] DevfreqTuner is enabled.
12-07 20:58:29 [I] Initial Mode: "powersave".
12-07 20:58:29 [I] Thermal Type: "soc_max"
12-07 20:58:29 [I] Listening Touch "goodix_ts", position: x=0-12200, y=0-27120.
12-07 20:58:29 [I] CuJankDetector Connected.
12-07 20:58:29 [I] Policy0 (CPU: 0-3, Type: "little-core") PowerModel:
    ......
12-07 20:58:29 [I] Use CPU Freq WRITER_GOVERNOR.
12-07 20:58:29 [I] CuUtilMonitor Connected.
12-07 20:58:29 [I] Use MTK GPUFREQ_V2 Interface.
12-07 20:58:29 [I] MTK GPU OPP Table:
    ......
12-07 20:58:29 [I] Use DDR Freq HELIO_DVFSRC Interface.
12-07 20:58:29 [I] DDR FreqTable: [8533000,6400000,5500000,4100000,3094000,2133000,1866000,1600000,800000].
12-07 20:58:29 [I] Daemon Running (pid=19962).
12-07 21:04:02 [I] Mode switched "powersave" -> "performance".

```

或者可以查看`/data/adb/modules/cu_util_monitor/load.log`
```shell
12-08 13:11:58 [I] BPF Daemon by chenzyadb@github.com
12-08 13:11:58 [I] Attach program "CuUtilMonitor" to trace point "sched/sched_switch" succeed.
12-08 13:11:58 [I] Daemon Running (pid=2887).

```

::: danger
~~目前在安卓15的设备上无法使用`cu_util_monitor`模块，等待修复~~
::: 