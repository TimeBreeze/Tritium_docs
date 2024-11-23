---
title: 管方内核刷写
---
## 简单版

在系统更新下载最新完整包，然后在magisk manager或kernerl manager中选择？OTA选项，(注意该选项只能在系统更新重启之前使用)
:::danger
如果不小心使用OTA导致无法开机，首先进入fastboot模式
:::
```shell
fastboot oem cdms
```

## 如何刷写内核
### 内核版本android13及以上
#### magisk为root方式
Android13 以上（这里不是指系统的安卓版本，是指内核的安卓版本）
比如：5.15.xx-android13-xxx、6.1.xx-android14-xxx、6.6.xx-android15-xxx

如何查看内核版本：设置 – 我的设备 – 全部参数 – 内核版本
一般内核版本 5.15.XX – 6.X.XX 以上的机型才是，如果不是。请继续看 mi-boot

常见机型：小米14系列，小米13系列，红米K70系列，红米K60Pro，红米K60Ultra，红米Note13Pro+，红米平板SE

对于发布时搭载 Android 13 的设备，通用 ramdisk 将从 boot 映像中移除，并放置在单独的 init_boot 映像中。
Android官方文档：https://source.android.google.cn/docs/core/bootloader/partitions/generic-boot

##### 下载完整ROM包(线刷包和卡刷包都可以)
1. 解压ROM包提取boot.img(注意 kernerl只存在与boot.img中)
2. 具体方法实现
电脑端：(如果没有驱动打驱动)
```shell
fastboot flash boot_ab  boot.img
fastboot reboot
```
手机端：
1. 选择爱玩机工具箱，搞机助手等刷入boot.img
2. 重启设备，检查内核版本是否为管核版本

#### kernerlsu为root方式
##### GKI内核
* GKI内核为通用内核，刷写会掉root
* 此root方式操作的是boot,img，不是init_boot.img
* 一般GKI内核都为通用内核，

##### LKM模式
* 建议优先选择OTA方法
1. 解压ROM包提取boot.img(注意 kernerl只存在与boot.img中)
2. 具体方法实现
电脑端：(如果没有驱动打驱动)
```shell
fastboot flash boot_ab  boot.img
fastboot reboot
```
手机端：
1. 选择爱玩机工具箱，搞机助手等刷入boot.img
2. 重启设备，检查内核版本是否为管核版本



#### 内核版本非android13，即kernel版本不带android13字样

原理同上
1. 解压ROM包提取boot.img(注意 kernerl只存在与boot.img中)
2. 具体方法实现
电脑端：(如果没有驱动打驱动)
```shell
fastboot flash boot_ab  boot.img
fastboot reboot
```
手机端：
1. 选择爱玩机工具箱，搞机助手等刷入boot.img
2. 重启设备，检查内核版本是否为管核版本

### 联发科

:::danger
在某些联发科较早的机型，无法同过在开机状态下刷写boot.img，需要通过fastboot模式刷写，即，只能通过电脑端刷写
:::