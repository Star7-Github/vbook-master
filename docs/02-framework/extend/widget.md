# 快捷卡片

# 快捷卡片

更新时间：2025/10/09 11:25:10

> ⚠ 快捷卡片已经弃用，请使用 [智慧服务卡片](</reference/widget/overview/>)

### 概述

快捷卡片是应用的特殊页面，配置为快捷卡片的页面可以被其他宿主应用作为组件引入。此特性可以使得其能跟随主应用更新，而宿主应用无需更新。

一个应用可以配置多个快捷卡片，一个快捷卡片也可以被多个宿主应用所引用。

### manifest.json 文件

快捷卡片在 manifest.json 中的 widgets 对象里进行定义，参考下面定义简例：
[code] 
    {
      "package": "com.example.demo",
      "router": {
        "entry": "pages/Home",
        "pages": {
          "pages/Home": {
            "component": "index"
          },
          "pages/Music": {
            "component": "index"
          }
        },
        // 快捷卡片定义
        "widgets": {
          // 音乐快捷卡片
          "pages/Music": {
            "id": "music2008",
            // 快捷卡片名（必填）
            "name": "音乐服务",
            // 快捷卡片组件名（必填）
            "component": "index",
            // 可编辑路径
            "params": {
              // 快捷卡片缩略图 (必填)
              "previewImage": ["./music.png"],
              "hpw": 0
            }
          }
        }
      }
    }
[/code]

复制代码

#### router.widgets[widgetPath]

用于定义单个快捷卡片页面信息。

属性 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
id | Integer | - | 是 | 快捷卡片唯一标识  
name | String | - | 是 | 快捷卡片中文名称，用于在切换选择等显示的名称  
component | String | - | 是 | 表盘对应组件名，与 ux 文件名保持一致，例如'index' 对应 'index.ux'  
params | Object | - | 是 | 快捷卡片参数，详见下面说明  
  
#### params

快捷卡片特有参数，用于快捷卡片框架加载快捷卡片和展示列表。

属性 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
previewImage | String | - | 是 | 字符串数组，数组每一项代表预览图片路径，用于在快捷卡片商店、切换选择等显示的预览图  
hpw | Integer | - | 否 | 高功耗提醒，0-无高功耗提醒，1-需要高功耗提醒，默认为 0  
  
### 快捷卡片生命周期

1、宿主页面的生命周期触发，同时也会触发快捷卡片的生命周期。

2、对快捷卡片使用`if指令`移除时会触发`onDestroy`, `if指令`再显示等同于重新创建。

3、对快捷卡片使用`show指令`控制显示隐藏时会触发`onShow`和`onHide`。

### 注意

快捷卡片为单页面操作，不能使用路由跳转

上一篇

[表盘](</reference/extend/watchface/>)

下一篇

[后台运行](</reference/extend/resident/>)