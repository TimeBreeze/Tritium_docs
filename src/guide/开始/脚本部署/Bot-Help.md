---
title : bot help
---

<div align="center">

# <font face="arial,helvaticon">BOT HELP</font> #

# <font color=#FF851B>适用于Centos&&Ubuntu一键管理部署脚本</font> 


</div>



::: tip  <font color=#FF851B>提示</font> 
所有的操作必须是在root环境下
:::




## 一、安装教程

#### （1）切换权限

> 必须`ROOT`用户

```sh
sudo su root
```

#### （2）环境准备

> 推荐使用 Centos7.6

> 1.`Centos`系统初始化 ☞[Centos 详细内容](./centos/README.md)

```sh
yum update -y && yum install git -y
```

> 推荐推荐 Ubuntu20.04

> 2.`Ubuntu`系统初始化 ☞[Ubuntu 详细内容](./ubuntu/README.md)

```sh
apt update -y && apt-get install git -y && apt-get install  whiptail -y
```

#### （3）项目拉取

> 克隆启动

```sh
git clone https://gitee.com/ningmengchongshui/bot-help.git  /bot-help && chmod +x /bot-help/*/*.sh && sh /bot-help/install.sh
```

> 日常启动

```sh
sh /bot-help/install.sh
```