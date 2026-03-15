# vw-alert

# vw-alert

更新时间：2025/04/30 20:56:55

控件定义：弹窗组件，此组件为应用内主动触发的信息、操作确认弹窗（注意：此组件不包含应用外的系统通知提醒弹窗）

### 属性

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
icon | `<string>` | - | 否 | 图标  
title | `<string>` | - | 否 | 标题  
content | `<string>` | - | 是 | 正文  
des | `<string>` | - | 否 | 副文本/辅助信息  
buttons | `<Array>` | - | 是 | 按钮  
type | `<string>` | ALERT | 否 | 弹窗类型，根据视图布局上差异，可选值为ALERT，NOTICE  
  
#### buttons Array 类型

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
eventType | `<string>` | - | 是 | 按钮点击事件类型。支持自定义事件名，例如 confirm:确定，cancel:忽略  
type | `<string>` | - | 是 | 按钮类型。plain,primary,success,warning,danger  
value | `<string>` | - | 否 | 按钮文本，同vw-button定义  
color | `<string>` | - | 否 | 按钮颜色，同vw-button定义  
bgColor | `<string>` |  | 否 | 按钮背景颜色，同vw-button定义  
  
# vw-alert公共组件

公共弹窗显示

基础用法

```html

```

复制代码

上一篇

[概述](</component/global/overview/>)

下一篇

[vw-button](</component/global/vw-button/>)