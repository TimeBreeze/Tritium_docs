---
title: 常见问题及其解决方法
---
# 常见问题及其解决方法

## 模块和app怎么选？
::: danger
答： 模块和app是2种不同的选择，请仔细阅读文档
Magisk 模块和 Cutoolbox 只能使用其中一种 
:::

## 关于附加模块
::: tip
答 ：CuJankDetector为必要安装模块，其他模块可根据需求安装，附加模块啊APP内打开开关就能将`附加模块`输出到`download`文件夹下，方便定位，如果你使用的是magisk模块，则需要单独下载app中提取，或者在群文件中获取
:::

## 配置文件版本问题

::: tip
 如下面日志输出，你需要更新配置文件
:::

```log
11-2317:33:31[E]TargetconfigVersion=10，your configVersion=9. 
11-2317:33:32[I]Daemon stop running.
```

## 关于`Cutoolbox`无法安装
:::tip
答： 卸载冲突模块，例如`asoulopt``Hydrostellaire`等模块，包括但不限于. 刷写回原厂内核，冲突包括`Pandora`等，但不限于，如何刷写内核可看下文[管方内核刷写](./kernel.md)
:::



## 大佬我不会使用你可以教我吗？
::: tip
答 ：不可以，请详细阅读文档
:::

##  魅族需要把one mind关闭吗？
::: tip
答 ：建议关闭
:::

## 导入cutoolbox报错怎么办
:::tip
答： 加入反馈群聊，截图询问
:::

## 这什么lj调度，不如xxx
:::danger
答： 请立即删除`模块`或`APP`，并终止本项目使用
:::
## 非官方内核（`Unofficial`）可以使用吗？
:::tip
答： 可以，但不包括魔改内核，例如`vk,Pandora`
:::
## 这次日志更新了什么
:::tip
答： 请关注[Github release](https://github.com/TimeBreeze/Tritium/releases)
:::