---
title:  基本信息
layout: doc
titleTemplate: Tritium_docs
---

### Json信息  
在这里你可以定义配置文件的名称和作者信息, 请注意不要修改配置文件版本, 此字段将会用于验证调度与该配置是否兼容.  
|字段            |类型   |定义               |
|:---------------|:------|:-----------------|
|name            |string |配置文件的名称     |
|author          |string |配置文件的作者信息  |
|configVersion   |int    |配置文件版本       |

```json{4}
{
  "name": "Dimensity1100/1200/1300", //名称
  "author": "chenzyadb",//作者
  "configVersion": 11,//版本
   ... 
   //其他模块
}
```
::: warning 注意
`configVersion` 字段会验证调度版本，请确定版本对应，使用最新发布版本时，应与开发者仓库中的保持一致
:::