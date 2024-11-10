---
title: 如何使用
layout: doc
titleTemplate: Tritium_docs
---
<div align="center">

#  如何使用

</div>



## 使用须知

- 1.安装软件或者模块之前请务必并卸载`asoulopt`模块
- 2.使用软件和模块时请勿开启系统的性能模式开关，保持均衡即可
- 4.模块是由scene控制，scene需要关闭`核心分配`
- 5.请务必安装`CuJankDetector`附加模块，保证调度的体验

::: danger
模块和app是2种不同的选择，Magisk 模块和 Cutoolbox 只能使用其中一种 ,config.zip为APP导入方式，需要解压后导入app使用，模块刷入需要下载模块刷入即可(建议一并下载附加模块)
:::

## 使用方法1 -app导入
![](https://tritium.nightrainmilkyway.cn/img/ResizedImage_2024-02-11_18-52-03_8500.png)

## 使用方法2 -模块刷入

![](https://tritium.nightrainmilkyway.cn/img/ResizedImage_2024-02-11_18-42-00_2162.png)

## 使用方法3 -Tritium box
:::tip
适合小白新手使用，开箱即用，注意授予`自启动和root权限`
:::
![](https://img.nightrainmilkyway.cn/img/202411102113524.png)

### 检查日志
- 如果为`APP`导入使用，即可在APP内查看日志
- 如果为模块，则CuprumTurbo Scheduler日志输出路径为`/storage/emulated/0/Android/ct/scheduler.log`

出现`Daemon Running`即为调度正常运行
